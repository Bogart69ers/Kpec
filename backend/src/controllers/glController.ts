import { Request, Response } from "express";
import { prisma } from "../prismaClient";


export const getGlAccount = async (_req: Request, res: Response) => {
    try {
      const users = await prisma.gl_account.findMany(); // Fetch users from DB
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving users");
    }
  };

export const CreateGlAccount = async (req: Request, res: Response) => {
    try {
        const {gl_account, name, category, subcategory} = req.body;

        const newGl = await prisma.gl_account.create({
            data: {
                gl_account,
                name,
                category,
                subcategory,
            },
        });

        res.status(200).json(newGl);
    } catch (error) {
        console.error("Error creating gl Account:", error);
        res.status(500).send("Error creating Gl Account");
    }
};

export const updateGlAccount = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { gl_account, name, category, subcategory } = req.body;

    try {
        const updateGlAccount = await prisma.gl_account.update({
            where: { id: Number(id) },
            data: {
                gl_account,
                name,
                category,
                subcategory,
            },
        });

        res.json(updateGlAccount);
    } catch (error) {
        console.error("Error Updating Gl Account", error);
        res.status(500).send("Error updating Gl Account");
    }
}

export const deleteGlAccount = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.gl_account.delete({
            where: { id: Number(id)},
        });

        res.status(200).json({message: `Gl Account ${id} deleted`});
    } catch (error) {
        console.error("Error Deleting Gl Account", error);
        res.status(500).send("Error deleting Gl Account");
    }
}
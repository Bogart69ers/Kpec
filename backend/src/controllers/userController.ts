import { Request, Response } from "express";
import { prisma } from "../prismaClient";
import bcrypt from "bcrypt";


export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user_account.findMany(); // Fetch users from DB
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

export const CreateUsers = async (req: Request, res: Response) => {
  try {
    const { username, password, email, role_id, status } = req.body;

    // Ensure bcrypt.hash() is called correctly
    const saltRounds = 10;  // Set the number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);  // Hash the password with salt rounds

    // Create the new user with the hashed password
    const newUser = await prisma.user_account.create({
      data: {
        username,
        password: hashedPassword,  // Store the hashed password
        email,
        role_id,
        status,
      },
    });

    // Return the created user as the response
    res.status(201).json(newUser);
  } catch (error) {
    console.error("❌ Error creating user:", error);
    res.status(500).send("Error creating user");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params; // user ID from URL
  const { username, password, email, role_id, status } = req.body;

  try {
    const updatedUser = await prisma.user_account.update({
      where: { id: Number(id) }, // ensure ID is a number
      data: {
        username,
        password,
        email,
        role_id,
        status,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("❌ Error updating user:", error);
    res.status(500).send("Error updating user");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user_account.delete({
      where: { id: Number(id) }, // Convert ID to number
    });

    res.status(200).json({ message: `User with ID ${id} deleted.` });
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};

export const getRoles = async (_req: Request, res: Response) => {
  try {
    const roles = await prisma.roles.findMany();
    res.json(roles);  
  }
  catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving roles")
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { emailOrUsername, password } = req.body;

  console.log('Login attempt with:', emailOrUsername); // Log request body

  try {
    const user = await prisma.user_account.findFirst({
      where: {
        OR: [
          { email: emailOrUsername },
          { username: emailOrUsername },
        ],
      },
    });

    if (!user || !user.password) {
      console.log("Invalid user or missing password");
      return res.status(401).json({ message: "Invalid Input username/email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid username/email or password" });
    }

    console.log("Login successful");
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role_id: user.role_id,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

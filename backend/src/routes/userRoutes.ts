import express from "express";
import { CreateUsers, deleteUser, getRoles, getUsers, loginUser, updateUser } from "../controllers/userController";
import { CreateGlAccount, deleteGlAccount, getGlAccount, updateGlAccount } from "../controllers/glController";

const router = express.Router();

//Roles
router.get("/roles", getRoles);

//users
router.get("/users", getUsers);
router.post("/users", CreateUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/login", loginUser);

//GL Accounts
router.get("/gl", getGlAccount);
router.post("/gl", CreateGlAccount);
router.put("/gl/:id", updateGlAccount);
router.delete("/gl/:id", deleteGlAccount);


export default router;
 
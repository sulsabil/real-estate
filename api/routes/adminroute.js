import express from "express";

import { userNumber, getUsers, deleteUser, getLists, deleteList, updateRole } from "../controller/adminController.js";

const router = express.Router();

router.get("/countUsers", userNumber);
router.get("/getUsers", getUsers);
router.delete("/deleteUser/:userId", deleteUser);
router.get("/getLists", getLists);
router.delete("/deleteList/:listId", deleteList);
router.put("/updateUserRole/:userId", updateRole);

export default router;

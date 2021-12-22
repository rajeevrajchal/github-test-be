import { fetchUsers } from "../controller/user.controller";
import express from "express";

const userRoute = express.Router();

userRoute.get("", fetchUsers);

export default userRoute;

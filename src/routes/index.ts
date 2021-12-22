import express, { Request, Response } from "express";
import userRoute from "./users.route";

const router = express.Router();

// api routes
router.use("/api/repositories", userRoute);

// simple route for demo
router.get("/", (req: Request, res: Response) => {
	res.send("Welcome to backend");
});

export default router;

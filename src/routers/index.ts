import { Router } from "express";
import postsRouter from "./posts.router.js";

const router = Router();
router.use(postsRouter)

export default router;
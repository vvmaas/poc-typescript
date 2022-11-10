import { Router } from "express";
import postsRouter from "./posts.router.js";
var router = Router();
router.use(postsRouter);
export default router;

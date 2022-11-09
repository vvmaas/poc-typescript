import { Router } from "express";
import postsRouter from "./posts.router";
var router = Router();
router.use(postsRouter);
export default router;

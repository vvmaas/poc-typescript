import { Router } from "express";
import { post, getAll, update, deleteById, getByKeyword } from "../controllers/posts.controller.js";
var postsRouter = Router();
postsRouter.post("/posts", post);
postsRouter.get("/posts", getAll);
postsRouter.put("/posts/:id", update);
postsRouter["delete"]("/posts/:id", deleteById);
postsRouter.get("/posts/:keyword", getByKeyword);
export default postsRouter;

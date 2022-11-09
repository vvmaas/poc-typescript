import { Router } from "express";
var postsRouter = Router();
postsRouter.post("/posts");
postsRouter.get("/posts");
postsRouter.put("/posts/:id");
postsRouter["delete"]("/posts/:id");
postsRouter.get("/posts/:keyword");
export default postsRouter;

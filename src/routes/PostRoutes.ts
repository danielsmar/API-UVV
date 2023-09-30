import { Router } from "express";
import PostController from "../controllers/PostController";

const PostRouter = Router();

PostRouter.get("/posts", PostController.listarPosts);

PostRouter.get("/post/:id", PostController.listarUserID);

PostRouter.post("/post", PostController.criarPost);

PostRouter.patch("/post/:id", PostController.atualizarPost);

PostRouter.delete("/post/:id", PostController.deletarPost);

export default PostRouter;

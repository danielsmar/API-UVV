import { Request, Response } from "express";
import PostServices from "../services/PostServices";

class PostController {
  constructor() {}

  async listarPosts(req: Request, res: Response) {
    try {
      const posts = await PostServices.listarPosts();
      console.log("Buscando Posts");
      return res.status(200).json({
        status: "ok",
        posts: posts,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar posts",
      });
    }
  }

  async listarUserID(req: Request, res: Response) {
    try {
      const postId = req.params.id;
      const postIdNumber: number = parseInt(postId);
      const post = await PostServices.listarByID(postIdNumber);

      return res.status(200).json({
        status: "ok",
        user: post,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar post",
      });
    }
  }

  async atualizarPost(req: Request, res: Response) {
    try {
      const postId = req.params.id;
      const postIdNumber: number = parseInt(postId);
      const dadosAtualizados = req.body;

      const postAtualizado = await PostServices.atualizarPost(
        postIdNumber,
        dadosAtualizados
      );
      return res.status(200).json({
        status: "ok",
        user: postAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar o post",
      });
    }
  }

  async criarPost(req: Request, res: Response) {
    try {
      const novoPost = req.body;
      const criandoPost = await PostServices.criarPost(novoPost);

      return res.status(200).json({
        status: "ok",
        post: criandoPost,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao criar o post",
      });
    }
  }

  async deletarPost(req: Request, res: Response) {
    try {
      const postId = req.params.id;
      const postIdNumber: number = parseInt(postId);

      const postDeletado = await PostServices.removerPost(postIdNumber);
      return res.status(200).json({
        status: "ok",
        message: "post deletado com sucesso",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao deletar o usuário",
      });
    }
  }
}

export default new PostController();

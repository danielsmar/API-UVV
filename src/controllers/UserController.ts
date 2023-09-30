import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {
  constructor() {}

  async listarUsers(req: Request, res: Response) {
    try {
      const users = await UserServices.listarUsuarios();
      console.log("Buscando Usuários");
      return res.status(200).json({
        status: "ok",
        users: users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar usuários",
      });
    }
  }

  async listarUserID(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userIdNumber: number = parseInt(userId);
      const user = await UserServices.listarByID(userIdNumber);

      return res.status(200).json({
        status: "ok",
        user: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao buscar usuário",
      });
    }
  }

  async atualizarUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userIdNumber: number = parseInt(userId);
      const dadosAtualizados = req.body;

      const userAtualizado = await UserServices.atualizarUsuario(
        userIdNumber,
        dadosAtualizados
      );

      return res.status(200).json({
        status: "ok",
        user: userAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao atualizar o usuário",
      });
    }
  }

  async criarUser(req: Request, res: Response) {
    try {
      const novoUser = req.body;

      const criandoUser = await UserServices.criarUsuario(novoUser);

      return res.status(200).json({
        status: "ok",
        user: criandoUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: "Erro ao criar o usuário",
      });
    }
  }
  async deletarUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userIdNumber: number = parseInt(userId);

      const userDeletado = await UserServices.removerUsuario(userIdNumber);
      return res.status(200).json({
        status: "ok",
        message: "usuário deletado com sucesso",
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

export default new UserController();

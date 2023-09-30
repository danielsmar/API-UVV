import { PrismaClient, User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

interface NovoUser {
  novoUserNome: string;
  novoUserEmail: string;
}

class UserServices {
  constructor() {}

  async listarUsuarios() {
    try {
      const user = await prisma.user.findMany();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async listarByID(id: number) {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async criarUsuario(data: User) {
    try {
      console.log("User Serice ok?");
      const newUser = await prisma.user.create({ data });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarUsuario(id: number, dadosAtualizados: Partial<User>) {
    try {
      const updateUser = await prisma.user.update({
        where: { id },
        data: dadosAtualizados,
      });
      return updateUser;
    } catch (error) {
      console.log(error);
    }
  }

  async removerUsuario(id: number) {
    try {
      const removeUser = await prisma.user.delete({ where: { id } });
      return "Usuário removido com sucesso!";
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserServices();

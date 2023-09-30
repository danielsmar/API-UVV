import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostServices {
  constructor() {}

  async listarPosts() {
    try {
      const posts = await prisma.post.findMany();
      return posts;
    } catch (error) {
      console.log(error);
    }
  }

  async listarByID(id: number) {
    try {
      const post = await prisma.post.findUnique({ where: { id } });
      return post;
    } catch (error) {
      console.log(error);
    }
  }

  async criarPost(data: Post) {
    try {
      const newPost = await prisma.post.create({ data });
      return newPost;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarPost(id: number, dadosAtualizados: Partial<Post>) {
    try {
      const updatePost = await prisma.post.update({
        where: { id },
        data: dadosAtualizados,
      });
      return updatePost;
    } catch (error) {
      console.log(error);
    }
  }

  async removerPost(id: number) {
    try {
      const removerPost = await prisma.post.delete({ where: { id } });
      return "Post removido com sucesso!";
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostServices();

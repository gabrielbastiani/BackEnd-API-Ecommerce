import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
}

class UpdateStatusCategoryService {
  async execute({ category_id }: CategoryRequest) {
    const active = await prismaClient.category.findUnique({
      where: {
        id: category_id
      },
      select: {
        status: true
      }
    });

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.category.update({
        where: {
          id: category_id
        },
        data: {
          status: StatusCategory.Indisponivel
        }
      });

      const find_category = await prismaClient.category.findUnique({
        where: {
          id: category_id
        }
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `A categoria <strong>${find_category.name}</strong> foi <strong>DESATIVADA</strong>`,
          link: `http://localhost:3000/categoria/${find_category.id}`,
          store_id: find_category.store_id
        }
      });

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.category.update({
        where: {
          id: category_id
        },
        data: {
          status: StatusCategory.Disponivel
        }
      });

      const find_category = await prismaClient.category.findUnique({
        where: {
          id: category_id
        }
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `A categoria <strong>${find_category.name}</strong> foi <strong>ATIVADA</strong>`,
          link: `http://localhost:3000/categoria/${find_category.id}`,
          store_id: find_category.store_id
        }
      });

      return isTrue;

    }

  }
}

export { UpdateStatusCategoryService }
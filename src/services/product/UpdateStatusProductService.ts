import { StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateStatusProductService {
  async execute({ product_id }: ProductRequest) {

    const store = await prismaClient.store.findFirst();

    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        status: true
      }
    })

    if (active.status === "Disponivel") {
      const isFalse = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          status: StatusProduct.Indisponivel
        }
      });

      const product = await prismaClient.product.findUnique({
        where: {
          id: product_id
        }
      })

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Status do produto <strong>${product.name}</strong> se encontra <strong>Indisponivel</strong>.`,
          store_id: store.id
        }
      });

      return isFalse;
    }

    if (active.status === "Indisponivel") {
      const isTrue = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          status: StatusProduct.Disponivel
        }
      });

      const product = await prismaClient.product.findUnique({
        where: {
          id: product_id
        }
      })

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Status do produto <strong>${product.name}</strong> se encontra <strong>Disponivel</strong>.`,
          store_id: store.id
        }
      });

      return isTrue;

    }

  }
}

export { UpdateStatusProductService }
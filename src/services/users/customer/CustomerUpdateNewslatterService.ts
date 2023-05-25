import prismaClient from "../../../prisma";

interface CustomerRequest {
  customer_id: string;
  newslatter: string;
}

class CustomerUpdateNewslatterService {
  async execute({ customer_id }: CustomerRequest) {
    const updateNews = await prismaClient.customer.findUnique({
      where: {
        id: customer_id,
      },
      select: {
        newslatter: true,
      }
    })

    if (updateNews.newslatter === "Sim") {
      const newsSim = await prismaClient.customer.update({
        where: {
          id: customer_id,
        },
        data: {
          newslatter: "Nao",
        }
      })
      return newsSim;
    }

    if (updateNews.newslatter === "Nao") {
      const newsNao = await prismaClient.customer.update({
        where: {
          id: customer_id,
        },
        data: {
          newslatter: "Sim",
        }
      })
      return newsNao;
    }

  }
}

export { CustomerUpdateNewslatterService }
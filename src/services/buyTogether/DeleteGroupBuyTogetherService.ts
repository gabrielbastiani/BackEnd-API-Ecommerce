import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
}

class DeleteGroupBuyTogetherService {
  async execute({ buyTogether_id }: BuyTogetherRequest) {

    const idNivel = await prismaClient.buyTogether.findUnique({
      where: {
        id: buyTogether_id
      }
    });

    const idNivelRelations = await prismaClient.buyTogether.findMany();
    const idsRelat = idNivelRelations.map((item) => item.parentId);

    const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

    if (filtrado.length >= 1) {
      throw new Error("Delete os produtos desse grupo antes!!!");
    }

    const group = await prismaClient.buyTogether.delete({
      where: {
        id: buyTogether_id
      }
    });

    return group;

  }
}

export { DeleteGroupBuyTogetherService }
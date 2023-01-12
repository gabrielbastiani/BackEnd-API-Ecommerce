import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
}

class UpdateDisponibilidadeCategoryService {
  async execute({ category_id }: CategoryRequest) {
    const activeTrue = await prismaClient.category.findUnique({
      where: {
        id: category_id
      },
      select: {
        disponibilidade: true
      }
    })

    const activeFalse = await prismaClient.category.findUnique({
      where: {
        id: category_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(activeTrue.disponibilidade === true){
      const isFalse = await prismaClient.category.update({
        where:{
          id: category_id
        },
        data: {
          disponibilidade: false
        }
      })

      return isFalse;
    }

    if(activeFalse.disponibilidade === false){
      const isTrue = await prismaClient.category.update({
        where:{
          id: category_id
        },
        data: {
          disponibilidade: true
        }
      })

      return isTrue;

    }

  }
}

export { UpdateDisponibilidadeCategoryService }
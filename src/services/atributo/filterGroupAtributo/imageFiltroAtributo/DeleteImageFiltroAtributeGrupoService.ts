import prismaClient from "../../../../prisma";

interface FiltroRequest {
  groupFilterAtributo_id: string;
}

class DeleteImageFiltroAtributeGrupoService {
  async execute({ groupFilterAtributo_id }: FiltroRequest) {
    const imageFiltro = await prismaClient.imageAtributoGroup.deleteMany({
      where: {
        groupFilterAtributo_id: groupFilterAtributo_id
      }
    })

    return imageFiltro;
  }

}

export { DeleteImageFiltroAtributeGrupoService }
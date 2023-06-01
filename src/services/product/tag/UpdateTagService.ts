import prismaClient from "../../../prisma";

interface TagRequest {
  tag_id: string;
  tagName: string;
}

class UpdateTagService {
  async execute({ tagName, tag_id }: TagRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "")
        .replace(/-{2,}/g, "")
        .replace(/[/]/g, "");
    }

    const tagAlredyExist = await prismaClient.tag.findFirst({
      where: {
        id: tag_id,
        tagName: tagName,
      }
    });

    if (tagAlredyExist) {
      throw new Error("Tag já cadastrada nesse produto!");
    }

    const tag = await prismaClient.tag.update({
      where: {
        id: tag_id
      },
      data: {
        tagName: removerAcentos(tagName)
      }
    });

    return tag;

  }
}

export { UpdateTagService }
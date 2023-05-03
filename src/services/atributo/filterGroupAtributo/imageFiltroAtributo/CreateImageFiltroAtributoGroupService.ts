import prismaClient from "../../../../prisma";

interface GroupRequest {
    imageAtributo: string;
    groupFilterAtributo_id: string;
}

class CreateImageFiltroAtributoGroupService {
    async execute({ imageAtributo, groupFilterAtributo_id }: GroupRequest) {
        const filtro = await prismaClient.imageAtributoGroup.create({
            data: {
                imageAtributo: imageAtributo,
                groupFilterAtributo_id: groupFilterAtributo_id
            }
        });

        return filtro;

    }
}

export { CreateImageFiltroAtributoGroupService }
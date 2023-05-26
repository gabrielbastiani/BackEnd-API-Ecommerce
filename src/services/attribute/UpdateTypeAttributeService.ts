import prismaClient from "../../prisma";

interface TypeRequest {
    typeAttribute_id: string;
    type: string;
    slug: string;
}

class UpdateTypeAttributeService {
    async execute({
        typeAttribute_id,
        type,
    }: TypeRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const updateType = await prismaClient.typeAttribute.update({
            where: {
                id: typeAttribute_id
            },
            data: {
                type: type,
                slug: removerAcentos(type)
            }
        })

        return updateType;

    }
}

export { UpdateTypeAttributeService }
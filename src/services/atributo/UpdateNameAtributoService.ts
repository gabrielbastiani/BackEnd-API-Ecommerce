import prismaClient from "../../prisma";

interface AtributoRequest {
    atributo_id: string;
    nameAtributo: string;
    slug: string;
}

class UpdateNameAtributoService {
    async execute({
        atributo_id,
        nameAtributo,
    }: AtributoRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const updateAtribute = await prismaClient.atributo.update({
            where: {
                id: atributo_id
            },
            data: {
                nameAtributo: nameAtributo,
                slug: removerAcentos(nameAtributo)
            }
        })

        return updateAtribute;

    }
}

export { UpdateNameAtributoService }
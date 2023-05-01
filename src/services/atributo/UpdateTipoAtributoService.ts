import prismaClient from "../../prisma";

interface AtributoRequest {
    atributo_id: string;
    tipo: string;
    slug: string;
}

class UpdateTipoAtributoService {
    async execute({
        atributo_id,
        tipo,
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
                tipo: tipo,
                slug: removerAcentos(tipo)
            }
        })

        return updateAtribute;

    }
}

export { UpdateTipoAtributoService }
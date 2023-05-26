import prismaClient from "../../prisma";

interface AtributoRequest {
    atributo_id: string;
    valor: string;
    slugValor: string;
}

class UpdateValorAtributoService {
    async execute({
        atributo_id,
        valor,
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
                valor: valor,
                slugValor: removerAcentos(valor)
            }
        })

        return updateAtribute;

    }
}

export { UpdateValorAtributoService }
import prismaClient from "../../../prisma";

interface AtributoRequest {
    nameAtributo: string;
    slug: string;
    tipo: string;
    slugTipo: string;
    order: number;
    loja_id: string;
}

class CreateAtributoService {
    async execute({
        nameAtributo,
        tipo,
        order,
        loja_id
    }: AtributoRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const atributo = await prismaClient.atributo.create({
            data: {
                nameAtributo: nameAtributo,
                slug: removerAcentos(nameAtributo),
                tipo: tipo,
                slugTipo: removerAcentos(tipo),
                order: order,
                loja_id: loja_id
            }
        });

        return atributo;

    }
}

export { CreateAtributoService }
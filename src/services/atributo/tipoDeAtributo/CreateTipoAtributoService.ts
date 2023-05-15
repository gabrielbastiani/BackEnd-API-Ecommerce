import prismaClient from "../../../prisma";

interface AtributoRequest {
    slug: string;
    tipo: string;
    loja_id: string;
}

class CreateTipoAtributoService {
    async execute({
        tipo,
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

        const atributo = await prismaClient.atributoTipo.create({
            data: {
                tipo: tipo,
                slug: removerAcentos(tipo),
                loja_id: loja_id
            }
        });

        return atributo;

    }
}

export { CreateTipoAtributoService }
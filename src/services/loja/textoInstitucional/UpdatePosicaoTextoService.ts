import prismaClient from "../../../prisma";

interface LojaRequest {
    textoinstitucional_id: any;
    posicao: string;
    slugPosicao: string;
}

class UpdatePosicaoTextoService {
    async execute({ textoinstitucional_id, posicao }: LojaRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const loja = await prismaClient.textoInstitucional.update({
            where: {
                id: String(textoinstitucional_id),
            },
            data: {
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        })

        return loja;

    }
}

export { UpdatePosicaoTextoService }
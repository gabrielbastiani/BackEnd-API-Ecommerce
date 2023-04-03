import prismaClient from "../../../prisma";

interface LojaRequest {
    redesocial_id: any;
    posicao: string;
    slugPosicao: string;
}

class UpdatePosicaoRedeSocialService {
    async execute({ redesocial_id, posicao }: LojaRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const loja = await prismaClient.redeSocial.update({
            where: {
                id: String(redesocial_id),
            },
            data: {
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        })

        return loja;

    }
}

export { UpdatePosicaoRedeSocialService }
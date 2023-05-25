import prismaClient from "../../../../prisma";

interface LojaRequest {
    imageloja_id: any;
    posicao: string;
    slugPosicao: string;
}

class UpdatePosicaoPhotoTextoService {
    async execute({ imageloja_id, posicao }: LojaRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const store = await prismaClient.imageStore.update({
            where: {
                id: String(imageloja_id),
            },
            data: {
                posicao: posicao,
                slugPosicao: removerAcentos(posicao)
            }
        })

        return store;

    }
}

export { UpdatePosicaoPhotoTextoService }
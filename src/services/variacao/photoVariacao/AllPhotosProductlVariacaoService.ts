import prismaClient from "../../../prisma";

interface VariacaoRequest {
    photoVariacao_id: string;
}

class AllPhotosProductlVariacaoService {
    async execute({ photoVariacao_id }: VariacaoRequest) {
        const photo = await prismaClient.photoVariacao.deleteMany({
            where: {
                id: photoVariacao_id
            }
        })

        return photo;

    }

}

export { AllPhotosProductlVariacaoService }
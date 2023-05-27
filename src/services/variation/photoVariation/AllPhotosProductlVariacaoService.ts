import prismaClient from "../../../prisma";

interface VariationRequest {
    photoVariacao_id: string;
}

class AllPhotosProductlVariacaoService {
    async execute({ photoVariacao_id }: VariationRequest) {
        const image = await prismaClient.photoVariacao.deleteMany({
            where: {
                id: photoVariacao_id
            }
        })

        return image;

    }

}

export { AllPhotosProductlVariacaoService }
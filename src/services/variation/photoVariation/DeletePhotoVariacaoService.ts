import prismaClient from "../../../prisma";

interface VariationRequest {
    photoVariacao_id: string;
}

class DeletePhotoVariacaoService {
    async execute({ photoVariacao_id }: VariationRequest) {
        const image = await prismaClient.photoVariacao.delete({
            where: {
                id: photoVariacao_id
            }
        })

        return image;

    }

}

export { DeletePhotoVariacaoService }
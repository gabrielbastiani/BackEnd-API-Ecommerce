import prismaClient from "../../../prisma";

interface MediaRequest {
    socialMedia_id: string;
    position: string;
    slugPosition: string;
}

class UpdatePositionSocialMediaService {
    async execute({ socialMedia_id, position }: MediaRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const media = await prismaClient.socialMedia.update({
            where: {
                id: socialMedia_id,
            },
            data: {
                position: position,
                slugPosition: removerAcentos(position)
            }
        })

        return media;

    }
}

export { UpdatePositionSocialMediaService }
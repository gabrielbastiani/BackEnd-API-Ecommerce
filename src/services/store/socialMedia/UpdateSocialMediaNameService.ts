import prismaClient from "../../../prisma";

interface MediaRequest {
    socialMedia_id: string;
    name: string;
}

class UpdateSocialMediaNameService {
    async execute({ socialMedia_id, name }: MediaRequest) {
        const store = await prismaClient.socialMedia.update({
            where: {
                id: socialMedia_id,
            },
            data: {
                name: name
            }
        })

        return store;

    }
}

export { UpdateSocialMediaNameService }
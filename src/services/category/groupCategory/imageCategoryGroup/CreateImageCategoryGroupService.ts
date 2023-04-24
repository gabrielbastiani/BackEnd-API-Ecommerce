import prismaClient from "../../../../prisma";

interface GroupRequest {
    imageGroup: string;
    groupCategoy_id: string;
}

class CreateImageCategoryGroupService {
    async execute({ imageGroup, groupCategoy_id }: GroupRequest) {
        const category = await prismaClient.imageGroupCategory.create({
            data: {
                imageGroup: imageGroup,
                groupCategoy_id: groupCategoy_id
            }
        });

        return category;

    }
}

export { CreateImageCategoryGroupService }
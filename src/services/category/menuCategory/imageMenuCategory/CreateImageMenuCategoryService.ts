import prismaClient from "../../../../prisma";

interface ImageRequest {
    image: string;
    menuCategory_id: string;
}

class CreateImageMenuCategoryService {
    async execute({ image, menuCategory_id }: ImageRequest) {
        const category = await prismaClient.imageMenuCategory.create({
            data: {
                image: image,
                menuCategory_id: menuCategory_id
            }
        });

        return category;

    }
}

export { CreateImageMenuCategoryService }
import prismaClient from "../../prisma";

interface CategoryRequest {
    category_id: string;
    imageCategory: string;
}

class UpdateImageCategoryService {
    async execute({ category_id, imageCategory }: CategoryRequest) {
        const category = await prismaClient.category.update({
            where: {
                id: category_id
            },
            data: {
                imageCategory: imageCategory
            }
        })

        return category;
    }

}

export { UpdateImageCategoryService }
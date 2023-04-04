import prismaClient from "../../../prisma";

interface SubCategoryRequest {
    subcategory_id: string;
}

class DeleteSubCategoryService {
    async execute({ subcategory_id }: SubCategoryRequest) {
        const subCategory = await prismaClient.subCategory.delete({
            where: {
                id: subcategory_id
            }
        })

        return subCategory;
    }

}

export { DeleteSubCategoryService }
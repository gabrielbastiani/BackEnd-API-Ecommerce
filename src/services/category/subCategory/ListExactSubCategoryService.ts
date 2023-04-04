import prismaClient from '../../../prisma';

class ListExactSubCategoryService {
    async execute({ subcategory_id }) {
        const exactCategory = await prismaClient.subCategory.findUnique({
            where: {
                id: String(subcategory_id)
            },
            include: {
                category: true,
                product: true,
                loja: true
            }
        })
        return exactCategory;
    }
}

export { ListExactSubCategoryService }
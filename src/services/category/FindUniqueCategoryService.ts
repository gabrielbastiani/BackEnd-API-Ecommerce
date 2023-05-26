import prismaClient from '../../prisma';

interface CategoryRequest {
    category_id: string;
}

class FindUniqueCategoryService {
    async execute({ category_id }: CategoryRequest) {
        const exactCategory = await prismaClient.category.findUnique({
            where: {
                id: String(category_id)
            },
            include: {
                filtercategories: true,
                imagecategories: true,
                menucategories: true,
                productcategories: true
            }
        })
        return exactCategory;
    }
}

export { FindUniqueCategoryService }
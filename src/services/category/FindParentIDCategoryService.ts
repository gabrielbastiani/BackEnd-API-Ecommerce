import prismaClient from '../../prisma';

interface CategoryRequest {
    parentId: string;
}

class FindParentIDCategoryService {
    async execute({ parentId }: CategoryRequest) {
        const dados = await prismaClient.category.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                filtercategories: true,
                imagecategories: true,
                menucategories: true,
                productcategories: true
            }
        });
        return dados;
    }
}

export { FindParentIDCategoryService }
import { StatusCategory } from '@prisma/client';
import prismaClient from '../../prisma';

interface CategoryRequest {
    slug: string;
}

class FindFirstCategorySlugService {
    async execute({ slug }: CategoryRequest) {
        const dados = await prismaClient.category.findFirst({
            where: {
                slug: slug,
                disponibilidade: StatusCategory.Disponivel
            }
        });
        return dados;
    }
}

export { FindFirstCategorySlugService }
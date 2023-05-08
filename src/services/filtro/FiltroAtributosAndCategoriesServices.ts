import prismaClient from "../../prisma";

interface FilterRequest {
    slug: string;
    slugValor: string;
}

class FiltroAtributosAndCategoriesServices {
    async execute({ slug, slugValor }: FilterRequest) {

        const filterCategory = await prismaClient.relationProductCategory.findMany({
            where: {
                category: {
                    slug: slug
                }
            },
            include: {
                product: true,
                category: true,
                photoProduct: true,
                photoProduct1: true
            }
        });

        const filterAtrubuto = await prismaClient.relationProductAtributo.findMany({
            where: {
                atributo: {
                    slugValor: slugValor
                }
            },
            include: {
                atributo: true,
                product: true,
                variacao: true
            }
        });

        return ([filterCategory, filterAtrubuto]);

    }

}

export { FiltroAtributosAndCategoriesServices }
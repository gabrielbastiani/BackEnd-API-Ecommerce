import prismaClient from "../../prisma";

interface FilterRequest {
    slug: any;
    slugValor: any;
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

        const atrubuto = await prismaClient.relationProductAtributo.findMany({
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

        return ([filterCategory, atrubuto]);

    }

}

export { FiltroAtributosAndCategoriesServices }
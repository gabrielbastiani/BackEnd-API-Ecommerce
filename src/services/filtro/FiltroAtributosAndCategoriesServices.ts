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
                    slug: {in: slug}
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
                    slugValor: {in: slugValor}
                }
            },
            include: {
                atributo: true,
                product: true,
                variacao: true,
                photoProduct: true,
                photoProduct1: true
            }
        });

        return [filterCategory, filterAtrubuto];

    }

}

export { FiltroAtributosAndCategoriesServices }
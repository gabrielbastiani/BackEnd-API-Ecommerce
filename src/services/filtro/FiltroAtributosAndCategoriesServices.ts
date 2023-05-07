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
            }
        });

        await prismaClient.relationProductAtributo.findMany({
            where: {
                atributo: {
                    slugValor: slugValor
                }
            }
        })

        return (filterCategory);

    }

}

export { FiltroAtributosAndCategoriesServices }
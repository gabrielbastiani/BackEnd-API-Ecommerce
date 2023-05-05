import prismaClient from "../../prisma";

class FiltroAtributosAndCategoriesServices {
    async execute() {

        const filterCategory = await prismaClient.relationProductCategory.findMany();
        const filterAtributo = await prismaClient.relationProductAtributo.findMany();

        return ([filterCategory, filterAtributo]);

    }

}

export { FiltroAtributosAndCategoriesServices }
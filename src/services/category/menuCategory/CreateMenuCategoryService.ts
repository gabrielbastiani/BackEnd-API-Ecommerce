import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    nameGroup: string;
    categoryName: string;
    slugCategory: string;
    name: string;
    nivel: number;
    parentId: string;
    order: number;
    position: string;
    slugPosition: string;
    store_id: string;
}

class CreateMenuCategoryService {
    async execute({
        nameGroup,
        categoryName,
        slugCategory,
        name,
        nivel,
        parentId,
        order,
        position,
        store_id
    }: MenuCategoryRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const menu = await prismaClient.menuCategory.create({
            data: {
                nameGroup: nameGroup,
                categoryName: categoryName,
                slugCategory: slugCategory,
                name: name,
                nivel: nivel,
                parentId: parentId,
                order: Number(order),
                position: position,
                slugPosition: removerAcentos(position),
                store_id: store_id
            }
        });

        return menu;

    }
}

export { CreateMenuCategoryService }
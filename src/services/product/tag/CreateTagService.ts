import prismaClient from "../../../prisma";

interface TagRequest {
    product_id: string;
    tagName: string;
    store_id: string;
}

class CreateTagService {
    async execute({
        product_id,
        tagName,
        store_id
    }: TagRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "")
                .replace(/-{2,}/g, "")
                .replace(/[/]/g, "");
        }

        const tagAlredyExist = await prismaClient.tag.findFirst({
            where: {
                product_id: product_id,
                tagName: removerAcentos(tagName),
            }
        });

        if (tagAlredyExist) {
            throw new Error("Tag já cadastrada nesse produto!");
        }

        const tag = await prismaClient.tag.create({
            data: {
                product_id: product_id,
                tagName: removerAcentos(tagName),
                store_id: store_id
            },
            include: {
                product: true
            }
        });

        return tag;

    }
}

export { CreateTagService }
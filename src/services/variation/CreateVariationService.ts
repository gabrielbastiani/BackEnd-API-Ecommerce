import prismaClient from "../../prisma";

interface VariationRequest {
    product_id: string;
    name: string;
    slug: string;
    order: number;
    store_id: string;
}

class CreateVariationService {
    async execute({ product_id, name, order, store_id }: VariationRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const variation = await prismaClient.variation.create({
            data: {
                product_id: product_id,
                name: name,
                slug: removerAcentos(name),
                order: Number(order),
                store_id: store_id
            }
        });

        return variation;

    }
}

export { CreateVariationService }
import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    stock: number;
}

class UpdateStockProductService {
    async execute({ product_id, stock }: ProductRequest) {

        const store = await prismaClient.store.findFirst();

        const updateStock = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                stock: stock
            }
        });

        const product = await prismaClient.product.findUnique({
            where: {
                id: product_id
            }
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Estoque do produto <strong>${product.name}</strong> foi atualizado para <strong>${stock}</strong> unidade(s) com sucesso.`,
                link: `http://localhost:3000/produto/${product.slug}/${product.id}`,
                store_id: store.id
            }
        });

        return updateStock;

    }
}

export { UpdateStockProductService }
import prismaClient from '../../prisma';

interface CategoryRequest {
    category_id: string;
}

class ExactCategoryProductService {
    async execute({category_id}: CategoryRequest ) {
        const allProducts = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select: {
                id: true,
                nameProduct: true,
                descriptionProduct1: true,
                descriptionProduct2: true,
                descriptionProduct3: true,
                descriptionProduct4: true,
                descriptionProduct5: true,
                descriptionProduct6: true,
                preco: true,
                sku: true,
                estoque: true,
                pesoKG: true,
                larguraCM: true,
                alturaCM: true,
                profundidadeCM: true,
                disponibilidade: true,
                promocao: true,
                category_id: true,
                categoryName: true,
                loja_id: true,
                created_at: true,
                variacoes: true,
                photoproducts: true,
                avaliacoes: true
            },
        });

        return allProducts;

    }
}

export { ExactCategoryProductService }
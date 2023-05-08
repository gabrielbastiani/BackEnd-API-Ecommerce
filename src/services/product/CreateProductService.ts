import prismaClient from "../../prisma";

interface ProductRequest {
    nameProduct: string;
    slug: string;
    posicao: string;
    slugPosicao: string;
    order: number;
    descriptionProduct1: string;
    descriptionProduct2: string;
    descriptionProduct3: string;
    descriptionProduct4: string;
    descriptionProduct5: string;
    descriptionProduct6: string;
    preco: number;
    sku: string;
    promocao: number;
    loja_id: string;
}

class CreateProductService {
    async execute({
        nameProduct,
        posicao,
        order,
        descriptionProduct1,
        descriptionProduct2,
        descriptionProduct3,
        descriptionProduct4,
        descriptionProduct5,
        descriptionProduct6,
        preco,
        sku,
        promocao,
        loja_id,
    }: ProductRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const product = await prismaClient.product.create({
            data: {
                nameProduct: nameProduct,
                slug: removerAcentos(nameProduct),
                posicao: posicao,
                slugPosicao: removerAcentos(posicao),
                order: Number(order),
                descriptionProduct1: descriptionProduct1,
                descriptionProduct2: descriptionProduct2,
                descriptionProduct3: descriptionProduct3,
                descriptionProduct4: descriptionProduct4,
                descriptionProduct5: descriptionProduct5,
                descriptionProduct6: descriptionProduct6,
                preco: preco,
                sku: sku,
                promocao: promocao,
                loja_id: loja_id
            },
            include: {
                relationproductcategories: true,
                relationProductAtributos: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        });

        const findProduct = await prismaClient.product.findFirst({
            orderBy: {
                created_at: 'desc'
            }
        });

        await prismaClient.filterPage.create({
            data: {
                product_id: findProduct.id
            }
        });

        return product;

    }
}

export { CreateProductService }
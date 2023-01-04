import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string;
    nameProduct: string;
    productPhoto: [];
    descriptionProduct1: string;
    descriptionProduct2: string;
    descriptionProduct3: string;
    descriptionProduct4: string;
    descriptionProduct5: string;
    descriptionProduct6: string;
    price: string;
    sku: string;
    estoque: string;
    quantidade: number;
    avaliacao: string;
    pesoKG: number;
    larguraCM: number;
    alturaCM: number;
    profundidadeCM: number;
    category_id: string;
}

class CreateProductService {
    async execute({
        nameProduct,
        productPhoto,
        descriptionProduct1,
        descriptionProduct2,
        descriptionProduct3,
        descriptionProduct4,
        descriptionProduct5,
        descriptionProduct6,
        price,
        sku,
        estoque,
        quantidade,
        avaliacao,
        pesoKG,
        larguraCM,
        alturaCM,
        profundidadeCM,
        category_id
    }: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
                nameProduct: nameProduct,
                productPhoto: productPhoto,
                descriptionProduct1: descriptionProduct1,
                descriptionProduct2: descriptionProduct2,
                descriptionProduct3: descriptionProduct3,
                descriptionProduct4: descriptionProduct4,
                descriptionProduct5: descriptionProduct5,
                descriptionProduct6: descriptionProduct6,
                price: price,
                sku: sku,
                estoque: estoque,
                quantidade: quantidade,
                avaliacao: avaliacao,
                pesoKG: pesoKG,
                larguraCM: larguraCM,
                alturaCM: alturaCM,
                profundidadeCM: profundidadeCM,
                category_id: category_id
            },
            select: {
                id: true,
                nameProduct: true,
                productPhoto: true,
                descriptionProduct1: true,
                descriptionProduct2: true,
                descriptionProduct3: true,
                descriptionProduct4: true,
                descriptionProduct5: true,
                descriptionProduct6: true,
                price: true,
                sku: true,
                estoque: true,
                quantidade: true,
                avaliacao: true,
                pesoKG: true,
                larguraCM: true,
                alturaCM: true,
                profundidadeCM: true,
                category_id: true,
                created_at: true,
                variacoes: true
            }
        })

        return product;

    }
}

export { CreateProductService }
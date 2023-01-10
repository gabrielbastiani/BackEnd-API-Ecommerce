import prismaClient from "../../prisma";

interface ProductRequest {
    nameProduct: string;
    descriptionProduct1: string;
    descriptionProduct2: string;
    descriptionProduct3: string;
    descriptionProduct4: string;
    descriptionProduct5: string;
    descriptionProduct6: string;
    price: string;
    sku: string;
    estoque: string;
    avaliacao: string;
    pesoKG: string;
    larguraCM: string;
    alturaCM: string;
    profundidadeCM: string;
    category_id: string;
}

class CreateProductService {
    async execute({
        nameProduct,
        descriptionProduct1,
        descriptionProduct2,
        descriptionProduct3,
        descriptionProduct4,
        descriptionProduct5,
        descriptionProduct6,
        price,
        sku,
        estoque,
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
                descriptionProduct1: descriptionProduct1,
                descriptionProduct2: descriptionProduct2,
                descriptionProduct3: descriptionProduct3,
                descriptionProduct4: descriptionProduct4,
                descriptionProduct5: descriptionProduct5,
                descriptionProduct6: descriptionProduct6,
                price: price,
                sku: sku,
                estoque: estoque,
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
                descriptionProduct1: true,
                descriptionProduct2: true,
                descriptionProduct3: true,
                descriptionProduct4: true,
                descriptionProduct5: true,
                descriptionProduct6: true,
                price: true,
                sku: true,
                estoque: true,
                avaliacao: true,
                pesoKG: true,
                larguraCM: true,
                alturaCM: true,
                profundidadeCM: true,
                category_id: true,
                created_at: true,
                variacoes: true,
                photoproducts: true
            }
        })

        return product;

    }
}

export { CreateProductService }
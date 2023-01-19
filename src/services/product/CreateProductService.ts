import prismaClient from "../../prisma";

interface ProductRequest {
    nameProduct: string;
    descriptionProduct1: string;
    descriptionProduct2: string;
    descriptionProduct3: string;
    descriptionProduct4: string;
    descriptionProduct5: string;
    descriptionProduct6: string;
    preco: number;
    sku: string;
    estoque: number;
    pesoKG: string;
    larguraCM: string;
    alturaCM: string;
    profundidadeCM: string;
    disponibilidade: boolean;
    promocao: number;
    category_id: string;
    loja_id: string;
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
        preco,
        sku,
        estoque,
        pesoKG,
        larguraCM,
        alturaCM,
        profundidadeCM,
        disponibilidade,
        promocao,
        category_id,
        loja_id,
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
                preco: preco,
                sku: sku,
                estoque: estoque,
                pesoKG: pesoKG,
                larguraCM: larguraCM,
                alturaCM: alturaCM,
                profundidadeCM: profundidadeCM,
                disponibilidade: disponibilidade,
                promocao: promocao,
                category_id: category_id,
                loja_id: loja_id
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
                loja_id: true,
                created_at: true,
                variacoes: true,
                photoproducts: true
            }
        })

        return product;

    }
}

export { CreateProductService }
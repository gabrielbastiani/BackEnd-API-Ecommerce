import prismaClient from "../../prisma";

interface ProductRequest {
    nameProduct: string;
    slug: string;
    category_id: string;
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
    promocao: number;
    loja_id: string;
}

class CreateProductService {
    async execute({
        nameProduct,
        slug,
        category_id,
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
                category_id: category_id,
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
                promocao: promocao,
                loja_id: loja_id
            },
            include: {
                category: true,
                loja: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
                item: true,
            }
        })

        return product;

    }
}

export { CreateProductService }
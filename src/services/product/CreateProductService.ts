import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    slug: string;
    price: number;
    promotion: number;
    sku: string;
    stock: number;
    weight: string;
    width: string;
    height: string;
    depth: string;
    reservedAmount: number;
    urlVideo: string;
    buyTogether_id: string;
    store_id: string;
}

class CreateProductService {
    async execute({
        name,
        price,
        promotion,
        sku,
        stock,
        weight,
        width,
        height,
        depth,
        reservedAmount,
        urlVideo,
        buyTogether_id,
        store_id,
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
                name: name,
                slug: removerAcentos(name),
                price: price,
                promotion: promotion,
                sku: sku,
                stock: stock,
                weight: weight,
                width: width,
                height: height,
                depth: depth,
                amount: 1,
                reservedAmount: reservedAmount,
                urlVideo: urlVideo,
                buyTogether_id: buyTogether_id,
                store_id: store_id
            },
            include: {
                avalietions: true,
                buyTogether: true,
                buytogethers: true,
                descriptionproducts: true,
                photoproducts: true,
                productcategories: true,
                relationattributeproducts: true,
                store: true,
                tags: true,
                productsvariations: true,
                stockproductcustomer: true
            }
        });

        return product;

    }
}

export { CreateProductService }
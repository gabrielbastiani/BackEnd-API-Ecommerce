import prismaClient from '../../../prisma';

interface ProductsRequest {
    slug: string;
}

class ProductsPageCategoriesService {
    async execute({ slug }: ProductsRequest) {
        const products = await prismaClient.relationProductCategory.findMany({
            where: {
                category: {
                    slug: "maquinas-de-solda",
                }
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: {include: {photoproducts: true, relationProductAtributos: {include: {atributoTipo: {include: {atributoValores: true}}}}}},
                category: true,
            }
        });

        console.log(products.map((item) => {
            return(
                item.product.relationProductAtributos.map((tip) => {
                    return(
                        tip.tipo,
                        tip.atributoTipo.atributoValores.map((val) => {
                            return(
                                val.valor
                            )
                        })
                    )
                })
            )
        }))

        return products;

    }
}

export { ProductsPageCategoriesService }
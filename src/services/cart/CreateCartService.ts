import prismaClient from "../../prisma";

interface CartRequest {
  customer_id: string;
  product_id: string;
  image: string;
  name: string;
  amount: number;
  price: number;
  relationattributeproducts: string;
  stock: number;
  weight: number;
  width: number;
  height: number;
  depth: number;
  total: number;
}

class CreateCartService {
  async execute({
    customer_id,
    product_id,
    image,
    name,
    amount,
    price,
    relationattributeproducts,
    stock,
    weight,
    width,
    height,
    depth,
    total
  }: CartRequest) {
    const cart = await prismaClient.cart.create({
      data: {
        customer_id: customer_id,
        product_id: product_id,
        image: image,
        name: name,
        amount: amount,
        price: price,
        relationattributeproducts: relationattributeproducts,
        stock: stock,
        weight: weight,
        width: width,
        height: height,
        depth: depth,
        total: total
      }
    });

    return cart;

  }
}

export { CreateCartService }
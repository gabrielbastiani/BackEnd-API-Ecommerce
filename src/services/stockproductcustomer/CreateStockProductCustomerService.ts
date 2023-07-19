import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');

interface StockEmailRequest {
    email: string;
    product_id: string;
}

class CreateStockProductCustomerService {
    async execute({ email, product_id }: StockEmailRequest) {

        const store = await prismaClient.store.findFirst();

        const stockProduct = await prismaClient.stockProductCustomer.create({
            data: {
                email: email,
                product_id: product_id,
                store_id: store.id
            }
        });

        const firstStockProduct = await prismaClient.stockProductCustomer.findFirst({
            orderBy: {
              created_at: 'desc'
            },
            include: {
                product: true
            }
          });

        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASS_SMTP
            }
        });

        await transporter.sendMail({
            from: `Loja Virtual - ${store.name} <${store.email}>`,
            to: `${email}`,
            subject: `Estoque do produto ${firstStockProduct.product.name}`,
            html: `
            <article>
                <p>Olá!</p>
                <p>Assim que que o estoque do produto ${firstStockProduct.product.name} estiver restabelecido, você será notificado aqui em seu e-mail.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual ${store.name}</h5>
            </div>`,
        });

        return stockProduct;

    }
}

export { CreateStockProductCustomerService }
import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface StockRequest {
    product_id: string;
}

class StockProductCustomerService {
    async execute({ product_id }: StockRequest) {

        const store = await prismaClient.store.findFirst();

        const stock = await prismaClient.stockProductCustomer.findMany({
            where: {
                product_id: product_id
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

        for (const key in stock) {
            if (Object.prototype.hasOwnProperty.call(stock, key)) {
                const stock_products = stock[key];

                const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/estoque_de_produto_restabelecido_para_cliente.ejs`);

                const data = await ejs.renderFile(requiredPath, {
                    nameProduct: stock_products.product.name,
                    slugProduct: stock_products.product.slug,
                    store_address: store.address,
                    store_cellPhone: store.cellPhone,
                    store_cep: store.cep,
                    store_city: store.city,
                    store_cnpj: store.cnpj,
                    store_name: store.name,
                    store_logo: store.logo
                });

                await transporter.sendMail({
                    from: `Loja Virtual - ${store.name} <${store.email}>`,
                    to: `${stock_products.email}`,
                    subject: `Estoque do produto ${stock_products.product.name} restabelecido`,
                    html: data
                })
            }
        }

        await prismaClient.stockProductCustomer.deleteMany({
            where: {
                product_id: product_id
            }
        });
    }
}

export { StockProductCustomerService }
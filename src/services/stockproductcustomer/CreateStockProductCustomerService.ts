import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

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

        const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/estoque_de_produto_para_cliente.ejs`);

        const data = await ejs.renderFile(requiredPath, {
            nameProduct: firstStockProduct.product.name,
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
            to: `${email}`,
            subject: `Estoque do produto ${firstStockProduct.product.name}`,
            html: data
        });

        setInterval(async () => {

            if (firstStockProduct.product.stock >= 1) {

                const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/estoque_de_produto_restabelecido_para_cliente.ejs`);

                const data = await ejs.renderFile(requiredPath, {
                    nameProduct: firstStockProduct.product.name,
                    slugProduct: firstStockProduct.product.slug,
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
                    to: `${email}`,
                    subject: `Estoque do produto ${firstStockProduct.product.name} restabelecido`,
                    html: data
                });
            }

        }, 10000);

        return stockProduct;

    }
}

export { CreateStockProductCustomerService }
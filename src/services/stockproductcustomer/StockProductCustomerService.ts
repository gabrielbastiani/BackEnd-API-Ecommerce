import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');

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

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        stock.map(async (item) => {
            return (
                await transporter.sendMail({
                    from: `Loja Virtual - ${store.name} <${store.email}>`,
                    to: `${item.email}`,
                    subject: `Estoque do produto ${item.product.name} restabelecido`,
                    html: `
                    <article>
                        <p>Olá!</p>
                        <p>O estoque do produto ${item.product.name} foi restabelecido em nossa loja virtual, clique abaixo e seja redirecionado para a página desse produto la na loja.</p>
                        <p><a href="http://localhost:3001/produto/${removerAcentos(item.product.slug)}">CLIQUE AQUI - ${item.product.name}</a></p>
                    </article>
                    
                    <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                        <h5>Loja Virtual ${store.name}</h5>
                    </div>`,
                })
            )
        });

        await prismaClient.stockProductCustomer.deleteMany({
            where: {
                product_id: product_id
            }
        });
    }
}

export { StockProductCustomerService }
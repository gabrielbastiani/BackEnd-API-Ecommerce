import prismaClient from "../../../prisma";
const CronJob = require('cron').CronJob;
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";


interface ConfigRequest {
  subject: string;
  code_cupom: string;
  time_send_email: number;
  time_in_hours: number;
  active: string;
  templateAbandonedCartEmail_id: string;
}

class CreateConfigAbandonedCartService {
  async execute({
    subject,
    code_cupom,
    time_send_email,
    time_in_hours,
    active,
    templateAbandonedCartEmail_id
  }: ConfigRequest) {

    const store = await prismaClient.store.findFirst();

    await prismaClient.configAbandonedCart.create({
      data: {
        subject: subject,
        code_cupom: code_cupom,
        time_send_email: time_send_email,
        time_in_hours: Number(time_in_hours),/* @ts-ignore */
        active: active,
        templateAbandonedCartEmail_id: templateAbandonedCartEmail_id,
        store_id: store.id
      }
    });

    const cartData = await prismaClient.abandonedCart.findMany({
      include: {
        customer: true
      }
    });
    const timesConfig = await prismaClient.configAbandonedCart.findMany({
      include: {
        templateAbandonedCartEmail: true,
        store: true
      }
    });

    const job = new CronJob('0 * * * * *', async () => {

      const transporter = nodemailer.createTransport({
        host: process.env.HOST_SMTP,
        port: 465,
        auth: {
          user: process.env.USER_SMTP,
          pass: process.env.PASS_SMTP
        }
      });

      for (const key in cartData) {
        if (Object.prototype.hasOwnProperty.call(cartData, key)) {
          const cart = cartData[key];

          const dataHora = new Date();
          const timeNow = dataHora.getTime() / 1000;
          const timeCart = cart.created_cart.getTime() / 1000;

          const resultado = Math.round(timeNow - timeCart);

          for (const key in timesConfig) {
            if (Object.prototype.hasOwnProperty.call(timesConfig, key)) {
              const configs = timesConfig[key];

              const timeSet = Number(configs.time_send_email);
              const resultDiv = Math.round(resultado / 60);

              if (resultDiv === timeSet) {

                if (configs.active === "Sim") {

                  let name_file = configs.templateAbandonedCartEmail.slug_name_file_email;
                  const requiredPath = path.join(__dirname, `../templatesEmailsCartAbandoned/template_emails_abandoned_cart/${name_file}.ejs`);

                  const data = await ejs.renderFile(requiredPath, {
                    cupom: configs.code_cupom ? configs.code_cupom : "Que pena, não temos cupom ainda para lhe oferecer",
                    name: cart.customer.name,
                    list_product: cart.cart_abandoned,
                    store_address: configs.store.address,
                    store_cellPhone: configs.store.cellPhone,
                    store_cep: configs.store.cep,
                    store_city: configs.store.city,
                    store_cnpj: configs.store.cnpj,
                    store_name: configs.store.name,
                    store_logo: configs.store.logo
                  });

                  await transporter.sendMail({
                    from: `Loja Virtual - ${store.name} <${store.email}>`,
                    to: `${cart.email_customer}`,
                    subject: `${configs.subject}`,
                    html: data,
                  });

                }
              }
            }
          }
        }
      }
    }, null, true);

    job.start();

  }
}

export { CreateConfigAbandonedCartService }
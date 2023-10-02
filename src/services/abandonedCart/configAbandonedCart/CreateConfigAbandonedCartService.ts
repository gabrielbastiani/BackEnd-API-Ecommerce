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
  active: string;
}

class CreateConfigAbandonedCartService {
  async execute({
    subject,
    code_cupom,
    time_send_email,
    active
  }: ConfigRequest) {

    const store = await prismaClient.store.findFirst();

    await prismaClient.configAbandonedCart.create({
      data: {
        subject: subject,
        code_cupom: code_cupom,
        time_send_email: time_send_email,/* @ts-ignore */
        active: active,
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
        templatesabandonedscartsemail: true,
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

                  const nameTemplate = configs.templatesabandonedscartsemail.map(item => item.slug_name_file_email);
                  const templateName = String(nameTemplate)

                  console.log("Nome do arquivo", templateName);

                  const requiredPath = path.join(__dirname, `./template_emails/${templateName}`);

                  console.log("Caminho do arquivo", requiredPath);

                  const data = await ejs.renderFile(requiredPath, {
                    name: cart.customer.name,
                    list_product: cart.cart_abandoned
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
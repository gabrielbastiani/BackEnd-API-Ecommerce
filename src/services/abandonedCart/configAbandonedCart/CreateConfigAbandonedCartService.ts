import prismaClient from "../../../prisma";
const CronJob = require('cron').CronJob;
import nodemailer from "nodemailer";
require('dotenv/config');

interface ConfigRequest {
  subject: string;
  code_cupom: string;
  template: string;
  time_send_email: string;
  active: string;
}

class CreateConfigAbandonedCartService {
  async execute({
    subject,
    code_cupom,
    template,
    time_send_email,
    active
  }: ConfigRequest) {

    const store = await prismaClient.store.findFirst();

    await prismaClient.configAbandonedCart.create({
      data: {
        subject: subject,
        code_cupom: code_cupom,
        template: template,/* @ts-ignore */
        time_send_email: time_send_email,/* @ts-ignore */
        active: active,
        store_id: store.id
      }
    });

    const cartData = await prismaClient.abandonedCart.findMany();
    const timesConfig = await prismaClient.configAbandonedCart.findMany();

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

                  await transporter.sendMail({
                    from: `Loja Virtual - ${store.name} <${store.email}>`,
                    to: `${cart.email_customer}`,
                    subject: `${configs.subject}`,
                    html: `${configs.template}`,
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
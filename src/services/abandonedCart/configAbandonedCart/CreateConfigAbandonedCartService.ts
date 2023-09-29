import { StatusCart } from "@prisma/client";
import prismaClient from "../../../prisma"; 
const CronJob = require('cron').CronJob;
import moment from 'moment';
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
        template: template,
        time_send_email: time_send_email,/* @ts-ignore */
        active: active,
        store_id: store.id
      }
    });

    const alldates = await prismaClient.configAbandonedCart.findFirst({
      orderBy: {
        time_send_email: 'desc'
      }
    });

    const dateAllFirst = alldates.time_send_email;

    const firstDate = moment(dateAllFirst).format('DD/MM/YYYY HH:mm');

    const job = new CronJob('0 * * * * *', async () => {

      const nowDate = new Date();
      const dateNow = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(nowDate);

      if (firstDate === dateNow) {

        await prismaClient.configAbandonedCart.update({
          where: {
            id: alldates.id,
          },
          data: {
            active: StatusCart.Sim
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
          to: `${store.email}`,
          subject: `${subject}`,
          html: `${template}`,
        });

      }

    }, null, true);

  }
}

export { CreateConfigAbandonedCartService }
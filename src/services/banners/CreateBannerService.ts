import { StatusBanner } from "@prisma/client";
import prismaClient from "../../prisma";
const CronJob = require('cron').CronJob;
import moment from 'moment';
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface BannerRequest {
  title: string;
  width: string;
  height: string;
  startDate: string;
  endDate: string;
  banner: string;
  order: number;
  url: string;
  position: string;
  slugPosition: string;
  active: string;
}

class CreateBannerService {
  async execute({
    title,
    width,
    height,
    startDate,
    endDate,
    banner,
    order,
    url,
    position,
    active
  }: BannerRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    const store = await prismaClient.store.findFirst();

    await prismaClient.banner.create({
      data: {
        title: title,
        width: width,
        height: height,
        startDate: startDate,
        endDate: endDate,
        banner: banner,
        order: Number(order),
        url: url,
        position: position,
        slugPosition: removerAcentos(position),/* @ts-ignore */
        active: active
      }
    });

    const alldates = await prismaClient.banner.findFirst({
      orderBy: {
        created_at: 'desc'
      }
    });

    const titleBanner = alldates.title;

    const dateAllFirst = alldates.startDate;
    const dateAllLast = alldates.endDate;

    const firstDate = moment(dateAllFirst).format('DD/MM/YYYY HH:mm');
    const dateFuture = moment(dateAllLast).format('DD/MM/YYYY HH:mm');

    new CronJob('0 * * * * *', async () => {

      const nowDate = new Date();
      const dateNow = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(nowDate);

      if (firstDate === dateNow) {

        await prismaClient.banner.update({
          where: {
            id: alldates.id,
          },
          data: {
            active: StatusBanner.Sim
          }
        });

        const store = await prismaClient.store.findFirst();

        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASS_SMTP
            }
        });

        const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/banner_programado.ejs`);

        const data = await ejs.renderFile(requiredPath, {
            titleBanner: titleBanner,
            firstDate: firstDate,
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
          to: `${store.email}`,
          subject: "Banner programado na loja",
          html: data
        });

        await prismaClient.notificationAdmin.create({
          data: {
            message: `Banner programado <strong>${titleBanner}</strong> foi publicado na loja.`,
            store_id: store.id
          }
        });

      }

      if (dateFuture === dateNow) {

        await prismaClient.banner.update({
          where: {
            id: alldates.id,
          },
          data: {
            active: StatusBanner.Nao
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

        const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/banner_programado_desabilitado.ejs`);

        const data = await ejs.renderFile(requiredPath, {
            titleBanner: titleBanner,
            dateFuture: dateFuture,
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
          to: `${store.email}`,
          subject: "Banner programado na loja desabilitado",
          html: data
        });

        await prismaClient.notificationAdmin.create({
          data: {
            message: `Banner programado <strong>${titleBanner}</strong> foi desabilitado na loja.`,
            store_id: store.id
          }
        });
        
      }

    }, null, true);

  }
}

export { CreateBannerService }
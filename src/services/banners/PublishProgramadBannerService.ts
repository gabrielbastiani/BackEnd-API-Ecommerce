import { StatusBanner } from '@prisma/client';
import prismaClient from '../../prisma';
const CronJob = require('cron').CronJob;
import moment from 'moment';
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";


interface BannerRequest {
    startDate: string;
    endDate: string;
    banner_id: string;
}

class PublishProgramadBannerService {
    async execute({ startDate, endDate, banner_id }: BannerRequest) {

        const store = await prismaClient.store.findFirst();

        const allDateFirst = await prismaClient.banner.findFirst({
            where: {
                id: banner_id,
                startDate: startDate
            }
        });

        const allDateLast = await prismaClient.banner.findFirst({
            where: {
                id: banner_id,
                endDate: endDate
            }
        });

        const titleBanner = allDateFirst.title;

        const dateAllFirst = allDateFirst.startDate;
        const dateAllLast = allDateLast.endDate;

        const firstDate = moment(dateAllFirst).format('DD/MM/YYYY HH:mm');
        const dateFuture = moment(dateAllLast).format('DD/MM/YYYY HH:mm');

        new CronJob('0 * * * * *', async () => {

            const nowDate = new Date();
            const dateNow = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(nowDate);

            if (firstDate === dateNow) {

                await prismaClient.banner.update({
                    where: {
                        id: banner_id,
                    },
                    data: {
                        active: StatusBanner.Sim
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

            }

            if (dateFuture === dateNow) {

                await prismaClient.banner.update({
                    where: {
                        id: banner_id,
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
                    subject: "Banner programado da loja desabilitado",
                    html: data
                });
            }

        }, null, true);

    }

}

export { PublishProgramadBannerService }
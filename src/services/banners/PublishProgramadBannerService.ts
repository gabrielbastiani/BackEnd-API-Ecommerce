import { StatusBanner } from '@prisma/client';
import prismaClient from '../../prisma';
const CronJob = require('cron').CronJob;
import moment from 'moment';
import nodemailer from "nodemailer";
require('dotenv/config');


interface BannerRequest {
    startDate: string;
    endDate: string;
    banner_id: string;
}

class PublishProgramadBannerService {
    async execute({ startDate, endDate, banner_id }: BannerRequest) {

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

        const job = new CronJob('0 * * * * *', async () => {

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

                await transporter.sendMail({
                    from: 'Loja - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>',
                    to: 'gabriel.bastiani@hotmail.com.br',
                    subject: "Banner programado na loja",
                    html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h2>Banner programado na loja</h2>
                          </div>
                          
                          <article>
                              <p>Olá!</p>
                              <p>O banner de titulo: <b>"${titleBanner}"</b>, programado para ser publicado na data <b>${firstDate}</b> foi publicado na loja!</p>
                          </article>
                          
                          <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h5>Loja Builder Seu Negocio Online</h5>
                          </div>`,
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

                await transporter.sendMail({
                    from: 'Loja - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>',
                    to: 'gabriel.bastiani@hotmail.com.br',
                    subject: "Banner programado na store",
                    html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h2>Banner programado na store</h2>
                          </div>
                          
                          <article>
                              <p>Olá!</p>
                              <p>O banner programado de titulo: <b>"${titleBanner}"</b>, foi desabilitado na store na data <b>${dateFuture}</p>
                          </article>
                          
                          <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h5>Loja Builder Seu Negocio Online</h5>
                          </div>`,
                });
            }

        }, null, true);

    }

}

export { PublishProgramadBannerService }
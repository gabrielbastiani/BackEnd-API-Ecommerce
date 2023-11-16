import { StatusCoupon } from "@prisma/client";
import prismaClient from "../../prisma";
const CronJob = require('cron').CronJob;
import moment from 'moment';
require('dotenv/config');

interface CuponRequest {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    code: string;
    amountCoupon: number;
    active: string;
}

class CreateCuponService {
    async execute({
        name,
        description,
        startDate,
        endDate,
        code,
        amountCoupon,
        active
    }: CuponRequest) {

        const store = await prismaClient.store.findFirst();

        await prismaClient.coupon.create({
            data: {
                name: name,
                description: description,
                startDate: startDate,
                endDate: endDate,
                code: code,
                amountCoupon: Number(amountCoupon),/* @ts-ignore */
                active: active,
                store_id: store.id
            }
        });

        const alldates = await prismaClient.coupon.findFirst({
            orderBy: {
                created_at: 'desc'
            }
        });

        const dateAllFirst = alldates.startDate;
        const dateAllLast = alldates.endDate;

        const firstDate = moment(dateAllFirst).format('DD/MM/YYYY HH:mm');
        const dateFuture = moment(dateAllLast).format('DD/MM/YYYY HH:mm');

        new CronJob('0 * * * * *', async () => {

            const nowDate = new Date();
            const dateNow = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(nowDate);

            if (firstDate === dateNow) {

                await prismaClient.coupon.update({
                    where: {
                        id: alldates.id,
                    },
                    data: {
                        active: StatusCoupon.Sim
                    }
                });

                await prismaClient.notificationAdmin.create({
                    data: {
                        message: `Cupom <strong>${alldates.name}</strong>, foi <strong>ATIVADO</strong> com sucesso.`,
                        store_id: store.id
                    }
                });

                return;
            }

            if (dateFuture === dateNow) {

                await prismaClient.coupon.update({
                    where: {
                        id: alldates.id,
                    },
                    data: {
                        active: StatusCoupon.Nao
                    }
                });

                await prismaClient.notificationAdmin.create({
                    data: {
                        message: `Cupom <strong>${alldates.name}</strong>, foi <strong>DESATIVADO</strong> com sucesso.`,
                        store_id: store.id
                    }
                });

                return;
            }

        }, null, true);

    }
}

export { CreateCuponService }
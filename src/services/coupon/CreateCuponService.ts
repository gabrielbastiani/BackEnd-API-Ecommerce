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
    conditional: string;
}

class CreateCuponService {
    async execute({
        name,
        description,
        startDate,
        endDate,
        code,
        amountCoupon,
        active,
        conditional
    }: CuponRequest) {

        const store = await prismaClient.store.findFirst();

        await prismaClient.coupon.create({
            data: {
                name: name,
                description: description,
                startDate: startDate,
                endDate: endDate,
                code: code,
                amountCoupon: Number(amountCoupon),
                active: active,
                conditional: conditional,
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

        const job = new CronJob('0 * * * * *', async () => {

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

                return;
            }

        }, null, true);

    }
}

export { CreateCuponService }
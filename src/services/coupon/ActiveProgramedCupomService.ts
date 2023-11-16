import { StatusCoupon } from '@prisma/client';
import prismaClient from '../../prisma';
const CronJob = require('cron').CronJob;
import moment from 'moment';
require('dotenv/config');


interface CupomRequest {
    startDate: string;
    endDate: string;
    cupon_id: string;
}

class ActiveProgramedCupomService {
    async execute({ startDate, endDate, cupon_id }: CupomRequest) {

        const store = await prismaClient.store.findFirst();

        const allDateFirst = await prismaClient.coupon.findFirst({
            where: {
                id: cupon_id,
                startDate: startDate
            }
        });

        const allDateLast = await prismaClient.coupon.findFirst({
            where: {
                id: cupon_id,
                endDate: endDate
            }
        });

        const dateAllFirst = allDateFirst.startDate;
        const dateAllLast = allDateLast.endDate;

        const firstDate = moment(dateAllFirst).format('DD/MM/YYYY HH:mm');
        const dateFuture = moment(dateAllLast).format('DD/MM/YYYY HH:mm');

        new CronJob('0 * * * * *', async () => {

            const nowDate = new Date();
            const dateNow = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(nowDate);

            if (firstDate === dateNow) {

                await prismaClient.coupon.update({
                    where: {
                        id: cupon_id,
                    },
                    data: {
                        active: StatusCoupon.Sim
                    }
                });

                await prismaClient.notificationAdmin.create({
                    data: {
                        message: `Cupom <strong>${allDateLast.name}</strong>, foi <strong>ATIVADO</strong> com sucesso.`,
                        store_id: store.id
                    }
                });

                return;

            }

            if (dateFuture === dateNow) {

                await prismaClient.coupon.update({
                    where: {
                        id: cupon_id,
                    },
                    data: {
                        active: StatusCoupon.Nao
                    }
                });

                await prismaClient.notificationAdmin.create({
                    data: {
                        message: `Cupom <strong>${allDateLast.name}</strong>, foi <strong>DESATIVADO</strong> com sucesso.`,
                        store_id: store.id
                    }
                });

                return;
            }

        }, null, true);

    }

}

export { ActiveProgramedCupomService }
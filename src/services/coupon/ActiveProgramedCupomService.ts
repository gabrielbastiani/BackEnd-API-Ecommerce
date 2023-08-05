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

        const job = new CronJob('0 * * * * *', async () => {

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

                return;
            }

        }, null, true);

    }

}

export { ActiveProgramedCupomService }
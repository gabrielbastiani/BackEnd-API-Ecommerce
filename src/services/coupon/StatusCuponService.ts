import { StatusCoupon } from "@prisma/client";
import prismaClient from "../../prisma";

interface CuponRequest {
  cupon_id: string;
}

class StatusCuponService {
  async execute({ cupon_id }: CuponRequest) {

    const store = await prismaClient.store.findFirst();

    const active = await prismaClient.coupon.findUnique({
      where: {
        id: cupon_id
      },
      select: {
        active: true
      }
    });

    if (active.active === "Sim") {
      const isFalse = await prismaClient.coupon.update({
        where: {
          id: cupon_id
        },
        data: {
          active: StatusCoupon.Nao
        }
      });

      const cupomStatus = await prismaClient.coupon.findUnique({
        where: {
          id: cupon_id
        }
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Cupom <strong>${cupomStatus.name}</strong>, foi <strong>DESATIVADO</strong> com sucesso.`,
          store_id: store.id
        }
      });

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.coupon.update({
        where: {
          id: cupon_id
        },
        data: {
          active: StatusCoupon.Sim
        }
      });

      const cupomStatus = await prismaClient.coupon.findUnique({
        where: {
          id: cupon_id
        }
      });

      await prismaClient.notificationAdmin.create({
        data: {
          message: `Cupom <strong>${cupomStatus.name}</strong>, foi <strong>ATIVADO</strong> com sucesso.`,
          store_id: store.id
        }
      });

      return isTrue;

    }

  }
}

export { StatusCuponService }
import { StatusCoupon } from "@prisma/client";
import prismaClient from "../../prisma";

interface CuponRequest {
  cupon_id: string;
}

class StatusCuponService {
  async execute({ cupon_id }: CuponRequest) {
    const active = await prismaClient.coupon.findUnique({
      where: {
        id: cupon_id
      },
      select: {
        active: true
      }
    })

    if (active.active === "Sim") {
      const isFalse = await prismaClient.coupon.update({
        where: {
          id: cupon_id
        },
        data: {
          active: StatusCoupon.Nao
        }
      })

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
      })

      return isTrue;

    }

  }
}

export { StatusCuponService }
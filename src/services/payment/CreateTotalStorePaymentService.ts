import prismaClient from "../../prisma";

interface CartTotalRequest {
  total_payment: number;
  type_payment: string;
}

class CreateTotalStorePaymentService {
  async execute({ total_payment, type_payment }: CartTotalRequest) {

    const store = await prismaClient.store.findFirst();

    const totals = await prismaClient.paymentsTotalStore.create({
      data: {
        store_id: store.id,
        total_payment: total_payment,
        type_payment: type_payment
      }
    });

    return totals;

  }
}

export { CreateTotalStorePaymentService }
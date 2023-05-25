import prismaClient from "../../../../prisma";

interface CustomerRequest {
  passwordRecoveryCustomer_id: string;
}

class DeletePasswordRecoveryIDCustomerService {
  async execute({ passwordRecoveryCustomer_id }: CustomerRequest) {
    const deleteID = await prismaClient.passwordRecoveryCustomer.delete({
      where: {
        id: passwordRecoveryCustomer_id
      },
    });

    return deleteID;
  }
}

export { DeletePasswordRecoveryIDCustomerService };
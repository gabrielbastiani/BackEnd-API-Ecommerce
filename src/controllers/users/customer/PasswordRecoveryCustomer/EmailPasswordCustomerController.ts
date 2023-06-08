import { Request, Response } from "express";
import { RequestPasswordCustomerRecovery } from "../../../../services/users/customer/passwordRecoveryCustomer/RequestPasswordCustomerRecovery";

class EmailPasswordCustomerController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const requestPasswordRecovery = new RequestPasswordCustomerRecovery();

    const user = await requestPasswordRecovery.execute({
      email,
    });

    return res.json(user)
  }
}


export { EmailPasswordCustomerController };
import { Request, Response } from "express";
import { CustomerPasswordRecoveryService } from "../../../../services/users/customer/passwordRecoveryCustomer/CustomerPasswordRecoveryService";

class CustomerRecoveryPasswordController {
  async handle(req: Request, res: Response) {
    const passwordRecoveryCustomer_id = req.query.passwordRecoveryCustomer_id as string;

    const { password } = req.body;

    const passwordRecovery = new CustomerPasswordRecoveryService();

    const recoveryPassword = await passwordRecovery.execute({
      passwordRecoveryCustomer_id,
      password,
    });

    return res.json(recoveryPassword)
  }

}


export { CustomerRecoveryPasswordController };
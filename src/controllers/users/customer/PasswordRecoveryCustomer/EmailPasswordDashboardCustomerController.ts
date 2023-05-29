import { Request, Response } from "express";
import { RequestPasswordDashboardCustomerRecovery } from "../../../../services/users/customer/PasswordRecoveryCustomer/RequestPasswordDashboardCustomerRecovery";


class EmailPasswordDashboardCustomerController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const requestPasswordDashboardRecovery = new RequestPasswordDashboardCustomerRecovery();

    const userRecovery = await requestPasswordDashboardRecovery.execute({
      email,
    });

    return res.json(userRecovery)
  }
}


export { EmailPasswordDashboardCustomerController };
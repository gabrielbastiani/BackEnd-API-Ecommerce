import { Request, Response } from "express";
import { FindRecoveryIDCustomerService } from "../../../../services/users/customer/PasswordRecoveryCustomer/FindRecoveryIDCustomerService";


class FindRecoveryIDCustomerController {
  async handle(req: Request, res: Response) {

    const findRecoveryIDService = new FindRecoveryIDCustomerService();

    const recoveryPassword = await findRecoveryIDService.execute();

    return res.json(recoveryPassword)
  }

}


export { FindRecoveryIDCustomerController };
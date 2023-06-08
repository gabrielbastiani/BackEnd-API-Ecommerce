import { Request, Response } from "express";
import { DeletePasswordRecoveryIDCustomerService } from "../../../../services/users/customer/passwordRecoveryCustomer/DeletePasswordRecoveryIDCustomerService";


class DeletePasswordRecoveryIDCustomerController {
  async handle(req: Request, res: Response) {
    const passwordRecoveryCustomer_id = req.query.passwordRecoveryCustomer_id as string;

    const deletePasswordRecoveryIDService = new DeletePasswordRecoveryIDCustomerService();

    const userRecovery = await deletePasswordRecoveryIDService.execute({
      passwordRecoveryCustomer_id
    });

    return res.json(userRecovery)
  }
}


export { DeletePasswordRecoveryIDCustomerController };
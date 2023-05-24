import { Request, Response } from "express";
import { DeleteCustomerService } from "../../../services/users/customer/DeleteCustomerService";

class DeleteCustomerController {
  async handle(req: Request, res: Response) {
    const customer_id = req.query.customer_id as string;

    const deleteCustomer = new DeleteCustomerService();

    const deleteUser = await deleteCustomer.execute({
      customer_id,
    });

    return res.json(deleteUser);
  }
}

export { DeleteCustomerController };
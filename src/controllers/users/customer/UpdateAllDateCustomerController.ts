import { Request, Response } from 'express';
import { UpdateAllDateCustomerService } from '../../../services/users/customer/UpdateAllDateCustomerService';

class UpdateAllDateCustomerController {
  async handle(req: Request, res: Response) {
    const customer_id = req.query.customer_id as string;

    const {
      email,
      password,
      cpf,
      cnpj,
      stateRegistration,
      phone,
      dateOfBirth,
      gender,
      newslatter,
      addressee,
      address,
      number,
      complement,
      reference,
      neighborhood,
      cep,
      city,
      state,
      store_id
    } = req.body;

    const updateAllCustomers = new UpdateAllDateCustomerService();

    const updateCustomer = await updateAllCustomers.execute({
      customer_id,
      email,
      password,
      cpf,
      cnpj,
      stateRegistration,
      phone,
      dateOfBirth,
      gender,
      newslatter,
      addressee,
      address,
      number,
      complement,
      reference,
      neighborhood,
      cep,
      city,
      state,
      store_id
    });

    return res.json(updateCustomer);

  }
}

export { UpdateAllDateCustomerController }
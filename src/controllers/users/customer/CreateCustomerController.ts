import { Request, Response } from 'express'
import { CreateCustomerService } from '../../../services/users/customer/CreateCustomerService';

class CreateCustomerController {
    async handle(req: Request, res: Response) {
        const {
            name,
            slug,
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

        const createUserService = new CreateCustomerService();

        const customer = await createUserService.execute({
            name,
            slug,
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

        return res.json(customer)
    }
}

export { CreateCustomerController }
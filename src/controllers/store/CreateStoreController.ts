import { Request, Response } from 'express';
import { CreateStoreService } from '../../services/store/CreateStoreService';

class CreateStoreController {
    async handle(req: Request, res: Response) {
        const {
            name,
            cnpj,
            email,
            phone,
            cellPhone,
            address,
            number,
            neighborhood,
            complement,
            cep,
            city,
            state
        } = req.body;

        const createStore = new CreateStoreService();

        const { originalname, filename: logo } = req.file;

        const store = await createStore.execute({
            name,
            logo,
            cnpj,
            email,
            phone,
            cellPhone,
            address,
            number,
            neighborhood,
            complement,
            cep,
            city,
            state
        });

        return res.json(store)
    }
}

export { CreateStoreController }
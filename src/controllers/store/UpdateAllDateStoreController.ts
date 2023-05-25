import { Request, Response } from 'express';
import { UpdateAllDateStoreService } from '../../services/store/UpdateAllDateStoreService';

class UpdateAllDateStoreController {
  async handle(req: Request, res: Response) {
    const store_id = req.query.store_id as string;

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

    const updateDateStore = new UpdateAllDateStoreService();

    const store = await updateDateStore.execute({
      store_id,
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
    });

    return res.json(store);

  }
}

export { UpdateAllDateStoreController }
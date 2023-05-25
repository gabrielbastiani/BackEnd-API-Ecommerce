import { Request, Response } from 'express';
import { FindUniqueStoreService } from '../../services/store/FindUniqueStoreService';

class FindUniqueStoreController {
    async handle(req: Request, res: Response) {
        const store_id = req.query.store_id as string;

        const storeUser = new FindUniqueStoreService();

        const loadStore = await storeUser.execute({store_id});

        return res.json(loadStore);
    }
}

export { FindUniqueStoreController }
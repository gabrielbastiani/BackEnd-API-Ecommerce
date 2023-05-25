import { Request, Response } from 'express';
import { FindFirstStoreService } from '../../services/store/FindFirstStoreService';

class FindFirstStoreController {
    async handle(req: Request, res: Response) {
        const storeUser = new FindFirstStoreService();

        const loadStore = await storeUser.execute();

        return res.json(loadStore);
    }
}

export { FindFirstStoreController }
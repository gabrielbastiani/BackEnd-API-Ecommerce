import { Request, Response } from 'express';
import { StoreService } from '../../services/store/StoreService';

class StoreController {
    async handle(req: Request, res: Response) {
        const userStore = new StoreService();

        const loadStore = await userStore.execute();

        return res.json(loadStore);
    }
}

export { StoreController }
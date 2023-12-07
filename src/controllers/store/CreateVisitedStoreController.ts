import { Request, Response } from 'express';
import { CreateVisitedStoreService } from '../../services/store/CreateVisitedStoreService';

class CreateVisitedStoreController {
    async handle(req: Request, res: Response) {
        const userStore = new CreateVisitedStoreService();

        const loadStore = await userStore.execute();

        return res.json(loadStore);
    }
}

export { CreateVisitedStoreController }
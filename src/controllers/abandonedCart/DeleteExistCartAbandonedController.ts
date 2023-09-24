import { Request, Response } from 'express';
import { DeleteExistCartAbandonedService } from '../../services/abandonedCart/DeleteExistCartAbandonedService';

class DeleteExistCartAbandonedController {
    async handle(req: Request, res: Response) {

        const listCart = new DeleteExistCartAbandonedService();
        const cartExist = await listCart.execute();

        return res.json(cartExist);
    }
}

export { DeleteExistCartAbandonedController }
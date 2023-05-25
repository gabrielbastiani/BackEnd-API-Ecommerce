import { Request, Response } from 'express';
import { ListExactRedeSocialService } from '../../../services/store/socialMedia/ListExactRedeSocialService';

class ListExactRedeSocialController {
    async handle(req: Request, res: Response) {
        const { redesocial_id } = req.query;
        const listExact = new ListExactRedeSocialService();
        const exactRedes = await listExact.execute({ redesocial_id });

        return res.json(exactRedes);
    }
}

export { ListExactRedeSocialController }
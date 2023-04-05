import { Request, Response } from 'express';
import { ListAllRedeSocialService } from '../../../services/loja/redeSocial/ListAllRedeSocialService';

class ListAllRedeSocialController {
    async handle(req: Request, res: Response) {
        const listAllRedes = new ListAllRedeSocialService();
        const allRedes = await listAllRedes.execute();

        return res.json(allRedes);
    }
}

export { ListAllRedeSocialController }
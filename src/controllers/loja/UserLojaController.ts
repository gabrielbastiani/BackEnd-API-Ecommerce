import { Request, Response } from 'express';
import { UserLojaService } from '../../services/loja/UserLojaService';

class UserLojaController {
    async handle(req: Request, res: Response) {
        const userLoja = new UserLojaService();

        const { loja_id } = req.query;

        const lojaPage = await userLoja.execute({ loja_id });

        return res.json(lojaPage);
    }
}

export { UserLojaController }
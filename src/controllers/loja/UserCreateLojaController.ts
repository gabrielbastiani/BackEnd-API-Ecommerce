import { Request, Response } from 'express';
import { UserCreateLojaService } from '../../services/loja/UserCreateLojaService';

class UserCreateLojaController {
    async handle(req: Request, res: Response) {
        const userLoja = new UserCreateLojaService();

        const loadStore = await userLoja.execute();

        return res.json(loadStore);
    }
}

export { UserCreateLojaController }
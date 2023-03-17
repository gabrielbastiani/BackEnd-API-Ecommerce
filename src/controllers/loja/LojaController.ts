import { Request, Response } from 'express';
import { LojaService } from '../../services/loja/LojaService';

class LojaController {
    async handle(req: Request, res: Response) {
        const userLoja = new LojaService();

        const loadStore = await userLoja.execute();

        return res.json(loadStore);
    }
}

export { LojaController }
import { Request, Response } from 'express';
import { CreateRedeSocialService } from '../../../services/loja/redeSocial/CreateRedeSocialService';

class CreateLojaController {
    async handle(req: Request, res: Response) {
        const {
            redeName,
            link,
            order,
            loja_id
        } = req.body;

        const createLojaService = new CreateRedeSocialService();

        const { originalname, filename: imageRede } = req.file;

        const loja = await createLojaService.execute({
            redeName,
            link,
            imageRede,
            order,
            loja_id
        });

        return res.json(loja)
    }
}

export { CreateLojaController }
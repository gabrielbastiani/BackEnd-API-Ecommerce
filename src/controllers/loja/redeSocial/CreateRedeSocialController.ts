import { Request, Response } from 'express';
import { CreateRedeSocialService } from '../../../services/loja/redeSocial/CreateRedeSocialService';

class CreateRedeSocialController {
    async handle(req: Request, res: Response) {
        const {
            redeName,
            link,
            order,
            posicao,
            loja_id
        } = req.body;

        const createLojaService = new CreateRedeSocialService();

        const { originalname, filename: imageRede } = req.file;

        const loja = await createLojaService.execute({
            redeName,
            link,
            imageRede,
            order,
            posicao,
            loja_id
        });

        return res.json(loja)
    }
}

export { CreateRedeSocialController }
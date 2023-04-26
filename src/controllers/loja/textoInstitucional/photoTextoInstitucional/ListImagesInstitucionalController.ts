import { Request, Response } from 'express';
import { ListImagesInstitucionalService } from '../../../../services/loja/textoInstitucional/photoTextoInstitucional/ListImagesInstitucionalService';

class ListImagesInstitucionalController {
    async handle(req: Request, res: Response) {
        const slugPosicao = req.query.slugPosicao as string;
        
        const listPhotosTextos = new ListImagesInstitucionalService();

        const photosTextos = await listPhotosTextos.execute({ slugPosicao });

        return res.json(photosTextos);
    }
}

export { ListImagesInstitucionalController }
import { Request, Response } from 'express';
import { AllPhotosVariacaoService } from '../../../services/variacao/photoVariacao/AllPhotosVariacaoService';

class AllPhotosVariacaoController {
    async handle(req: Request, res: Response) {
        const photoVariacao_id = req.query.photoVariacao_id as string;
        
        const listVariacaoPhoto = new AllPhotosVariacaoService();

        const variacaoPhotos = await listVariacaoPhoto.execute({ photoVariacao_id });

        return res.json(variacaoPhotos);
    }
}

export { AllPhotosVariacaoController }
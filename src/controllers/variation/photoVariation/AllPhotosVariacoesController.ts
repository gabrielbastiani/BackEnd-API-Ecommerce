import { Request, Response } from 'express';
import { AllPhotosVariacoesService } from '../../../services/variation/photoVariacao/AllPhotosVariacoesService';

class AllPhotosVariacoesController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id as string;
        
        const listVariacoesPhotos = new AllPhotosVariacoesService();

        const variacoesPhotos = await listVariacoesPhotos.execute({ variacao_id });

        return res.json(variacoesPhotos);
    }
}

export { AllPhotosVariacoesController }
import { Request, Response } from 'express';
import { AllVariacoesService } from '../../services/variacao/AllVariacoesService';

class AllVariacoesController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id as string;
        
        const listVariacoes = new AllVariacoesService();

        const variacoess = await listVariacoes.execute({ variacao_id });

        return res.json(variacoess);
    }
}

export { AllVariacoesController }
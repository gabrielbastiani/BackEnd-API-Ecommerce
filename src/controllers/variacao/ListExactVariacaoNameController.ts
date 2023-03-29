import { Request, Response } from 'express';
import { ListExactVariacaoNameService } from '../../services/variacao/ListExactVariacaoNameService';

class ListExactVariacaoNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const listExactVariacao = new ListExactVariacaoNameService();
        const variacao = await listExactVariacao.execute({ slug });

        return res.json(variacao);
    }
}

export { ListExactVariacaoNameController }
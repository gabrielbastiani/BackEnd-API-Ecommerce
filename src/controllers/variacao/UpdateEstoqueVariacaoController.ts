import { Request, Response } from 'express';
import { UpdateEstoqueVariacaoService } from '../../services/variacao/UpdateEstoqueVariacaoService';

class UpdateEstoqueVariacaoController {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { estoqueVariacao } = req.body;

    const updateEstoqueVariacaoService = new UpdateEstoqueVariacaoService();

    const variacao = await updateEstoqueVariacaoService.execute({
      variacao_id,
      estoqueVariacao,
    });

    return res.json(variacao);
    
  }
}

export { UpdateEstoqueVariacaoController }
import { Request, Response } from 'express'
import { CreateVariacaoService } from '../../services/variacao/CreateVariacaoService'

class CreateVariacaoController {
  async handle(req: Request, res: Response){
    const { nameVariacao, urlProduct, product_id } = req.body;

    const createVariacaoService = new CreateVariacaoService();

    const variacoes = await createVariacaoService.execute({
      nameVariacao, product_id, urlProduct
    });

    return res.json(variacoes);

  }
}

export { CreateVariacaoController }
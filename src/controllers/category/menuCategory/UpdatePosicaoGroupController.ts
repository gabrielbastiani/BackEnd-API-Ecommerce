import { Request, Response } from 'express';
import { UpdatePosicaoGroupService } from '../../../services/category/groupCategory/UpdatePosicaoGroupService';

class UpdatePosicaoGroupController {
  async handle(req: Request, res: Response) {
    const groupCategoy_id = req.query.groupCategoy_id as string;

    const { posicao, slugPosicao } = req.body;

    const updatePosicao = new UpdatePosicaoGroupService();

    const group = await updatePosicao.execute({
      groupCategoy_id,
      posicao,
      slugPosicao
    });

    return res.json(group);
    
  }
}

export { UpdatePosicaoGroupController }
import { Request, Response } from 'express';
import { UpdateDescriptionVariacao3Service } from '../../services/variacao/UpdateDescriptionVariacao3Service';

class UpdateDescriptionVariacao3Controller {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao3 } = req.body;

    const updateDescriptionVariacao3Service = new UpdateDescriptionVariacao3Service();

    const variacao = await updateDescriptionVariacao3Service.execute({
      variacao_id,
      descriptionVariacao3,
    });

    return res.json(variacao);
    
  }
}

export { UpdateDescriptionVariacao3Controller }
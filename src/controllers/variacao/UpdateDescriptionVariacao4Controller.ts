import { Request, Response } from 'express';
import { UpdateDescriptionVariacao4Service } from '../../services/variacao/UpdateDescriptionVariacao4Service';

class UpdateDescriptionVariacao4Controller {
  async handle(req: Request, res: Response) {
    const variacao_id = req.query.variacao_id;

    const { descriptionVariacao4 } = req.body;

    const updateDescriptionVariacao4Service = new UpdateDescriptionVariacao4Service();

    const variacao = await updateDescriptionVariacao4Service.execute({
      variacao_id,
      descriptionVariacao4,
    });

    return res.json(variacao);
    
  }
}

export { UpdateDescriptionVariacao4Controller }
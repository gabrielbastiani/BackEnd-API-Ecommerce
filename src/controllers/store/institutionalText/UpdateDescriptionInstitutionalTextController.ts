import { Request, Response } from 'express';
import { UpdateDescriptionInstitutionalTextService } from '../../../services/store/institutionalText/UpdateDescriptionInstitutionalTextService';

class UpdateDescriptionInstitutionalTextController {
  async handle(req: Request, res: Response) {
    const institutionalText_id = req.query.institutionalText_id as string;

    const { description } = req.body;

    const updateDescription = new UpdateDescriptionInstitutionalTextService();

    const text = await updateDescription.execute({
      institutionalText_id,
      description
    });

    return res.json(text);

  }
}

export { UpdateDescriptionInstitutionalTextController }
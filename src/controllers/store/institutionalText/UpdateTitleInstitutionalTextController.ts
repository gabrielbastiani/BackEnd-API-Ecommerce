import { Request, Response } from 'express';
import { UpdateTitleInstitutionalTextService } from '../../../services/store/institutionalText/UpdateTitleInstitutionalTextService';

class UpdateTitleInstitutionalTextController {
  async handle(req: Request, res: Response) {
    const institutionalText_id = req.query.institutionalText_id as string;

    const { title } = req.body;

    const updateTitle = new UpdateTitleInstitutionalTextService();

    const text = await updateTitle.execute({
      institutionalText_id,
      title
    });

    return res.json(text);

  }
}

export { UpdateTitleInstitutionalTextController }
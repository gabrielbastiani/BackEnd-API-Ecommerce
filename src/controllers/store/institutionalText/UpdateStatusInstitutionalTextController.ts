import { Request, Response } from 'express';
import { UpdateStatusInstitutionalTextService } from '../../../services/store/institutionalText/UpdateStatusInstitutionalTextService';

class UpdateStatusInstitutionalTextController {
  async handle(req: Request, res: Response) {
    const institutionalText_id = req.query.institutionalText_id as string;

    const updateText = new UpdateStatusInstitutionalTextService();

    const textUpdate = await updateText.execute({
      institutionalText_id
    });

    return res.json(textUpdate);

  }
}

export { UpdateStatusInstitutionalTextController }
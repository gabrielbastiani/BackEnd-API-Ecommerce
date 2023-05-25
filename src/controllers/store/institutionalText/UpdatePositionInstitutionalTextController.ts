import { Request, Response } from 'express';
import { UpdatePositionInstitutionalTextService } from '../../../services/store/institutionalText/UpdatePositionInstitutionalTextService';

class UpdatePositionInstitutionalTextController {
  async handle(req: Request, res: Response) {
    const institutionalText_id = req.query.institutionalText_id as string;

    const { position, slugPosition } = req.body;

    const updatePosition = new UpdatePositionInstitutionalTextService();

    const text = await updatePosition.execute({
      institutionalText_id,
      position,
      slugPosition
    });

    return res.json(text);

  }
}

export { UpdatePositionInstitutionalTextController }
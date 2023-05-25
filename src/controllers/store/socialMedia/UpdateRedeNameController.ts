import { Request, Response } from 'express';
import { UpdateRedeNameService } from '../../../services/store/socialMedia/UpdateRedeNameService';

class UpdateRedeNameController {
  async handle(req: Request, res: Response) {
    const redesocial_id = req.query.redesocial_id;

    const { redeName } = req.body;

    const updateName = new UpdateRedeNameService();

    const store = await updateName.execute({
      redesocial_id,
      redeName
    });

    return res.json(store);

  }
}

export { UpdateRedeNameController }
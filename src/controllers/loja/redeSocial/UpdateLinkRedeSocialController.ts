import { Request, Response } from 'express';
import { UpdateLinkRedeSocialService } from '../../../services/loja/redeSocial/UpdateLinkRedeSocialService';

class UpdateLinkRedeSocialController {
  async handle(req: Request, res: Response) {
    const redesocial_id = req.query.redesocial_id;

    const { link } = req.body;

    const updateLink = new UpdateLinkRedeSocialService();

    const loja = await updateLink.execute({
      redesocial_id,
      link
    });

    return res.json(loja);

  }
}

export { UpdateLinkRedeSocialController }
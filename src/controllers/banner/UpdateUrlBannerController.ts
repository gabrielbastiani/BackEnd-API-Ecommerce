import { Request, Response } from 'express';
import { UpdateUrlBannerService } from '../../services/banners/UpdateUrlBannerService';

class UpdateUrlBannerController {
  async handle(req: Request, res: Response) {
    const banner_id = req.query.banner_id;

    const { url } = req.body;

    const updateUrl = new UpdateUrlBannerService();

    const urlUpdate = await updateUrl.execute({
      banner_id,
      url,
    });

    return res.json(urlUpdate);
    
  }
}

export { UpdateUrlBannerController }
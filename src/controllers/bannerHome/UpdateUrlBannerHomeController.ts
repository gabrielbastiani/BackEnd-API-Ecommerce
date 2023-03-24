import { Request, Response } from 'express';
import { UpdateUrlBannerHomeService } from '../../services/bannerHome/UpdateUrlBannerHomeService';

class UpdateUrlBannerHomeController {
  async handle(req: Request, res: Response) {
    const bannerHome_id = req.query.bannerHome_id;

    const { url } = req.body;

    const updateUrl = new UpdateUrlBannerHomeService();

    const urlUpdate = await updateUrl.execute({
      bannerHome_id,
      url,
    });

    return res.json(urlUpdate);
    
  }
}

export { UpdateUrlBannerHomeController }
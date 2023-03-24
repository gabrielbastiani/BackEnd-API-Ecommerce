import { Request, Response } from 'express';
import { UpdateUrlBannerInPageService } from '../../services/bannerInPage/UpdateUrlBannerInPageService';

class UpdateUrlBannerInPageController {
  async handle(req: Request, res: Response) {
    const bannerInPage_id = req.query.bannerInPage_id;

    const { url } = req.body;

    const updateUrl = new UpdateUrlBannerInPageService();

    const urlUpdate = await updateUrl.execute({
      bannerInPage_id,
      url,
    });

    return res.json(urlUpdate);
    
  }
}

export { UpdateUrlBannerInPageController }
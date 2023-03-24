import { Request, Response } from 'express';
import { UpdateUrlBannerMosaicoService } from '../../services/bannerMosaico/UpdateUrlBannerMosaicoService';

class UpdateUrlBannerMosaicoController {
  async handle(req: Request, res: Response) {
    const bannerMosaico_id = req.query.bannerMosaico_id;

    const { url } = req.body;

    const updateUrl = new UpdateUrlBannerMosaicoService();

    const urlUpdate = await updateUrl.execute({
      bannerMosaico_id,
      url,
    });

    return res.json(urlUpdate);
    
  }
}

export { UpdateUrlBannerMosaicoController }
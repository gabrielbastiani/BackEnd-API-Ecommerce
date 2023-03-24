import { Request, Response } from 'express';
import { DeleteBannerHomeService } from '../../services/bannerHome/DeleteBannerHomeService';
import { RemoveBannerHomeService } from '../../services/bannerHome/RemoveBannerHomeService';
import fs from 'fs';

class DeleteBannerHomeController {
  async handle(req: Request, res: Response) {
    const bannerHome_id = req.query.bannerHome_id as string;

    const updatePhoto = new DeleteBannerHomeService();
    const deletePhoto = new RemoveBannerHomeService();

    const homeBanner = await deletePhoto.execute({
      bannerHome_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + homeBanner.banner);

    const updateBanner = await updatePhoto.execute({
      bannerHome_id,
    });

    return res.json([homeBanner, updateBanner]);

  }
}

export { DeleteBannerHomeController }
import { Request, Response } from 'express';
import { DeleteBannerInPageService } from '../../services/bannerInPage/DeleteBannerInPageService';
import { RemoveBannerInPageService } from '../../services/bannerInPage/RemoveBannerInPageService';
import fs from 'fs';

class DeleteBannerInPageController {
  async handle(req: Request, res: Response) {
    const bannerInPage_id = req.query.bannerInPage_id as string;

    const updatePhoto = new DeleteBannerInPageService();
    const deletePhoto = new RemoveBannerInPageService();

    const pageBanner = await deletePhoto.execute({
      bannerInPage_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + pageBanner.bannerPage);

    const updateBanner = await updatePhoto.execute({
      bannerInPage_id,
    });

    return res.json([pageBanner, updateBanner]);

  }
}

export { DeleteBannerInPageController }
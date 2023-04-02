import { Request, Response } from 'express';
import { DeleteBannerService } from '../../services/banners/DeleteBannerService';
import { RemoveBannerService } from '../../services/banners/RemoveBannerService';
import fs from 'fs';

class DeleteBannerController {
  async handle(req: Request, res: Response) {
    const banner_id = req.query.banner_id as string;

    const updatePhoto = new DeleteBannerService();
    const deletePhoto = new RemoveBannerService();

    const banners = await deletePhoto.execute({
      banner_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + banners.banner);

    const updateBanner = await updatePhoto.execute({
      banner_id,
    });

    return res.json([banners, updateBanner]);

  }
}

export { DeleteBannerController }
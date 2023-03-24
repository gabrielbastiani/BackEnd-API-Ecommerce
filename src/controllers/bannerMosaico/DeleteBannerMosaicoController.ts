import { Request, Response } from 'express';
import { DeleteBannerMosaicoService } from '../../services/bannerMosaico/DeleteBannerMosaicoService';
import { RemoveBannerMosaicoService } from '../../services/bannerMosaico/RemoveBannerMosaicoService';
import fs from 'fs';

class DeleteBannerMosaicoController {
  async handle(req: Request, res: Response) {
    const bannerMosaico_id = req.query.bannerMosaico_id as string;

    const updatePhoto = new DeleteBannerMosaicoService();
    const deletePhoto = new RemoveBannerMosaicoService();

    const mosaicoBanners = await deletePhoto.execute({
      bannerMosaico_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + mosaicoBanners.bannerMosaico);

    const updateBanner = await updatePhoto.execute({
      bannerMosaico_id,
    });

    return res.json([mosaicoBanners, updateBanner]);

  }
}

export { DeleteBannerMosaicoController }
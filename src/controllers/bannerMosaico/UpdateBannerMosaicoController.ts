import { Request, Response } from 'express';
import { UpdateBannerMosaicoService } from '../../services/bannerMosaico/UpdateBannerMosaicoService';
import { RemoveBannerMosaicoService } from '../../services/bannerMosaico/RemoveBannerMosaicoService';
import fs from 'fs';

class UpdateBannerMosaicoController {
    async handle(req: Request, res: Response) {
        const bannerMosaico_id = req.query.bannerMosaico_id as string;

        const updatePhoto = new UpdateBannerMosaicoService();
        const deletePhoto = new RemoveBannerMosaicoService();

        const mosaicoBanners = await deletePhoto.execute({
            bannerMosaico_id
        })

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + mosaicoBanners.bannerMosaico);

        if (!req.file) {
            throw new Error('error upload file')
        } else {
            const { originalname, filename: bannerMosaico } = req.file;

            const updateBanner = await updatePhoto.execute({
                bannerMosaico_id,
                bannerMosaico,
            });

            return res.json([mosaicoBanners, updateBanner]);

        }

    }
}

export { UpdateBannerMosaicoController }
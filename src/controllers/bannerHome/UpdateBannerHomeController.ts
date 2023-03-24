import { Request, Response } from 'express';
import { UpdateBannerHomeService } from '../../services/bannerHome/UpdateBannerHomeService';
import { RemoveBannerHomeService } from '../../services/bannerHome/RemoveBannerHomeService';
import fs from 'fs';

class UpdateBannerHomeController {
    async handle(req: Request, res: Response) {
        const bannerHome_id = req.query.bannerHome_id as string;

        const updatePhoto = new UpdateBannerHomeService();
        const deletePhoto = new RemoveBannerHomeService();

        const homeBanner = await deletePhoto.execute({
            bannerHome_id
        })

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + homeBanner.banner);

        if (!req.file) {
            throw new Error('error upload file')
        } else {
            const { originalname, filename: banner } = req.file;

            const updateBanner = await updatePhoto.execute({
                bannerHome_id,
                banner,
            });

            return res.json([homeBanner, updateBanner]);

        }

    }
}

export { UpdateBannerHomeController }
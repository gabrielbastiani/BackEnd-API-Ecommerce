import { Request, Response } from 'express';
import { UpdateBannerInPageService } from '../../services/bannerInPage/UpdateBannerInPageService';
import { RemoveBannerInPageService } from '../../services/bannerInPage/RemoveBannerInPageService';
import fs from 'fs';

class UpdateBannerInPageController {
    async handle(req: Request, res: Response) {
        const bannerInPage_id = req.query.bannerInPage_id as string;

        const updatePhoto = new UpdateBannerInPageService();
        const deletePhoto = new RemoveBannerInPageService();

        const inPageBanners = await deletePhoto.execute({
            bannerInPage_id
        })

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + inPageBanners.bannerPage);

        if (!req.file) {
            throw new Error('error upload file')
        } else {
            const { originalname, filename: bannerPage } = req.file;

            const updateBanner = await updatePhoto.execute({
                bannerInPage_id,
                bannerPage,
            });

            return res.json([inPageBanners, updateBanner]);

        }

    }
}

export { UpdateBannerInPageController }
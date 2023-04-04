import { Request, Response } from 'express';
import { UpdateBannerService } from '../../services/banners/UpdateBannerService';
import { ListExactBannerService } from '../../services/banners/ListExactBannerService';
import fs from 'fs';

class UpdateBannerController {
    async handle(req: Request, res: Response) {
        const banner_id = req.query.banner_id as string;

        const updatePhoto = new UpdateBannerService();
        const deletePhoto = new ListExactBannerService();

        const banners = await deletePhoto.execute({
            banner_id
        })

        fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + banners.banner);

        if (!req.file) {
            throw new Error('error upload file')
        } else {
            const { originalname, filename: banner } = req.file;

            const updateBanner = await updatePhoto.execute({
                banner_id,
                banner,
            });

            return res.json([banners, updateBanner]);

        }

    }
}

export { UpdateBannerController }
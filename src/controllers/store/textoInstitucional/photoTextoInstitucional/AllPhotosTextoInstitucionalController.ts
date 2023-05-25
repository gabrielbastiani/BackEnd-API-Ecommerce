import { Request, Response } from 'express';
import { AllPhotosTextoInstitucionalService } from '../../../../services/store/textoInstitucional/photoTextoInstitucional/AllPhotosTextoInstitucionalService';

class AllPhotosTextoInstitucionalController {
    async handle(req: Request, res: Response) {

        const listAllPhotos = new AllPhotosTextoInstitucionalService();

        const imagesText = await listAllPhotos.execute();

        return res.json(imagesText);
    }
}

export { AllPhotosTextoInstitucionalController }
import { Request, Response } from "express";
import { DeleteAllPhotoTextosService } from "../../../../services/store/textoInstitucional/photoTextoInstitucional/DeleteAllPhotoTextosService";
import { AllPhotosTextosService } from "../../../../services/store/textoInstitucional/photoTextoInstitucional/AllPhotosTextosService";
import fs from 'fs';

class DeleteAllPhotoTextosController {
  async handle(req: Request, res: Response) {
    const textoinstitucional_id = req.query.textoinstitucional_id as string;

    const photosGet = new AllPhotosTextosService();
    const arrayPhotos = await photosGet.execute({ textoinstitucional_id });

    arrayPhotos.forEach(element => {
      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.image);
    });

    const deletePhotosTextos = new DeleteAllPhotoTextosService();

    const tetosPhotos = await deletePhotosTextos.execute({
      textoinstitucional_id,
    });

    return res.json([tetosPhotos, arrayPhotos]);
  }
}

export { DeleteAllPhotoTextosController };
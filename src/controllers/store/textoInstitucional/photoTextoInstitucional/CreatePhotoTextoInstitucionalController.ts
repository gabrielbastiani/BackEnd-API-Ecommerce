import { Request, Response } from "express";
import { CreatePhotoTextoInstitucionalService } from "../../../../services/store/textoInstitucional/photoTextoInstitucional/CreatePhotoTextoInstitucionalService";

class CreatePhotoTextoInstitucionalController {
    async handle(req: Request, res: Response) {
        const { textoinstitucional_id, titleImage, order, posicao, slugPosicao, someImage } = req.body;

        const photoTexto = new CreatePhotoTextoInstitucionalService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: image } = req.file;

            const textoPhoto = await photoTexto.execute({
                image,
                textoinstitucional_id,
                titleImage,
                order,
                posicao,
                slugPosicao,
                someImage
            })
            return res.json(textoPhoto)
        }

    }
}

export { CreatePhotoTextoInstitucionalController }
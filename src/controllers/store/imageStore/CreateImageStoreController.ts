import { Request, Response } from "express";
import { CreateImageStoreService } from "../../../services/store/imageStore/CreateImageStoreService";

class CreateImageStoreController {
    async handle(req: Request, res: Response) {
        const { titleImage, order, position, slugPosition } = req.body;

        const images = new CreateImageStoreService();

        if (!req.file) {
            throw new Error("error upload file")
        } else {

            const { originalname, filename: image } = req.file;

            const imageStore = await images.execute({
                image,
                titleImage,
                order,
                position,
                slugPosition
            })
            return res.json(imageStore)
        }

    }
}

export { CreateImageStoreController }
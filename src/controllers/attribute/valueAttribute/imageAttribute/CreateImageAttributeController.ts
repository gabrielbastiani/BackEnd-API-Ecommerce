import { Request, Response } from "express";
import { CreateImageAttributeService } from "../../../../services/attribute/valueAttribute/imageAttribute/CreateImageAttributeService";

class CreateImageAttributeController {
    async handle(req: Request, res: Response) {
        const { valueAttribute_id } = req.body;

        const attribute = new CreateImageAttributeService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: image } = req.file;

            const createImage = await attribute.execute({
                image,
                valueAttribute_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageAttributeController }
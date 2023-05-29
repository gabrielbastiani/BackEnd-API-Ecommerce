import { Request, Response } from "express";
import { CreateImageFilterAttributeService } from "../../../../services/groupFilter/filterAttribute/imageFilterAtributo/CreateImageFilterAttributeService";

class CreateImageFilterAttributeController {
    async handle(req: Request, res: Response) {
        const { filterAttribute_id } = req.body;

        const imageAtributes = new CreateImageFilterAttributeService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: imageAttribute } = req.file;

            const createImage = await imageAtributes.execute({
                imageAttribute,
                filterAttribute_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageFilterAttributeController }
import { Request, Response } from "express";
import { CreateImageAtributoService } from "../../../services/atributo/imageAtributo/CreateImageAtributoService";

class CreateImageAtributoController {
    async handle(req: Request, res: Response) {
        const { atributo_id } = req.body;

        const imageAtribute = new CreateImageAtributoService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: imageAtributo } = req.file;

            const createImage = await imageAtribute.execute({
                imageAtributo,
                atributo_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageAtributoController }
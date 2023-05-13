import { Request, Response } from "express";
import { CreateImageFiltroAtributoService } from "../../../../services/filtros/atributoFilter/imagesFilterAtributos/CreateImageFiltroAtributoService";

class CreateImageFiltroAtributoController {
    async handle(req: Request, res: Response) {
        const { filterAtributo_id } = req.body;

        const imageAtribute = new CreateImageFiltroAtributoService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: imageAtributo } = req.file;

            const createImage = await imageAtribute.execute({
                imageAtributo,
                filterAtributo_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageFiltroAtributoController }
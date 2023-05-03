import { Request, Response } from "express";
import { CreateImageFiltroAtributoGroupService } from "../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/CreateImageFiltroAtributoGroupService";

class CreateImageFiltroAtributoGroupController {
    async handle(req: Request, res: Response) {
        const { groupFilterAtributo_id } = req.body;

        const imagesFitros = new CreateImageFiltroAtributoGroupService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: imageAtributo } = req.file;

            const createImage = await imagesFitros.execute({
                imageAtributo,
                groupFilterAtributo_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageFiltroAtributoGroupController }
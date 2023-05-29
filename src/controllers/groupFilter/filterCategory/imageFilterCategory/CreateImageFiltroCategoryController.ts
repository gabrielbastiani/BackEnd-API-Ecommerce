import { Request, Response } from "express";
import { CreateImageFiltroCategoryService } from "../../../../services/filtros/categoryFilter/imagesFilterCategory/CreateImageFiltroCategoryService";

class CreateImageFiltroCategoryController {
    async handle(req: Request, res: Response) {
        const { filterCategory_id } = req.body;

        const imageCategorys = new CreateImageFiltroCategoryService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: imageCategory } = req.file;

            const createImage = await imageCategorys.execute({
                imageCategory,
                filterCategory_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageFiltroCategoryController }
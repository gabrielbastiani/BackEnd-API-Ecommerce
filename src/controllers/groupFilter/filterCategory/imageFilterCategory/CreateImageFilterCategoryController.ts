import { Request, Response } from "express";
import { CreateImageFilterCategoryService } from "../../../../services/groupFilter/filterCategory/imageFilterCategory/CreateImageFilterCategoryService";

class CreateImageFilterCategoryController {
    async handle(req: Request, res: Response) {
        const { filterCategory_id } = req.body;

        const imageCategorys = new CreateImageFilterCategoryService();

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

export { CreateImageFilterCategoryController }
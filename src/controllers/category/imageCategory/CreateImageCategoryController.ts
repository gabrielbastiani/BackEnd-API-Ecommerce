import { Request, Response } from "express";
import { CreateImageCategoryService } from "../../../services/category/imageCategory/CreateImageCategoryService";

class CreateImageCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = req.body;

        const imagesCategory = new CreateImageCategoryService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: image } = req.file;

            const createImage = await imagesCategory.execute({
                image,
                category_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageCategoryController }
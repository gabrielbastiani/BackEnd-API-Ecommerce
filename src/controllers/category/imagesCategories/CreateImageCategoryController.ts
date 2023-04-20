import { Request, Response } from "express";
import { CreateImageCategoryService } from "../../../services/category/imagesCategories/CreateImageCategoryService";

class CreateImageCategoryController {
    async handle(req: Request, res: Response) {
        const {
            title,
            slug,
            order,
            posicao,
            slugPosicao,
            category_id,
        } = req.body;

        const imagesCategory = new CreateImageCategoryService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: categoryImage } = req.file;

            const createImage = await imagesCategory.execute({
                title,
                slug,
                categoryImage,
                order,
                posicao,
                slugPosicao,
                category_id,
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageCategoryController }
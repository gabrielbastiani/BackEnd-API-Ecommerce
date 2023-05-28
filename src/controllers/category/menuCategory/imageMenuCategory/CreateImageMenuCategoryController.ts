import { Request, Response } from "express";
import { CreateImageMenuCategoryService } from "../../../../services/category/menuCategory/imageMenuCategory/CreateImageMenuCategoryService";

class CreateImageMenuCategoryController {
    async handle(req: Request, res: Response) {
        const { menuCategory_id } = req.body;

        const imagesCategory = new CreateImageMenuCategoryService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: image } = req.file;

            const createImage = await imagesCategory.execute({
                image,
                menuCategory_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageMenuCategoryController }
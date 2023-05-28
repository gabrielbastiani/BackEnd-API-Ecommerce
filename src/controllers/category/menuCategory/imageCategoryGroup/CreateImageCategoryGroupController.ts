import { Request, Response } from "express";
import { CreateImageCategoryGroupService } from "../../../../services/category/groupCategory/imageCategoryGroup/CreateImageCategoryGroupService";

class CreateImageCategoryGroupController {
    async handle(req: Request, res: Response) {
        const { groupCategoy_id } = req.body;

        const imagesCategory = new CreateImageCategoryGroupService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {

            const { originalname, filename: imageGroup } = req.file;

            const createImage = await imagesCategory.execute({
                imageGroup,
                groupCategoy_id
            });

            return res.json(createImage);

        }

    }
}

export { CreateImageCategoryGroupController }
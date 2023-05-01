import { Request, Response } from 'express';
import { UpdateNameAtributoService } from '../../../services/product/atributo/UpdateNameAtributoService';

class UpdateNameAtributoController {
    async handle(req: Request, res: Response) {
        const atributo_id = req.query.atributo_id as string;

        const { nameAtributo, slug } = req.body;

        const updateName = new UpdateNameAtributoService();

        const atributo = await updateName.execute({
            atributo_id,
            nameAtributo,
            slug
        });

        return res.json(atributo);

    }
}

export { UpdateNameAtributoController }
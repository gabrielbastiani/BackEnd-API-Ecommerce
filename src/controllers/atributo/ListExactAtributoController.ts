import { Request, Response } from 'express';
import { ListExactAtributosService } from '../../services/atributo/ListExactAtributosService';

class ListExactAtributoController {
    async handle(req: Request, res: Response) {
        const atributo_id = req.query.atributo_id as string;
        const listExactCategoryService = new ListExactAtributosService();
        const atributos = await listExactCategoryService.execute({ atributo_id });

        return res.json(atributos);
    }
}

export { ListExactAtributoController }
import { Request, Response } from 'express';
import { UpdateAtributoValorFiltroService } from '../../../services/filtros/atributoFilter/UpdateAtributoValorFiltroService';

class UpdateAtributoValorFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const { valor } = req.body;

        const updateValor = new UpdateAtributoValorFiltroService();

        const filtro = await updateValor.execute({
            filterAtributo_id,
            valor,
        });

        return res.json(filtro);

    }
}

export { UpdateAtributoValorFiltroController }
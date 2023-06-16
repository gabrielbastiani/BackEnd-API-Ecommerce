import { Request, Response } from 'express';
import { UpdateAllDateVariacaoService } from '../../services/variation/UpdateAllDateVariacaoService';

class UpdateAllDateVariacaoController {
    async handle(req: Request, res: Response) {
        const variacao_id = req.query.variacao_id;

        const {
            order,
            descriptionVariacao1,
            descriptionVariacao2,
            descriptionVariacao3,
            descriptionVariacao4,
            descriptionVariacao5,
            descriptionVariacao6,
            preco,
            promocao,
            skuVariacao,
            estoqueVariacao,
            pesoKg,
            larguraCm,
            alturaCm,
            profundidadeCm,
            quantidade,
            product_id,
            store_id
        } = req.body;

        const updateVariacao = new UpdateAllDateVariacaoService();

        const variation = await updateVariacao.execute({
            variacao_id,
            order,
            descriptionVariacao1,
            descriptionVariacao2,
            descriptionVariacao3,
            descriptionVariacao4,
            descriptionVariacao5,
            descriptionVariacao6,
            preco,
            promocao,
            skuVariacao,
            estoqueVariacao,
            pesoKg,
            larguraCm,
            alturaCm,
            profundidadeCm,
            quantidade,
            product_id,
            store_id
        });

        return res.json(variation);

    }
}

export { UpdateAllDateVariacaoController }
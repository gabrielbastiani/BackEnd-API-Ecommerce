import { Request, Response } from "express";
import { CreateVariacaoService } from "../../services/variacao/CreateVariacaoService";

class CreateVariacaoController {
    async handle(req: Request, res: Response) {
        const {
            nameVariacao,
            descriptionVariacao1,
            descriptionVariacao2,
            descriptionVariacao3,
            descriptionVariacao4,
            descriptionVariacao5,
            descriptionVariacao6,
            preco,
            skuVariacao,
            estoqueVariacao,
            pesoKg,
            larguraCm,
            alturaCm,
            profundidadeCm,
            promocao,
            product_id,
            loja_id
        } = req.body;

        const createVariacaoService = new CreateVariacaoService();

        const variacao = await createVariacaoService.execute({
            nameVariacao,
            descriptionVariacao1,
            descriptionVariacao2,
            descriptionVariacao3,
            descriptionVariacao4,
            descriptionVariacao5,
            descriptionVariacao6,
            preco,
            skuVariacao,
            estoqueVariacao,
            pesoKg,
            larguraCm,
            alturaCm,
            profundidadeCm,
            promocao,
            product_id,
            loja_id
        })

        return res.json(variacao)

    }
}

export { CreateVariacaoController }
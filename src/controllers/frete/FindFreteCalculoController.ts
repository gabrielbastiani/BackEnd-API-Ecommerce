import { Request, Response } from "express";
import { FindFreteCalculoService } from "../../services/frete/FindFreteCalculoService";

class FindFreteCalculoController {
    async handle(req: Request, res: Response) {
        const {
            /* nCdServico, */
            sCepDestino,
            nVlPeso,
            /* nCdFormato, */
            nVlComprimento,
            nVlAltura,
            nVlLargura
        } = req.body;

        const fretes = new FindFreteCalculoService();

        const fretesCalculo = await fretes.execute({
            /* nCdServico, */
            sCepDestino,
            nVlPeso,
            /* nCdFormato, */
            nVlComprimento,
            nVlAltura,
            nVlLargura
        });

        return res.json(fretesCalculo);
    }
}

export { FindFreteCalculoController };
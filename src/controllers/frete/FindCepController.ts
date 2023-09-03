import { Request, Response } from "express";
import { FindCepService } from "../../services/frete/FindCepService";

class FindCepController {
    async handle(req: Request, res: Response) {
        const {
            cep,
        } = req.body;

        const cepFind = new FindCepService();

        const fretesCalculo = await cepFind.execute({
            cep
        });

        console.log(fretesCalculo)

        return res.json(fretesCalculo);
    }
}

export { FindCepController };
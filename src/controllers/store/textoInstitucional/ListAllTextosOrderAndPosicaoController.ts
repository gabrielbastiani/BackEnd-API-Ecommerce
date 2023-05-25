import { Request, Response } from "express";
import { ListAllTextosOrderAndPosicaoService } from "../../../services/store/textoInstitucional/ListAllTextosOrderAndPosicaoService";

class ListAllTextosOrderAndPosicaoController {
   async handle(req: Request, res: Response){

      const slugPosicao = req.query.slugPosicao as string;

      const listAllTextos = new ListAllTextosOrderAndPosicaoService();

      const textos = await listAllTextos.execute({ slugPosicao });

      return res.json(textos);
      
   }
}

export { ListAllTextosOrderAndPosicaoController }
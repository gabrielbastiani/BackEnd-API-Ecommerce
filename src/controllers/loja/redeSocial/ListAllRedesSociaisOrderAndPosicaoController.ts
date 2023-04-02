import { Request, Response } from "express";
import { ListAllRedesSociaisOrderAndPosicaoService } from "../../../services/loja/redeSocial/ListAllRedesSociaisOrderAndPosicaoService";

class ListAllRedesSociaisOrderAndPosicaoController {
   async handle(req: Request, res: Response){

      const posicao = req.query.posicao as string;

      const listOrderRedes = new ListAllRedesSociaisOrderAndPosicaoService();

      const redes = await listOrderRedes.execute({ posicao });

      return res.json(redes);
      
   }
}

export { ListAllRedesSociaisOrderAndPosicaoController }
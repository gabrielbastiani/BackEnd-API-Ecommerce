import { Request, Response } from "express";
import { ListAllRedesSociaisOrderAndPosicaoService } from "../../../services/loja/redeSocial/ListAllRedesSociaisOrderAndPosicaoService";

class ListAllRedesSociaisOrderAndPosicaoController {
   async handle(req: Request, res: Response){

      const slugPosicao = req.query.slugPosicao as string;

      const listOrderRedes = new ListAllRedesSociaisOrderAndPosicaoService();

      const redes = await listOrderRedes.execute({ slugPosicao });

      return res.json(redes);
      
   }
}

export { ListAllRedesSociaisOrderAndPosicaoController }
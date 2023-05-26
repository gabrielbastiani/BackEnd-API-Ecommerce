import { Request, Response } from "express";
import { ListAtributosService } from "../../services/atributo/ListAtributosService";

class ListAtributosController {
   async handle(req: Request, res: Response){
      const listAtributos = new ListAtributosService();

      const atributos = await listAtributos.execute();

      return res.json(atributos);
      
   }
}

export { ListAtributosController }
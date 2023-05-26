import { Request, Response } from "express";
import { ListNotDistinctAtributosService } from "../../services/atributo/ListNotDistinctAtributosService";

class ListNotDistinctAtributosController {
   async handle(req: Request, res: Response){
      const listAtributos = new ListNotDistinctAtributosService();

      const atributos = await listAtributos.execute();

      return res.json(atributos);
      
   }
}

export { ListNotDistinctAtributosController }
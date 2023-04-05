import { Request, Response } from "express";
import { ListAllTextosService } from "../../../services/loja/textoInstitucional/ListAllTextosService";

class ListAllTextosController {
   async handle(req: Request, res: Response){

      const listAllTextos = new ListAllTextosService();

      const textos = await listAllTextos.execute();

      return res.json(textos);
      
   }
}

export { ListAllTextosController }
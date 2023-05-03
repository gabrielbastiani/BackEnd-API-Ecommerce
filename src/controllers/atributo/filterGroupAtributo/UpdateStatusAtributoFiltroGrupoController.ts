import { Request, Response } from 'express';
import { UpdateStatusAtributoFiltroGrupoService } from '../../../services/atributo/filterGroupAtributo/UpdateStatusAtributoFiltroGrupoService';

class UpdateStatusAtributoFiltroGrupoController {
  async handle(req: Request, res: Response) {
    const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

    const updateStatus = new UpdateStatusAtributoFiltroGrupoService();

    const atributo = await updateStatus.execute({
      groupFilterAtributo_id
    });

    return res.json(atributo);

  }
}

export { UpdateStatusAtributoFiltroGrupoController }
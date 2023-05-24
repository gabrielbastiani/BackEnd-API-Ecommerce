import { Request, Response } from 'express';
import { UpdateAllDateUserService } from '../../services/user/UpdateAllDateUserService';

class UpdateAllDateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const {
      email,
      cpf,
      cnpj,
      inscricaoEstadual,
      phone,
      dataNascimento,
      genero,
      local,
      numero,
      complemento,
      bairro,
      CEP,
      cidade,
      estado,
      store_id
    } = req.body;

    const updateAllDateUser = new UpdateAllDateUserService();

    const updateUser = await updateAllDateUser.execute({
      user_id,
      email,
      cpf,
      cnpj,
      inscricaoEstadual,
      phone,
      dataNascimento,
      genero,
      local,
      numero,
      complemento,
      bairro,
      CEP,
      cidade,
      estado,
      store_id,
    });

    return res.json(updateUser);

  }
}

export { UpdateAllDateUserController }
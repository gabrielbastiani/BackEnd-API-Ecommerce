import { Request, Response } from 'express';
import { UpdateAllDateUserService } from '../../services/user/UpdateAllDateUserService';

class UpdateAllDateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { email } = req.body;
    const { cpf } = req.body;
    const { cnpj } = req.body;
    const { inscricaoEstadual } = req.body;
    const { phone } = req.body;
    const { dataNascimento } = req.body;
    const { genero } = req.body;
    const { local } = req.body;
    const { numero } = req.body;
    const { complemento } = req.body;
    const { bairro } = req.body;
    const { CEP } = req.body;
    const { cidade } = req.body;
    const { estado } = req.body;
    const { loja_id } = req.body;
    

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
      loja_id,
    });

    return res.json(updateUser);

  }
}

export { UpdateAllDateUserController }
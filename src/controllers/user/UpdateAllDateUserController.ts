import { Request, Response } from 'express';
import { UpdateAllDateUserService } from '../../services/user/UpdateAllDateUserService';

class UpdateAllDateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { userName } = req.body;
    const { userEmail } = req.body;
    const { userCpf } = req.body;
    const { userRole } = req.body;
    const { userCpnj } = req.body;
    const { userInscricaoEstadual } = req.body;
    const { userPhone } = req.body;
    const { userDataNascimento } = req.body;
    const { userGenero } = req.body;
    const { userLocal } = req.body;
    const { userNumero } = req.body;
    const { userComplemento } = req.body;
    const { userBairro } = req.body;
    const { userCep } = req.body;
    const { userCidade } = req.body;
    const { userEstado } = req.body;
    const { userLoja } = req.body;
    const { userAuth } = req.body;

    const updateAllDateUser = new UpdateAllDateUserService();

    const updateUser = await updateAllDateUser.execute({
      user_id,
      userName,
      userEmail,
      userCpf,
      userRole,
      userCpnj,
      userInscricaoEstadual,
      userPhone,
      userDataNascimento,
      userGenero,
      userLocal,
      userNumero,
      userComplemento,
      userBairro,
      userCep,
      userCidade,
      userEstado,
      userLoja,
      userAuth
    });

    return res.json(updateUser);

  }
}

export { UpdateAllDateUserController }
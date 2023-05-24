import { Request, Response } from "express";
import { PasswordRecoveryAdminSevice } from "../../../../services/users/admin/PasswordRecoveryAdmin/PasswordRecoveryAdminSevice";

class RecoveryPasswordAdminController {
  async handle(req: Request, res: Response) {
    const passwordRecoveryAdmin_id = req.query.passwordRecoveryAdmin_id as string;

    const { password } = req.body;

    const passwordRecovery = new PasswordRecoveryAdminSevice();

    const recoveryPassword = await passwordRecovery.execute({
      passwordRecoveryAdmin_id,
      password,
    });

    return res.json(recoveryPassword)
  }

}


export { RecoveryPasswordAdminController };
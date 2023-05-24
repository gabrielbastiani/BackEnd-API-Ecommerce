import { Request, Response } from "express";
import { PasswordRecovery } from "../../../services/user/PasswordRecovery/PasswordRecovery";


class RecoveryPasswordController {
  async handle(req: Request, res: Response) {
    const recovery_id = req.query.recovery_id as string;

    const { password } = req.body;

    const passwordRecovery = new PasswordRecovery();

    const recoveryPassword = await passwordRecovery.execute({
      recovery_id,
      password,
    });

    return res.json(recoveryPassword)
  }

}


export { RecoveryPasswordController };
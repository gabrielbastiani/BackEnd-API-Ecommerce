import { Request, Response } from "express";
import { RequestPasswordAdminRecovery } from "../../../../services/users/admin/passwordRecoveryAdmin/RequestPasswordAdminRecovery";


class EmailPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const requestPasswordRecovery = new RequestPasswordAdminRecovery();

    const admin = await requestPasswordRecovery.execute({
      email,
    });

    return res.json(admin)
  }
}


export { EmailPasswordController };
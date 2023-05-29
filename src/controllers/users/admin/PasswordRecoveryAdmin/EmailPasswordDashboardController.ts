import { Request, Response } from "express";
import { RequestPasswordAdminDashboardRecovery } from "../../../../services/users/admin/PasswordRecoveryAdmin/RequestPasswordAdminDashboardRecovery";


class EmailPasswordDashboardController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const requestPasswordDashboardRecovery = new RequestPasswordAdminDashboardRecovery();

    const userRecovery = await requestPasswordDashboardRecovery.execute({
      email,
    });

    return res.json(userRecovery)
  }
}


export { EmailPasswordDashboardController };
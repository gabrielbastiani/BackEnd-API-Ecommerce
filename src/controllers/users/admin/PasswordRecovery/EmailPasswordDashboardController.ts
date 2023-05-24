import { Request, Response } from "express";
import { RequestPasswordDashboardRecovery } from "../../../services/user/PasswordRecovery/RequestPasswordDashboardRecovery";


class EmailPasswordDashboardController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const requestPasswordDashboardRecovery = new RequestPasswordDashboardRecovery();

    const userRecovery = await requestPasswordDashboardRecovery.execute({
      email,
    });

    return res.json(userRecovery)
  }
}


export { EmailPasswordDashboardController };
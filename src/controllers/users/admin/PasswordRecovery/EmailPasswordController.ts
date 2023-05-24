import { Request, Response } from "express";
import { RequestPasswordRecovery } from "../../../services/user/PasswordRecovery/RequestPasswordRecovery";


class EmailPasswordController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const requestPasswordRecovery = new RequestPasswordRecovery();

    const user = await requestPasswordRecovery.execute({
      email,
    });

    return res.json(user)
  }
}


export { EmailPasswordController };
import { Request, Response } from "express";
import { FindRecoveryIDService } from "../../../services/user/PasswordRecovery/FindRecoveryIDService";


class FindRecoveryIDController {
  async handle(req: Request, res: Response) {

    const findRecoveryIDService = new FindRecoveryIDService();

    const recoveryPassword = await findRecoveryIDService.execute();

    return res.json(recoveryPassword)
  }

}


export { FindRecoveryIDController };
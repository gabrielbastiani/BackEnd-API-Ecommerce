import { Request, Response } from "express";
import { FindAdminRecoveryIDService } from "../../../../services/users/admin/passwordRecoveryAdmin/FindAdminRecoveryIDService";

class FindAdminRecoveryIDController {
  async handle(req: Request, res: Response) {

    const findRecoveryIDService = new FindAdminRecoveryIDService();

    const recoveryPassword = await findRecoveryIDService.execute();

    return res.json(recoveryPassword)
  }

}


export { FindAdminRecoveryIDController }
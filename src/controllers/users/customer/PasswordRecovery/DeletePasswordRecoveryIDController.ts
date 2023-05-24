import { Request, Response } from "express";
import { DeletePasswordRecoveryIDService } from "../../../services/user/PasswordRecovery/DeletePasswordRecoveryIDService";


class DeletePasswordRecoveryIDController {
  async handle(req: Request, res: Response) {
    const recovery_id = req.query.recovery_id as string;

    const deletePasswordRecoveryIDService = new DeletePasswordRecoveryIDService();

    const userRecovery = await deletePasswordRecoveryIDService.execute({
      recovery_id
    });

    return res.json(userRecovery)
  }
}


export { DeletePasswordRecoveryIDController };
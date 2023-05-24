import { Request, Response } from "express";
import { DeleteAdminPasswordRecoveryIDService } from "../../../../services/users/admin/PasswordRecoveryAdmin/DeleteAdminPasswordRecoveryIDService";

class DeleteAdminPasswordRecoveryIDController {
  async handle(req: Request, res: Response) {
    const passwordRecoveryAdmin_id = req.query.passwordRecoveryAdmin_id as string;

    const deletePasswordRecoveryIDService = new DeleteAdminPasswordRecoveryIDService();

    const adminRecovery = await deletePasswordRecoveryIDService.execute({
      passwordRecoveryAdmin_id
    });

    return res.json(adminRecovery)
  }
}


export { DeleteAdminPasswordRecoveryIDController };
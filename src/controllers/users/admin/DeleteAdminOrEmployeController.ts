import { Request, Response } from "express";
import { DeleteAdminOrEmployeService } from "../../../services/users/admin/DeleteAdminOrEmployeService";

class DeleteAdminOrEmployeController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const deleteAdmin = new DeleteAdminOrEmployeService();

    const adminDelete = await deleteAdmin.execute({
      admin_id,
    });

    return res.json(adminDelete);
  }
}

export { DeleteAdminOrEmployeController };
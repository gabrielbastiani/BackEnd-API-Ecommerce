import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const deleteUserService = new DeleteUserService();

    const deleteUser = await deleteUserService.execute({
      admin_id,
    });

    return res.json(deleteUser);
  }
}

export { DeleteUserController };
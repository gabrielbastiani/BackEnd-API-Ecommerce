import { Request, Response } from 'express';
import { UpdateAllDateAdminService } from '../../../services/users/admin/UpdateAllDateAdminService';

class UpdateAllDateAdminController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const { email, store_id } = req.body;

    const updateAdmins = new UpdateAllDateAdminService();

    const update = await updateAdmins.execute({
      admin_id,
      email,
      store_id,
    });

    return res.json(update);

  }
}

export { UpdateAllDateAdminController }
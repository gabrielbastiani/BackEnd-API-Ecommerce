import { Request, Response } from 'express';
import { AdminUpdateNameService } from '../../../services/users/admin/AdminUpdateNameService';

class AdminUpdateNameController {
  async handle(req: Request, res: Response) {
    const admin_id = req.query.admin_id as string;

    const { name, slug } = req.body;

    const updateName = new AdminUpdateNameService();

    const updated = await updateName.execute({
      admin_id,
      name,
      slug
    });
    return res.json(updated);
  }
}

export { AdminUpdateNameController }
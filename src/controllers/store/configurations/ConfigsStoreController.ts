import { Request, Response } from 'express';
import { ConfigsStoreService } from '../../../services/store/configurations/ConfigsStoreService';

class ConfigsStoreController {
  async handle(req: Request, res: Response) {
    const statusUpdate = req.query.statusUpdate as string;

    const statusConfig = new ConfigsStoreService();

    const configs = await statusConfig.execute({ statusUpdate });

    return res.json(configs);

  }
}

export { ConfigsStoreController }
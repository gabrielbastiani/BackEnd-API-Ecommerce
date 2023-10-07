import { Request, Response } from 'express';
import { ConfigsStoreService } from '../../../services/store/configurations/ConfigsStoreService';

class ConfigsStoreController {
  async handle(req: Request, res: Response) {
    const configStore_id = req.query.configStore_id as string;

    const statusConfig = new ConfigsStoreService();

    const configs = await statusConfig.execute({
      configStore_id
    });

    return res.json(configs);

  }
}

export { ConfigsStoreController }
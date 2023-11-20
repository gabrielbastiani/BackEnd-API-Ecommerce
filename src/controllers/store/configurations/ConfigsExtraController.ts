import { Request, Response } from 'express';
import { ConfigsExtraService } from '../../../services/store/configurations/ConfigsExtraService';

class ConfigsExtraController {
  async handle(req: Request, res: Response) {
    const {
      number_whatsapp,
      code_google_analytics,
      code_live_chat_tawkTo
    } = req.body;

    const handleConfigs = new ConfigsExtraService();

    const configs = await handleConfigs.execute({
      number_whatsapp,
      code_google_analytics,
      code_live_chat_tawkTo
    });

    return res.json(configs);

  }
}

export { ConfigsExtraController }
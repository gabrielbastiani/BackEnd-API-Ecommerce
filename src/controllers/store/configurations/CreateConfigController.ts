import { Request, Response } from 'express';
import { CreateConfigService } from '../../../services/store/configurations/CreateConfigService';

class CreateConfigController {
    async handle(req: Request, res: Response) {

        const createConfigs = new CreateConfigService();

        const configs = await createConfigs.execute();

        return res.json(configs)
    }
}

export { CreateConfigController }
import { Request, Response } from 'express';
import { ConfigDatasService } from '../../../services/store/configurations/ConfigDatasService';

class ConfigDatasController {
    async handle(req: Request, res: Response) {

        const configs = new ConfigDatasService();

        const loadDates = await configs.execute();

        return res.json(loadDates);
    }
}

export { ConfigDatasController }
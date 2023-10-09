import { Request, Response } from 'express';
import { CreateCountDownTimeService } from '../../../services/store/configurations/CreateCountDownTimeService';

class CreateCountDownTimeController {
    async handle(req: Request, res: Response) {

        const createConfigs = new CreateCountDownTimeService();

        const configs = await createConfigs.execute();

        return res.json(configs)
    }
}

export { CreateCountDownTimeController }
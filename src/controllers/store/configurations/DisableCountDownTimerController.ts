import { Request, Response } from 'express';
import { DisableCountDownTimerService } from '../../../services/store/configurations/DisableCountDownTimerService'; 

class DisableCountDownTimerController {
    async handle(req: Request, res: Response) {

        const configs = new DisableCountDownTimerService();

        const loadDates = await configs.execute();

        return res.json(loadDates);
    }
}

export { DisableCountDownTimerController }
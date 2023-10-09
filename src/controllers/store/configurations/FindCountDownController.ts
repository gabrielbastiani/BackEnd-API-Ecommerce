import { Request, Response } from 'express';
import { FindCountDownService } from '../../../services/store/configurations/FindCountDownService';

class FindCountDownController {
  async handle(req: Request, res: Response) {

    const findCountDown = new FindCountDownService();

    const count = await findCountDown.execute();

    return res.json(count);

  }
}

export { FindCountDownController }
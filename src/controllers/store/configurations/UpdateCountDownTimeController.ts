import { Request, Response } from 'express';
import { UpdateCountDownTimeService } from '../../../services/store/configurations/UpdateCountDownTimeService'; 

class UpdateCountDownTimeController {
  async handle(req: Request, res: Response) {
    const {
      text_promotion,
      text_button,
      link_button,
      day,
      month,
      year,
      hour,
      minute,
      second
    } = req.body;

    const updateCountDown = new UpdateCountDownTimeService();

    const countDown = await updateCountDown.execute({
      text_promotion,
      text_button,
      link_button,
      day,
      month,
      year,
      hour,
      minute,
      second
    });

    return res.json(countDown);

  }
}

export { UpdateCountDownTimeController }
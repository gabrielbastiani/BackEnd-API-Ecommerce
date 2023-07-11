import { Request, Response } from 'express'
import { CreateCounterProposalService } from '../../services/counterproposal/CreateCounterProposalService';

class CreateCounterProposalController {
  async handle(req: Request, res: Response) {
    const {
      currentPrice,
      counterOfferPrice,
      name,
      email,
      phone,
      lowestPricePlace,
      moreInformation,
      sku,
      nameProduct,
      codeCoupon,
      information,
      status,
      store_id
    } = req.body;

    const createCounter = new CreateCounterProposalService();

    const counter = await createCounter.execute({
      currentPrice,
      counterOfferPrice,
      name,
      email,
      phone,
      lowestPricePlace,
      moreInformation,
      sku,
      nameProduct,
      codeCoupon,
      information,
      status,
      store_id
    });

    return res.json(counter);

  }
}

export { CreateCounterProposalController }
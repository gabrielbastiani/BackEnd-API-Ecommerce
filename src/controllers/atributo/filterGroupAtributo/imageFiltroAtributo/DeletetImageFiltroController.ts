import { Request, Response } from 'express';
import { DeletetImageFiltroService } from '../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/DeletetImageFiltroService';
import { ListExactImageAtributoFiltroGroupService } from '../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/ListExactImageAtributoFiltroGroupService';
import fs from 'fs';

class DeletetImageFiltroController {
  async handle(req: Request, res: Response) {
    const imageAtributoGroup_id = req.query.imageAtributoGroup_id as string;

    const updatePhoto = new DeletetImageFiltroService();
    const deletePhoto = new ListExactImageAtributoFiltroGroupService();

    const imageFiltro = await deletePhoto.execute({
      imageAtributoGroup_id
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + imageFiltro.imageAtributo);

    const updateImage = await updatePhoto.execute({
      imageAtributoGroup_id,
    });

    return res.json([imageFiltro, updateImage]);

  }
}

export { DeletetImageFiltroController }
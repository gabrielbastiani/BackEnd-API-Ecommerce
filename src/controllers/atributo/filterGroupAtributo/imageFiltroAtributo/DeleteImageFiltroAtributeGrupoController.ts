import { Request, Response } from "express";
import { DeleteImageFiltroAtributeGrupoService } from "../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/DeleteImageFiltroAtributeGrupoService";
import { AllImageFiltroAtributoGrupoService } from "../../../../services/atributo/filterGroupAtributo/imageFiltroAtributo/AllImageFiltroAtributoGrupoService";
import fs from 'fs';

class DeleteImageFiltroAtributeGrupoController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const photosGet = new AllImageFiltroAtributoGrupoService();
        const arrayPhotos = await photosGet.execute({ groupFilterAtributo_id });

        arrayPhotos.forEach(element => {
            fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'images' + '/' + element.imageAtributo);
        });

        const deleteImagesFiltro = new DeleteImageFiltroAtributeGrupoService();

        const imagesGrupoFiltro = await deleteImagesFiltro.execute({
            groupFilterAtributo_id,
        });

        return res.json([imagesGrupoFiltro, arrayPhotos]);
    }
}

export { DeleteImageFiltroAtributeGrupoController };
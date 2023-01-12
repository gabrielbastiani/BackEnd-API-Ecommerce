import { Router } from 'express';
import multer from 'multer';


// -- ROTAS USER --
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { AuthenticatedEmailUserController } from './controllers/user/AuthenticatedEmailUserController';
import { ActiveOrDesactiveUserController } from './controllers/user/ActiveOrDesactiveUserController';
import { EmailPasswordController } from './controllers/user/PasswordRecovery/EmailPasswordController';
import { RecoveryPasswordController } from './controllers/user/PasswordRecovery/RecoveryPasswordController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';
import { UserRoleUserController } from './controllers/user/UserRoleUserController';
import { NewslatterUserController } from './controllers/user/NewslatterUserController';
import { PageListAllUsersController } from './controllers/user/PageListAllUsersController';
import { ExportUsersController } from './controllers/user/ExportUsersController';
import { UpdateUserNameController } from './controllers/user/UpdateUserNameController';
import { UpdateUserEmailController } from './controllers/user/UpdateUserEmailController';
import { UpdateUserCpfOrCnpjController } from './controllers/user/UpdateUserCpfOrCnpjController';
import { UpdateUserInscricaoEstadualController } from './controllers/user/UpdateUserInscricaoEstadualController';
import { UpdateUserPhoneController } from './controllers/user/UpdateUserPhoneController';
import { UpdateUserDataDeNascimentoController } from './controllers/user/UpdateUserDataDeNascimentoController';
import { UpdateUserGeneroController } from './controllers/user/UpdateUserGeneroController';
import { UpdateUserNewslatterController } from './controllers/user/UpdateUserNewslatterController';
import { UpdateUserRuaController } from './controllers/user/UpdateUserRuaController';
import { UpdateUserNumeroController } from './controllers/user/UpdateUserNumeroController';
import { UpdateUserComplementoController } from './controllers/user/UpdateUserComplementoController';
import { UpdateUserCepController } from './controllers/user/UpdateUserCepController';
import { UpdateUserCityController } from './controllers/user/UpdateUserCityController';
import { UpdateUserEstadoController } from './controllers/user/UpdateUserEstadoController';
import { UpdateUserBairroController } from './controllers/user/UpdateUserBairroController';
import { UpdateUserLojaController } from './controllers/user/UpdateUserLojaController';

// -- ROTAS LOJA --
import { CreateLojaController } from './controllers/loja/CreateLojaController';
import { UpdateNameLojaController } from './controllers/loja/UpdateNameLojaController';
import { UpdateCNPJLojaController } from './controllers/loja/UpdateCNPJLojaController';
import { UpdateEmailLojaController } from './controllers/loja/UpdateEmailLojaController';
import { UpdatePhoneLojaController } from './controllers/loja/UpdatePhoneLojaController';
import { UpdateRuaLojaController } from './controllers/loja/UpdateRuaLojaController';
import { UpdateNumeroLojaController } from './controllers/loja/UpdateNumeroLojaController';
import { UpdateBairroLojaController } from './controllers/loja/UpdateBairroLojaController';
import { UpdateComplementoLojaController } from './controllers/loja/UpdateComplementoLojaController';
import { UpdateCEPLojaController } from './controllers/loja/UpdateCEPLojaController';
import { UpdateCidadeLojaController } from './controllers/loja/UpdateCidadeLojaController';
import { UpdateEstadoLojaController } from './controllers/loja/UpdateEstadoLojaController';
import { PageListAllLojaController } from './controllers/loja/PageListAllLojaController';
import { DeleteLojaController } from './controllers/loja/DeleteLojaController';

// -- ROTAS CATEGORIAS --
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateNameCategoryController } from './controllers/category/UpdateNameCategoryController';
import { UpdateCodigoCategoryController } from './controllers/category/UpdateCodigoCategoryController';
import { UpdateDisponibilidadeCategoryController } from './controllers/category/UpdateDisponibilidadeCategoryController';
import { PageListAllCategorysController } from './controllers/category/PageListAllCategorysController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListExactCategoryController } from './controllers/category/ListExactCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';

// -- ROTAS PRODUTOS --
import { CreateProductController } from './controllers/product/CreateProductController';
import { PhotoProductController } from './controllers/product/photoproduct/PhotoProductController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';
import { DeletePhotoProductController } from './controllers/product/photoproduct/DeletePhotoProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { UpdateNameProductController } from './controllers/product/UpdateNameProductController';
import { Update1DescriptionProductController } from './controllers/product/Update1DescriptionProductController';
import { Update2DescriptionProductController } from './controllers/product/Update2DescriptionProductController';
import { Update3DescriptionProductController } from './controllers/product/Update3DescriptionProductController';
import { Update4DescriptionProductController } from './controllers/product/Update4DescriptionProductController';
import { Update5DescriptionProductController } from './controllers/product/Update5DescriptionProductController';
import { Update6DescriptionProductController } from './controllers/product/Update6DescriptionProductController';
import { UpdatePriceProductController } from './controllers/product/UpdatePriceProductController';
import { UpdateSKUProductController } from './controllers/product/UpdateSKUProductController';
import { UpdateEstoqueProductController } from './controllers/product/UpdateEstoqueProductController';
import { UpdatePesoProductController } from './controllers/product/UpdatePesoProductController';
import { UpdateLarguraProductController } from './controllers/product/UpdateLarguraProductController';
import { UpdateAlturaProductController } from './controllers/product/UpdateAlturaProductController';
import { UpdateProfundidadeProductController } from './controllers/product/UpdateProfundidadeProductController';
import { PromocaoProductController } from './controllers/product/PromocaoProductController';
import { ExportProductController } from './controllers/product/ExportProductController';
import { DisponibilidadeDoProductController } from './controllers/product/DisponibilidadeDoProductController';
import { UpdateCategoryProductController } from './controllers/product/UpdateCategoryProductController';
import { UpdateLojaProductController } from './controllers/product/UpdateLojaProductController';

// -- ROTAS AVALIACAO --
import { CreateAvaliacaoController } from './controllers/avaliacao/CreateAvaliacaoController';
import { DeleteAvaliacaoController } from './controllers/avaliacao/DeleteAvaliacaoController';

// -- ROTAS VARIAÇÃO --
import { CreateVariacaoController } from './controllers/variacao/CreateVariacaoController';
import { DeleteVariacaoController } from './controllers/variacao/DeleteVariacaoController';
import { PageListAllVariacaoController } from './controllers/variacao/PageListAllVariacaoController';
import { PhotoVariacaoController } from './controllers/variacao/photoVariacao/PhotoVariacaoController';
import { DeletePhotoVariacaoController } from './controllers/variacao/photoVariacao/DeletePhotoVariacaoController';
import { UpdateNameVariacaoController } from './controllers/variacao/UpdateNameVariacaoController';
import { UpdateDescriptionVariacao1Controller } from './controllers/variacao/UpdateDescriptionVariacao1Controller';
import { UpdateDescriptionVariacao2Controller } from './controllers/variacao/UpdateDescriptionVariacao2Controller';
import { UpdateDescriptionVariacao3Controller } from './controllers/variacao/UpdateDescriptionVariacao3Controller';
import { UpdateDescriptionVariacao4Controller } from './controllers/variacao/UpdateDescriptionVariacao4Controller';
import { UpdateDescriptionVariacao5Controller } from './controllers/variacao/UpdateDescriptionVariacao5Controller';
import { UpdateDescriptionVariacao6Controller } from './controllers/variacao/UpdateDescriptionVariacao6Controller';
import { UpdatePriceVariacaoController } from './controllers/variacao/UpdatePriceVariacaoController';

// -- ROTAS ENVIAR EMAILS --
import { EmailExportUsersController } from './controllers/sendEmails/EmailExportUsersController';
import { EmailExportProductsController } from './controllers/sendEmails/EmailExportProductsController';




import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROTAS USER --
router.post('/createUser', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);
router.put('/authenticated', new AuthenticatedEmailUserController().handle);
router.put('/activeOrDesactiveUser', isAuthenticated, new ActiveOrDesactiveUserController().handle);
router.post('/recover', new EmailPasswordController().handle);
router.put('/recover', new RecoveryPasswordController().handle);
router.delete('/deleteUser', isAuthenticated, new DeleteUserController().handle);
router.put('/roleUser', new UserRoleUserController().handle);
router.put('/newslatter', new NewslatterUserController().handle);
router.get('/allUsersPage', isAuthenticated, new PageListAllUsersController().handle);
router.get('/exportUser', isAuthenticated, new ExportUsersController().handle);
router.put('/nameUserUpdate', isAuthenticated, new UpdateUserNameController().handle);
router.put('/emailUserUpdate', isAuthenticated, new UpdateUserEmailController().handle);
router.put('/cpfOrConpjUserUpdate', isAuthenticated, new UpdateUserCpfOrCnpjController().handle);
router.put('/inscricaoEstadualUserUpdate', isAuthenticated, new UpdateUserInscricaoEstadualController().handle);
router.put('/phoneUserUpdate', isAuthenticated, new UpdateUserPhoneController().handle);
router.put('/dataDeNascimentoUserUpdate', isAuthenticated, new UpdateUserDataDeNascimentoController().handle);
router.put('/generoUserUpdate', isAuthenticated, new UpdateUserGeneroController().handle);
router.put('/newslatterUserUpdate', isAuthenticated, new UpdateUserNewslatterController().handle);
router.put('/ruaUserUpdate', isAuthenticated, new UpdateUserRuaController().handle);
router.put('/numeroUserUpdate', isAuthenticated, new UpdateUserNumeroController().handle);
router.put('/bairroUserUpdate', isAuthenticated, new UpdateUserBairroController().handle);
router.put('/complementoUserUpdate', isAuthenticated, new UpdateUserComplementoController().handle);
router.put('/cepUserUpdate', isAuthenticated, new UpdateUserCepController().handle);
router.put('/cityUserUpdate', isAuthenticated, new UpdateUserCityController().handle);
router.put('/estadoUserUpdate', isAuthenticated, new UpdateUserEstadoController().handle);
router.put('/lojaidUserUpdate', isAuthenticated, new UpdateUserLojaController().handle);

// -- ROTAS LOJA --
router.post('/loja', new CreateLojaController().handle);
router.put('/nameLojaUpdate', isAuthenticated, new UpdateNameLojaController().handle);
router.put('/cnpjLojaUpdate', isAuthenticated, new UpdateCNPJLojaController().handle);
router.put('/emailLojaUpdate', isAuthenticated, new UpdateEmailLojaController().handle);
router.put('/phoneLojaUpdate', isAuthenticated, new UpdatePhoneLojaController().handle);
router.put('/ruaLojaUpdate', isAuthenticated, new UpdateRuaLojaController().handle);
router.put('/numeroLojaUpdate', isAuthenticated, new UpdateNumeroLojaController().handle);
router.put('/bairroLojaUpdate', isAuthenticated, new UpdateBairroLojaController().handle);
router.put('/complementoLojaUpdate', isAuthenticated, new UpdateComplementoLojaController().handle);
router.put('/cepLojaUpdate', isAuthenticated, new UpdateCEPLojaController().handle);
router.put('/cidadeLojaUpdate', isAuthenticated, new UpdateCidadeLojaController().handle);
router.put('/estadoLojaUpdate', isAuthenticated, new UpdateEstadoLojaController().handle);
router.get('/allLojasPage', isAuthenticated, new PageListAllLojaController().handle);
router.delete('/deleteLoja', isAuthenticated, new DeleteLojaController().handle);

// -- ROTAS CATEGORIAS --
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.put('/categoryNameUpdate', isAuthenticated, new UpdateNameCategoryController().handle);
router.put('/categoryCodigoUpdate', isAuthenticated, new UpdateCodigoCategoryController().handle);
router.put('/updateDisponibilidadeCategory', isAuthenticated, new UpdateDisponibilidadeCategoryController().handle);
router.get('/allCategorysPage', isAuthenticated, new PageListAllCategorysController().handle);
router.get('/allCategorys', new ListCategoryController().handle);
router.get('/exactCategory', isAuthenticated, new ListExactCategoryController().handle);
router.delete('/deleteCategory', isAuthenticated, new DeleteCategoryController().handle);

// -- ROTAS PRODUTOS --
router.post('/createProduct', isAuthenticated, new CreateProductController().handle);
router.post('/photo', isAuthenticated, upload.single('file'), new PhotoProductController().handle);
router.delete('/deletePhoto', isAuthenticated, new DeletePhotoProductController().handle);
router.get('/allProductsPage', isAuthenticated, new PageListAllProductController().handle);
router.delete('/deleteProduct', isAuthenticated, new DeleteProductController().handle);
router.put('/updateNameProduct', isAuthenticated, new UpdateNameProductController().handle);
router.put('/updateDescription1', isAuthenticated, new Update1DescriptionProductController().handle);
router.put('/updateDescription2', isAuthenticated, new Update2DescriptionProductController().handle);
router.put('/updateDescription3', isAuthenticated, new Update3DescriptionProductController().handle);
router.put('/updateDescription4', isAuthenticated, new Update4DescriptionProductController().handle);
router.put('/updateDescription5', isAuthenticated, new Update5DescriptionProductController().handle);
router.put('/updateDescription6', isAuthenticated, new Update6DescriptionProductController().handle);
router.put('/updatePrice', isAuthenticated, new UpdatePriceProductController().handle);
router.put('/updateSKU', isAuthenticated, new UpdateSKUProductController().handle);
router.put('/updateEstoque', isAuthenticated, new UpdateEstoqueProductController().handle);
router.put('/updatePeso', isAuthenticated, new UpdatePesoProductController().handle);
router.put('/updateLargura', isAuthenticated, new UpdateLarguraProductController().handle);
router.put('/updateAltura', isAuthenticated, new UpdateAlturaProductController().handle);
router.put('/updateProfundidade', isAuthenticated, new UpdateProfundidadeProductController().handle);
router.put('/productPromocao', isAuthenticated, new PromocaoProductController().handle);
router.get('/exportProduct', isAuthenticated, new ExportProductController().handle);
router.put('/diponibilidadeProduct', isAuthenticated, new DisponibilidadeDoProductController().handle);
router.put('/updateCategory', isAuthenticated, new UpdateCategoryProductController().handle);
router.put('/updateLoja', isAuthenticated, new UpdateLojaProductController().handle);

// -- ROTAS AVALIACAO --
router.post('/avaliacao', isAuthenticated, new CreateAvaliacaoController().handle);
router.delete('/deleteAvaliacao', isAuthenticated, new DeleteAvaliacaoController().handle);

// -- ROTAS VARIAÇÃO --
router.post('/variacao', isAuthenticated, new CreateVariacaoController().handle);
router.delete('/deleteVariacao', isAuthenticated, new DeleteVariacaoController().handle);
router.get('/allVariacaoPage', isAuthenticated, new PageListAllVariacaoController().handle);
router.post('/photoVariante', isAuthenticated, upload.single('file'), new PhotoVariacaoController().handle);
router.delete('/deletePhotoVariacao', isAuthenticated, new DeletePhotoVariacaoController().handle);
router.put('/updateNameVariacao', isAuthenticated, new UpdateNameVariacaoController().handle);
router.put('/updateDescriptionVariacao1', isAuthenticated, new UpdateDescriptionVariacao1Controller().handle);
router.put('/updateDescriptionVariacao2', isAuthenticated, new UpdateDescriptionVariacao2Controller().handle);
router.put('/updateDescriptionVariacao3', isAuthenticated, new UpdateDescriptionVariacao3Controller().handle);
router.put('/updateDescriptionVariacao4', isAuthenticated, new UpdateDescriptionVariacao4Controller().handle);
router.put('/updateDescriptionVariacao5', isAuthenticated, new UpdateDescriptionVariacao5Controller().handle);
router.put('/updateDescriptionVariacao6', isAuthenticated, new UpdateDescriptionVariacao6Controller().handle);
router.put('/updatePriceVariacao', isAuthenticated, new UpdatePriceVariacaoController().handle);

// -- ROTAS ENVIAR EMAILS --
router.get('/sendlistuser', isAuthenticated, new EmailExportUsersController().handle);
router.get('/sendlistproduct', isAuthenticated, new EmailExportProductsController().handle);


export { router };
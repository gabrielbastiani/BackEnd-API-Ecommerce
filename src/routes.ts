import { Router } from 'express';
import multer from 'multer';


// -- ROTAS USER --
import { CreateUserController } from './controllers/user/CreateUserController';
import { AdminRoleUserController } from './controllers/user/AdminRoleUserController';
import { AdminCreateUserController } from './controllers/user/AdminCreateUserController';
import { AuthAdminController } from './controllers/user/AuthAdminController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { UpdateAllDateUserController } from './controllers/user/UpdateAllDateUserController';
import { AuthenticatedEmailUserController } from './controllers/user/AuthenticatedEmailUserController';
import { ActiveOrDesactiveUserController } from './controllers/user/ActiveOrDesactiveUserController';
import { EmailPasswordController } from './controllers/user/PasswordRecovery/EmailPasswordController';
import { EmailPasswordDashboardController } from './controllers/user/PasswordRecovery/EmailPasswordDashboardController';
import { RecoveryPasswordController } from './controllers/user/PasswordRecovery/RecoveryPasswordController';
import { FindRecoveryIDController } from './controllers/user/PasswordRecovery/FindRecoveryIDController';
import { DeletePasswordRecoveryIDController } from './controllers/user/PasswordRecovery/DeletePasswordRecoveryIDController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';
import { UserRoleUserController } from './controllers/user/UserRoleUserController';
import { PageListAllUsersController } from './controllers/user/PageListAllUsersController';
import { ExportUsersController } from './controllers/user/ExportUsersController';
import { UpdateUserNameController } from './controllers/user/UpdateUserNameController';
import { UpdateUserNewslatterController } from './controllers/user/UpdateUserNewslatterController';
import { ListExactUserController } from './controllers/user/ListExactUserController';
import { ListExactUserNameController } from './controllers/user/ListExactUserNameController';

// -- ROTAS LOJA --
import { CreateLojaController } from './controllers/loja/CreateLojaController';
import { PageListAllLojaController } from './controllers/loja/PageListAllLojaController';
import { UserLojaController } from './controllers/loja/UserLojaController';
import { LojaController } from './controllers/loja/LojaController';
import { UserCreateLojaController } from './controllers/loja/UserCreateLojaController';
import { DeleteLojaController } from './controllers/loja/DeleteLojaController';
import { UpdateLogoLojaController } from './controllers/loja/UpdateLogoLojaController';
import { UpdateAllDateLojaController } from './controllers/loja/UpdateAllDateLojaController';

// -- ROTAS REDES SOCIAIS DA LOJA --
import { CreateRedeSocialController } from './controllers/loja/redeSocial/CreateRedeSocialController';
import { UpdateOrderRedeSocialController } from './controllers/loja/redeSocial/UpdateOrderRedeSocialController';
import { ListAllRedesSociaisOrderAndPosicaoController } from './controllers/loja/redeSocial/ListAllRedesSociaisOrderAndPosicaoController';
import { UpdateRedeNameController } from './controllers/loja/redeSocial/UpdateRedeNameController';
import { UpdateLinkRedeSocialController } from './controllers/loja/redeSocial/UpdateLinkRedeSocialController';
import { UpdateImageRedeSocialController } from './controllers/loja/redeSocial/UpdateImageRedeSocialController';
import { UpdatePosicaoRedeSocialController } from './controllers/loja/redeSocial/UpdatePosicaoRedeSocialController';
import { UpdateDisponibilidadeRedeSocialController } from './controllers/loja/redeSocial/UpdateDisponibilidadeRedeSocialController';
import { DeleteRedeSocialController } from './controllers/loja/redeSocial/DeleteRedeSocialController';
import { ListAllRedeSocialController } from './controllers/loja/redeSocial/ListAllRedeSocialController';
import { PageListRedesSocialController } from './controllers/loja/redeSocial/PageListRedesSocialController';
import { ListExactRedeSocialController } from './controllers/loja/redeSocial/ListExactRedeSocialController';

// -- ROTAS TEXTOS INSTITUCIONAIS --
import { CreateTextInstitucionalController } from './controllers/loja/textoInstitucional/CreateTextInstitucionalController';
import { DeleteTextoInstitucionalController } from './controllers/loja/textoInstitucional/DeleteTextoInstitucionalController';
import { ListAllTextosController } from './controllers/loja/textoInstitucional/ListAllTextosController';
import { ListAllTextosOrderAndPosicaoController } from './controllers/loja/textoInstitucional/ListAllTextosOrderAndPosicaoController';
import { ListExactTextoInstitucionalController } from './controllers/loja/textoInstitucional/ListExactTextoInstitucionalController';
import { PageListTextoInstitucionalController } from './controllers/loja/textoInstitucional/PageListTextoInstitucionalController';
import { UpdateDisponibilidadeTextoController } from './controllers/loja/textoInstitucional/UpdateDisponibilidadeTextoController';
import { UpdateOrderTextoInstitucionalController } from './controllers/loja/textoInstitucional/UpdateOrderTextoInstitucionalController';
import { UpdatePosicaoTextoController } from './controllers/loja/textoInstitucional/UpdatePosicaoTextoController';
import { UpdateTitleTextoController } from './controllers/loja/textoInstitucional/UpdateTitleTextoController';
import { UpdateDescriptionTextoController } from './controllers/loja/textoInstitucional/UpdateDescriptionTextoController';
import { CreatePhotoTextoInstitucionalController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/CreatePhotoTextoInstitucionalController';
import { AllPhotosTextoInstitucionalController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/AllPhotosTextoInstitucionalController';
import { AllPhotosTextosController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/AllPhotosTextosController';
import { DeleteAllPhotoTextosController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/DeleteAllPhotoTextosController';
import { DeletePhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/DeletePhotoTextoController';
import { UpdatePhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/UpdatePhotoTextoController';
import { UpdateDisponibilidadePhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/UpdateDisponibilidadePhotoTextoController';
import { UpdateTitlePhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/UpdateTitlePhotoTextoController';
import { ListExactPhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/ListExactPhotoTextoController';
import { UpdateOrderPhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/UpdateOrderPhotoTextoController';
import { UpdatePosicaoPhotoTextoController } from './controllers/loja/textoInstitucional/photoTextoInstitucional/UpdatePosicaoPhotoTextoController';

// -- ROTAS BANNERS --
import { CreateBannerController } from './controllers/banner/CreateBannerController';
import { UpdateAllDateBannerController } from './controllers/banner/UpdateAllDateBannerController';
import { PageListAllBannerController } from './controllers/banner/PageListAllBannerController';
import { DeleteBannerController } from './controllers/banner/DeleteBannerController';
import { UpdateBannerController } from './controllers/banner/UpdateBannerController';
import { StatusBannerController } from './controllers/banner/StatusBannerController';
import { ActiveAllBannerController } from './controllers/banner/ActiveAllBannerController';
import { ListExactBannerController } from './controllers/banner/ListExactBannerController';
import { UpdatePosicaoBannerController } from './controllers/banner/UpdatePosicaoBannerController';

// -- ROTAS CATEGORIAS --
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateNameCategoryController } from './controllers/category/UpdateNameCategoryController';
import { UpdateOrderCategoryController } from './controllers/category/UpdateOrderCategoryController';
import { UpdateDisponibilidadeCategoryController } from './controllers/category/UpdateDisponibilidadeCategoryController';
import { ListCategoryNameController } from './controllers/category/ListCategoryNameController';
import { PageListAllCategorysController } from './controllers/category/PageListAllCategorysController';
import { ExactPageListAllCategoryController } from './controllers/category/ExactPageListAllCategoryController';
import { FindFirstCategoryController } from './controllers/category/FindFirstCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListExactCategoryController } from './controllers/category/ListExactCategoryController';
import { ListExactCategoryNameController } from './controllers/category/ListExactCategoryNameController';

// -- ROTAS PRODUTOS --
import { CreateProductController } from './controllers/product/CreateProductController';
import { PhotoProductController } from './controllers/product/photoproduct/PhotoProductController';
import { UpdatePhotoProductController } from './controllers/product/photoproduct/UpdatePhotoProductController';
import { UpdateAllDateProductController } from './controllers/product/UpdateAllDateProductController';
import { UpdatePosicaoProductController } from './controllers/product/UpdatePosicaoProductController';
import { AllPhotosProductController } from './controllers/product/photoproduct/AllPhotosProductController';
import { AllPhotosController } from './controllers/product/photoproduct/AllPhotosController';
import { AllProductController } from './controllers/product/AllProductController';
import { AllProductInStoreController } from './controllers/product/AllProductInStoreController';
import { FindFirstProductController } from './controllers/product/FindFirstProductController';
import { AllProductExistController } from './controllers/product/AllProductExistController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';
import { ListExactProductController } from './controllers/product/ListExactProductController';
import { DeletePhotoProductController } from './controllers/product/photoproduct/DeletePhotoProductController';
import { DeleteAllPhotoProductController } from './controllers/product/photoproduct/DeleteAllPhotoProductController';
import { DeleteAllVariacaoProductController } from './controllers/variacao/DeleteAllVariacaoProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { DeleteALLPhotoVariacaoController } from './controllers/variacao/photoVariacao/DeleteALLPhotoVariacaoController';
import { UpdateNameProductController } from './controllers/product/UpdateNameProductController';
import { ExportProductController } from './controllers/product/ExportProductController';
import { DisponibilidadeDoProductController } from './controllers/product/DisponibilidadeDoProductController';
import { UpdateProductDestqueController } from './controllers/product/UpdateProductDestqueController';
import { UpdateProductOfertaController } from './controllers/product/UpdateProductOfertaController';
import { UpdateOrderPhotoProductController } from './controllers/product/photoproduct/UpdateOrderPhotoProductController';
import { AllPhotosProductInStoreController } from './controllers/product/photoproduct/AllPhotosProductInStoreController';
import { UpdatePosicaoPhotoProductController } from './controllers/product/photoproduct/UpdatePosicaoPhotoProductController';
import { ListAllProductDestaqueController } from './controllers/product/ListAllProductDestaqueController';
import { ListAllProductOfertaController } from './controllers/product/ListAllProductOfertaController';
import { ListExactProductNameController } from './controllers/product/ListExactProductNameController';

// ROTAS RELACIONAMENTOS CATEGORIAS E PRODUTOS
import { CreateRelationProductCategoryController } from './controllers/relationProductCategory/CreateRelationProductCategoryController';
import { UpdateRelationIDProductCategoryController } from './controllers/relationProductCategory/UpdateRelationIDProductCategoryController';
import { FindCategoryRelationBlockController } from './controllers/relationProductCategory/FindCategoryRelationBlockController';
import { FindIDRelationBlockController } from './controllers/relationProductCategory/FindIDRelationBlockController';
import { FindLastIDRelationBlockController } from './controllers/relationProductCategory/FindLastIDRelationBlockController';
import { UpdateOrderProductCategoryController } from './controllers/relationProductCategory/UpdateOrderProductCategoryController';
import { DeleteRelationProductCategoryController } from './controllers/relationProductCategory/DeleteRelationProductCategoryController';
import { FindAllExactRelationBlocController } from './controllers/relationProductCategory/FindAllExactRelationBlocController';
import { DeleteRelationIDProductCategoryController } from './controllers/relationProductCategory/DeleteRelationIDProductCategoryController';
import { PageRelationsCategorysController } from './controllers/relationProductCategory/PageRelationsCategorysController';
import { UpdateStatusRelationCategoryController } from './controllers/relationProductCategory/UpdateStatusRelationCategoryController';
import { UpdateCategoryIDProductCategoryController } from './controllers/relationProductCategory/UpdateCategoryIDProductCategoryController';
import { FindCategoryIDRelationController } from './controllers/relationProductCategory/FindCategoryIDRelationController';
import { DeleteRelationProductIDController } from './controllers/relationProductCategory/DeleteRelationProductIDController';
import { DeleteRelationIDController } from './controllers/relationProductCategory/DeleteRelationIDController';

// -- ROTAS AVALIACAO --
import { CreateAvaliacaoController } from './controllers/avaliacao/CreateAvaliacaoController';
import { DeleteAvaliacaoController } from './controllers/avaliacao/DeleteAvaliacaoController';
import { PageListAllAvaliacaoController } from './controllers/avaliacao/PageListAllAvaliacaoController';
import { DeleteAvaliacaoProductIDController } from './controllers/avaliacao/DeleteAvaliacaoProductIDController';
import { PageListAllAvaliacaoProductIDController } from './controllers/avaliacao/PageListAllAvaliacaoProductIDController';
import { FindAvaliacaoController } from './controllers/avaliacao/FindAvaliacaoController';

// -- ROTAS VARIAÇÃO --
import { CreateVariacaoController } from './controllers/variacao/CreateVariacaoController';
import { DeleteVariacaoController } from './controllers/variacao/DeleteVariacaoController';
import { UpdateAllDateVariacaoController } from './controllers/variacao/UpdateAllDateVariacaoController';
import { UpdateNameVariacaoController } from './controllers/variacao/UpdateNameVariacaoController';
import { UpdatePosicaoVariacaoController } from './controllers/variacao/UpdatePosicaoVariacaoController';
import { PageListAllVariacaoController } from './controllers/variacao/PageListAllVariacaoController';
import { ListExactVariacaoController } from './controllers/variacao/ListExactVariacaoController';
import { AllVariacoesProductController } from './controllers/variacao/AllVariacoesProductController';
import { AllVariacoesController } from './controllers/variacao/AllVariacoesController';
import { UpdateOrderVariacaoController } from './controllers/variacao/UpdateOrderVariacaoController';
import { UpdateOrderPhotoVariacaoController } from './controllers/variacao/photoVariacao/UpdateOrderPhotoVariacaoController';
import { UpdatePosicaoPhotoVariacaoController } from './controllers/variacao/photoVariacao/UpdatePosicaoPhotoVariacaoController';
import { AllPhotosVariacaoController } from './controllers/variacao/photoVariacao/AllPhotosVariacaoController';
import { AllPhotosVariacoesController } from './controllers/variacao/photoVariacao/AllPhotosVariacoesController';
import { PhotoVariacaoController } from './controllers/variacao/photoVariacao/PhotoVariacaoController';
import { DeletePhotoVariacaoController } from './controllers/variacao/photoVariacao/DeletePhotoVariacaoController';
import { DeleteALLPhotoVariacaoProductController } from './controllers/variacao/photoVariacao/DeleteALLPhotoVariacaoProductController';
import { UpdateDisponibilidadeVariacaoController } from './controllers/variacao/DisponibilidadeVariacaoController';
import { FreteGratisVariacaoController } from './controllers/variacao/FreteGratisVariacaoController';
import { UpdateVariacaoDestqueController } from './controllers/variacao/UpdateVariacaoDestqueController';
import { UpdateVariacaoOfertaController } from './controllers/variacao/UpdateVariacaoOfertaController';
import { ListAllVariacaoDestaqueController } from './controllers/variacao/ListAllVariacaoDestaqueController';
import { ListAllVariacaoOfertaController } from './controllers/variacao/ListAllVariacaoOfertaController';
import { ListExactVariacaoNameController } from './controllers/variacao/ListExactVariacaoNameController';

// -- ROTAS NEWSLETTERS --
import { CreateNewslettersController } from './controllers/newsletters/CreateNewslettersController';
import { DeleteNewslettersController } from './controllers/newsletters/DeleteNewslettersController';
import { ListNewslettersController } from './controllers/newsletters/ListNewslettersController';
import { ListExactNewslettersController } from './controllers/newsletters/ListExactNewslettersController';
import { PageListAllNewslettersController } from './controllers/newsletters/PageListAllNewslettersController';
import { ExportNewslettersController } from './controllers/newsletters/ExportNewslettersController';

// -- ROTAS CONTATOS
import { CreateContatoController } from './controllers/contatos/CreateContatoController';
import { DeleteContatoController } from './controllers/contatos/DeleteContatoController';
import { ListContatoController } from './controllers/contatos/ListContatoController';
import { ListExactContatoController } from './controllers/contatos/ListExactContatoController';
import { PageListAllContatoController } from './controllers/contatos/PageListAllContatoController';
import { ExportContatoController } from './controllers/contatos/ExportContatoController';

// -- ROTAS ENVIAR PEDIDO --
import { CreateCarrinhoController } from './controllers/pedido/carrinho/CreateCarrinhoController';
import { CreateItemInCarrinhoController } from './controllers/pedido/carrinho/item/CreateItemInCarrinhoController';
import { CreateCarrinhoSemFreteController } from './controllers/pedido/carrinho/CreateCarrinhoSemFreteController';
import { CreatePedidoController } from './controllers/pedido/CreatePedidoController';
import { UpdatePedidoCarrinhoController } from './controllers/pedido/carrinho/UpdatePedidoCarrinhoController';
import { PageAllPedidosUserController } from './controllers/pedido/PageAllPedidosUserController';
import { PageAllPedidosController } from './controllers/pedido/PageAllPedidosController';
import { ExactPedidoUserController } from './controllers/pedido/ExactPedidoUserController';
import { DeleteCarrinhoController } from './controllers/pedido/carrinho/DeleteCarrinhoController';
import { CancelarPedidoAdminController } from './controllers/pedido/CancelarPedidoAdminController';
import { CancelarPedidoClienteController } from './controllers/pedido/CancelarPedidoClienteController';
import { EntregaEnderecoMesmoPedidoController } from './controllers/pedido/entrega/EntregaEnderecoMesmoPedidoController';
import { CreateEntregaController } from './controllers/pedido/entrega/CreateEntregaController';
import { DeleteEntregaController } from './controllers/pedido/entrega/DeleteEntregaController';
import { PageAllListEntregaController } from './controllers/pedido/entrega/PageAllListEntregaController';
import { CreateItemController } from './controllers/pedido/carrinho/item/CreateItemController';
import { PageAllCarrinhoController } from './controllers/pedido/carrinho/PageAllCarrinhoController';
import { DeleteItemController } from './controllers/pedido/carrinho/item/DeleteItemController';
import { CreatePagamentoController } from './controllers/pagamento/CreatePagamentoController';
import { DeletePagamentoController } from './controllers/pagamento/DeletePagamentoController';
import { UpdatePagamentoController } from './controllers/pagamento/UpdatePagamentoController';

// -- ROTAS ENVIAR EMAILS --
import { EmailExportUsersController } from './controllers/sendEmails/EmailExportUsersController';
import { EmailExportProductsController } from './controllers/sendEmails/EmailExportProductsController';
import { EmailExportNewslettersController } from './controllers/sendEmails/EmailExportNewslettersController';
import { EmailExportContatoController } from './controllers/sendEmails/EmailExportContatoController';




import { ADMINisAuthenticated } from './middlewares/ADMINisAuthenticated';
import { USERisAuthenticated } from './middlewares/USERisAuthenticated';
import uploadConfig from './config/multer';
import { UpdateStatusAvaliacaoController } from './controllers/avaliacao/UpdateStatusAvaliacaoController';
import { UpdateImageCategoryController } from './controllers/category/UpdateImageCategoryController';


const router = Router();
const upload = multer(uploadConfig.upload("./images"));





// -- ROTAS USER --
router.post('/createUser', new CreateUserController().handle);
router.put('/userAdmin', ADMINisAuthenticated, new AdminRoleUserController().handle);
router.post('/createAdmin', new AdminCreateUserController().handle);
router.post('/sessionAdmin', new AuthAdminController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', ADMINisAuthenticated && USERisAuthenticated, new DetailuserController().handle);
router.put('/updateAllDateUser', ADMINisAuthenticated && USERisAuthenticated, new UpdateAllDateUserController().handle);
router.get('/listExactUser', ADMINisAuthenticated && USERisAuthenticated, new ListExactUserController().handle);
router.put('/authenticated', new AuthenticatedEmailUserController().handle);
router.put('/activeOrDesactiveUser', ADMINisAuthenticated, new ActiveOrDesactiveUserController().handle);
router.post('/recover', new EmailPasswordController().handle);
router.post('/recoverDashboard', ADMINisAuthenticated && USERisAuthenticated, new EmailPasswordDashboardController().handle);
router.put('/recover', new RecoveryPasswordController().handle);
router.get('/recoverFind', ADMINisAuthenticated && USERisAuthenticated, new FindRecoveryIDController().handle);
router.delete('/deleteRecoverID', ADMINisAuthenticated && USERisAuthenticated, new DeletePasswordRecoveryIDController().handle);
router.delete('/deleteUser', ADMINisAuthenticated, new DeleteUserController().handle);
router.put('/roleUser', new UserRoleUserController().handle);
router.get('/allUsersPage', ADMINisAuthenticated, new PageListAllUsersController().handle);
router.get('/exportUser', ADMINisAuthenticated, new ExportUsersController().handle);
router.put('/nameUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserNameController().handle);
router.put('/newslatterUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserNewslatterController().handle);
router.get('/exactUserPage', new ListExactUserNameController().handle);

// -- ROTAS LOJA --
router.post('/loja', ADMINisAuthenticated, upload.single('file'), new CreateLojaController().handle);
router.get('/allLojasPage', ADMINisAuthenticated, new PageListAllLojaController().handle);
router.get('/userLoja', ADMINisAuthenticated, new UserLojaController().handle);
router.get('/lojaCreateFind', ADMINisAuthenticated, new UserCreateLojaController().handle);
router.get('/loja', new LojaController().handle);
router.delete('/deleteLoja', ADMINisAuthenticated, new DeleteLojaController().handle);
router.put('/logoLojaUpdate', ADMINisAuthenticated, upload.single('file'), new UpdateLogoLojaController().handle);
router.put('/updateAllDateLoja', ADMINisAuthenticated, new UpdateAllDateLojaController().handle);

// -- ROTAS REDES SOCIAIS DA LOJA --
router.post('/createRedeSocialLoja', ADMINisAuthenticated, upload.single('file'), new CreateRedeSocialController().handle);
router.put('/updateOrderRedeSocial', ADMINisAuthenticated, new UpdateOrderRedeSocialController().handle);
router.put('/updateRedeName', ADMINisAuthenticated, new UpdateRedeNameController().handle);
router.put('/updateLinkRedeSocial', ADMINisAuthenticated, new UpdateLinkRedeSocialController().handle);
router.put('/updateImageRedeSocial', ADMINisAuthenticated, upload.single('file'), new UpdateImageRedeSocialController().handle);
router.put('/updatePosicaoRedeSocial', ADMINisAuthenticated, new UpdatePosicaoRedeSocialController().handle);
router.put('/updateDisponibilidadeRedeSocial', ADMINisAuthenticated, new UpdateDisponibilidadeRedeSocialController().handle);
router.delete('/deleteRedeSocial', ADMINisAuthenticated, new DeleteRedeSocialController().handle);
router.get('/pageListRedesSociais', ADMINisAuthenticated, new PageListRedesSocialController().handle);
router.get('/listExactRedesSociais', ADMINisAuthenticated, new ListExactRedeSocialController().handle);
router.get('/listAllRedesSociais', ADMINisAuthenticated, new ListAllRedeSocialController().handle);
router.get('/listRedesSociaisOrder', new ListAllRedesSociaisOrderAndPosicaoController().handle);

// -- ROTAS TEXTOS INSTITUCIONAIS --
router.post('/createTextoInstitucional', ADMINisAuthenticated, new CreateTextInstitucionalController().handle);
router.delete('/deleteTextoInstitucional', ADMINisAuthenticated, new DeleteTextoInstitucionalController().handle);
router.get('/listExactTextoInstitucional', ADMINisAuthenticated, new ListExactTextoInstitucionalController().handle);
router.get('/listAllTextos', ADMINisAuthenticated, new ListAllTextosController().handle);
router.get('/pageListTextoInstitucional', ADMINisAuthenticated, new PageListTextoInstitucionalController().handle);
router.put('/updateDisponibilidadeTexto', ADMINisAuthenticated, new UpdateDisponibilidadeTextoController().handle);
router.put('/updateOrderTextoInstitucional', ADMINisAuthenticated, new UpdateOrderTextoInstitucionalController().handle);
router.put('/updatePosicaoTextoInstitucional', ADMINisAuthenticated, new UpdatePosicaoTextoController().handle);
router.put('/updateTitleTextoInstitucional', ADMINisAuthenticated, new UpdateTitleTextoController().handle);
router.put('/updateDescriptionTextoInstitucional', ADMINisAuthenticated, new UpdateDescriptionTextoController().handle);
router.post('/createImageTextoInstitucional', ADMINisAuthenticated, upload.single('file'), new CreatePhotoTextoInstitucionalController().handle);
router.get('/allImages', ADMINisAuthenticated, new AllPhotosTextoInstitucionalController().handle);
router.get('/allImagesTextoInstitucional', ADMINisAuthenticated, new AllPhotosTextosController().handle);
router.delete('/deleteAllImagesTextos', ADMINisAuthenticated, new DeleteAllPhotoTextosController().handle);
router.delete('/deleteImageTextoInstitucional', ADMINisAuthenticated, new DeletePhotoTextoController().handle);
router.put('/updateImageTextoInstitucional', ADMINisAuthenticated, upload.single('file'), new UpdatePhotoTextoController().handle);
router.put('/updateTitleImageTextoInstitucional', ADMINisAuthenticated, new UpdateTitlePhotoTextoController().handle);
router.put('/updateOrderImageTextoInstitucional', ADMINisAuthenticated, new UpdateOrderPhotoTextoController().handle);
router.put('/updateDisponibilidadePhotoTexto', ADMINisAuthenticated, new UpdateDisponibilidadePhotoTextoController().handle);
router.put('/updatePosicaoImageTextoInstitucional', ADMINisAuthenticated, new UpdatePosicaoPhotoTextoController().handle);
router.get('/listExactPhotoTextoInstitucional', ADMINisAuthenticated, new ListExactPhotoTextoController().handle);
router.get('/listTextosInstitucionais', new ListAllTextosOrderAndPosicaoController().handle);

// -- ROTAS BANNER --
router.post('/createBanner', ADMINisAuthenticated, upload.single('file'), new CreateBannerController().handle);
router.put('/updateAllDateBanner', ADMINisAuthenticated, new UpdateAllDateBannerController().handle);
router.get('/pageListBanner', ADMINisAuthenticated, new PageListAllBannerController().handle);
router.delete('/deleteBanner', ADMINisAuthenticated, new DeleteBannerController().handle);
router.put('/updateBanner', ADMINisAuthenticated, upload.single('file'), new UpdateBannerController().handle);
router.put('/updatePosicaoBanner', ADMINisAuthenticated, new UpdatePosicaoBannerController().handle);
router.put('/updateStatusBanner', ADMINisAuthenticated, new StatusBannerController().handle);
router.get('/exactBanner', ADMINisAuthenticated, new ListExactBannerController().handle);
router.get('/activeBanner', new ActiveAllBannerController().handle);

// -- ROTAS CATEGORIAS --
router.post('/category', ADMINisAuthenticated, new CreateCategoryController().handle);
router.put('/categoryNameUpdate', ADMINisAuthenticated, new UpdateNameCategoryController().handle);
router.put('/updateOrderCategory', ADMINisAuthenticated, new UpdateOrderCategoryController().handle);
router.put('/updateDisponibilidadeCategory', ADMINisAuthenticated, new UpdateDisponibilidadeCategoryController().handle);
router.put('/updateImageCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageCategoryController().handle);
router.get('/allCategorysPage', ADMINisAuthenticated, new PageListAllCategorysController().handle);
router.get('/exactCategoryPage', ADMINisAuthenticated, new ExactPageListAllCategoryController().handle);
router.get('/findFirstCategory', ADMINisAuthenticated, new FindFirstCategoryController().handle);
router.put('/updateStatusRelation', ADMINisAuthenticated, new UpdateStatusRelationCategoryController().handle);
router.get('/exactCategory', ADMINisAuthenticated, new ListExactCategoryController().handle);
router.get('/findCategorys', ADMINisAuthenticated, new ListCategoryNameController().handle);
router.get('/listCategorysDisponivel', new ListCategoryController().handle);
router.get('/exactCategoryProducts', new ListExactCategoryNameController().handle);

// -- ROTAS PRODUTOS --
router.post('/createProduct', ADMINisAuthenticated, new CreateProductController().handle);
router.post('/photo', ADMINisAuthenticated, upload.single('file'), new PhotoProductController().handle);
router.put('/updateAllDateProduct', ADMINisAuthenticated, new UpdateAllDateProductController().handle);
router.delete('/deletePhoto', ADMINisAuthenticated, new DeletePhotoProductController().handle);
router.delete('/deleteAllPhotos', ADMINisAuthenticated, new DeleteAllPhotoProductController().handle);
router.put('/updatePhoto', ADMINisAuthenticated, upload.single('file'), new UpdatePhotoProductController().handle);
router.put('/updatePosicaoPhotoProduct', ADMINisAuthenticated, new UpdatePosicaoPhotoProductController().handle);
router.put('/updateOrderPhotoProduct', ADMINisAuthenticated, new UpdateOrderPhotoProductController().handle);
router.put('/updatePosicaoProduct', ADMINisAuthenticated, new UpdatePosicaoProductController().handle);
router.get('/allPhotosProducts', ADMINisAuthenticated, new AllPhotosProductController().handle);
router.get('/photos', ADMINisAuthenticated, new AllPhotosController().handle);
router.get('/allProduct', ADMINisAuthenticated, new AllProductController().handle);
router.get('/allExistProducts', ADMINisAuthenticated, new AllProductExistController().handle);
router.get('/allProductsPage', ADMINisAuthenticated && USERisAuthenticated, new PageListAllProductController().handle);
router.get('/exactProduct', ADMINisAuthenticated, new ListExactProductController().handle);
router.get('/findFirstProduct', ADMINisAuthenticated, new FindFirstProductController().handle);
router.delete('/deleteProduct', ADMINisAuthenticated, new DeleteProductController().handle);
router.put('/updateNameProduct', ADMINisAuthenticated, new UpdateNameProductController().handle);
router.get('/exportProduct', ADMINisAuthenticated, new ExportProductController().handle);
router.put('/diponibilidadeProduct', ADMINisAuthenticated, new DisponibilidadeDoProductController().handle);
router.put('/destaque', ADMINisAuthenticated, new UpdateProductDestqueController().handle);
router.put('/oferta', ADMINisAuthenticated, new UpdateProductOfertaController().handle);
router.get('/allProductsStore', new AllProductInStoreController().handle);
router.get('/allPhotosProductsStore', new AllPhotosProductInStoreController().handle);
router.get('/listProductsDestaque', new ListAllProductDestaqueController().handle);
router.get('/listProductsOfertas', new ListAllProductOfertaController().handle);
router.get('/exactProductPage', new ListExactProductNameController().handle);

// ROTAS RELACIONAMENTOS CATEGORIAS E PRODUTOS
router.post('/createRelation', ADMINisAuthenticated, new CreateRelationProductCategoryController().handle);
router.put('/updateRelationID', ADMINisAuthenticated, new UpdateRelationIDProductCategoryController().handle);
router.put('/updateCategoryIDrelation', ADMINisAuthenticated, new UpdateCategoryIDProductCategoryController().handle);
router.get('/findRelationCategoryProduct', ADMINisAuthenticated, new FindCategoryRelationBlockController().handle);
router.get('/pageRelationsCategorys', ADMINisAuthenticated, new PageRelationsCategorysController().handle);
router.get('/findIdsRelations', ADMINisAuthenticated, new FindIDRelationBlockController().handle);
router.get('/findLastIdRelations', ADMINisAuthenticated, new FindLastIDRelationBlockController().handle);
router.get('/findAllExactRelationID', ADMINisAuthenticated, new FindAllExactRelationBlocController().handle);
router.get('/findCategoryRelation', ADMINisAuthenticated, new FindCategoryIDRelationController().handle);
router.put('/updateOrderRelation', ADMINisAuthenticated, new UpdateOrderProductCategoryController().handle);
router.delete('/deleteRelation', ADMINisAuthenticated, new DeleteRelationProductCategoryController().handle);
router.delete('/deleteIDRelation', ADMINisAuthenticated, new DeleteRelationIDProductCategoryController().handle);
router.delete('/deleteNivelPrincipal', ADMINisAuthenticated, new DeleteRelationIDController().handle);
router.delete('/deleteRelationProductIds', ADMINisAuthenticated, new DeleteRelationProductIDController().handle);

// -- ROTAS AVALIACAO --
router.post('/avaliacao', ADMINisAuthenticated && USERisAuthenticated, new CreateAvaliacaoController().handle);
router.delete('/deleteAvaliacao', ADMINisAuthenticated, new DeleteAvaliacaoController().handle);
router.delete('/deleteAvaliacaoProductID', ADMINisAuthenticated, new DeleteAvaliacaoProductIDController().handle);
router.get('/allAvaliacao', ADMINisAuthenticated, new PageListAllAvaliacaoController().handle);
router.get('/pageAvaliacao', ADMINisAuthenticated, new PageListAllAvaliacaoProductIDController().handle);
router.get('/avaliacaoDados', ADMINisAuthenticated, new FindAvaliacaoController().handle);
router.put('/updateStatusAvaliacao', ADMINisAuthenticated, new UpdateStatusAvaliacaoController().handle);

// -- ROTAS VARIAÇÃO --
router.post('/variacao', ADMINisAuthenticated, new CreateVariacaoController().handle);
router.delete('/deleteVariacao', ADMINisAuthenticated, new DeleteVariacaoController().handle);
router.put('/updateAllDateVariacao', ADMINisAuthenticated, new UpdateAllDateVariacaoController().handle);
router.put('/updateNameVariacao', ADMINisAuthenticated, new UpdateNameVariacaoController().handle);
router.put('/updatePosicaoVariacao', ADMINisAuthenticated, new UpdatePosicaoVariacaoController().handle);
router.put('/updateOrderVariacao', ADMINisAuthenticated, new UpdateOrderVariacaoController().handle);
router.get('/allVariacaoPage', ADMINisAuthenticated && USERisAuthenticated, new PageListAllVariacaoController().handle);
router.get('/variacoesProduct', ADMINisAuthenticated, new AllVariacoesProductController().handle);
router.get('/variacoes', ADMINisAuthenticated, new AllVariacoesController().handle);
router.get('/exactVariacao', ADMINisAuthenticated, new ListExactVariacaoController().handle);
router.get('/allPhotosVariacoes', ADMINisAuthenticated, new AllPhotosVariacoesController().handle);
router.post('/photoVariante', ADMINisAuthenticated, upload.single('file'), new PhotoVariacaoController().handle);
router.delete('/deletePhotoVariacao', ADMINisAuthenticated, new DeletePhotoVariacaoController().handle);
router.delete('/deleteAllPhotosVariacao', ADMINisAuthenticated, new DeleteALLPhotoVariacaoProductController().handle);
router.delete('/deleteAllVariacaoProduct', ADMINisAuthenticated, new DeleteAllVariacaoProductController().handle);
router.delete('/deleteVariacaoAllPhotos', ADMINisAuthenticated, new DeleteALLPhotoVariacaoController().handle);
router.get('/photosVariacao', ADMINisAuthenticated, new AllPhotosVariacaoController().handle);
router.put('/updateOrderPhotoVariacao', ADMINisAuthenticated, new UpdateOrderPhotoVariacaoController().handle);
router.put('/updatePosicaoPhotoVariacao', ADMINisAuthenticated, new UpdatePosicaoPhotoVariacaoController().handle);
router.put('/updateDisponibilidadeVariacao', ADMINisAuthenticated, new UpdateDisponibilidadeVariacaoController().handle);
router.put('/freteGratisVariacao', ADMINisAuthenticated, new FreteGratisVariacaoController().handle);
router.put('/destaqueVariacao', ADMINisAuthenticated, new UpdateVariacaoDestqueController().handle);
router.put('/ofertaVariacao', ADMINisAuthenticated, new UpdateVariacaoOfertaController().handle);
router.get('/listVariacaoDestaque', new ListAllVariacaoDestaqueController().handle);
router.get('/listVariacaoOfertas', new ListAllVariacaoOfertaController().handle);
router.get('/exactVariacaoPage', new ListExactVariacaoNameController().handle);

// -- ROTAS NEWSLETTERS --
router.post('/createNewsletter', new CreateNewslettersController().handle);
router.delete('/deleteNewsletter', ADMINisAuthenticated, new DeleteNewslettersController().handle);
router.get('/listNewsletter', ADMINisAuthenticated, new ListNewslettersController().handle);
router.get('/listExactNewsletter', ADMINisAuthenticated, new ListExactNewslettersController().handle);
router.get('/pageNewsletter', ADMINisAuthenticated, new PageListAllNewslettersController().handle);
router.get('/exportNews', ADMINisAuthenticated, new ExportNewslettersController().handle);

// -- ROTAS CONTATOS --
router.post('/createContato', new CreateContatoController().handle);
router.delete('/deleteContato', ADMINisAuthenticated, new DeleteContatoController().handle);
router.get('/listContato', ADMINisAuthenticated, new ListContatoController().handle);
router.get('/listExactContato', ADMINisAuthenticated, new ListExactContatoController().handle);
router.get('/pageContato', ADMINisAuthenticated, new PageListAllContatoController().handle);
router.get('/exportContatos', ADMINisAuthenticated, new ExportContatoController().handle);

// -- ROTAS PEDIDO --
router.post('/carrinho', new CreateCarrinhoController().handle);
router.post('/itemInCarrinho', new CreateItemInCarrinhoController().handle);
router.post('/carrinhoItem', new CreateCarrinhoSemFreteController().handle);
router.post('/pedido', ADMINisAuthenticated && USERisAuthenticated, new CreatePedidoController().handle);
router.put('/updatePedidoCarrinho', ADMINisAuthenticated && USERisAuthenticated, new UpdatePedidoCarrinhoController().handle);
router.get('/allPedidosPageUser', ADMINisAuthenticated && USERisAuthenticated, new PageAllPedidosUserController().handle);
router.get('/allPedidosPage', ADMINisAuthenticated, new PageAllPedidosController().handle);
router.get('/exactPedidoUser', ADMINisAuthenticated && USERisAuthenticated, new ExactPedidoUserController().handle);
router.delete('/deleteCarrinho', ADMINisAuthenticated && USERisAuthenticated, new DeleteCarrinhoController().handle);
router.put('/cancelarPedidoAdmin', ADMINisAuthenticated, new CancelarPedidoAdminController().handle);
router.put('/cancelarPedidoCliente', ADMINisAuthenticated && USERisAuthenticated, new CancelarPedidoClienteController().handle);
router.put('/entregaPedidoEndereco', ADMINisAuthenticated && USERisAuthenticated, new EntregaEnderecoMesmoPedidoController().handle);
router.post('/entregaPedido', new CreateEntregaController().handle);
router.delete('/deleteEntrega', new DeleteEntregaController().handle);
router.get('/allEntregaPedido', new PageAllListEntregaController().handle);
router.post('/item', new CreateItemController().handle);
router.get('/allItemPage', new PageAllCarrinhoController().handle);
router.delete('/deleteItem', new DeleteItemController().handle);
router.post('/pagamento', ADMINisAuthenticated && USERisAuthenticated, new CreatePagamentoController().handle);
router.delete('/deletePagamento', ADMINisAuthenticated && USERisAuthenticated, new DeletePagamentoController().handle);
router.put('/updatePagamento', ADMINisAuthenticated && USERisAuthenticated, new UpdatePagamentoController().handle);

// -- ROTAS ENVIAR EMAILS --
router.get('/sendlistuser', ADMINisAuthenticated, new EmailExportUsersController().handle);
router.get('/sendlistproduct', ADMINisAuthenticated, new EmailExportProductsController().handle);
router.get('/sendEmailNewsletters', ADMINisAuthenticated, new EmailExportNewslettersController().handle);
router.get('/sendEmailContatos', ADMINisAuthenticated, new EmailExportContatoController().handle);


export { router };
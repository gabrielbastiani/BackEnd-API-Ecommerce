import { Router } from 'express';
import multer from 'multer';


// -- ROTAS USER --
import { CreateUserController } from './controllers/user/CreateUserController';
import { AdminRoleUserController } from './controllers/user/AdminRoleUserController';
import { AdminCreateUserController } from './controllers/user/AdminCreateUserController';
import { AuthAdminController } from './controllers/user/AuthAdminController';
import { AuthUserController } from './controllers/user/AuthUserController';
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
import { NewslatterUserController } from './controllers/user/NewslatterUserController';
import { PageListAllUsersController } from './controllers/user/PageListAllUsersController';
import { ExportUsersController } from './controllers/user/ExportUsersController';
import { UpdateUserNameController } from './controllers/user/UpdateUserNameController';
import { UpdateUserEmailController } from './controllers/user/UpdateUserEmailController';
import { UpdateUserCpfController } from './controllers/user/UpdateUserCpfController';
import { UpdateUserCnpjController } from './controllers/user/UpdateUserCnpjController';
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
import { ListExactUserController } from './controllers/user/ListExactUserController';

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
import { UserLojaController } from './controllers/loja/UserLojaController';
import { UserCreateLojaController } from './controllers/loja/UserCreateLojaController';
import { DeleteLojaController } from './controllers/loja/DeleteLojaController';
import { UpdateLogoLojaController } from './controllers/loja/UpdateLogoLojaController';
import { UpdateAllDateLojaController } from './controllers/loja/UpdateAllDateLojaController';

// -- ROTAS CATEGORIAS --
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateNameCategoryController } from './controllers/category/UpdateNameCategoryController';
import { UpdateCodigoCategoryController } from './controllers/category/UpdateCodigoCategoryController';
import { UpdateDisponibilidadeCategoryController } from './controllers/category/UpdateDisponibilidadeCategoryController';
import { PageListAllCategorysController } from './controllers/category/PageListAllCategorysController';
import { ExactCategoryProductController } from './controllers/product/ExactCategoryProductController';
import { ExactPageListAllCategoryController } from './controllers/category/ExactPageListAllCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListExactCategoryController } from './controllers/category/ListExactCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';

// -- ROTAS PRODUTOS --
import { CreateProductController } from './controllers/product/CreateProductController';
import { PhotoProductController } from './controllers/product/photoproduct/PhotoProductController';
import { UpdatePhotoProductController } from './controllers/product/photoproduct/UpdatePhotoProductController';
import { AllPhotosProductController } from './controllers/product/photoproduct/AllPhotosProductController';
import { AllPhotosController } from './controllers/product/photoproduct/AllPhotosController';
import { AllProductController } from './controllers/product/AllProductController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';
import { ExactPageListAllProductController } from './controllers/product/ExactPageListAllProductController';
import { ListExactProductController } from './controllers/product/ListExactProductController';
import { DeletePhotoProductController } from './controllers/product/photoproduct/DeletePhotoProductController';
import { DeleteAllPhotoProductController } from './controllers/product/photoproduct/DeleteAllPhotoProductController';
import { DeleteAllVariacaoProductController } from './controllers/variacao/DeleteAllVariacaoProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { DeleteALLPhotoVariacaoController } from './controllers/variacao/photoVariacao/DeleteALLPhotoVariacaoController';
import { UpdateNameProductController } from './controllers/product/UpdateNameProductController';
import { UpdateAllDescriptionProductController } from './controllers/product/UpdateAllDescriptionProductController';
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
import { UpdateCategoryIDProductController } from './controllers/product/UpdateCategoryIDProductController';
import { UpdateCategoryNameProductController } from './controllers/product/UpdateCategoryNameProductController';
import { UpdateLojaProductController } from './controllers/product/UpdateLojaProductController';

// -- ROTAS AVALIACAO --
import { CreateAvaliacaoController } from './controllers/avaliacao/CreateAvaliacaoController';
import { DeleteAvaliacaoController } from './controllers/avaliacao/DeleteAvaliacaoController';
import { PageListAllAvaliacaoController } from './controllers/avaliacao/PageListAllAvaliacaoController';
import { FindAvaliacaoController } from './controllers/avaliacao/FindAvaliacaoController';

// -- ROTAS VARIA????O --
import { CreateVariacaoController } from './controllers/variacao/CreateVariacaoController';
import { DeleteVariacaoController } from './controllers/variacao/DeleteVariacaoController';
import { PageListAllVariacaoController } from './controllers/variacao/PageListAllVariacaoController';
import { ListExactVariacaoController } from './controllers/variacao/ListExactVariacaoController';
import { AllVariacoesProductController } from './controllers/variacao/AllVariacoesProductController';
import { AllVariacoesController } from './controllers/variacao/AllVariacoesController';
import { AllPhotosVariacaoController } from './controllers/variacao/photoVariacao/AllPhotosVariacaoController';
import { AllPhotosVariacoesController } from './controllers/variacao/photoVariacao/AllPhotosVariacoesController';
import { PhotoVariacaoController } from './controllers/variacao/photoVariacao/PhotoVariacaoController';
import { DeletePhotoVariacaoController } from './controllers/variacao/photoVariacao/DeletePhotoVariacaoController';
import { DeleteALLPhotoVariacaoProductController } from './controllers/variacao/photoVariacao/DeleteALLPhotoVariacaoProductController';
import { UpdateAllDescriptionVariacaoController } from './controllers/variacao/UpdateAllDescriptionVariacaoController';
import { UpdateNameVariacaoController } from './controllers/variacao/UpdateNameVariacaoController';
import { UpdateDescriptionVariacao1Controller } from './controllers/variacao/UpdateDescriptionVariacao1Controller';
import { UpdateDescriptionVariacao2Controller } from './controllers/variacao/UpdateDescriptionVariacao2Controller';
import { UpdateDescriptionVariacao3Controller } from './controllers/variacao/UpdateDescriptionVariacao3Controller';
import { UpdateDescriptionVariacao4Controller } from './controllers/variacao/UpdateDescriptionVariacao4Controller';
import { UpdateDescriptionVariacao5Controller } from './controllers/variacao/UpdateDescriptionVariacao5Controller';
import { UpdateDescriptionVariacao6Controller } from './controllers/variacao/UpdateDescriptionVariacao6Controller';
import { UpdatePriceVariacaoController } from './controllers/variacao/UpdatePriceVariacaoController';
import { UpdateSkuVariacaoController } from './controllers/variacao/UpdateSkuVariacaoController';
import { UpdateEstoqueVariacaoController } from './controllers/variacao/UpdateEstoqueVariacaoController';
import { UpdatePesoVariacaoController } from './controllers/variacao/UpdatePesoVariacaoController';
import { UpdateLarguraVariacaoController } from './controllers/variacao/UpdateLarguraVariacaoController';
import { UpdateAlturaVariacaoController } from './controllers/variacao/UpdateAlturaVariacaoController';
import { UpdateProfundidadeVariacaoController } from './controllers/variacao/UpdateProfundidadeVariacaoController';
import { UpdateDisponibilidadeVariacaoController } from './controllers/variacao/DisponibilidadeVariacaoController';
import { UpdatePromocaoVariacaoController } from './controllers/variacao/UpdatePromocaoVariacaoController';
import { FreteGratisVariacaoController } from './controllers/variacao/FreteGratisVariacaoController';
import { UpdateProductIdVariacaoController } from './controllers/variacao/UpdateProductIdVariacaoController';
import { UpdateLojaIdVariacaoController } from './controllers/variacao/UpdateLojaIdVariacaoController';

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




import { ADMINisAuthenticated } from './middlewares/ADMINisAuthenticated';
import { USERisAuthenticated } from './middlewares/USERisAuthenticated';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROTAS USER --
router.post('/createUser', new CreateUserController().handle);
router.put('/userAdmin', ADMINisAuthenticated, new AdminRoleUserController().handle);
router.post('/createAdmin', new AdminCreateUserController().handle);
router.post('/sessionAdmin', new AuthAdminController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', ADMINisAuthenticated && USERisAuthenticated, new DetailuserController().handle);
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
router.put('/newslatter', new NewslatterUserController().handle);
router.get('/allUsersPage', ADMINisAuthenticated, new PageListAllUsersController().handle);
router.get('/exportUser', ADMINisAuthenticated, new ExportUsersController().handle);
router.put('/nameUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserNameController().handle);
router.put('/emailUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserEmailController().handle);
router.put('/cpfUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserCpfController().handle);
router.put('/cnpjUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserCnpjController().handle);
router.put('/inscricaoEstadualUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserInscricaoEstadualController().handle);
router.put('/phoneUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserPhoneController().handle);
router.put('/dataDeNascimentoUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserDataDeNascimentoController().handle);
router.put('/generoUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserGeneroController().handle);
router.put('/newslatterUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserNewslatterController().handle);
router.put('/ruaUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserRuaController().handle);
router.put('/numeroUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserNumeroController().handle);
router.put('/bairroUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserBairroController().handle);
router.put('/complementoUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserComplementoController().handle);
router.put('/cepUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserCepController().handle);
router.put('/cityUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserCityController().handle);
router.put('/estadoUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserEstadoController().handle);
router.put('/lojaidUserUpdate', ADMINisAuthenticated, new UpdateUserLojaController().handle);

// -- ROTAS LOJA --
router.post('/loja', ADMINisAuthenticated, upload.single('file'), new CreateLojaController().handle);
router.put('/nameLojaUpdate', ADMINisAuthenticated, new UpdateNameLojaController().handle);
router.put('/cnpjLojaUpdate', ADMINisAuthenticated, new UpdateCNPJLojaController().handle);
router.put('/emailLojaUpdate', ADMINisAuthenticated, new UpdateEmailLojaController().handle);
router.put('/phoneLojaUpdate', ADMINisAuthenticated, new UpdatePhoneLojaController().handle);
router.put('/ruaLojaUpdate', ADMINisAuthenticated, new UpdateRuaLojaController().handle);
router.put('/numeroLojaUpdate', ADMINisAuthenticated, new UpdateNumeroLojaController().handle);
router.put('/bairroLojaUpdate', ADMINisAuthenticated, new UpdateBairroLojaController().handle);
router.put('/complementoLojaUpdate', ADMINisAuthenticated, new UpdateComplementoLojaController().handle);
router.put('/cepLojaUpdate', ADMINisAuthenticated, new UpdateCEPLojaController().handle);
router.put('/cidadeLojaUpdate', ADMINisAuthenticated, new UpdateCidadeLojaController().handle);
router.put('/estadoLojaUpdate', ADMINisAuthenticated, new UpdateEstadoLojaController().handle);
router.get('/allLojasPage', ADMINisAuthenticated, new PageListAllLojaController().handle);
router.get('/userLoja', ADMINisAuthenticated, new UserLojaController().handle);
router.get('/lojaCreateFind', ADMINisAuthenticated, new UserCreateLojaController().handle);
router.delete('/deleteLoja', ADMINisAuthenticated, new DeleteLojaController().handle);
router.put('/logoLojaUpdate', ADMINisAuthenticated, upload.single('file'), new UpdateLogoLojaController().handle);
router.put('/updateAllDateLoja', ADMINisAuthenticated, new UpdateAllDateLojaController().handle);

// -- ROTAS CATEGORIAS --
router.post('/category', ADMINisAuthenticated, new CreateCategoryController().handle);
router.put('/categoryNameUpdate', ADMINisAuthenticated, new UpdateNameCategoryController().handle);
router.put('/categoryCodigoUpdate', ADMINisAuthenticated, new UpdateCodigoCategoryController().handle);
router.put('/updateDisponibilidadeCategory', ADMINisAuthenticated, new UpdateDisponibilidadeCategoryController().handle);
router.get('/allCategorysPage', ADMINisAuthenticated, new PageListAllCategorysController().handle);
router.get('/exactCategoryPage', ADMINisAuthenticated, new ExactPageListAllCategoryController().handle);
router.get('/allCategorys', new ListCategoryController().handle);
router.get('/exactCategory', ADMINisAuthenticated, new ListExactCategoryController().handle);
router.delete('/deleteCategory', ADMINisAuthenticated, new DeleteCategoryController().handle);

// -- ROTAS PRODUTOS --
router.post('/createProduct', ADMINisAuthenticated, new CreateProductController().handle);
router.post('/photo', ADMINisAuthenticated, upload.single('file'), new PhotoProductController().handle);
router.delete('/deletePhoto', ADMINisAuthenticated, new DeletePhotoProductController().handle);
router.delete('/deleteAllPhotos', ADMINisAuthenticated, new DeleteAllPhotoProductController().handle);
router.put('/updatePhoto', ADMINisAuthenticated, upload.single('file'), new UpdatePhotoProductController().handle);
router.get('/allPhotosProducts', ADMINisAuthenticated, new AllPhotosProductController().handle);
router.get('/photos', ADMINisAuthenticated, new AllPhotosController().handle);
router.get('/allProduct', ADMINisAuthenticated, new AllProductController().handle);
router.get('/allProductsPage', ADMINisAuthenticated && USERisAuthenticated, new PageListAllProductController().handle);
router.get('/allProductsPageExact', ADMINisAuthenticated, new ExactPageListAllProductController().handle);
router.get('/productExactCategory', ADMINisAuthenticated, new ExactCategoryProductController().handle);
router.get('/exactProduct', ADMINisAuthenticated, new ListExactProductController().handle);
router.delete('/deleteProduct', ADMINisAuthenticated, new DeleteProductController().handle);
router.put('/updateNameProduct', ADMINisAuthenticated, new UpdateNameProductController().handle);
router.put('/updateAllDescription', ADMINisAuthenticated, new UpdateAllDescriptionProductController().handle);
router.put('/updateDescription1', ADMINisAuthenticated, new Update1DescriptionProductController().handle);
router.put('/updateDescription2', ADMINisAuthenticated, new Update2DescriptionProductController().handle);
router.put('/updateDescription3', ADMINisAuthenticated, new Update3DescriptionProductController().handle);
router.put('/updateDescription4', ADMINisAuthenticated, new Update4DescriptionProductController().handle);
router.put('/updateDescription5', ADMINisAuthenticated, new Update5DescriptionProductController().handle);
router.put('/updateDescription6', ADMINisAuthenticated, new Update6DescriptionProductController().handle);
router.put('/updatePrice', ADMINisAuthenticated, new UpdatePriceProductController().handle);
router.put('/updateSKU', ADMINisAuthenticated, new UpdateSKUProductController().handle);
router.put('/updateEstoque', ADMINisAuthenticated, new UpdateEstoqueProductController().handle);
router.put('/updatePeso', ADMINisAuthenticated, new UpdatePesoProductController().handle);
router.put('/updateLargura', ADMINisAuthenticated, new UpdateLarguraProductController().handle);
router.put('/updateAltura', ADMINisAuthenticated, new UpdateAlturaProductController().handle);
router.put('/updateProfundidade', ADMINisAuthenticated, new UpdateProfundidadeProductController().handle);
router.put('/productPromocao', ADMINisAuthenticated, new PromocaoProductController().handle);
router.get('/exportProduct', ADMINisAuthenticated, new ExportProductController().handle);
router.put('/diponibilidadeProduct', ADMINisAuthenticated, new DisponibilidadeDoProductController().handle);
router.put('/updateCategory', ADMINisAuthenticated, new UpdateCategoryIDProductController().handle);
router.put('/updateCategoryName', ADMINisAuthenticated, new UpdateCategoryNameProductController().handle);
router.put('/updateLoja', ADMINisAuthenticated, new UpdateLojaProductController().handle);

// -- ROTAS AVALIACAO --
router.post('/avaliacao', ADMINisAuthenticated && USERisAuthenticated, new CreateAvaliacaoController().handle);
router.delete('/deleteAvaliacao', ADMINisAuthenticated, new DeleteAvaliacaoController().handle);
router.get('/allAvaliacao', new PageListAllAvaliacaoController().handle);
router.get('/avaliacaoDados', ADMINisAuthenticated, new FindAvaliacaoController().handle);

// -- ROTAS VARIA????O --
router.post('/variacao', ADMINisAuthenticated, new CreateVariacaoController().handle);
router.delete('/deleteVariacao', ADMINisAuthenticated, new DeleteVariacaoController().handle);
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
router.put('/updateNameVariacao', ADMINisAuthenticated, new UpdateNameVariacaoController().handle);
router.put('/updateAllDescriptionVariacao', ADMINisAuthenticated, new UpdateAllDescriptionVariacaoController().handle);
router.put('/updateDescriptionVariacao1', ADMINisAuthenticated, new UpdateDescriptionVariacao1Controller().handle);
router.put('/updateDescriptionVariacao2', ADMINisAuthenticated, new UpdateDescriptionVariacao2Controller().handle);
router.put('/updateDescriptionVariacao3', ADMINisAuthenticated, new UpdateDescriptionVariacao3Controller().handle);
router.put('/updateDescriptionVariacao4', ADMINisAuthenticated, new UpdateDescriptionVariacao4Controller().handle);
router.put('/updateDescriptionVariacao5', ADMINisAuthenticated, new UpdateDescriptionVariacao5Controller().handle);
router.put('/updateDescriptionVariacao6', ADMINisAuthenticated, new UpdateDescriptionVariacao6Controller().handle);
router.put('/updatePriceVariacao', ADMINisAuthenticated, new UpdatePriceVariacaoController().handle);
router.put('/updateSkuVariacao', ADMINisAuthenticated, new UpdateSkuVariacaoController().handle);
router.put('/updateEstoqueVariacao', ADMINisAuthenticated, new UpdateEstoqueVariacaoController().handle);
router.put('/updatePesoVariacao', ADMINisAuthenticated, new UpdatePesoVariacaoController().handle);
router.put('/updateLarguraVariacao', ADMINisAuthenticated, new UpdateLarguraVariacaoController().handle);
router.put('/updateAlturaVariacao', ADMINisAuthenticated, new UpdateAlturaVariacaoController().handle);
router.put('/updateProfundidadeVariacao', ADMINisAuthenticated, new UpdateProfundidadeVariacaoController().handle);
router.put('/updateDisponibilidadeVariacao', ADMINisAuthenticated, new UpdateDisponibilidadeVariacaoController().handle);
router.put('/updatePromocaoVariacao', ADMINisAuthenticated, new UpdatePromocaoVariacaoController().handle);
router.put('/freteGratisVariacao', ADMINisAuthenticated, new FreteGratisVariacaoController().handle);
router.put('/updateProductIdVariacao', ADMINisAuthenticated, new UpdateProductIdVariacaoController().handle);
router.put('/updateLojaIdVariacao', ADMINisAuthenticated, new UpdateLojaIdVariacaoController().handle);

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


export { router };
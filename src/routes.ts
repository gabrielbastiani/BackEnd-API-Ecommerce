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
import { PageListAllAvaliacaoController } from './controllers/avaliacao/PageListAllAvaliacaoController';

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
import { UpdateSkuVariacaoController } from './controllers/variacao/UpdateSkuVariacaoController';
import { UpdateEstoqueVariacaoController } from './controllers/variacao/UpdateEstoqueVariacaoController';
import { UpdatePesoVariacaoController } from './controllers/variacao/UpdatePesoVariacaoController';
import { UpdateLarguraVariacaoController } from './controllers/variacao/UpdateLarguraVariacaoController';
import { UpdateAlturaVariacaoController } from './controllers/variacao/UpdateAlturaVariacaoController';
import { UpdateProfundidadeVariacaoController } from './controllers/variacao/UpdateProfundidadeVariacaoController';
import { UpdateDisponibilidadeVariacaoController } from './controllers/variacao/UpdateDisponibilidadeVariacaoController';
import { UpdatePromocaoVariacaoController } from './controllers/variacao/UpdatePromocaoVariacaoController';
import { UpdateEntregaVariacaoController } from './controllers/variacao/UpdateEntregaVariacaoController';
import { UpdateProductIdVariacaoController } from './controllers/variacao/UpdateProductIdVariacaoController';
import { UpdateLojaIdVariacaoController } from './controllers/variacao/UpdateLojaIdVariacaoController';

// -- ROTAS ENVIAR PEDIDO --
import { CreateCarrinhoController } from './controllers/pedido/carrinho/CreateCarrinhoController';
import { CreatePedidoController } from './controllers/pedido/CreatePedidoController';
import { UpdatePedidoCarrinhoController } from './controllers/pedido/carrinho/UpdatePedidoCarrinhoController';
import { PageAllPedidosUserController } from './controllers/pedido/PageAllPedidosUserController';
import { DeleteCarrinhoController } from './controllers/pedido/carrinho/DeleteCarrinhoController';
import { CancelarPedidoAdminController } from './controllers/pedido/CancelarPedidoAdminController';
import { CancelarPedidoClienteController } from './controllers/pedido/CancelarPedidoClienteController';
import { EntregaEnderecoMesmoPedidoController } from './controllers/pedido/EntregaEnderecoMesmoPedidoController';
import { CreateEntregaController } from './controllers/pedido/entrega/CreateEntregaController';
import { DeleteEntregaController } from './controllers/pedido/entrega/DeleteEntregaController';
import { PageAllListEntregaController } from './controllers/pedido/entrega/PageAllListEntregaController';

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
router.put('/authenticated', new AuthenticatedEmailUserController().handle);
router.put('/activeOrDesactiveUser', ADMINisAuthenticated, new ActiveOrDesactiveUserController().handle);
router.post('/recover', new EmailPasswordController().handle);
router.put('/recover', new RecoveryPasswordController().handle);
router.delete('/deleteUser', ADMINisAuthenticated, new DeleteUserController().handle);
router.put('/roleUser', new UserRoleUserController().handle);
router.put('/newslatter', new NewslatterUserController().handle);
router.get('/allUsersPage', ADMINisAuthenticated, new PageListAllUsersController().handle);
router.get('/exportUser', ADMINisAuthenticated, new ExportUsersController().handle);
router.put('/nameUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserNameController().handle);
router.put('/emailUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserEmailController().handle);
router.put('/cpfOrConpjUserUpdate', ADMINisAuthenticated && USERisAuthenticated, new UpdateUserCpfOrCnpjController().handle);
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
router.post('/loja', new CreateLojaController().handle);
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
router.delete('/deleteLoja', ADMINisAuthenticated, new DeleteLojaController().handle);

// -- ROTAS CATEGORIAS --
router.post('/category', ADMINisAuthenticated, new CreateCategoryController().handle);
router.put('/categoryNameUpdate', ADMINisAuthenticated, new UpdateNameCategoryController().handle);
router.put('/categoryCodigoUpdate', ADMINisAuthenticated, new UpdateCodigoCategoryController().handle);
router.put('/updateDisponibilidadeCategory', ADMINisAuthenticated, new UpdateDisponibilidadeCategoryController().handle);
router.get('/allCategorysPage', ADMINisAuthenticated, new PageListAllCategorysController().handle);
router.get('/allCategorys', new ListCategoryController().handle);
router.get('/exactCategory', ADMINisAuthenticated, new ListExactCategoryController().handle);
router.delete('/deleteCategory', ADMINisAuthenticated, new DeleteCategoryController().handle);

// -- ROTAS PRODUTOS --
router.post('/createProduct', ADMINisAuthenticated, new CreateProductController().handle);
router.post('/photo', ADMINisAuthenticated, upload.single('file'), new PhotoProductController().handle);
router.delete('/deletePhoto', ADMINisAuthenticated, new DeletePhotoProductController().handle);
router.get('/allProductsPage', ADMINisAuthenticated && USERisAuthenticated, new PageListAllProductController().handle);
router.delete('/deleteProduct', ADMINisAuthenticated, new DeleteProductController().handle);
router.put('/updateNameProduct', ADMINisAuthenticated, new UpdateNameProductController().handle);
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
router.put('/updateCategory', ADMINisAuthenticated, new UpdateCategoryProductController().handle);
router.put('/updateLoja', ADMINisAuthenticated, new UpdateLojaProductController().handle);

// -- ROTAS AVALIACAO --
router.post('/avaliacao', ADMINisAuthenticated && USERisAuthenticated, new CreateAvaliacaoController().handle);
router.delete('/deleteAvaliacao', ADMINisAuthenticated, new DeleteAvaliacaoController().handle);
router.get('/allAvaliacao', new PageListAllAvaliacaoController().handle);

// -- ROTAS VARIAÇÃO --
router.post('/variacao', ADMINisAuthenticated, new CreateVariacaoController().handle);
router.delete('/deleteVariacao', ADMINisAuthenticated, new DeleteVariacaoController().handle);
router.get('/allVariacaoPage', ADMINisAuthenticated && USERisAuthenticated, new PageListAllVariacaoController().handle);
router.post('/photoVariante', ADMINisAuthenticated, upload.single('file'), new PhotoVariacaoController().handle);
router.delete('/deletePhotoVariacao', ADMINisAuthenticated, new DeletePhotoVariacaoController().handle);
router.put('/updateNameVariacao', ADMINisAuthenticated, new UpdateNameVariacaoController().handle);
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
router.put('/updateEntregaVariacao', ADMINisAuthenticated, new UpdateEntregaVariacaoController().handle);
router.put('/updateProductIdVariacao', ADMINisAuthenticated, new UpdateProductIdVariacaoController().handle);
router.put('/updateLojaIdVariacao', ADMINisAuthenticated, new UpdateLojaIdVariacaoController().handle);

// -- ROTAS PEDIDO --
router.post('/carrinho', new CreateCarrinhoController().handle);
router.post('/pedido', ADMINisAuthenticated && USERisAuthenticated, new CreatePedidoController().handle);
router.put('/updatePedidoCarrinho', ADMINisAuthenticated && USERisAuthenticated, new UpdatePedidoCarrinhoController().handle);
router.get('/allPedidosPage', ADMINisAuthenticated && USERisAuthenticated, new PageAllPedidosUserController().handle);
router.delete('/deleteCarrinho', ADMINisAuthenticated && USERisAuthenticated, new DeleteCarrinhoController().handle);
router.put('/cancelarPedidoAdmin', ADMINisAuthenticated, new CancelarPedidoAdminController().handle);
router.put('/cancelarPedidoCliente', USERisAuthenticated, new CancelarPedidoClienteController().handle);
router.put('/entregaPedidoEndereco', ADMINisAuthenticated && USERisAuthenticated, new EntregaEnderecoMesmoPedidoController().handle);
router.post('/entregaPedido', new CreateEntregaController().handle);
router.delete('/deleteEntrega', new DeleteEntregaController().handle);
router.get('/allEntregaPedido', new PageAllListEntregaController().handle);

// -- ROTAS ENVIAR EMAILS --
router.get('/sendlistuser', ADMINisAuthenticated, new EmailExportUsersController().handle);
router.get('/sendlistproduct', ADMINisAuthenticated, new EmailExportProductsController().handle);


export { router };
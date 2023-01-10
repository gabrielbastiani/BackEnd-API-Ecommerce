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
import { UpdateUserNomeDoRecebedorController } from './controllers/user/UpdateUserNomeDoRecebedorController';
import { UpdateUserAdressController } from './controllers/user/UpdateUserAdressController';
import { UpdateUserCepController } from './controllers/user/UpdateUserCepController';
import { UpdateUserCityController } from './controllers/user/UpdateUserCityController';
import { UpdateUserEstadoController } from './controllers/user/UpdateUserEstadoController';
import { UpdateUserPaisController } from './controllers/user/UpdateUserPaisController';

// -- ROTAS CATEGORIAS --
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateNameCategoryController } from './controllers/category/UpdateNameCategoryController';
import { PageListAllCategorysController } from './controllers/category/PageListAllCategorysController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListExactCategoryController } from './controllers/category/ListExactCategoryController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';

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
import { UpdateAvaliacaoProductController } from './controllers/product/UpdateAvaliacaoProductController';
import { UpdatePesoProductController } from './controllers/product/UpdatePesoProductController';
import { UpdateLarguraProductController } from './controllers/product/UpdateLarguraProductController';
import { UpdateAlturaProductController } from './controllers/product/UpdateAlturaProductController';
import { UpdateProfundidadeProductController } from './controllers/product/UpdateProfundidadeProductController';
import { PromocaoProductController } from './controllers/product/PromocaoProductController';
import { FreteGratisProductController } from './controllers/product/FreteGratisProductController';
import { ExportProductController } from './controllers/product/ExportProductController';

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
router.put('/nomeDoRecebedorUserUpdate', isAuthenticated, new UpdateUserNomeDoRecebedorController().handle);
router.put('/adressUserUpdate', isAuthenticated, new UpdateUserAdressController().handle);
router.put('/cepUserUpdate', isAuthenticated, new UpdateUserCepController().handle);
router.put('/cityUserUpdate', isAuthenticated, new UpdateUserCityController().handle);
router.put('/estadoUserUpdate', isAuthenticated, new UpdateUserEstadoController().handle);
router.put('/paisUserUpdate', isAuthenticated, new UpdateUserPaisController().handle);

// -- ROTAS CATEGORIAS --
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.put('/categoryUpdate', isAuthenticated, new UpdateNameCategoryController().handle);
router.get('/allCategorysPage', isAuthenticated, new PageListAllCategorysController().handle);
router.get('/allCategorys', new ListCategoryController().handle);
router.get('/exactCategory', isAuthenticated, new ListExactCategoryController().handle);
router.put('/categoryUpdate', isAuthenticated, new UpdateCategoryController().handle);

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
router.put('/updateAvaliacao', isAuthenticated, new UpdateAvaliacaoProductController().handle);
router.put('/updatePeso', isAuthenticated, new UpdatePesoProductController().handle);
router.put('/updateLargura', isAuthenticated, new UpdateLarguraProductController().handle);
router.put('/updateAltura', isAuthenticated, new UpdateAlturaProductController().handle);
router.put('/updateProfundidade', isAuthenticated, new UpdateProfundidadeProductController().handle);
router.put('/activeOrDesactivePromocao', isAuthenticated, new PromocaoProductController().handle);
router.put('/activeOrDesactiveFreteGratis', isAuthenticated, new FreteGratisProductController().handle);
router.get('/exportProduct', isAuthenticated, new ExportProductController().handle);

// -- ROTAS ENVIAR EMAILS --
router.get('/sendlistuser', isAuthenticated, new EmailExportUsersController().handle);
router.get('/sendlistproduct', isAuthenticated, new EmailExportProductsController().handle);


export { router };
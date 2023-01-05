import { Router } from 'express';
import multer from 'multer';


// -- ROTAS USER --
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { AuthenticatedEmailUserController } from './controllers/user/AuthenticatedEmailUserController';
import { DesativarlUserController } from './controllers/user/DesativarlUserController';
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

// -- ROTAS PRODUTOS --
import { CreateProductController } from './controllers/product/CreateProductController';
import { PhotoProductController } from './controllers/product/photoproduct/PhotoProductController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';

// -- ROTAS ENVIAR EMAILS --
import { EmailExportUsersController } from './controllers/sendEmails/EmailExportUsersController';




import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROTAS USER --
router.post('/createUser', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);
router.put('/authenticated', new AuthenticatedEmailUserController().handle);
router.put('/disabledUser', isAuthenticated, new DesativarlUserController().handle);
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

// -- ROTAS PRODUTOS --
router.post('/createProduct', isAuthenticated, new CreateProductController().handle);
router.post('/photo', isAuthenticated, upload.single('file'), new PhotoProductController().handle);
router.get('/allProductsPage', isAuthenticated, new PageListAllProductController().handle);


// -- ROTAS ENVIAR EMAILS --
router.get('/sendlistuser', isAuthenticated, new EmailExportUsersController().handle);


export { router };
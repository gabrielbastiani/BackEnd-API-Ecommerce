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
router.get('/allUsers', isAuthenticated, new PageListAllUsersController().handle);


export { router };
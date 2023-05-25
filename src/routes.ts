import { Router } from 'express';
import multer from 'multer';

// -- ROUTES ADMIN --
import { ActiveOrDesactiveAdminController } from './controllers/users/admin/ActiveOrDesactiveAdminController';
import { AdminCreateController } from './controllers/users/admin/AdminCreateController';
import { AdminRoleController } from './controllers/users/admin/AdminRoleController';
import { AuthAdminController } from './controllers/users/admin/AuthAdminController';
import { AuthenticatedEmailAdminController } from './controllers/users/admin/AuthenticatedEmailAdminController';
import { DeleteAdminOrEmployeController } from './controllers/users/admin/DeleteAdminOrEmployeController';
import { DetailAdminController } from './controllers/users/admin/DetailAdminController';
import { ExportAdminController } from './controllers/users/admin/ExportAdminController';
import { ListExactAdminNameController } from './controllers/users/admin/ListExactAdminNameController';
import { ListExactAdminController } from './controllers/users/admin/ListExactAdminController';
import { PageListAllAdminsController } from './controllers/users/admin/PageListAllAdminsController';
import { UpdateAllDateAdminController } from './controllers/users/admin/UpdateAllDateAdminController';
import { AdminRoleEmployeeController } from './controllers/users/admin/AdminRoleEmployeeController';
import { AdminUpdateNameController } from './controllers/users/admin/AdminUpdateNameController';
import { DeleteAdminPasswordRecoveryIDController } from './controllers/users/admin/PasswordRecoveryAdmin/DeleteAdminPasswordRecoveryIDController';
import { FindAdminRecoveryIDController } from './controllers/users/admin/PasswordRecoveryAdmin/FindAdminRecoveryIDController';
import { RecoveryPasswordAdminController } from './controllers/users/admin/PasswordRecoveryAdmin/RecoveryPasswordAdminController';

// -- ROUTES CUSTOMER --
import { ActiveOrDesactiveCustomerController } from './controllers/users/customer/ActiveOrDesactiveCustomerController';
import { AuthCustomerController } from './controllers/users/customer/AuthCustomerController';
import { CreateCustomerController } from './controllers/users/customer/CreateCustomerController';
import { DeleteCustomerController } from './controllers/users/customer/DeleteCustomerController';
import { DetailCustomerController } from './controllers/users/customer/DetailCustomerController';
import { ExportCustomerController } from './controllers/users/customer/ExportCustomerController';
import { ListExactCustomerNameController } from './controllers/users/customer/ListExactCustomerNameController';
import { ListExactCustomerController } from './controllers/users/customer/ListExactCustomerController';
import { PageListAllCustomerController } from './controllers/users/customer/PageListAllCustomerController';
import { UpdateAllDateCustomerController } from './controllers/users/customer/UpdateAllDateCustomerController';
import { CustomerUpdateNameController } from './controllers/users/customer/CustomerUpdateNameController';
import { CustomerUpdateNewslatterController } from './controllers/users/customer/CustomerUpdateNewslatterController';
import { DeletePasswordRecoveryIDCustomerController } from './controllers/users/customer/PasswordRecoveryCustomer/DeletePasswordRecoveryIDCustomerController';
import { FindRecoveryIDCustomerController } from './controllers/users/customer/PasswordRecoveryCustomer/FindRecoveryIDCustomerController';
import { CustomerRecoveryPasswordController } from './controllers/users/customer/PasswordRecoveryCustomer/CustomerRecoveryPasswordController';
import { CreateDeliveryAddressCustomerController } from './controllers/users/customer/deliveryAddressCustomer/CreateDeliveryAddressCustomerController';
import { UpdateAllDateDeliveryAddressCustomerCustomerController } from './controllers/users/customer/deliveryAddressCustomer/UpdateAllDateDeliveryAddressCustomerCustomerController';
import { DeleteDeliveryAddressCustomerController } from './controllers/users/customer/deliveryAddressCustomer/DeleteDeliveryAddressCustomerController';

// -- ROUTES STORE --
import { CreateStoreController } from './controllers/store/CreateStoreController';
import { FindUniqueStoreController } from './controllers/store/FindUniqueStoreController';
import { StoreController } from './controllers/store/StoreController';
import { FindFirstStoreController } from './controllers/store/FindFirstStoreController';
import { DeleteStoreController } from './controllers/store/DeleteStoreController';
import { UpdateLogoStoreController } from './controllers/store/UpdateLogoStoreController';
import { UpdateAllDateStoreController } from './controllers/store/UpdateAllDateStoreController';

// -- ROUTES SOCIAL MEDIA --
import { CreateSocialMediaController } from './controllers/store/socialMedia/CreateSocialMediaController';
import { UpdateOrderSocialMediaController } from './controllers/store/socialMedia/UpdateOrderSocialMediaController';
import { ListAllSocialMediaOrderAndPositionController } from './controllers/store/socialMedia/ListAllSocialMediaOrderAndPositionController';
import { UpdateSocialMediaNameController } from './controllers/store/socialMedia/UpdateSocialMediaNameController';
import { UpdateLinkSocialMediaController } from './controllers/store/socialMedia/UpdateLinkSocialMediaController';
import { UpdateImageRedeSocialController } from './controllers/store/socialMedia/UpdateImageRedeSocialController';
import { UpdatePositionSocialMediaController } from './controllers/store/socialMedia/UpdatePositionSocialMediaController';
import { UpdateStatusSocialMediaController } from './controllers/store/socialMedia/UpdateStatusSocialMediaController';
import { DeleteSocialMediaController } from './controllers/store/socialMedia/DeleteSocialMediaController';
import { ListAllSocialMediaController } from './controllers/store/socialMedia/ListAllSocialMediaController';

// -- ROUTES TEXTOS INSTITUCIONAIS --
import { CreateTextInstitucionalController } from './controllers/store/textoInstitucional/CreateTextInstitucionalController';
import { DeleteTextoInstitucionalController } from './controllers/store/textoInstitucional/DeleteTextoInstitucionalController';
import { ListAllTextosController } from './controllers/store/textoInstitucional/ListAllTextosController';
import { ListAllTextosOrderAndPosicaoController } from './controllers/store/textoInstitucional/ListAllTextosOrderAndPosicaoController';
import { ListExactTextoInstitucionalController } from './controllers/store/textoInstitucional/ListExactTextoInstitucionalController';
import { PageListTextoInstitucionalController } from './controllers/store/textoInstitucional/PageListTextoInstitucionalController';
import { UpdateDisponibilidadeTextoController } from './controllers/store/textoInstitucional/UpdateDisponibilidadeTextoController';
import { UpdateOrderTextoInstitucionalController } from './controllers/store/textoInstitucional/UpdateOrderTextoInstitucionalController';
import { UpdatePosicaoTextoController } from './controllers/store/textoInstitucional/UpdatePosicaoTextoController';
import { UpdateTitleTextoController } from './controllers/store/textoInstitucional/UpdateTitleTextoController';
import { UpdateDescriptionTextoController } from './controllers/store/textoInstitucional/UpdateDescriptionTextoController';
import { CreatePhotoTextoInstitucionalController } from './controllers/store/textoInstitucional/photoTextoInstitucional/CreatePhotoTextoInstitucionalController';
import { AllPhotosTextoInstitucionalController } from './controllers/store/textoInstitucional/photoTextoInstitucional/AllPhotosTextoInstitucionalController';
import { AllPhotosTextosController } from './controllers/store/textoInstitucional/photoTextoInstitucional/AllPhotosTextosController';
import { DeleteAllPhotoTextosController } from './controllers/store/textoInstitucional/photoTextoInstitucional/DeleteAllPhotoTextosController';
import { DeletePhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/DeletePhotoTextoController';
import { UpdatePhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/UpdatePhotoTextoController';
import { UpdateDisponibilidadePhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/UpdateDisponibilidadePhotoTextoController';
import { UpdateTitlePhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/UpdateTitlePhotoTextoController';
import { ListExactPhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/ListExactPhotoTextoController';
import { UpdateOrderPhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/UpdateOrderPhotoTextoController';
import { UpdatePosicaoPhotoTextoController } from './controllers/store/textoInstitucional/photoTextoInstitucional/UpdatePosicaoPhotoTextoController';
import { ListImagesInstitucionalController } from './controllers/store/textoInstitucional/photoTextoInstitucional/ListImagesInstitucionalController';

// -- ROUTES BANNERS --
import { CreateBannerController } from './controllers/banner/CreateBannerController';
import { UpdateAllDateBannerController } from './controllers/banner/UpdateAllDateBannerController';
import { PageListAllBannerController } from './controllers/banner/PageListAllBannerController';
import { DeleteBannerController } from './controllers/banner/DeleteBannerController';
import { UpdateBannerController } from './controllers/banner/UpdateBannerController';
import { PublishProgramadBannerController } from './controllers/banner/PublishProgramadBannerController';
import { StatusBannerController } from './controllers/banner/StatusBannerController';
import { ActiveAllBannerController } from './controllers/banner/ActiveAllBannerController';
import { ListExactBannerController } from './controllers/banner/ListExactBannerController';
import { UpdatePosicaoBannerController } from './controllers/banner/UpdatePosicaoBannerController';

// -- ROUTES CATEGORIAS --
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateNameCategoryController } from './controllers/category/UpdateNameCategoryController';
import { UpdateImageCategoryController } from './controllers/category/imagesCategories/UpdateImageCategoryController';
import { CreateImageCategoryController } from './controllers/category/imagesCategories/CreateImageCategoryController';
import { UpdateDisponibilidadeCategoryController } from './controllers/category/UpdateDisponibilidadeCategoryController';
import { ListCategoryNameController } from './controllers/category/ListCategoryNameController';
import { PageListAllCategorysController } from './controllers/category/PageListAllCategorysController';
import { ExactPageListAllCategoryController } from './controllers/category/ExactPageListAllCategoryController';
import { FindFirstCategoryController } from './controllers/category/FindFirstCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListExactCategoryController } from './controllers/category/ListExactCategoryController';
import { FindFirstCategorySlugController } from './controllers/category/FindFirstCategorySlugController';

// -- ROUTES GRUPOS DE CATEGORIAS --
import { CreateGroupCategoryController } from './controllers/category/groupCategory/CreateGroupCategoryController';
import { ListPosicaoCategoriesGroupController } from './controllers/category/groupCategory/ListPosicaoCategoriesGroupController';
import { ListCategoriesGroupController } from './controllers/category/groupCategory/ListCategoriesGroupController';
import { PageListAllGroupsCategoriesController } from './controllers/category/groupCategory/PageListAllGroupsCategoriesController';
import { FindFirstGroupController } from './controllers/category/groupCategory/FindFirstGroupController';
import { FindGroupIDController } from './controllers/category/groupCategory/FindGroupIDController';
import { FindUniqueGroupIDController } from './controllers/category/groupCategory/FindUniqueGroupIDController';
import { UpdateOrderCategoryGroupController } from './controllers/category/groupCategory/UpdateOrderCategoryGroupController';
import { StatusItemCategoryGroupController } from './controllers/category/groupCategory/StatusItemCategoryGroupController';
import { DeleteCategoriesGroupIDController } from './controllers/category/groupCategory/DeleteCategoriesGroupIDController';
import { DeleteGroupsIDController } from './controllers/category/groupCategory/DeleteGroupsIDController';
import { UpdateNameGrupoController } from './controllers/category/groupCategory/UpdateNameGrupoController';
import { UpdatePosicaoGroupController } from './controllers/category/groupCategory/UpdatePosicaoGroupController';
import { UpdateCategoryGrupoController } from './controllers/category/groupCategory/UpdateCategoryGrupoController';
import { CreateImageCategoryGroupController } from './controllers/category/groupCategory/imageCategoryGroup/CreateImageCategoryGroupController';
import { UpdateItemNameGrupoController } from './controllers/category/groupCategory/UpdateItemNameGrupoController';
import { UpdateSlugGrupoController } from './controllers/category/groupCategory/UpdateSlugGrupoController';
import { UpdateImageCategoryGroupController } from './controllers/category/groupCategory/imageCategoryGroup/UpdateImageCategoryGroupController';
import { DeletetImageCategoryGroupController } from './controllers/category/groupCategory/imageCategoryGroup/DeletetImageCategoryGroupController';

// -- ROUTES PRODUTOS --
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

// ROUTES ATRIBUTOS --
import { CreateAtributoController } from './controllers/atributo/CreateAtributoController';
import { PageListAllAtributosController } from './controllers/atributo/PageListAllAtributosController';
import { ListAtributosController } from './controllers/atributo/ListAtributosController';
import { ListExactAtributoController } from './controllers/atributo/ListExactAtributoController';
import { UpdateValorAtributoController } from './controllers/atributo/UpdateValorAtributoController';
import { UpdateTipoAtributoController } from './controllers/atributo/UpdateTipoAtributoController';
import { UpdateDisponibilidadeAtributoController } from './controllers/atributo/UpdateDisponibilidadeAtributoController';
import { CreateImageAtributoController } from './controllers/atributo/imageAtributo/CreateImageAtributoController';
import { UpdateImageAtributoController } from './controllers/atributo/imageAtributo/UpdateImageAtributoController';
import { ListNotDistinctAtributosController } from './controllers/atributo/ListNotDistinctAtributosController';

// ROUTES RELACIONAMENTOS ATRIBUTOS E PRODUTOS --
import { CreateRelationAtributosController } from './controllers/atributo/relationProductAtributo/CreateRelationAtributosController';
import { PageRelationAtributosController } from './controllers/atributo/relationProductAtributo/PageRelationAtributosController';
import { AllAtributosProductRelationController } from './controllers/atributo/relationProductAtributo/AllAtributosProductRelationController';
import { UpdateOrderAtributoRelationController } from './controllers/atributo/relationProductAtributo/UpdateOrderAtributoRelationController';
import { FindIDRelationBlockAtributoController } from './controllers/atributo/relationProductAtributo/FindIDRelationBlockAtributoController';
import { DeleteRelationProductAtributoController } from './controllers/atributo/relationProductAtributo/DeleteRelationProductAtributoController';
import { FirstAtributosProductRelationController } from './controllers/atributo/relationProductAtributo/FirstAtributosProductRelationController';
import { UpdateAtributoProductRelationController } from './controllers/atributo/relationProductAtributo/UpdateAtributoProductRelationController';
import { DeleteGrupoProductAtributoController } from './controllers/atributo/relationProductAtributo/DeleteGrupoProductAtributoController';
import { FindAtributosRelationBlockController } from './controllers/atributo/relationProductAtributo/FindAtributosRelationBlockController';

// ROUTES RELACIONAMENTOS CATEGORIAS E PRODUTOS --
import { CreateRelationProductCategoryController } from './controllers/product/relationProductCategory/CreateRelationProductCategoryController';
import { UpdateRelationIDProductCategoryController } from './controllers/product/relationProductCategory/UpdateRelationIDProductCategoryController';
import { FindCategoryRelationBlockController } from './controllers/product/relationProductCategory/FindCategoryRelationBlockController';
import { FindIDRelationBlockController } from './controllers/product/relationProductCategory/FindIDRelationBlockController';
import { FindLastIDRelationBlockController } from './controllers/product/relationProductCategory/FindLastIDRelationBlockController';
import { UpdateOrderProductCategoryController } from './controllers/product/relationProductCategory/UpdateOrderProductCategoryController';
import { DeleteRelationProductCategoryController } from './controllers/product/relationProductCategory/DeleteRelationProductCategoryController';
import { FindAllExactRelationBlocController } from './controllers/product/relationProductCategory/FindAllExactRelationBlocController';
import { DeleteRelationIDProductCategoryController } from './controllers/product/relationProductCategory/DeleteRelationIDProductCategoryController';
import { PageRelationsCategorysController } from './controllers/product/relationProductCategory/PageRelationsCategorysController';
import { FindCategorysRelationController } from './controllers/product/relationProductCategory/FindCategorysRelationController';
import { UpdateStatusRelationCategoryController } from './controllers/product/relationProductCategory/UpdateStatusRelationCategoryController';
import { UpdateCategoryIDProductCategoryController } from './controllers/product/relationProductCategory/UpdateCategoryIDProductCategoryController';
import { FindCategoryIDRelationController } from './controllers/product/relationProductCategory/FindCategoryIDRelationController';
import { DeleteRelationProductIDController } from './controllers/product/relationProductCategory/DeleteRelationProductIDController';
import { DeleteRelationIDController } from './controllers/product/relationProductCategory/DeleteRelationIDController';
import { ProductsPageCategoriesController } from './controllers/product/relationProductCategory/ProductsPageCategoriesController';

// -- ROUTES GRUPOS FILTROS --
import { CreateGroupFilterController } from './controllers/filtros/CreateGroupFilterController';
import { UpdateNameGroupFilterController } from './controllers/filtros/UpdateNameGroupFilterController';
import { UpdateAtributoNameController } from './controllers/filtros/UpdateAtributoNameController';
import { UpdateSlugGroupFilterController } from './controllers/filtros/UpdateSlugGroupFilterController';
import { UpdateStatusGroupFilterController } from './controllers/filtros/UpdateStatusGroupFilterController';
import { PageGroupsFiltersController } from './controllers/filtros/PageGroupsFiltersController';
import { FindsNameGroupFilterController } from './controllers/filtros/FindsNameGroupFilterController';
import { FindsAtributoNameFilterController } from './controllers/filtros/FindsAtributoNameFilterController';
import { DeleteGroupFilterController } from './controllers/filtros/DeleteGroupFilterController';
import { FindSlugGroupFilterController } from './controllers/filtros/FindSlugGroupFilterController';
import { FindFirstGroupsController } from './controllers/filtros/FindFirstGroupsController';
import { FindIDGroupFilterController } from './controllers/filtros/FindIDGroupFilterController';

// -- ROUTES FILTRO ATRIBUTOS --
import { CreateFiltroAtributoController } from './controllers/filtros/atributoFilter/CreateFiltroAtributoController';
import { DeleteAtributoFiltroController } from './controllers/filtros/atributoFilter/DeleteAtributoFiltroController';
import { PageAtributoFiltroController } from './controllers/filtros/atributoFilter/PageAtributoFiltroController';
import { UpdateAtributoNameFiltroController } from './controllers/filtros/atributoFilter/UpdateAtributoNameFiltroController';
import { UpdateAtributoValorFiltroController } from './controllers/filtros/atributoFilter/UpdateAtributoValorFiltroController';
import { UpdateAtributoOrderFiltroController } from './controllers/filtros/atributoFilter/UpdateAtributoOrderFiltroController';
import { UpdateAtributoStatusFiltroController } from './controllers/filtros/atributoFilter/UpdateAtributoStatusFiltroController';
import { CreateImageFiltroAtributoController } from './controllers/filtros/atributoFilter/imagesFilterAtributos/CreateImageFiltroAtributoController';
import { UpdateImageFiltroAtributoController } from './controllers/filtros/atributoFilter/imagesFilterAtributos/UpdateImageFiltroAtributoController';
import { FindAtributoFiltroController } from './controllers/filtros/atributoFilter/FindAtributoFiltroController';
import { FindUniqueAtributoFiltroController } from './controllers/filtros/atributoFilter/FindUniqueAtributoFiltroController';
import { FindManyAtributoFiltroNameController } from './controllers/filtros/atributoFilter/FindManyAtributoFiltroNameController';
import { DeleteAllAtributoFiltroController } from './controllers/filtros/atributoFilter/DeleteAllAtributoFiltroController';

// -- ROUTES FILTRO CATEGORIAS --
import { CreateFiltroCategoryController } from './controllers/filtros/categoryFilter/CreateFiltroCategoryController';
import { DeleteCategoryFiltroController } from './controllers/filtros/categoryFilter/DeleteCategoryFiltroController';
import { PageCategoryFiltroController } from './controllers/filtros/categoryFilter/PageCategoryFiltroController';
import { UpdateNameGroupFiltroController } from './controllers/filtros/categoryFilter/UpdateNameGroupFiltroController';
import { UpdateCategoryNameFiltroController } from './controllers/filtros/categoryFilter/UpdateCategoryNameFiltroController';
import { UpdateCategoryStatusFiltroController } from './controllers/filtros/categoryFilter/UpdateCategoryStatusFiltroController';
import { UpdateCategoryOrderFiltroController } from './controllers/filtros/categoryFilter/UpdateCategoryOrderFiltroController';
import { DeleteImageFiltroAtributoController } from './controllers/filtros/atributoFilter/imagesFilterAtributos/DeleteImageFiltroAtributoController';
import { CreateImageFiltroCategoryController } from './controllers/filtros/categoryFilter/imagesFilterCategory/CreateImageFiltroCategoryController';
import { UpdateImageFiltroCategoryController } from './controllers/filtros/categoryFilter/imagesFilterCategory/UpdateImageFiltroCategoryController';
import { DeleteImageFiltroCategoryController } from './controllers/filtros/categoryFilter/imagesFilterCategory/DeleteImageFiltroCategoryController';

// -- ROUTES AVALIACAO --
import { CreateAvaliacaoController } from './controllers/avaliacao/CreateAvaliacaoController';
import { DeleteAvaliacaoController } from './controllers/avaliacao/DeleteAvaliacaoController';
import { UpdateStatusAvaliacaoController } from './controllers/avaliacao/UpdateStatusAvaliacaoController';
import { PageListAllAvaliacaoController } from './controllers/avaliacao/PageListAllAvaliacaoController';
import { DeleteAvaliacaoProductIDController } from './controllers/avaliacao/DeleteAvaliacaoProductIDController';
import { PageListAllAvaliacaoProductIDController } from './controllers/avaliacao/PageListAllAvaliacaoProductIDController';
import { FindAvaliacaoController } from './controllers/avaliacao/FindAvaliacaoController';

// -- ROUTES VARIAÇÃO --
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

// -- ROUTES NEWSLETTERS --
import { CreateNewslettersController } from './controllers/newsletters/CreateNewslettersController';
import { DeleteNewslettersController } from './controllers/newsletters/DeleteNewslettersController';
import { ListNewslettersController } from './controllers/newsletters/ListNewslettersController';
import { ListExactNewslettersController } from './controllers/newsletters/ListExactNewslettersController';
import { PageListAllNewslettersController } from './controllers/newsletters/PageListAllNewslettersController';
import { ExportNewslettersController } from './controllers/newsletters/ExportNewslettersController';

// -- ROUTES CONTATOS --
import { CreateContatoController } from './controllers/contatos/CreateContatoController';
import { DeleteContatoController } from './controllers/contatos/DeleteContatoController';
import { ListContatoController } from './controllers/contatos/ListContatoController';
import { ListExactContatoController } from './controllers/contatos/ListExactContatoController';
import { PageListAllContatoController } from './controllers/contatos/PageListAllContatoController';
import { ExportContatoController } from './controllers/contatos/ExportContatoController';

// -- ROUTES ENVIAR EMAILS --
import { EmailExportAdminUserController } from './controllers/sendEmails/EmailExportAdminUserController';
import { EmailExportCustomerUserController } from './controllers/sendEmails/EmailExportCustomerUserController';
import { EmailExportProductsController } from './controllers/sendEmails/EmailExportProductsController';
import { EmailExportNewslettersController } from './controllers/sendEmails/EmailExportNewslettersController';
import { EmailExportContatoController } from './controllers/sendEmails/EmailExportContatoController';



import { ADMINisAuthenticated } from './middlewares/ADMINisAuthenticated';
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';





const router = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROUTES ADMIN --
router.put('/admin/activeOrDesactiveAdmin', ADMINisAuthenticated, new ActiveOrDesactiveAdminController().handle);
router.post('/admin/createAdmin', new AdminCreateController().handle);
router.put('/admin/updateRoleAdmin', ADMINisAuthenticated, new AdminRoleController().handle);
router.post('/admin/session', new AuthAdminController().handle);
router.put('/admin/authenticatedEmailAdmin', new AuthenticatedEmailAdminController().handle);
router.delete('/admin/deleteAdminUser', ADMINisAuthenticated, new DeleteAdminOrEmployeController().handle);
router.get('/admin/me', ADMINisAuthenticated, new DetailAdminController().handle);
router.get('/admin/exportAdmins', ADMINisAuthenticated, new ExportAdminController().handle);
router.get('/admin/listExactAdminName', ADMINisAuthenticated, new ListExactAdminNameController().handle);
router.get('/admin/listExactAdminID', ADMINisAuthenticated, new ListExactAdminController().handle);
router.get('/admin/listForPageEmployes', ADMINisAuthenticated, new PageListAllAdminsController().handle);
router.put('/admin/updateDateAdmin', ADMINisAuthenticated, new UpdateAllDateAdminController().handle);
router.put('/admin/updateRoleEmployee', ADMINisAuthenticated, new AdminRoleEmployeeController().handle);
router.put('/admin/updateNameAdminOrEmployee', ADMINisAuthenticated, new AdminUpdateNameController().handle);
router.delete('/admin/deleteRecoveryIDAdmin', ADMINisAuthenticated, new DeleteAdminPasswordRecoveryIDController().handle);
router.get('/admin/findFirstAdmin', ADMINisAuthenticated, new FindAdminRecoveryIDController().handle);
router.put('/admin/recoverAdmin', new RecoveryPasswordAdminController().handle);

// -- ROUTES CUSTOMERS --
router.post('/customer/createCustomer', new CreateCustomerController().handle);
router.put('/customer/activeOrDesactiveCustomer', isAuthenticated, new ActiveOrDesactiveCustomerController().handle);
router.post('/customer/session', new AuthCustomerController().handle);
router.delete('/customer/deleteCustomer', ADMINisAuthenticated && isAuthenticated, new DeleteCustomerController().handle);
router.get('/customer/me', ADMINisAuthenticated && isAuthenticated, new DetailCustomerController().handle);
router.get('/customer/exportCustomer', ADMINisAuthenticated, new ExportCustomerController().handle);
router.get('/customer/listExactCustomerName', ADMINisAuthenticated && isAuthenticated, new ListExactCustomerNameController().handle);
router.get('/customer/listExactCustomerID', ADMINisAuthenticated && isAuthenticated, new ListExactCustomerController().handle);
router.get('/customer/listForPageCustomer', ADMINisAuthenticated, new PageListAllCustomerController().handle);
router.put('/customer/updateDateCustomer', ADMINisAuthenticated && isAuthenticated, new UpdateAllDateCustomerController().handle);
router.put('/customer/updateNameCustomer', ADMINisAuthenticated && isAuthenticated, new CustomerUpdateNameController().handle);
router.put('/customer/updateNewslatter', ADMINisAuthenticated && isAuthenticated, new CustomerUpdateNewslatterController().handle);
router.delete('/customer/deleteRecoveryIDCustomer', isAuthenticated, new DeletePasswordRecoveryIDCustomerController().handle);
router.get('/customer/findFirstCustomer', ADMINisAuthenticated && isAuthenticated, new FindRecoveryIDCustomerController().handle);
router.put('/customer/recoverCustomer', ADMINisAuthenticated && isAuthenticated, new CustomerRecoveryPasswordController().handle);
router.post('/customer/delivery/createDeliveryAddress', isAuthenticated, new CreateDeliveryAddressCustomerController().handle);
router.put('/customer/delivery/updateAllDateDeliveryAddressCustomer', isAuthenticated, new UpdateAllDateDeliveryAddressCustomerCustomerController().handle);
router.delete('/customer/delivery/deleteDeliveryAddress', isAuthenticated, new DeleteDeliveryAddressCustomerController().handle);

// -- ROUTES STORE --
router.post('/store', ADMINisAuthenticated, upload.single('file'), new CreateStoreController().handle);
router.get('/userStore', ADMINisAuthenticated, new FindUniqueStoreController().handle);
router.get('/findFirstStoreUser', ADMINisAuthenticated, new FindFirstStoreController().handle);
router.get('/store', new StoreController().handle);
router.delete('/deleteStore', ADMINisAuthenticated, new DeleteStoreController().handle);
router.put('/logoStoreUpdate', ADMINisAuthenticated, upload.single('file'), new UpdateLogoStoreController().handle);
router.put('/updateAllDateStore', ADMINisAuthenticated, new UpdateAllDateStoreController().handle);

// -- ROUTES SOCIAL MEDIA --
router.post('/createSocialMedia', ADMINisAuthenticated, upload.single('file'), new CreateSocialMediaController().handle);
router.put('/updateOrderSocialMedia', ADMINisAuthenticated, new UpdateOrderSocialMediaController().handle);
router.put('/updateSocialMediaName', ADMINisAuthenticated, new UpdateSocialMediaNameController().handle);
router.put('/updateLinkSocialMedia', ADMINisAuthenticated, new UpdateLinkSocialMediaController().handle);
router.put('/updateImageSocialMedia', ADMINisAuthenticated, upload.single('file'), new UpdateImageRedeSocialController().handle);
router.put('/updatePositionSocialMedia', ADMINisAuthenticated, new UpdatePositionSocialMediaController().handle);
router.put('/updateStatusSocialMedia', ADMINisAuthenticated, new UpdateStatusSocialMediaController().handle);
router.delete('/deleteSocialMedia', ADMINisAuthenticated, new DeleteSocialMediaController().handle);
router.get('/listAllSocialMedia', new ListAllSocialMediaController().handle);
router.get('/listSocialMediaOrder', new ListAllSocialMediaOrderAndPositionController().handle);

// -- ROUTES TEXTOS INSTITUCIONAIS --
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
router.get('/listImagesLoja', new ListImagesInstitucionalController().handle);

// -- ROUTES BANNER --
router.post('/createBanner', ADMINisAuthenticated, upload.single('file'), new CreateBannerController().handle);
router.put('/updateAllDateBanner', ADMINisAuthenticated, new UpdateAllDateBannerController().handle);
router.get('/pageListBanner', ADMINisAuthenticated, new PageListAllBannerController().handle);
router.delete('/deleteBanner', ADMINisAuthenticated, new DeleteBannerController().handle);
router.put('/updateBanner', ADMINisAuthenticated, upload.single('file'), new UpdateBannerController().handle);
router.put('/updatePosicaoBanner', ADMINisAuthenticated, new UpdatePosicaoBannerController().handle);
router.put('/updateStatusBanner', ADMINisAuthenticated, new StatusBannerController().handle);
router.get('/exactBanner', ADMINisAuthenticated, new ListExactBannerController().handle);
router.get('/updatePublishBanner', ADMINisAuthenticated, new PublishProgramadBannerController().handle);
router.get('/activeBanner', new ActiveAllBannerController().handle);

// -- ROUTES CATEGORIAS --
router.post('/category', ADMINisAuthenticated, new CreateCategoryController().handle);
router.post('/createImageCategory', ADMINisAuthenticated, upload.single('file'), new CreateImageCategoryController().handle);
router.put('/categoryNameUpdate', ADMINisAuthenticated, new UpdateNameCategoryController().handle);
router.put('/updateDisponibilidadeCategory', ADMINisAuthenticated, new UpdateDisponibilidadeCategoryController().handle);
router.put('/updateImageCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageCategoryController().handle);
router.get('/allCategorysPage', ADMINisAuthenticated, new PageListAllCategorysController().handle);
router.get('/exactCategoryPage', ADMINisAuthenticated, new ExactPageListAllCategoryController().handle);
router.get('/findFirstCategory', ADMINisAuthenticated, new FindFirstCategoryController().handle);
router.get('/exactCategory', ADMINisAuthenticated, new ListExactCategoryController().handle);
router.get('/findCategorys', ADMINisAuthenticated, new ListCategoryNameController().handle);
router.get('/listCategorysDisponivel', new ListCategoryController().handle);
router.get('/findDateSlugCategory', new FindFirstCategorySlugController().handle);

// -- ROUTES GRUPOS DE CATEGORIAS --
router.post('/group', ADMINisAuthenticated, new CreateGroupCategoryController().handle);
router.get('/pageGroups', ADMINisAuthenticated, new PageListAllGroupsCategoriesController().handle);
router.get('/findFirstGroup', ADMINisAuthenticated, new FindFirstGroupController().handle);
router.get('/findGroupID', ADMINisAuthenticated, new FindGroupIDController().handle);
router.get('/findUniqueGroup', ADMINisAuthenticated, new FindUniqueGroupIDController().handle);
router.put('/updateOrderItemGroup', ADMINisAuthenticated, new UpdateOrderCategoryGroupController().handle);
router.put('/updateStatusGroup', ADMINisAuthenticated, new StatusItemCategoryGroupController().handle);
router.put('/updateNameGroup', ADMINisAuthenticated, new UpdateNameGrupoController().handle);
router.put('/updatePosicaoGroup', ADMINisAuthenticated, new UpdatePosicaoGroupController().handle);
router.put('/updateCategoryGroup', ADMINisAuthenticated, new UpdateCategoryGrupoController().handle);
router.put('/updateItemName', ADMINisAuthenticated, new UpdateItemNameGrupoController().handle);
router.delete('/deleteCategoriesGroups', ADMINisAuthenticated, new DeleteCategoriesGroupIDController().handle);
router.delete('/deleteGroups', ADMINisAuthenticated, new DeleteGroupsIDController().handle);
router.delete('/deleteImageGroup', ADMINisAuthenticated, new DeletetImageCategoryGroupController().handle);
router.post('/createImageGroup', ADMINisAuthenticated, upload.single('file'), new CreateImageCategoryGroupController().handle);
router.put('/updateImageGroup', ADMINisAuthenticated, upload.single('file'), new UpdateImageCategoryGroupController().handle);
router.put('/updateSlugGroup', ADMINisAuthenticated, new UpdateSlugGrupoController().handle);
router.get('/pocisaoListGroup', new ListPosicaoCategoriesGroupController().handle);
router.get('/listCategoriesGroup', new ListCategoriesGroupController().handle);

// -- ROUTES PRODUTOS --
router.post('/createProduct', ADMINisAuthenticated, new CreateProductController().handle);
router.post('/image', ADMINisAuthenticated, upload.single('file'), new PhotoProductController().handle);
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
router.get('/allProductsPage', ADMINisAuthenticated, new PageListAllProductController().handle);
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

// ROUTES ATRIBUTOS --
router.post('/createAtributo', ADMINisAuthenticated, new CreateAtributoController().handle);
router.put('/updateValorAtribute', ADMINisAuthenticated, new UpdateValorAtributoController().handle);
router.put('/updateTipoAtributo', ADMINisAuthenticated, new UpdateTipoAtributoController().handle);
router.put('/updateStatusAtributo', ADMINisAuthenticated, new UpdateDisponibilidadeAtributoController().handle);
router.get('/pageListAtributos', ADMINisAuthenticated, new PageListAllAtributosController().handle);
router.get('/exactAtributo', ADMINisAuthenticated, new ListExactAtributoController().handle);
router.post('/createImageAtributo', ADMINisAuthenticated, upload.single('file'), new CreateImageAtributoController().handle);
router.put('/updateImageAtributo', ADMINisAuthenticated, upload.single('file'), new UpdateImageAtributoController().handle);
router.get('/allAtributos', ADMINisAuthenticated, new ListAtributosController().handle);
router.get('/listAtributosNotDistinct', ADMINisAuthenticated, new ListNotDistinctAtributosController().handle);

// ROUTES RELACIONAMENTOS ATRIBUTOS E PRODUTOS --
router.post('/createRelationAtributos', ADMINisAuthenticated, new CreateRelationAtributosController().handle);
router.get('/pageListAtributosRelations', ADMINisAuthenticated, new PageRelationAtributosController().handle);
router.get('/allAtributosProductRelation', ADMINisAuthenticated, new AllAtributosProductRelationController().handle);
router.get('/firstAtributoRelationProduct', ADMINisAuthenticated, new FirstAtributosProductRelationController().handle);
router.get('/findUniqueRelationAtributoProduct', ADMINisAuthenticated, new FindIDRelationBlockAtributoController().handle);
router.put('/updateOrderRelationProductAtributo', ADMINisAuthenticated, new UpdateOrderAtributoRelationController().handle);
router.put('/updateAtributoIDProduct', ADMINisAuthenticated, new UpdateAtributoProductRelationController().handle);
router.get('/findAllAtributosProduct', ADMINisAuthenticated, new FindAtributosRelationBlockController().handle);
router.delete('/deleteRelationAtributoProduct', ADMINisAuthenticated, new DeleteRelationProductAtributoController().handle);
router.delete('/deleteGrupoAtributosProduct', ADMINisAuthenticated, new DeleteGrupoProductAtributoController().handle);

// ROUTES RELACIONAMENTOS CATEGORIAS E PRODUTOS --
router.post('/createRelation', ADMINisAuthenticated, new CreateRelationProductCategoryController().handle);
router.put('/updateRelationID', ADMINisAuthenticated, new UpdateRelationIDProductCategoryController().handle);
router.put('/updateCategoryIDrelation', ADMINisAuthenticated, new UpdateCategoryIDProductCategoryController().handle);
router.put('/updateStatusRelation', ADMINisAuthenticated, new UpdateStatusRelationCategoryController().handle);
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
router.get('/categorys', new FindCategorysRelationController().handle);
router.get('/productsPageCategories', new ProductsPageCategoriesController().handle);

// -- ROUTES GRUPOS FILTROS --
router.post('/createGroupFilter', ADMINisAuthenticated, new CreateGroupFilterController().handle);
router.put('/updateNameGroupFilter', ADMINisAuthenticated, new UpdateNameGroupFilterController().handle);
router.put('/updateAtributoName', ADMINisAuthenticated, new UpdateAtributoNameController().handle);
router.put('/updateSlugGroupFilter', ADMINisAuthenticated, new UpdateSlugGroupFilterController().handle);
router.put('/updateStatusGroupFilter', ADMINisAuthenticated, new UpdateStatusGroupFilterController().handle);
router.get('/pagesGroupFilter', ADMINisAuthenticated, new PageGroupsFiltersController().handle);
router.get('/filterFirstGroupFiltro', ADMINisAuthenticated, new FindFirstGroupsController().handle);
router.delete('/deleteGroupFilter', ADMINisAuthenticated, new DeleteGroupFilterController().handle);
router.get('/findsNameGroupFilter', new FindsNameGroupFilterController().handle);
router.get('/findsAtributoNameGroupFilter', new FindsAtributoNameFilterController().handle);
router.get('/findUniqueIDGroup', ADMINisAuthenticated, new FindIDGroupFilterController().handle);
router.get('/listFilterGroup', new FindSlugGroupFilterController().handle);

// -- ROUTES FILTRO ATRIBUTOS --
router.post('/createFiltroAtributo', ADMINisAuthenticated, new CreateFiltroAtributoController().handle);
router.delete('/deleteFiltroAtributo', ADMINisAuthenticated, new DeleteAtributoFiltroController().handle);
router.delete('/deleteAllFiltrosAtributosGrupo', ADMINisAuthenticated, new DeleteAllAtributoFiltroController().handle);
router.get('/pagesFiltrosAtributos', ADMINisAuthenticated, new PageAtributoFiltroController().handle);
router.put('/updateFiltroAtributoName', ADMINisAuthenticated, new UpdateAtributoNameFiltroController().handle);
router.put('/updateFiltroValorAtributo', ADMINisAuthenticated, new UpdateAtributoValorFiltroController().handle);
router.put('/updateFiltroOrderAtributo', ADMINisAuthenticated, new UpdateAtributoOrderFiltroController().handle);
router.put('/updateFiltroStatusAtributo', ADMINisAuthenticated, new UpdateAtributoStatusFiltroController().handle);
router.post('/createImageFilterAtributo', ADMINisAuthenticated, upload.single('file'), new CreateImageFiltroAtributoController().handle);
router.put('/updateImageFilterAtributo', ADMINisAuthenticated, upload.single('file'), new UpdateImageFiltroAtributoController().handle);
router.delete('/deleteImageFiltroAtributo', ADMINisAuthenticated, new DeleteImageFiltroAtributoController().handle);
router.get('/findUniqueFiltroAtributo', ADMINisAuthenticated, new FindUniqueAtributoFiltroController().handle);
router.get('/findManyNameFiltroAtributo', ADMINisAuthenticated, new FindManyAtributoFiltroNameController().handle);
router.get('/allAtributosGroups', new FindAtributoFiltroController().handle);

// -- ROUTES FILTRO CATEGORIAS --
router.post('/createFiltroCategory', ADMINisAuthenticated, new CreateFiltroCategoryController().handle);
router.delete('/deleteFiltroCategory', ADMINisAuthenticated, new DeleteCategoryFiltroController().handle);
router.get('/pagesFiltrosCategory', ADMINisAuthenticated, new PageCategoryFiltroController().handle);
router.put('/updateFiltroNameGroupCategory', ADMINisAuthenticated, new UpdateNameGroupFiltroController().handle);
router.put('/updateCategoryNameFiltro', ADMINisAuthenticated, new UpdateCategoryNameFiltroController().handle);
router.put('/updateFiltroStatusCategory', ADMINisAuthenticated, new UpdateCategoryStatusFiltroController().handle);
router.put('/updateFiltroOrderCategory', ADMINisAuthenticated, new UpdateCategoryOrderFiltroController().handle);
router.post('/createImageFilterCategory', ADMINisAuthenticated, upload.single('file'), new CreateImageFiltroCategoryController().handle);
router.put('/updateImageFilterCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageFiltroCategoryController().handle);
router.delete('/deleteImageFiltroCategory', ADMINisAuthenticated, new DeleteImageFiltroCategoryController().handle);

// -- ROUTES AVALIACAO --
router.post('/avaliacao', ADMINisAuthenticated, new CreateAvaliacaoController().handle);
router.delete('/deleteAvaliacao', ADMINisAuthenticated, new DeleteAvaliacaoController().handle);
router.delete('/deleteAvaliacaoProductID', ADMINisAuthenticated, new DeleteAvaliacaoProductIDController().handle);
router.get('/allAvaliacao', ADMINisAuthenticated, new PageListAllAvaliacaoController().handle);
router.get('/pageAvaliacao', ADMINisAuthenticated, new PageListAllAvaliacaoProductIDController().handle);
router.get('/avaliacaoDados', ADMINisAuthenticated, new FindAvaliacaoController().handle);
router.put('/updateStatusAvaliacao', ADMINisAuthenticated, new UpdateStatusAvaliacaoController().handle);

// -- ROUTES VARIAÇÃO --
router.post('/variacao', ADMINisAuthenticated, new CreateVariacaoController().handle);
router.delete('/deleteVariacao', ADMINisAuthenticated, new DeleteVariacaoController().handle);
router.put('/updateAllDateVariacao', ADMINisAuthenticated, new UpdateAllDateVariacaoController().handle);
router.put('/updateNameVariacao', ADMINisAuthenticated, new UpdateNameVariacaoController().handle);
router.put('/updatePosicaoVariacao', ADMINisAuthenticated, new UpdatePosicaoVariacaoController().handle);
router.put('/updateOrderVariacao', ADMINisAuthenticated, new UpdateOrderVariacaoController().handle);
router.get('/allVariacaoPage', ADMINisAuthenticated, new PageListAllVariacaoController().handle);
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

// -- ROUTES NEWSLETTERS --
router.post('/createNewsletter', new CreateNewslettersController().handle);
router.delete('/deleteNewsletter', ADMINisAuthenticated, new DeleteNewslettersController().handle);
router.get('/listNewsletter', ADMINisAuthenticated, new ListNewslettersController().handle);
router.get('/listExactNewsletter', ADMINisAuthenticated, new ListExactNewslettersController().handle);
router.get('/pageNewsletter', ADMINisAuthenticated, new PageListAllNewslettersController().handle);
router.get('/exportNews', ADMINisAuthenticated, new ExportNewslettersController().handle);

// -- ROUTES CONTATOS --
router.post('/createContato', new CreateContatoController().handle);
router.delete('/deleteContato', ADMINisAuthenticated, new DeleteContatoController().handle);
router.get('/listContato', ADMINisAuthenticated, new ListContatoController().handle);
router.get('/listExactContato', ADMINisAuthenticated, new ListExactContatoController().handle);
router.get('/pageContato', ADMINisAuthenticated, new PageListAllContatoController().handle);
router.get('/exportContatos', ADMINisAuthenticated, new ExportContatoController().handle);

// -- ROUTES ENVIAR EMAILS --
router.get('/admin/sendlistuser', ADMINisAuthenticated, new EmailExportAdminUserController().handle);
router.get('/sendListCustomer', ADMINisAuthenticated, new EmailExportCustomerUserController().handle);
router.get('/sendlistproduct', ADMINisAuthenticated, new EmailExportProductsController().handle);
router.get('/sendEmailNewsletters', ADMINisAuthenticated, new EmailExportNewslettersController().handle);
router.get('/sendEmailContatos', ADMINisAuthenticated, new EmailExportContatoController().handle);


export { router };
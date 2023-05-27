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
import { CreateInstitutionalTextController } from './controllers/store/institutionalText/CreateInstitutionalTextController';
import { DeleteInstitutionalTextController } from './controllers/store/institutionalText/DeleteInstitutionalTextController';
import { ListAllInstitutionalTextController } from './controllers/store/institutionalText/ListAllInstitutionalTextController';
import { ListAllTextOrderAndPositionController } from './controllers/store/institutionalText/ListAllTextOrderAndPositionController';
import { FindUniqueInstitutionalTextController } from './controllers/store/institutionalText/FindUniqueInstitutionalTextController';
import { PageListInstitutionalTextController } from './controllers/store/institutionalText/PageListInstitutionalTextController';
import { UpdateStatusInstitutionalTextController } from './controllers/store/institutionalText/UpdateStatusInstitutionalTextController';
import { UpdateOrderInstitutionalTextController } from './controllers/store/institutionalText/UpdateOrderInstitutionalTextController';
import { UpdatePositionInstitutionalTextController } from './controllers/store/institutionalText/UpdatePositionInstitutionalTextController';
import { UpdateTitleInstitutionalTextController } from './controllers/store/institutionalText/UpdateTitleInstitutionalTextController';
import { UpdateDescriptionInstitutionalTextController } from './controllers/store/institutionalText/UpdateDescriptionInstitutionalTextController';

// -- ROUTES IMAGE STORE
import { CreateImageStoreController } from './controllers/store/imageStore/CreateImageStoreController';
import { AllImageStoreController } from './controllers/store/imageStore/AllImageStoreController';
import { DeleteImageStoreController } from './controllers/store/imageStore/DeleteImageStoreController';
import { UpdateStatusImageStoreController } from './controllers/store/imageStore/UpdateStatusImageStoreController';
import { FindUniqueImageStoreController } from './controllers/store/imageStore/FindUniqueImageStoreController';
import { UpdateOrderImageStoreController } from './controllers/store/imageStore/UpdateOrderImageStoreController';
import { ListAllImageStoreController } from './controllers/store/imageStore/ListAllImageStoreController';
import { UpdateImageStoreController } from './controllers/store/imageStore/UpdateImageStoreController';
import { UpdateTitleImageStoreController } from './controllers/store/imageStore/UpdateTitleImageStoreController';
import { UpdatePositionImageStoreController } from './controllers/store/imageStore/UpdatePositionImageStoreController';

// -- ROUTES CATEGORY --
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateNameCategoryController } from './controllers/category/UpdateNameCategoryController';
import { UpdateImageCategoryController } from './controllers/category/imageCategory/UpdateImageCategoryController';
import { CreateImageCategoryController } from './controllers/category/imageCategory/CreateImageCategoryController';
import { UpdateStatusCategoryController } from './controllers/category/UpdateStatusCategoryController';
import { ListCategoryNameController } from './controllers/category/ListCategoryNameController';
import { PageListAllCategorysController } from './controllers/category/PageListAllCategorysController';
import { ExactPageListAllCategoryController } from './controllers/category/ExactPageListAllCategoryController';
import { FindFirstCategoryController } from './controllers/category/FindFirstCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { FindUniqueCategoryController } from './controllers/category/FindUniqueCategoryController';
import { FindFirstCategorySlugController } from './controllers/category/FindFirstCategorySlugController';
import { UpdateDescriptionCategoryController } from './controllers/category/UpdateDescriptionCategoryController';
import { UpdateOrderCategoryController } from './controllers/category/UpdateOrderCategoryController';

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

// -- ROUTES PRODUCT --
import { CreateProductController } from './controllers/product/CreateProductController';
import { CreatePhotoProductController } from './controllers/product/photoProduct/CreatePhotoProductController';
import { UpdatePhotoProductController } from './controllers/product/photoProduct/UpdatePhotoProductController';
import { UpdateAllDateProductController } from './controllers/product/UpdateAllDateProductController';
import { AllPhotosProductController } from './controllers/product/photoProduct/AllPhotosProductController';
import { AllPhotosController } from './controllers/product/photoProduct/AllPhotosController';
import { AllProductController } from './controllers/product/AllProductController';
import { AllProductInStoreController } from './controllers/product/AllProductInStoreController';
import { FindFirstProductController } from './controllers/product/FindFirstProductController';
import { AllProductExistController } from './controllers/product/AllProductExistController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';
import { ListExactProductController } from './controllers/product/ListExactProductController';
import { DeletePhotoProductController } from './controllers/product/photoProduct/DeletePhotoProductController';
import { DeleteAllPhotoProductController } from './controllers/product/photoProduct/DeleteAllPhotoProductController';
import { DeleteAllVariacaoProductController } from './controllers/variacao/DeleteAllVariacaoProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { DeleteALLPhotoVariacaoController } from './controllers/variacao/photoVariacao/DeleteALLPhotoVariacaoController';
import { UpdateNameProductController } from './controllers/product/UpdateNameProductController';
import { ExportProductController } from './controllers/product/ExportProductController';
import { UpdateStatusProductController } from './controllers/product/UpdateStatusProductController';
import { UpdateProductEmphasisController } from './controllers/product/UpdateProductEmphasisController';
import { UpdateProductOfferController } from './controllers/product/UpdateProductOfferController';
import { UpdateOrderPhotoProductController } from './controllers/product/photoProduct/UpdateOrderPhotoProductController';
import { AllPhotosProductInStoreController } from './controllers/product/photoProduct/AllPhotosProductInStoreController';
import { ListAllProductEmphasisController } from './controllers/product/ListAllProductEmphasisController';
import { ListAllProductOfferController } from './controllers/product/ListAllProductOfferController';
import { UpdateProductFreeShippingController } from './controllers/product/UpdateProductFreeShippingController';
import { ListExactProductNameController } from './controllers/product/ListExactProductNameController';

// ROUTES CATEGORY AND PRODUCT --
import { CreateProductCategoryController } from './controllers/product/productCategory/CreateProductCategoryController';
import { UpdateOrderProductCategoryController } from './controllers/product/productCategory/UpdateOrderProductCategoryController';
import { DeleteAllProductCategoryController } from './controllers/product/productCategory/DeleteAllProductCategoryController';
import { PageRelationsCategorysController } from './controllers/product/productCategory/PageRelationsCategorysController';
import { UpdateStatusCategoryProductController } from './controllers/product/productCategory/UpdateStatusCategoryProductController';
import { UpdateNameProductCategoryController } from './controllers/product/productCategory/UpdateNameProductCategoryController';
import { FindCategoryAndProductController } from './controllers/product/productCategory/FindCategoryAndProductController';
import { DeleteProductCategoryController } from './controllers/product/productCategory/DeleteProductCategoryController';
import { ProductsPageCategoriesController } from './controllers/product/productCategory/ProductsPageCategoriesController';

// ROUTES DESCRIPTION PRODUCT --
import { FindUniqueDescriptionProductController } from './controllers/product/descriptionProduct/FindUniqueDescriptionProductController';
import { CreateDescriptionProductController } from './controllers/product/descriptionProduct/CreateDescriptionProductController';
import { UpdateTitleDescriptionProductController } from './controllers/product/descriptionProduct/UpdateTitleDescriptionProductController';
import { AllDescriptionProductInStoreController } from './controllers/product/descriptionProduct/AllDescriptionProductInStoreController';
import { AllDescriptionProductController } from './controllers/product/descriptionProduct/AllDescriptionProductController';
import { AllDescriptionsController } from './controllers/product/descriptionProduct/AllDescriptionsController';
import { DeleteAllDescriptionProductController } from './controllers/product/descriptionProduct/DeleteAllDescriptionProductController';
import { DeleteDescriptionProductController } from './controllers/product/descriptionProduct/DeleteDescriptionProductController';
import { UpdateOrderDescriptionProductController } from './controllers/product/descriptionProduct/UpdateOrderDescriptionProductController';
import { UpdateDescriptionProductController } from './controllers/product/descriptionProduct/UpdateDescriptionProductController';
import { UpdateStatusDescriptionProductController } from './controllers/product/descriptionProduct/UpdateStatusDescriptionProductController';

// ROUTES TAG --
import { AllTagProductController } from './controllers/product/tag/AllTagProductController';
import { AllTagController } from './controllers/product/tag/AllTagController';
import { CreateTagController } from './controllers/product/tag/CreateTagController';
import { UpdateTagController } from './controllers/product/tag/UpdateTagController';
import { DeleteTagController } from './controllers/product/tag/DeleteTagController';
import { DeleteAllTagController } from './controllers/product/tag/DeleteAllTagController';
import { FindUniqueTagController } from './controllers/product/tag/FindUniqueTagController';

// ROUTES TYPE ATTRIBUTE --
import { CreateTypeAttributeController } from './controllers/typeAttribute/CreateTypeAttributeController';
import { UpdateTypeAttributeController } from './controllers/typeAttribute/UpdateTypeAttributeController';
import { AllTypeAttributeController } from './controllers/typeAttribute/AllTypeAttributeController';
import { FindUniqueTypeAttributeController } from './controllers/typeAttribute/FindUniqueTypeAttributeController';

// ROUTES RELATION ATTRIBUTE AND PRODUCT --
import { AllRelationAttributeProductController } from './controllers/product/relationAttributeProduct/AllRelationAttributeProductController';
import { CreateRelationAttributeProductController } from './controllers/product/relationAttributeProduct/CreateRelationAttributeProductController';
import { DeleteProductRelationAllController } from './controllers/product/relationAttributeProduct/DeleteProductRelationAllController';
import { DeleteRelationAttributeProductController } from './controllers/product/relationAttributeProduct/DeleteRelationAttributeProductController';
import { FindRelationAttributeBlockController } from './controllers/product/relationAttributeProduct/FindRelationAttributeBlockController';
import { FindUniqueRelationAttributeProductController } from './controllers/product/relationAttributeProduct/FindUniqueRelationAttributeProductController';
import { FirstFirstRelationAttributeProductController } from './controllers/product/relationAttributeProduct/FirstFirstRelationAttributeProductController';
import { PageRelationAttributeProductController } from './controllers/product/relationAttributeProduct/PageRelationAttributeProductController';
import { UpdateTypeRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateTypeRelationAttributeProductController';
import { UpdateOrderRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateOrderRelationAttributeProductController';

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
import { UpdateStatusRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateStatusRelationAttributeProductController';
import { CreateImageAttributeController } from './controllers/product/relationAttributeProduct/imageAttribute/CreateImageAttributeController';
import { UpdateImageAttributeController } from './controllers/product/relationAttributeProduct/imageAttribute/UpdateImageAttributeController';
import { DeleteImageAttributeController } from './controllers/product/relationAttributeProduct/imageAttribute/DeleteImageAttributeController';





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

// -- ROUTES TEXT INSTITUTIONAL --
router.post('/createInstitutionalText', ADMINisAuthenticated, new CreateInstitutionalTextController().handle);
router.delete('/deleteInstitutionalText', ADMINisAuthenticated, new DeleteInstitutionalTextController().handle);
router.get('/findUniqueInstitutionalText', ADMINisAuthenticated, new FindUniqueInstitutionalTextController().handle);
router.get('/listAllText', ADMINisAuthenticated, new ListAllInstitutionalTextController().handle);
router.get('/pageListInstitutionalText', ADMINisAuthenticated, new PageListInstitutionalTextController().handle);
router.put('/updateStatusInstitutionalText', ADMINisAuthenticated, new UpdateStatusInstitutionalTextController().handle);
router.put('/updateOrderInstitutionalText', ADMINisAuthenticated, new UpdateOrderInstitutionalTextController().handle);
router.put('/updatePositionInstitutionalText', ADMINisAuthenticated, new UpdatePositionInstitutionalTextController().handle);
router.put('/updateTitleInstitutionalText', ADMINisAuthenticated, new UpdateTitleInstitutionalTextController().handle);
router.put('/updateDescriptionInstitutionalText', ADMINisAuthenticated, new UpdateDescriptionInstitutionalTextController().handle);
router.get('/listInstitutionalText', new ListAllTextOrderAndPositionController().handle);

// -- ROUTES IMAGE STORE --
router.post('/createImageStore', ADMINisAuthenticated, upload.single('file'), new CreateImageStoreController().handle);
router.get('/allImagesStore', ADMINisAuthenticated, new AllImageStoreController().handle);
router.delete('/deleteImageStore', ADMINisAuthenticated, new DeleteImageStoreController().handle);
router.put('/updateImageStore', ADMINisAuthenticated, upload.single('file'), new UpdateImageStoreController().handle);
router.put('/updateTitleImageStore', ADMINisAuthenticated, new UpdateTitleImageStoreController().handle);
router.put('/updateOrderImageStore', ADMINisAuthenticated, new UpdateOrderImageStoreController().handle);
router.put('/updateStatusImageStore', ADMINisAuthenticated, new UpdateStatusImageStoreController().handle);
router.put('/updatePosicaoImageTextoInstitucional', ADMINisAuthenticated, new UpdatePositionImageStoreController().handle);
router.get('/findUniqueImageStore', ADMINisAuthenticated, new FindUniqueImageStoreController().handle);
router.get('/listImagesStore', new ListAllImageStoreController().handle);

// -- ROUTES CATEGORY --
router.post('/category', ADMINisAuthenticated, new CreateCategoryController().handle);
router.post('/createImageCategory', ADMINisAuthenticated, upload.single('file'), new CreateImageCategoryController().handle);
router.put('/categoryNameUpdate', ADMINisAuthenticated, new UpdateNameCategoryController().handle);
router.put('/updateDescription', ADMINisAuthenticated, new UpdateDescriptionCategoryController().handle);
router.put('/updateDisponibilidadeCategory', ADMINisAuthenticated, new UpdateStatusCategoryController().handle);
router.put('/updateOrderCaategory', ADMINisAuthenticated, new UpdateOrderCategoryController().handle);
router.put('/updateImageCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageCategoryController().handle);
router.get('/allCategorysPage', ADMINisAuthenticated, new PageListAllCategorysController().handle);
router.get('/exactCategoryPage', ADMINisAuthenticated, new ExactPageListAllCategoryController().handle);
router.get('/findFirstCategory', ADMINisAuthenticated, new FindFirstCategoryController().handle);
router.get('/exactCategory', ADMINisAuthenticated, new FindUniqueCategoryController().handle);
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

// -- ROUTES PRODUCT --
router.post('/createProduct', ADMINisAuthenticated, new CreateProductController().handle);
router.post('/imageProduct', ADMINisAuthenticated, upload.single('file'), new CreatePhotoProductController().handle);
router.put('/updateAllDateProduct', ADMINisAuthenticated, new UpdateAllDateProductController().handle);
router.delete('/deletePhoto', ADMINisAuthenticated, new DeletePhotoProductController().handle);
router.delete('/deleteAllPhotos', ADMINisAuthenticated, new DeleteAllPhotoProductController().handle);
router.put('/updatePhoto', ADMINisAuthenticated, upload.single('file'), new UpdatePhotoProductController().handle);
router.put('/updateOrderPhotoProduct', ADMINisAuthenticated, new UpdateOrderPhotoProductController().handle);
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
router.put('/updateStatusProduct', ADMINisAuthenticated, new UpdateStatusProductController().handle);
router.put('/emphasis', ADMINisAuthenticated, new UpdateProductEmphasisController().handle);
router.put('/offer', ADMINisAuthenticated, new UpdateProductOfferController().handle);
router.put('/updateFreeShipping', ADMINisAuthenticated, new UpdateProductFreeShippingController().handle);
router.post('/createDescriptionProduct', ADMINisAuthenticated, new CreateDescriptionProductController().handle);
router.put('/updateTitleDescription', ADMINisAuthenticated, new UpdateTitleDescriptionProductController().handle);
router.get('/findUniqueDescriptionProduct', ADMINisAuthenticated, new FindUniqueDescriptionProductController().handle);
router.get('/descriptions', ADMINisAuthenticated, new AllDescriptionsController().handle);
router.delete('/deleteAllDescriptionsProduct', ADMINisAuthenticated, new DeleteAllDescriptionProductController().handle);
router.delete('/deleteDescriptionProduct', ADMINisAuthenticated, new DeleteDescriptionProductController().handle);
router.put('/updateOrderDescription', ADMINisAuthenticated, new UpdateOrderDescriptionProductController().handle);
router.put('/updateDescriptionProduct', ADMINisAuthenticated, new UpdateDescriptionProductController().handle);
router.put('/updateStatusDescriptionProduct', ADMINisAuthenticated, new UpdateStatusDescriptionProductController().handle);
router.post('/createTagProduct', ADMINisAuthenticated, new CreateTagController().handle);
router.put('/updateTagNameProduct', ADMINisAuthenticated, new UpdateTagController().handle);
router.delete('/deleteTagProduct', ADMINisAuthenticated, new DeleteTagController().handle);
router.delete('/deleteAllTagProduct', ADMINisAuthenticated, new DeleteAllTagController().handle);
router.get('/findUniqueTagProduct', ADMINisAuthenticated, new FindUniqueTagController().handle);
router.get('/allTags', ADMINisAuthenticated, new AllTagController().handle);
router.get('/allDescriptionProductsStore', new AllDescriptionProductInStoreController().handle);
router.get('/allProductsDescriptionsStore', new AllDescriptionProductController().handle);
router.get('/allProductsStore', new AllProductInStoreController().handle);
router.get('/allPhotosProductsStore', new AllPhotosProductInStoreController().handle);
router.get('/listProductsDestaque', new ListAllProductEmphasisController().handle);
router.get('/listProductsOfertas', new ListAllProductOfferController().handle);
router.get('/exactProductPage', new ListExactProductNameController().handle);
router.get('/allTagProducts', new AllTagProductController().handle);

// ROUTES CATEGORIES AND PRODUCT --
router.post('/createProductCategory', ADMINisAuthenticated, new CreateProductCategoryController().handle);
router.put('/updateCategoryNameProduct', ADMINisAuthenticated, new UpdateNameProductCategoryController().handle);
router.put('/updateStatusCategoryProduct', ADMINisAuthenticated, new UpdateStatusCategoryProductController().handle);
router.get('/pageRelationsCategorys', ADMINisAuthenticated, new PageRelationsCategorysController().handle);
router.get('/findCategoryAndProduct', ADMINisAuthenticated, new FindCategoryAndProductController().handle);
router.put('/updateOrderRelation', ADMINisAuthenticated, new UpdateOrderProductCategoryController().handle);
router.delete('/deleteCategoryProduct', ADMINisAuthenticated, new DeleteProductCategoryController().handle);
router.delete('/deleteAllCategoiesProduct', ADMINisAuthenticated, new DeleteAllProductCategoryController().handle);
router.get('/productsPageCategories', new ProductsPageCategoriesController().handle);

// ROUTES TYPE ATTRIBUTE --
router.post('/createTypeAttribute', ADMINisAuthenticated, new CreateTypeAttributeController().handle);
router.put('/updateTypeAttribute', ADMINisAuthenticated, new UpdateTypeAttributeController().handle);
router.get('/allTypeAttributes', new AllTypeAttributeController().handle);
router.get('/findUniqueTypeAttribute', new FindUniqueTypeAttributeController().handle);

// ROUTES RELATION ATTRIBUTE AND PRODUCT --
router.post('/createRelationAttributeProduct', ADMINisAuthenticated, new CreateRelationAttributeProductController().handle);
router.get('/allAttributeProduct', ADMINisAuthenticated, new AllRelationAttributeProductController().handle);
router.delete('/deleteAllRelationProductAttributes', ADMINisAuthenticated, new DeleteProductRelationAllController().handle);
router.delete('/deleteAttributeProduct', ADMINisAuthenticated, new DeleteRelationAttributeProductController().handle);
router.get('/findAllProductRelationAttribute', ADMINisAuthenticated, new FindRelationAttributeBlockController().handle);
router.get('/findUniqueRelationAttributeProduct', ADMINisAuthenticated, new FindUniqueRelationAttributeProductController().handle);
router.get('/findFirstRelationAttributeProduct', ADMINisAuthenticated, new FirstFirstRelationAttributeProductController().handle);
router.get('/pageAttributesRelationsProducts', ADMINisAuthenticated, new PageRelationAttributeProductController().handle);
router.put('/updateTypeRelationAttributeProduct', ADMINisAuthenticated, new UpdateTypeRelationAttributeProductController().handle);
router.put('/updateOrderRelationAttributeProduct', ADMINisAuthenticated, new UpdateOrderRelationAttributeProductController().handle);
router.put('/updateStatusRelationAttributeProduct', ADMINisAuthenticated, new UpdateStatusRelationAttributeProductController().handle);
router.post('/createImageAttributeProduct', ADMINisAuthenticated, upload.single('file'), new CreateImageAttributeController().handle);
router.put('/updateImageAttribute', ADMINisAuthenticated, upload.single('file'), new UpdateImageAttributeController().handle);
router.delete('/deleteImageAttributeProduct', ADMINisAuthenticated, new DeleteImageAttributeController().handle);

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
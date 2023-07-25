import { Router } from 'express';
import multer from 'multer';

// -- ROUTES ADMIN --
import { ActiveOrDesactiveAdminController } from './controllers/users/admin/ActiveOrDesactiveAdminController';
import { AdminCreateController } from './controllers/users/admin/AdminCreateController';
import { EmployeCreateController } from './controllers/users/admin/EmployeCreateController';
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
import { EmailPasswordController } from './controllers/users/admin/passwordRecoveryAdmin/EmailPasswordController';
import { DeleteAdminPasswordRecoveryIDController } from './controllers/users/admin/passwordRecoveryAdmin/DeleteAdminPasswordRecoveryIDController';
import { FindAdminRecoveryIDController } from './controllers/users/admin/passwordRecoveryAdmin/FindAdminRecoveryIDController';
import { RecoveryPasswordAdminController } from './controllers/users/admin/passwordRecoveryAdmin/RecoveryPasswordAdminController';
import { EmailPasswordDashboardController } from './controllers/users/admin/passwordRecoveryAdmin/EmailPasswordDashboardController';
import { ListSuperAdminController } from './controllers/users/admin/ListSuperAdminController';

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
import { DeletePasswordRecoveryIDCustomerController } from './controllers/users/customer/passwordRecoveryCustomer/DeletePasswordRecoveryIDCustomerController';
import { FindRecoveryIDCustomerController } from './controllers/users/customer/passwordRecoveryCustomer/FindRecoveryIDCustomerController';
import { CustomerRecoveryPasswordController } from './controllers/users/customer/passwordRecoveryCustomer/CustomerRecoveryPasswordController';
import { CreateDeliveryAddressCustomerController } from './controllers/users/customer/deliveryAddressCustomer/CreateDeliveryAddressCustomerController';
import { UpdateAllDateDeliveryAddressCustomerCustomerController } from './controllers/users/customer/deliveryAddressCustomer/UpdateAllDateDeliveryAddressCustomerCustomerController';
import { DeleteDeliveryAddressCustomerController } from './controllers/users/customer/deliveryAddressCustomer/DeleteDeliveryAddressCustomerController';
import { EmailPasswordDashboardCustomerController } from './controllers/users/customer/passwordRecoveryCustomer/EmailPasswordDashboardCustomerController';
import { EmailPasswordCustomerController } from './controllers/users/customer/passwordRecoveryCustomer/EmailPasswordCustomerController';

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
import { FindUniqueSocialMediaController } from './controllers/store/socialMedia/FindUniqueSocialMediaController';

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
import { FindParentIDCategoryController } from './controllers/category/FindParentIDCategoryController';
import { DeleteImageCategoryController } from './controllers/category/imageCategory/DeleteImageCategoryController';
import { ListAllCategoriesStorePageController } from './controllers/category/ListAllCategoriesStorePageController';

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
import { UpdateStockProductController } from './controllers/product/UpdateStockProductController';
import { AllProductExistController } from './controllers/product/AllProductExistController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';
import { ListExactProductController } from './controllers/product/ListExactProductController';
import { DeletePhotoProductController } from './controllers/product/photoProduct/DeletePhotoProductController';
import { DeleteAllPhotoProductController } from './controllers/product/photoProduct/DeleteAllPhotoProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
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
import { AllPhotosProductPageController } from './controllers/product/photoProduct/AllPhotosProductPageController';

// -- ROUTES SEARCH --
import { FilterController } from './controllers/search/FilterController';
import { FilterPriceController } from './controllers/search/FilterPriceController';
import { AllProductSearchController } from './controllers/search/AllProductSearchController';
import { OrderProductsController } from './controllers/search/OrderProductsController';
import { FavoritesProductsController } from './controllers/search/FavoritesProductsController';

// -- ROUTES CATEGORY AND PRODUCT --
import { CreateProductCategoryController } from './controllers/product/productCategory/CreateProductCategoryController';
import { UpdateOrderProductCategoryController } from './controllers/product/productCategory/UpdateOrderProductCategoryController';
import { DeleteAllProductCategoryController } from './controllers/product/productCategory/DeleteAllProductCategoryController';
import { PageRelationsCategorysController } from './controllers/product/productCategory/PageRelationsCategorysController';
import { UpdateStatusCategoryProductController } from './controllers/product/productCategory/UpdateStatusCategoryProductController';
import { UpdateNameProductCategoryController } from './controllers/product/productCategory/UpdateNameProductCategoryController';
import { FindCategoryAndProductController } from './controllers/product/productCategory/FindCategoryAndProductController';
import { DeleteProductCategoryController } from './controllers/product/productCategory/DeleteProductCategoryController';
import { ProductsPageCategoriesController } from './controllers/product/productCategory/ProductsPageCategoriesController';
import { FindAllRelationProductAndCategoryController } from './controllers/product/productCategory/FindAllRelationProductAndCategoryController';
import { FindUniqueRelationProductCategoryController } from './controllers/product/productCategory/FindUniqueRelationProductCategoryController';
import { ProductsCategoriesController } from './controllers/product/productCategory/ProductsCategoriesController';
import { MainCategoryProductController } from './controllers/product/productCategory/MainCategoryProductController';
import { FindMainCategoryProductController } from './controllers/product/productCategory/FindMainCategoryProductController';
import { FindFirstProductCategoryController } from './controllers/product/productCategory/FindFirstProductCategoryController';

// -- ROUTES DESCRIPTION PRODUCT --
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

// -- ROUTES TAG --
import { AllTagProductController } from './controllers/product/tag/AllTagProductController';
import { AllTagController } from './controllers/product/tag/AllTagController';
import { CreateTagController } from './controllers/product/tag/CreateTagController';
import { UpdateTagController } from './controllers/product/tag/UpdateTagController';
import { DeleteTagController } from './controllers/product/tag/DeleteTagController';
import { DeleteAllTagController } from './controllers/product/tag/DeleteAllTagController';
import { FindUniqueTagController } from './controllers/product/tag/FindUniqueTagController';

// -- ROUTES TYPE ATTRIBUTE --
import { CreateTypeAttributeController } from './controllers/attribute/typeAttribute/CreateTypeAttributeController';
import { UpdateTypeAttributeController } from './controllers/attribute/typeAttribute/UpdateTypeAttributeController';
import { AllTypeAttributeController } from './controllers/attribute/typeAttribute/AllTypeAttributeController';
import { FindUniqueTypeAttributeController } from './controllers/attribute/typeAttribute/FindUniqueTypeAttributeController';

// -- ROUTES VALUE ATTRIBUTE --
import { UpdateValueAttributeController } from './controllers/attribute/valueAttribute/UpdateValueAttributeController';
import { CreateValueAttributeController } from './controllers/attribute/valueAttribute/CreateValueAttributeController';
import { UpdateTypeValueAttributeController } from './controllers/attribute/valueAttribute/UpdateTypeValueAttributeController';
import { AllValuesTypeAttributeController } from './controllers/attribute/valueAttribute/AllValuesTypeAttributeController';
import { UpdateValueOrderAttributeController } from './controllers/attribute/valueAttribute/UpdateValueOrderAttributeController';
import { DeleteValueAttributeController } from './controllers/attribute/valueAttribute/DeleteValueAttributeController';
import { FindUniqueValueAttributeController } from './controllers/attribute/valueAttribute/FindUniqueValueAttributeController';
import { DeleteImageAttributeRelationIDController } from './controllers/attribute/valueAttribute/imageAttribute/DeleteImageAttributeRelationIDController';
import { ValuesAttributeController } from './controllers/attribute/valueAttribute/ValuesAttributeController';

// -- ROUTES RELATION ATTRIBUTE AND PRODUCT --
import { CreateRelationAttributeProductController } from './controllers/product/relationAttributeProduct/CreateRelationAttributeProductController';
import { DeleteProductRelationAllController } from './controllers/product/relationAttributeProduct/DeleteProductRelationAllController';
import { DeleteRelationAttributeProductController } from './controllers/product/relationAttributeProduct/DeleteRelationAttributeProductController';
import { FindUniqueRelationAttributeProductController } from './controllers/product/relationAttributeProduct/FindUniqueRelationAttributeProductController';
import { FirstFirstRelationAttributeProductController } from './controllers/product/relationAttributeProduct/FirstFirstRelationAttributeProductController';
import { PageRelationAttributeProductController } from './controllers/product/relationAttributeProduct/PageRelationAttributeProductController';
import { AllProductAttributeController } from './controllers/product/relationAttributeProduct/AllProductAttributeController';
import { UpdateOrderRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateOrderRelationAttributeProductController';
import { UpdateStatusRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateStatusRelationAttributeProductController';
import { CreateImageAttributeController } from './controllers/attribute/valueAttribute/imageAttribute/CreateImageAttributeController';
import { UpdateImageAttributeController } from './controllers/attribute/valueAttribute/imageAttribute/UpdateImageAttributeController';
import { DeleteImageAttributeController } from './controllers/attribute/valueAttribute/imageAttribute/DeleteImageAttributeController';
import { FindUniqueImageAttributeController } from './controllers/attribute/valueAttribute/imageAttribute/FindUniqueImageAttributeController';
import { ProductsAndAttributeController } from './controllers/product/relationAttributeProduct/ProductsAndAttributeController';
import { ProductAttributeController } from './controllers/product/relationAttributeProduct/ProductAttributeController';
import { UpdateValueRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateValueRelationAttributeProductController';
import { UpdateTypeRelationAttributeProductController } from './controllers/product/relationAttributeProduct/UpdateTypeRelationAttributeProductController';

// -- ROUTES AVALIETION --
import { CreateAvalietionController } from './controllers/avalietion/CreateAvalietionController';
import { DeleteAvalietionController } from './controllers/avalietion/DeleteAvalietionController';
import { UpdateStatusAvalietionController } from './controllers/avalietion/UpdateStatusAvalietionController';
import { PageListAllAvalietionController } from './controllers/avalietion/PageListAllAvalietionController';
import { DeleteAvalietionProductIDController } from './controllers/avalietion/DeleteAvalietionProductIDController';
import { PageListAllAvalietionProductIDController } from './controllers/avalietion/PageListAllAvalietionProductIDController';
import { FindUniqueAvalietionController } from './controllers/avalietion/FindUniqueAvalietionController';
import { PageAvalietionStoreProductIDController } from './controllers/avalietion/PageAvalietionStoreProductIDController';

// -- ROUTES VARIATION --
import { AllVariationProductController } from './controllers/variation/AllVariationProductController';
import { CreateVariationController } from './controllers/variation/CreateVariationController';
import { FindFirstVariationNameController } from './controllers/variation/FindFirstVariationNameController';
import { DeleteAllVariationProductController } from './controllers/variation/DeleteAllVariationProductController';
import { DeleteVariationController } from './controllers/variation/DeleteVariationController';
import { FindUniqueVariationController } from './controllers/variation/FindUniqueVariationController';
import { UpdateStatusVariationController } from './controllers/variation/UpdateStatusVariationController';
import { PageListAllVariationController } from './controllers/variation/PageListAllVariationController';
import { UpdateNameVariationController } from './controllers/variation/UpdateNameVariationController';
import { UpdateOrderVariacaoController } from './controllers/variation/UpdateOrderVariacaoController';
import { AllVariationImageController } from './controllers/variation/photoVariation/AllVariationImageController';
import { AllImagesVariationController } from './controllers/variation/photoVariation/AllImagesVariationController';
import { DeleteALLImageVariationProductController } from './controllers/variation/photoVariation/DeleteALLImageVariationProductController';
import { DeleteImageVariationController } from './controllers/variation/photoVariation/DeleteImageVariationController';
import { CreateImageVariationController } from './controllers/variation/photoVariation/CreateImageVariationController';
import { UpdateOrderImageVariationController } from './controllers/variation/photoVariation/UpdateOrderImageVariationController';
import { FindUniqueImageVariationController } from './controllers/variation/photoVariation/FindUniqueImageVariationController';
import { CreateProductVariationController } from './controllers/variation/productVariation/CreateProductVariationController';
import { DeleteProductVariationController } from './controllers/variation/productVariation/DeleteProductVariationController';
import { VariationDeleteController } from './controllers/variation/productVariation/VariationDeleteController';
import { FindFirstProductVariationController } from './controllers/variation/productVariation/FindFirstProductVariationController';
import { FindUniqueProductVariationController } from './controllers/variation/productVariation/FindUniqueProductVariationController';
import { UpdateStatusProductVariationController } from './controllers/variation/productVariation/UpdateStatusProductVariationController';
import { UpdateNameProductVariationController } from './controllers/variation/productVariation/UpdateNameProductVariationController';
import { UpdateOrderProductVariationController } from './controllers/variation/productVariation/UpdateOrderProductVariationController';

// -- ROUTES BUY TOGETHER --
import { CreateBuyTogetherController } from './controllers/buyTogether/CreateBuyTogetherController';
import { UpdateProductBuyTogetherController } from './controllers/buyTogether/UpdateProductBuyTogetherController';
import { UpdateNameGroupBuyTogetherController } from './controllers/buyTogether/UpdateNameGroupBuyTogetherController';
import { UpdateOrderBuyTogetherController } from './controllers/buyTogether/UpdateOrderBuyTogetherController';
import { UpdateStatusBuyTogetherController } from './controllers/buyTogether/UpdateStatusBuyTogetherController';
import { DeleteBuyTogetherController } from './controllers/buyTogether/DeleteBuyTogetherController';
import { FindUniqueBuyTogetherController } from './controllers/buyTogether/FindUniqueBuyTogetherController';
import { AllBuyTogetherController } from './controllers/buyTogether/AllBuyTogetherController';
import { FindGroupBuyTogetherIDController } from './controllers/buyTogether/FindGroupBuyTogetherIDController';
import { FindFirstBuyTogetherController } from './controllers/buyTogether/FindFirstBuyTogetherController';
import { DeleteGroupBuyTogetherController } from './controllers/buyTogether/DeleteGroupBuyTogetherController';
import { ProductIDBuyTogetherController } from './controllers/buyTogether/ProductIDBuyTogetherController';
import { DeleteBuyTogetherAllProductController } from './controllers/buyTogether/DeleteBuyTogetherAllProductController';
import { FindBuyTogetherIDController } from './controllers/buyTogether/FindBuyTogetherIDController';

// -- ROUTES COUNTERPROPOSAL --
import { CreateCounterProposalController } from './controllers/counterproposal/CreateCounterProposalController';
import { PageCounterProposalController } from './controllers/counterproposal/PageCounterProposalController';
import { FindUniqueCounterProposalController } from './controllers/counterproposal/FindUniqueCounterProposalController';
import { CounterProposalController } from './controllers/counterproposal/CounterProposalController';

// -- ROUTES STOCK PRODUCT CUSTOMER --
import { CreateStockProductCustomerController } from './controllers/stockproductcustomer/CreateStockProductCustomerController';
import { StockProductCustomerController } from './controllers/stockproductcustomer/StockProductCustomerController';

// -- ROUTES MENU CATEGORY --
import { CreateMenuCategoryController } from './controllers/category/menuCategory/CreateMenuCategoryController';
import { ListPositionMenuCategoryController } from './controllers/category/menuCategory/ListPositionMenuCategoryController';
import { ListCategoryMenuController } from './controllers/category/menuCategory/ListCategoryMenuController';
import { PageListAllMenuCategoryController } from './controllers/category/menuCategory/PageListAllMenuCategoryController';
import { FindFirstMenuController } from './controllers/category/menuCategory/FindFirstMenuController';
import { FindMenuIDController } from './controllers/category/menuCategory/FindMenuIDController';
import { FindUniqueMenuIDController } from './controllers/category/menuCategory/FindUniqueMenuIDController';
import { UpdateOrderCategoryMenuController } from './controllers/category/menuCategory/UpdateOrderCategoryMenuController';
import { StatusCategoryMenuCategoriesController } from './controllers/category/menuCategory/StatusCategoryMenuCategoriesController';
import { DeleteMenuCategoryMenuIDController } from './controllers/category/menuCategory/DeleteMenuCategoryMenuIDController';
import { DeleteMenuIDController } from './controllers/category/menuCategory/DeleteMenuIDController';
import { UpdateNameMenuController } from './controllers/category/menuCategory/UpdateNameMenuController';
import { UpdatePositionMenuController } from './controllers/category/menuCategory/UpdatePositionMenuController';
import { UpdateNameCategoryMenuController } from './controllers/category/menuCategory/UpdateNameCategoryMenuController';
import { CreateImageMenuCategoryController } from './controllers/category/menuCategory/imageMenuCategory/CreateImageMenuCategoryController';
import { UpdateItemNameCategoryController } from './controllers/category/menuCategory/UpdateItemNameCategoryController';
import { UpdateSlugMenuController } from './controllers/category/menuCategory/UpdateSlugMenuController';
import { UpdateImageMenuCategoryController } from './controllers/category/menuCategory/imageMenuCategory/UpdateImageMenuCategoryController';
import { DeletetImageMenuCategoryController } from './controllers/category/menuCategory/imageMenuCategory/DeletetImageMenuCategoryController';
import { AllCategoriesMenuController } from './controllers/category/menuCategory/AllCategoriesMenuController';
import { MenuCategoryController } from './controllers/category/menuCategory/MenuCategoryController';

// -- ROUTES GROUP FILTERS --
import { CreateGroupFilterController } from './controllers/groupFilter/CreateGroupFilterController';
import { UpdateNameGroupFilterController } from './controllers/groupFilter/UpdateNameGroupFilterController';
import { UpdateSlugGroupFilterController } from './controllers/groupFilter/UpdateSlugGroupFilterController';
import { UpdateStatusGroupFilterController } from './controllers/groupFilter/UpdateStatusGroupFilterController';
import { PageGroupsFiltersController } from './controllers/groupFilter/PageGroupsFiltersController';
import { FindsNameGroupFilterController } from './controllers/groupFilter/FindsNameGroupFilterController';
import { FindTypeFilterController } from './controllers/groupFilter/FindTypeFilterController';
import { DeleteGroupFilterController } from './controllers/groupFilter/DeleteGroupFilterController';
import { FindSlugGroupFilterController } from './controllers/groupFilter/FindSlugGroupFilterController';
import { FindFirstGroupsController } from './controllers/groupFilter/FindFirstGroupsController';
import { FindIDGroupFilterController } from './controllers/groupFilter/FindIDGroupFilterController';
import { UpdateTypeAttributeGroupController } from './controllers/groupFilter/UpdateTypeAttributeGroupController';

// -- ROUTES FILTER ATTRIBUTES --
import { CreateFilterAttributeController } from './controllers/groupFilter/filterAttribute/CreateFilterAttributeController';
import { DeleteAllFilterAttributeController } from './controllers/groupFilter/filterAttribute/DeleteAllFilterAttributeController';
import { PageFilterAttributeController } from './controllers/groupFilter/filterAttribute/PageFilterAttributeController';
import { UpdateNameFilterAttributeController } from './controllers/groupFilter/filterAttribute/UpdateNameFilterAttributeController';
import { UpdateValueFilterAttributeController } from './controllers/groupFilter/filterAttribute/UpdateValueFilterAttributeController';
import { UpdateOrderFilterAttributeController } from './controllers/groupFilter/filterAttribute/UpdateOrderFilterAttributeController';
import { UpdateStatusFilterAttributeController } from './controllers/groupFilter/filterAttribute/UpdateStatusFilterAttributeController';
import { CreateImageFilterAttributeController } from './controllers/groupFilter/filterAttribute/imageFilterAtributo/CreateImageFilterAttributeController';
import { UpdateImageFilterAttributeController } from './controllers/groupFilter/filterAttribute/imageFilterAtributo/UpdateImageFilterAttributeController';
import { FindFilterAttributeController } from './controllers/groupFilter/filterAttribute/FindFilterAttributeController';
import { FindUniqueFilterAttributeController } from './controllers/groupFilter/filterAttribute/FindUniqueFilterAttributeController';
import { FindManyFilterAttributeNameController } from './controllers/groupFilter/filterAttribute/FindManyFilterAttributeNameController';
import { DeleteFilterAttributeController } from './controllers/groupFilter/filterAttribute/DeleteFilterAttributeController';

// -- ROUTES FILTER CATEGORY --
import { CreateFilterCategoryController } from './controllers/groupFilter/filterCategory/CreateFilterCategoryController';
import { DeleteFilterCategoryController } from './controllers/groupFilter/filterCategory/DeleteFilterCategoryController';
import { FindManyFilterCategoryNameController } from './controllers/groupFilter/filterCategory/FindManyFilterCategoryNameController';
import { FindUniqueFilterCategoryController } from './controllers/groupFilter/filterCategory/FindUniqueFilterCategoryController';
import { PageFilterCategoryController } from './controllers/groupFilter/filterCategory/PageFilterCategoryController';
import { UpdateNameFilterGroupController } from './controllers/groupFilter/filterCategory/UpdateNameFilterGroupController';
import { UpdateCategoryNameFilterCategoryController } from './controllers/groupFilter/filterCategory/UpdateCategoryNameFilterCategoryController';
import { UpdateStatusFilterCategoryController } from './controllers/groupFilter/filterCategory/UpdateStatusFilterCategoryController';
import { UpdateCategoryOrderFilterController } from './controllers/groupFilter/filterCategory/UpdateCategoryOrderFilterController';
import { DeleteImageFilterAttributeController } from './controllers/groupFilter/filterAttribute/imageFilterAtributo/DeleteImageFilterAttributeController';
import { CreateImageFilterCategoryController } from './controllers/groupFilter/filterCategory/imageFilterCategory/CreateImageFilterCategoryController';
import { UpdateImageFilterCategoryController } from './controllers/groupFilter/filterCategory/imageFilterCategory/UpdateImageFilterCategoryController';
import { DeleteImageFilterCategoryController } from './controllers/groupFilter/filterCategory/imageFilterCategory/DeleteImageFilterCategoryController';

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

// -- ROUTES NEWSLETTERS --
import { CreateNewslettersController } from './controllers/newsletters/CreateNewslettersController';
import { DeleteNewslettersController } from './controllers/newsletters/DeleteNewslettersController';
import { ListNewslettersController } from './controllers/newsletters/ListNewslettersController';
import { ListExactNewslettersController } from './controllers/newsletters/ListExactNewslettersController';
import { PageListAllNewslettersController } from './controllers/newsletters/PageListAllNewslettersController';
import { ExportNewslettersController } from './controllers/newsletters/ExportNewslettersController';

// -- ROUTES CONTACT --
import { CreateContactController } from './controllers/contact/CreateContactController';
import { DeleteContactController } from './controllers/contact/DeleteContactController';
import { ListContactController } from './controllers/contact/ListContactController';
import { FindUniqueContactController } from './controllers/contact/FindUniqueContactController';
import { PageListAllContactController } from './controllers/contact/PageListAllContactController';
import { ExportContactController } from './controllers/contact/ExportContactController';

// -- ROUTES SEND EMAILS --
import { EmailExportAdminUserController } from './controllers/sendEmails/EmailExportAdminUserController';
import { EmailExportCustomerUserController } from './controllers/sendEmails/EmailExportCustomerUserController';
import { EmailExportProductsController } from './controllers/sendEmails/EmailExportProductsController';
import { EmailExportNewslettersController } from './controllers/sendEmails/EmailExportNewslettersController';
import { EmailExportContactController } from './controllers/sendEmails/EmailExportContactController';


const authorizationRules = require('./middlewares/userRouteAuthorization');
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';



const router = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROUTES ADMIN --
router.put('/admin/activeOrDesactiveAdmin', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ActiveOrDesactiveAdminController().handle);
router.post('/admin/createAdmin', new AdminCreateController().handle);
router.post('/admin/createEmployee', new EmployeCreateController().handle);
router.put('/admin/updateRoleAdmin', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AdminRoleController().handle);
router.post('/admin/session', new AuthAdminController().handle);
router.put('/admin/authenticatedEmailAdmin', new AuthenticatedEmailAdminController().handle);
router.delete('/admin/deleteAdminUser', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAdminOrEmployeController().handle);
router.get('/admin/me', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DetailAdminController().handle);
router.get('/admin/exportAdmins', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ExportAdminController().handle);
router.get('/admin/listExactAdminName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactAdminNameController().handle);
router.get('/admin/listExactAdminID', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactAdminController().handle);
router.get('/admin/listForPageEmployes', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllAdminsController().handle);
router.put('/admin/updateDateAdmin', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateAllDateAdminController().handle);
router.put('/admin/updateRoleEmployee', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AdminRoleEmployeeController().handle);
router.put('/admin/updateNameAdminOrEmployee', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AdminUpdateNameController().handle);
router.delete('/admin/deleteRecoveryIDAdmin', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAdminPasswordRecoveryIDController().handle);
router.get('/admin/findFirstAdmin', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindAdminRecoveryIDController().handle);
router.post('/admin/recoverPasswordDashboard', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailPasswordDashboardController().handle);
router.get('/admin/getSuperAdmin', new ListSuperAdminController().handle);
router.post('/admin/recoverPasswordEmail', new EmailPasswordController().handle);
router.put('/admin/recoverAdmin', new RecoveryPasswordAdminController().handle);

// -- ROUTES CUSTOMERS --
router.post('/customer/createCustomer', new CreateCustomerController().handle);
router.put('/customer/activeOrDesactiveCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ActiveOrDesactiveCustomerController().handle);
router.post('/customer/session', new AuthCustomerController().handle);
router.delete('/customer/deleteCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteCustomerController().handle);
router.get('/customer/me', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DetailCustomerController().handle);
router.get('/customer/exportCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ExportCustomerController().handle);
router.get('/customer/listExactCustomerName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactCustomerNameController().handle);
router.get('/customer/listExactCustomerID', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactCustomerController().handle);
router.get('/customer/listForPageCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllCustomerController().handle);
router.put('/customer/updateDateCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateAllDateCustomerController().handle);
router.put('/customer/updateNameCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CustomerUpdateNameController().handle);
router.put('/customer/updateNewslatter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CustomerUpdateNewslatterController().handle);
router.delete('/customer/deleteRecoveryIDCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeletePasswordRecoveryIDCustomerController().handle);
router.get('/customer/findFirstCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindRecoveryIDCustomerController().handle);
router.post('/customer/delivery/createDeliveryAddress', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateDeliveryAddressCustomerController().handle);
router.put('/customer/delivery/updateAllDateDeliveryAddressCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateAllDateDeliveryAddressCustomerCustomerController().handle);
router.delete('/customer/delivery/deleteDeliveryAddress', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteDeliveryAddressCustomerController().handle);
router.post('/customer/recoverPasswordDashboard', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailPasswordDashboardCustomerController().handle);
router.put('/customer/recoverCustomer', new CustomerRecoveryPasswordController().handle);
router.post('/customer/recoverPasswordEmail', new EmailPasswordCustomerController().handle);

// -- ROUTES STORE --
router.post('/createStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateStoreController().handle);
router.get('/userStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueStoreController().handle);
router.get('/findFirstStoreUser', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstStoreController().handle);
router.get('/store', new StoreController().handle);
router.delete('/deleteStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteStoreController().handle);
router.put('/logoStoreUpdate', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateLogoStoreController().handle);
router.put('/updateAllDateStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateAllDateStoreController().handle);

// -- ROUTES SOCIAL MEDIA --
router.post('/createSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateSocialMediaController().handle);
router.put('/updateOrderSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderSocialMediaController().handle);
router.put('/updateSocialMediaName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateSocialMediaNameController().handle);
router.put('/updateLinkSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateLinkSocialMediaController().handle);
router.put('/updateImageSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageRedeSocialController().handle);
router.put('/updatePositionSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdatePositionSocialMediaController().handle);
router.put('/updateStatusSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusSocialMediaController().handle);
router.delete('/deleteSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteSocialMediaController().handle);
router.get('/findUniqueSocialMedia', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueSocialMediaController().handle);
router.get('/listAllSocialMedia', new ListAllSocialMediaController().handle);
router.get('/listSocialMediaOrder', new ListAllSocialMediaOrderAndPositionController().handle);

// -- ROUTES TEXT INSTITUTIONAL --
router.post('/createInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateInstitutionalTextController().handle);
router.delete('/deleteInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteInstitutionalTextController().handle);
router.get('/findUniqueInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueInstitutionalTextController().handle);
router.get('/listAllText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListAllInstitutionalTextController().handle);
router.get('/pageListInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListInstitutionalTextController().handle);
router.put('/updateStatusInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusInstitutionalTextController().handle);
router.put('/updateOrderInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderInstitutionalTextController().handle);
router.put('/updatePositionInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdatePositionInstitutionalTextController().handle);
router.put('/updateTitleInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTitleInstitutionalTextController().handle);
router.put('/updateDescriptionInstitutionalText', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateDescriptionInstitutionalTextController().handle);
router.get('/listInstitutionalText', new ListAllTextOrderAndPositionController().handle);

// -- ROUTES IMAGE STORE --
router.post('/createImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageStoreController().handle);
router.get('/allImagesStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllImageStoreController().handle);
router.delete('/deleteImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageStoreController().handle);
router.put('/updateImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageStoreController().handle);
router.put('/updateTitleImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTitleImageStoreController().handle);
router.put('/updateOrderImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderImageStoreController().handle);
router.put('/updateStatusImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusImageStoreController().handle);
router.put('/updatePositionImageTextoInstitucional', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdatePositionImageStoreController().handle);
router.get('/findUniqueImageStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueImageStoreController().handle);
router.get('/listImagesStore', new ListAllImageStoreController().handle);

// -- ROUTES CATEGORY --
router.post('/createCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateCategoryController().handle);
router.post('/createImageCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageCategoryController().handle);
router.put('/categoryNameUpdate', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameCategoryController().handle);
router.put('/updateDescription', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateDescriptionCategoryController().handle);
router.put('/updateStatusCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusCategoryController().handle);
router.put('/updateOrderCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderCategoryController().handle);
router.put('/updateImageCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageCategoryController().handle);
router.get('/allCategorysPage', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllCategorysController().handle);
router.get('/exactCategoryPage', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ExactPageListAllCategoryController().handle);
router.get('/findFirstCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstCategoryController().handle);
router.get('/parentIDCategoryAll', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindParentIDCategoryController().handle);
router.get('/finduniqueCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueCategoryController().handle);
router.get('/findCategorys', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListCategoryNameController().handle);
router.delete('/deleteImageCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageCategoryController().handle);
router.get('/listCategorysDisponivel', new ListCategoryController().handle);
router.get('/findDateSlugCategory', new FindFirstCategorySlugController().handle);
router.get('/categoriesInPageCategory', new ListAllCategoriesStorePageController().handle);

// -- ROUTES PRODUCT --
router.post('/createProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateProductController().handle);
router.post('/imageProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreatePhotoProductController().handle);
router.put('/updateAllDateProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateAllDateProductController().handle);
router.delete('/deletePhoto', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeletePhotoProductController().handle);
router.delete('/deleteAllPhotos', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAllPhotoProductController().handle);
router.put('/updatePhoto', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdatePhotoProductController().handle);
router.put('/updateOrderPhotoProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderPhotoProductController().handle);
router.get('/allPhotosProducts', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllPhotosProductController().handle);
router.get('/photos', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllPhotosController().handle);
router.get('/allProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllProductController().handle);
router.get('/allExistProducts', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllProductExistController().handle);
router.get('/allProductsPage', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllProductController().handle);
router.get('/findUniqueProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactProductController().handle);
router.get('/findFirstProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstProductController().handle);
router.delete('/deleteProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteProductController().handle);
router.put('/updateNameProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameProductController().handle);
router.get('/exportProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ExportProductController().handle);
router.put('/updateStatusProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusProductController().handle);
router.put('/emphasis', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateProductEmphasisController().handle);
router.put('/offer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateProductOfferController().handle);
router.put('/updateStockProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStockProductController().handle);
router.put('/updateFreeShipping', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateProductFreeShippingController().handle);
router.post('/createDescriptionProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateDescriptionProductController().handle);
router.put('/updateTitleDescription', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTitleDescriptionProductController().handle);
router.get('/findUniqueDescriptionProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueDescriptionProductController().handle);
router.get('/descriptions', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllDescriptionsController().handle);
router.delete('/deleteAllDescriptionsProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAllDescriptionProductController().handle);
router.delete('/deleteDescriptionProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteDescriptionProductController().handle);
router.put('/updateOrderDescription', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderDescriptionProductController().handle);
router.put('/updateDescriptionProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateDescriptionProductController().handle);
router.put('/updateStatusDescriptionProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusDescriptionProductController().handle);
router.post('/createTagProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateTagController().handle);
router.put('/updateTagNameProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTagController().handle);
router.delete('/deleteTagProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteTagController().handle);
router.delete('/deleteAllTagProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAllTagController().handle);
router.get('/findUniqueTagProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueTagController().handle);
router.get('/allProductsDescriptionsStore', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllDescriptionProductController().handle);
router.get('/allTags', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllTagController().handle);
router.get('/allProductsStore', new AllProductInStoreController().handle);
router.get('/allDescriptionProductsStore', new AllDescriptionProductInStoreController().handle);
router.get('/allPhotosProductsStore', new AllPhotosProductInStoreController().handle);
router.get('/listProductsDestaque', new ListAllProductEmphasisController().handle);
router.get('/listProductsOfertas', new ListAllProductOfferController().handle);
router.get('/exactProductPage', new ListExactProductNameController().handle);
router.get('/allTagProducts', new AllTagProductController().handle);
router.get('/listPhotosPageProduct', new AllPhotosProductPageController().handle);

// -- ROUTES SEARCH --
router.get('/filter', new FilterController().handle);
router.get('/filterPrice', new FilterPriceController().handle);
router.get('/searchProduct', new AllProductSearchController().handle);
router.get('/orderProducts', new OrderProductsController().handle);
router.get('/favoritesProducts', new FavoritesProductsController().handle);

// ROUTES CATEGORIES AND PRODUCT --
router.post('/createProductCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateProductCategoryController().handle);
router.put('/updateCategoryNameProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameProductCategoryController().handle);
router.put('/updateStatusCategoryProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusCategoryProductController().handle);
router.get('/pageRelationsCategorys', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageRelationsCategorysController().handle);
router.get('/findCategoryAndProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindCategoryAndProductController().handle);
router.put('/updateOrderRelation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderProductCategoryController().handle);
router.delete('/deleteCategoryProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteProductCategoryController().handle);
router.delete('/deleteAllCategoiesProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAllProductCategoryController().handle);
router.get('/findUniqueRelationCategoryProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueRelationProductCategoryController().handle);
router.get('/findAllRelationsProductAndCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindAllRelationProductAndCategoryController().handle);
router.put('/mainCategoryProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new MainCategoryProductController().handle);
router.get('/productsPageCategories', new ProductsPageCategoriesController().handle);
router.get('/getAllProductsCategory', new ProductsCategoriesController().handle);
router.get('/findMainCategoryProduct', new FindMainCategoryProductController().handle);
router.get('/findDateSlugCategoryProduct', new FindFirstProductCategoryController().handle);

// ROUTES TYPE ATTRIBUTE --
router.post('/createTypeAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateTypeAttributeController().handle);
router.put('/updateTypeAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTypeAttributeController().handle);
router.get('/allTypeAttributes', new AllTypeAttributeController().handle);
router.get('/findUniqueTypeAttribute', new FindUniqueTypeAttributeController().handle);

// -- ROUTES VALUE ATTRIBUTE --
router.post('/createValueAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateValueAttributeController().handle);
router.put('/updateValueAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateValueAttributeController().handle);
router.put('/updateTypeValueAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTypeValueAttributeController().handle);
router.put('/updateOrderValueAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateValueOrderAttributeController().handle);
router.get('/allValuesTypeAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllValuesTypeAttributeController().handle);
router.delete('/deleteValueAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteValueAttributeController().handle);
router.get('/findUniqueValueAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueValueAttributeController().handle);
router.delete('/deleteAllImagesValueType', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageAttributeRelationIDController().handle);
router.get('/getAllValuesAttributes', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ValuesAttributeController().handle);

// ROUTES RELATION ATTRIBUTE AND PRODUCT --
router.post('/createRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateRelationAttributeProductController().handle);
router.delete('/deleteAllRelationProductAttributes', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteProductRelationAllController().handle);
router.delete('/deleteAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteRelationAttributeProductController().handle);
router.get('/findUniqueRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueRelationAttributeProductController().handle);
router.get('/findFirstRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FirstFirstRelationAttributeProductController().handle);
router.get('/pageAttributesRelationsProducts', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageRelationAttributeProductController().handle);
router.get('/findManyAttributeIDproduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllProductAttributeController().handle);
router.put('/updateOrderRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderRelationAttributeProductController().handle);
router.put('/updateTypeRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTypeRelationAttributeProductController().handle);
router.put('/updateValueRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateValueRelationAttributeProductController().handle);
router.put('/updateStatusRelationAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusRelationAttributeProductController().handle);
router.post('/createImageAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageAttributeController().handle);
router.put('/updateImageAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageAttributeController().handle);
router.delete('/deleteImageAttributeProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageAttributeController().handle);
router.get('/findUniqueImageAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueImageAttributeController().handle);
router.get('/getAllAttributesProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ProductAttributeController().handle);
router.get('/allProductsAndAttributes', new ProductsAndAttributeController().handle);

// -- ROUTES AVALIETION --
router.post('/createAvalietion', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateAvalietionController().handle);
router.delete('/deleteAvalietion', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAvalietionController().handle);
router.delete('/deleteAvalietionProductID', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAvalietionProductIDController().handle);
router.get('/pageAllAvalietion', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllAvalietionController().handle);
router.get('/pageAvalietion', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllAvalietionProductIDController().handle);
router.get('/avalietionData', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueAvalietionController().handle);
router.put('/updateStatusAvalietion', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusAvalietionController().handle);
router.get('/pageAvalietionStoreProduct', new PageAvalietionStoreProductIDController().handle);

// -- ROUTES VARIATION --
router.post('/createVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateVariationController().handle);
router.get('/allVariationProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllVariationProductController().handle);
router.get('/findVariationName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstVariationNameController().handle);
router.delete('/deleteAllVariationProduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAllVariationProductController().handle);
router.delete('/deleteVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteVariationController().handle);
router.get('/findUniqueVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueVariationController().handle);
router.put('/updateStatusVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusVariationController().handle);
router.get('/pageAllVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllVariationController().handle);
router.put('/updateNameVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameVariationController().handle);
router.put('/updateOrderVariacao', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderVariacaoController().handle);
router.post('/createImageVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageVariationController().handle);
router.get('/allVariationImages', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllVariationImageController().handle);
router.get('/allImagesVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllImagesVariationController().handle);
router.delete('/deleteAllPhotosVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteALLImageVariationProductController().handle);
router.delete('/deleteImageVariantion', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageVariationController().handle);
router.put('/updateOrderImageVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderImageVariationController().handle);
router.get('/findUniqueImageVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueImageVariationController().handle);
router.post('/createProductVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateProductVariationController().handle);
router.delete('/deleteAllProductVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteProductVariationController().handle);
router.delete('/deleteProductVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new VariationDeleteController().handle);
router.get('/findFirstProductVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstProductVariationController().handle);
router.get('/findUniqueProductVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueProductVariationController().handle);
router.put('/updateStatusProductVariation', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusProductVariationController().handle);
router.put('/updateProductVariationName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameProductVariationController().handle);
router.put('/updateOrderProductVariationName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderProductVariationController().handle);

// -- ROUTES BUY TOGETHER --
router.post('/createBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateBuyTogetherController().handle);
router.put('/updateProductBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateProductBuyTogetherController().handle);
router.put('/updateNameGroupBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameGroupBuyTogetherController().handle);
router.put('/updateOrderBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderBuyTogetherController().handle);
router.put('/updateStatusBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusBuyTogetherController().handle);
router.delete('/deleteGroupAllProductsBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteGroupBuyTogetherController().handle);
router.delete('/deleteGroupBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteBuyTogetherController().handle);
router.delete('/deleteParentIdBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteBuyTogetherAllProductController().handle);
router.get('/findUniqueBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueBuyTogetherController().handle);
router.get('/allBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new AllBuyTogetherController().handle);
router.get('/findFirstGroupBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstBuyTogetherController().handle);
router.get('/findProductGroupBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ProductIDBuyTogetherController().handle);
router.get('/findItensGroupBuyTogether', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindGroupBuyTogetherIDController().handle);
router.get('/buyTogetherProductStore', new FindBuyTogetherIDController().handle);

// -- ROUTES COUNTERPROPOSAL --
router.get('/pagePropousalList', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageCounterProposalController().handle);
router.get('/findUniqueCounterProposal', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueCounterProposalController().handle);
router.put('/updateDataCounterProposal', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CounterProposalController().handle);
router.post('/createCounterProposal', new CreateCounterProposalController().handle);

// -- ROUTES STOCK PRODUCT CUSTOMER --
router.post('/createStockProductZero', new CreateStockProductCustomerController().handle);
router.get('/getStockProduct', new StockProductCustomerController().handle);

// -- ROUTES MENU CATEGORY --
router.post('/createMenuCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateMenuCategoryController().handle);
router.get('/pageMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllMenuCategoryController().handle);
router.get('/findFirstMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstMenuController().handle);
router.get('/findMenuID', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindMenuIDController().handle);
router.get('/findUniqueMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueMenuIDController().handle);
router.put('/updateOrderCategoryMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderCategoryMenuController().handle);
router.put('/updateStatusMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new StatusCategoryMenuCategoriesController().handle);
router.put('/updateNameMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameMenuController().handle);
router.put('/updatePositionMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdatePositionMenuController().handle);
router.put('/updateNameCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameCategoryMenuController().handle);
router.put('/updateItemNameCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateItemNameCategoryController().handle);
router.delete('/deleteCategoryMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteMenuCategoryMenuIDController().handle);
router.delete('/deleteMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteMenuIDController().handle);
router.delete('/deleteImageMenuCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeletetImageMenuCategoryController().handle);
router.post('/createImageMenuCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageMenuCategoryController().handle);
router.put('/updateImageMenuCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageMenuCategoryController().handle);
router.put('/updateSlugMenu', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateSlugMenuController().handle);
router.get('/positionListMenu', new ListPositionMenuCategoryController().handle);
router.get('/listCategoryMenu', new ListCategoryMenuController().handle);
router.get('/listMenuCategories', new AllCategoriesMenuController().handle);
router.get('/categoriesParentIdBradCrumb', new MenuCategoryController().handle);

// -- ROUTES GROUP FILTERS --
router.post('/createGroupFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateGroupFilterController().handle);
router.put('/updateNameGroupFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameGroupFilterController().handle);
router.put('/updateTypeAttributeGroup', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateTypeAttributeGroupController().handle);
router.put('/updateSlugGroupFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateSlugGroupFilterController().handle);
router.put('/updateStatusGroupFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusGroupFilterController().handle);
router.get('/pagesGroupFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageGroupsFiltersController().handle);
router.get('/filterFirstGroupFiltro', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindFirstGroupsController().handle);
router.delete('/deleteGroupFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteGroupFilterController().handle);
router.get('/findsNameGroupFilter', new FindsNameGroupFilterController().handle);
router.get('/findTypeAttributeGroupFilter', new FindTypeFilterController().handle);
router.get('/findUniqueIDGroup', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindIDGroupFilterController().handle);
router.get('/listFilterGroup', new FindSlugGroupFilterController().handle);

// -- ROUTES FILTER ATTRIBUTES --
router.post('/createFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateFilterAttributeController().handle);
router.delete('/deleteAllFilterAttributeGroup', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteAllFilterAttributeController().handle);
router.delete('/deleteFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteFilterAttributeController().handle);
router.get('/pagesFilterAttributes', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageFilterAttributeController().handle);
router.put('/updateNameFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameFilterAttributeController().handle);
router.put('/updateValueFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateValueFilterAttributeController().handle);
router.put('/updateOrderFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateOrderFilterAttributeController().handle);
router.put('/updateStatusFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusFilterAttributeController().handle);
router.post('/createImageFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageFilterAttributeController().handle);
router.put('/updateImageFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageFilterAttributeController().handle);
router.delete('/deleteImageFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageFilterAttributeController().handle);
router.get('/findUniqueFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueFilterAttributeController().handle);
router.get('/findManyNameFilterAttribute', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindManyFilterAttributeNameController().handle);
router.get('/allAttributesGroups', new FindFilterAttributeController().handle);

// -- ROUTES FILTER CATEGORY --
router.post('/createFilterCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new CreateFilterCategoryController().handle);
router.delete('/deleteFilterCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteFilterCategoryController().handle);
router.get('/pagesFiltrosCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageFilterCategoryController().handle);
router.get('/findManyFilterName', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindManyFilterCategoryNameController().handle);
router.get('/findUniqueFilterCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueFilterCategoryController().handle);
router.put('/updateFilterNameGroupCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateNameFilterGroupController().handle);
router.put('/updateCategoryNameFilter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateCategoryNameFilterCategoryController().handle);
router.put('/updateFilterStatusCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateStatusFilterCategoryController().handle);
router.put('/updateFilterOrderCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateCategoryOrderFilterController().handle);
router.post('/createImageFilterCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateImageFilterCategoryController().handle);
router.put('/updateImageFilterCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateImageFilterCategoryController().handle);
router.delete('/deleteImageFilterCategory', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteImageFilterCategoryController().handle);

// -- ROUTES BANNER --
router.post('/createBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new CreateBannerController().handle);
router.put('/updateAllDateBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdateAllDateBannerController().handle);
router.get('/pageListBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllBannerController().handle);
router.delete('/deleteBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteBannerController().handle);
router.put('/updateBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], upload.single('file'), new UpdateBannerController().handle);
router.put('/updatePosicaoBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new UpdatePosicaoBannerController().handle);
router.put('/updateStatusBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new StatusBannerController().handle);
router.get('/exactBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactBannerController().handle);
router.get('/updatePublishBanner', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PublishProgramadBannerController().handle);
router.get('/activeBanner', new ActiveAllBannerController().handle);

// -- ROUTES NEWSLETTERS --
router.post('/createNewsletter', new CreateNewslettersController().handle);
router.delete('/deleteNewsletter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteNewslettersController().handle);
router.get('/listNewsletter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListNewslettersController().handle);
router.get('/listExactNewsletter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListExactNewslettersController().handle);
router.get('/pageNewsletter', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllNewslettersController().handle);
router.get('/exportNews', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ExportNewslettersController().handle);

// -- ROUTES CONTACT --
router.post('/createContact', new CreateContactController().handle);
router.delete('/deleteContact', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new DeleteContactController().handle);
router.get('/listContact', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ListContactController().handle);
router.get('/findUniqueContact', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new FindUniqueContactController().handle);
router.get('/pageContact', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new PageListAllContactController().handle);
router.get('/exportContacts', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new ExportContactController().handle);

// -- ROUTES SEND EMAILS --
router.get('/admin/sendlistuser', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailExportAdminUserController().handle);
router.get('/sendListCustomer', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailExportCustomerUserController().handle);
router.get('/sendlistproduct', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailExportProductsController().handle);
router.get('/sendEmailNewsletters', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailExportNewslettersController().handle);
router.get('/sendEmailContact', [isAuthenticated, authorizationRules(["ADMIN", "EMPLOYEE"])], new EmailExportContactController().handle);


export { router };
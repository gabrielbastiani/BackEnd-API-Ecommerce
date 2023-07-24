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



import { ADMINisAuthenticated } from './middlewares/ADMINisAuthenticated';
import { EMPLOYEEisAuthenticated } from './middlewares/EMPLOYEEisAuthenticated';
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';



const router = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROUTES ADMIN --
router.put('/admin/activeOrDesactiveAdmin', ADMINisAuthenticated, new ActiveOrDesactiveAdminController().handle);
router.post('/admin/createAdmin', new AdminCreateController().handle);
router.post('/admin/createEmployee', new EmployeCreateController().handle);
router.put('/admin/updateRoleAdmin', ADMINisAuthenticated, new AdminRoleController().handle);
router.post('/admin/session', new AuthAdminController().handle);
router.put('/admin/authenticatedEmailAdmin', new AuthenticatedEmailAdminController().handle);
router.delete('/admin/deleteAdminUser', ADMINisAuthenticated, new DeleteAdminOrEmployeController().handle);
router.get('/admin/me', ADMINisAuthenticated && EMPLOYEEisAuthenticated, new DetailAdminController().handle);
router.get('/admin/exportAdmins', ADMINisAuthenticated, new ExportAdminController().handle);
router.get('/admin/listExactAdminName', ADMINisAuthenticated, new ListExactAdminNameController().handle);
router.get('/admin/listExactAdminID', ADMINisAuthenticated && EMPLOYEEisAuthenticated, new ListExactAdminController().handle);
router.get('/admin/listForPageEmployes', ADMINisAuthenticated, new PageListAllAdminsController().handle);
router.put('/admin/updateDateAdmin', ADMINisAuthenticated && EMPLOYEEisAuthenticated, new UpdateAllDateAdminController().handle);
router.put('/admin/updateRoleEmployee', ADMINisAuthenticated, new AdminRoleEmployeeController().handle);
router.put('/admin/updateNameAdminOrEmployee', ADMINisAuthenticated && EMPLOYEEisAuthenticated, new AdminUpdateNameController().handle);
router.delete('/admin/deleteRecoveryIDAdmin', ADMINisAuthenticated && EMPLOYEEisAuthenticated, new DeleteAdminPasswordRecoveryIDController().handle);
router.get('/admin/findFirstAdmin', ADMINisAuthenticated  && EMPLOYEEisAuthenticated, new FindAdminRecoveryIDController().handle);
router.post('/admin/recoverPasswordDashboard', ADMINisAuthenticated && EMPLOYEEisAuthenticated, new EmailPasswordDashboardController().handle);
router.get('/admin/getSuperAdmin', new ListSuperAdminController().handle);
router.post('/admin/recoverPasswordEmail', new EmailPasswordController().handle);
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
router.post('/customer/delivery/createDeliveryAddress', isAuthenticated, new CreateDeliveryAddressCustomerController().handle);
router.put('/customer/delivery/updateAllDateDeliveryAddressCustomer', isAuthenticated, new UpdateAllDateDeliveryAddressCustomerCustomerController().handle);
router.delete('/customer/delivery/deleteDeliveryAddress', isAuthenticated, new DeleteDeliveryAddressCustomerController().handle);
router.post('/customer/recoverPasswordDashboard', isAuthenticated, new EmailPasswordDashboardCustomerController().handle);
router.put('/customer/recoverCustomer', new CustomerRecoveryPasswordController().handle);
router.post('/customer/recoverPasswordEmail', new EmailPasswordCustomerController().handle);

// -- ROUTES STORE --
router.post('/createStore', ADMINisAuthenticated, upload.single('file'), new CreateStoreController().handle);
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
router.get('/findUniqueSocialMedia', ADMINisAuthenticated, new FindUniqueSocialMediaController().handle);
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
router.put('/updatePositionImageTextoInstitucional', ADMINisAuthenticated, new UpdatePositionImageStoreController().handle);
router.get('/findUniqueImageStore', ADMINisAuthenticated, new FindUniqueImageStoreController().handle);
router.get('/listImagesStore', new ListAllImageStoreController().handle);

// -- ROUTES CATEGORY --
router.post('/createCategory', ADMINisAuthenticated, new CreateCategoryController().handle);
router.post('/createImageCategory', ADMINisAuthenticated, upload.single('file'), new CreateImageCategoryController().handle);
router.put('/categoryNameUpdate', ADMINisAuthenticated, new UpdateNameCategoryController().handle);
router.put('/updateDescription', ADMINisAuthenticated, new UpdateDescriptionCategoryController().handle);
router.put('/updateStatusCategory', ADMINisAuthenticated, new UpdateStatusCategoryController().handle);
router.put('/updateOrderCategory', ADMINisAuthenticated, new UpdateOrderCategoryController().handle);
router.put('/updateImageCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageCategoryController().handle);
router.get('/allCategorysPage', ADMINisAuthenticated, new PageListAllCategorysController().handle);
router.get('/exactCategoryPage', ADMINisAuthenticated, new ExactPageListAllCategoryController().handle);
router.get('/findFirstCategory', ADMINisAuthenticated, new FindFirstCategoryController().handle);
router.get('/parentIDCategoryAll', ADMINisAuthenticated, new FindParentIDCategoryController().handle);
router.get('/finduniqueCategory', ADMINisAuthenticated, new FindUniqueCategoryController().handle);
router.get('/findCategorys', ADMINisAuthenticated, new ListCategoryNameController().handle);
router.delete('/deleteImageCategory', ADMINisAuthenticated, new DeleteImageCategoryController().handle);
router.get('/listCategorysDisponivel', new ListCategoryController().handle);
router.get('/findDateSlugCategory', new FindFirstCategorySlugController().handle);
router.get('/categoriesInPageCategory', new ListAllCategoriesStorePageController().handle);

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
router.get('/findUniqueProduct', ADMINisAuthenticated, new ListExactProductController().handle);
router.get('/findFirstProduct', ADMINisAuthenticated, new FindFirstProductController().handle);
router.delete('/deleteProduct', ADMINisAuthenticated, new DeleteProductController().handle);
router.put('/updateNameProduct', ADMINisAuthenticated, new UpdateNameProductController().handle);
router.get('/exportProduct', ADMINisAuthenticated, new ExportProductController().handle);
router.put('/updateStatusProduct', ADMINisAuthenticated, new UpdateStatusProductController().handle);
router.put('/emphasis', ADMINisAuthenticated, new UpdateProductEmphasisController().handle);
router.put('/offer', ADMINisAuthenticated, new UpdateProductOfferController().handle);
router.put('/updateStockProduct', ADMINisAuthenticated, new UpdateStockProductController().handle);
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
router.get('/allProductsDescriptionsStore', ADMINisAuthenticated, new AllDescriptionProductController().handle);
router.get('/allTags', ADMINisAuthenticated, new AllTagController().handle);
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
router.post('/createProductCategory', ADMINisAuthenticated, new CreateProductCategoryController().handle);
router.put('/updateCategoryNameProduct', ADMINisAuthenticated, new UpdateNameProductCategoryController().handle);
router.put('/updateStatusCategoryProduct', ADMINisAuthenticated, new UpdateStatusCategoryProductController().handle);
router.get('/pageRelationsCategorys', ADMINisAuthenticated, new PageRelationsCategorysController().handle);
router.get('/findCategoryAndProduct', ADMINisAuthenticated, new FindCategoryAndProductController().handle);
router.put('/updateOrderRelation', ADMINisAuthenticated, new UpdateOrderProductCategoryController().handle);
router.delete('/deleteCategoryProduct', ADMINisAuthenticated, new DeleteProductCategoryController().handle);
router.delete('/deleteAllCategoiesProduct', ADMINisAuthenticated, new DeleteAllProductCategoryController().handle);
router.get('/findUniqueRelationCategoryProduct', ADMINisAuthenticated, new FindUniqueRelationProductCategoryController().handle);
router.get('/findAllRelationsProductAndCategory', ADMINisAuthenticated, new FindAllRelationProductAndCategoryController().handle);
router.put('/mainCategoryProduct', ADMINisAuthenticated, new MainCategoryProductController().handle);
router.get('/productsPageCategories', new ProductsPageCategoriesController().handle);
router.get('/getAllProductsCategory', new ProductsCategoriesController().handle);
router.get('/findMainCategoryProduct', new FindMainCategoryProductController().handle);
router.get('/findDateSlugCategoryProduct', new FindFirstProductCategoryController().handle);

// ROUTES TYPE ATTRIBUTE --
router.post('/createTypeAttribute', ADMINisAuthenticated, new CreateTypeAttributeController().handle);
router.put('/updateTypeAttribute', ADMINisAuthenticated, new UpdateTypeAttributeController().handle);
router.get('/allTypeAttributes', new AllTypeAttributeController().handle);
router.get('/findUniqueTypeAttribute', new FindUniqueTypeAttributeController().handle);

// -- ROUTES VALUE ATTRIBUTE --
router.post('/createValueAttribute', ADMINisAuthenticated, new CreateValueAttributeController().handle);
router.put('/updateValueAttribute', ADMINisAuthenticated, new UpdateValueAttributeController().handle);
router.put('/updateTypeValueAttribute', ADMINisAuthenticated, new UpdateTypeValueAttributeController().handle);
router.put('/updateOrderValueAttribute', ADMINisAuthenticated, new UpdateValueOrderAttributeController().handle);
router.get('/allValuesTypeAttribute', ADMINisAuthenticated, new AllValuesTypeAttributeController().handle);
router.delete('/deleteValueAttribute', ADMINisAuthenticated, new DeleteValueAttributeController().handle);
router.get('/findUniqueValueAttribute', ADMINisAuthenticated, new FindUniqueValueAttributeController().handle);
router.delete('/deleteAllImagesValueType', ADMINisAuthenticated, new DeleteImageAttributeRelationIDController().handle);
router.get('/getAllValuesAttributes', ADMINisAuthenticated, new ValuesAttributeController().handle);

// ROUTES RELATION ATTRIBUTE AND PRODUCT --
router.post('/createRelationAttributeProduct', ADMINisAuthenticated, new CreateRelationAttributeProductController().handle);
router.delete('/deleteAllRelationProductAttributes', ADMINisAuthenticated, new DeleteProductRelationAllController().handle);
router.delete('/deleteAttributeProduct', ADMINisAuthenticated, new DeleteRelationAttributeProductController().handle);
router.get('/findUniqueRelationAttributeProduct', ADMINisAuthenticated, new FindUniqueRelationAttributeProductController().handle);
router.get('/findFirstRelationAttributeProduct', ADMINisAuthenticated, new FirstFirstRelationAttributeProductController().handle);
router.get('/pageAttributesRelationsProducts', ADMINisAuthenticated, new PageRelationAttributeProductController().handle);
router.get('/findManyAttributeIDproduct', ADMINisAuthenticated, new AllProductAttributeController().handle);
router.put('/updateOrderRelationAttributeProduct', ADMINisAuthenticated, new UpdateOrderRelationAttributeProductController().handle);
router.put('/updateTypeRelationAttributeProduct', ADMINisAuthenticated, new UpdateTypeRelationAttributeProductController().handle);
router.put('/updateValueRelationAttributeProduct', ADMINisAuthenticated, new UpdateValueRelationAttributeProductController().handle);
router.put('/updateStatusRelationAttributeProduct', ADMINisAuthenticated, new UpdateStatusRelationAttributeProductController().handle);
router.post('/createImageAttributeProduct', ADMINisAuthenticated, upload.single('file'), new CreateImageAttributeController().handle);
router.put('/updateImageAttribute', ADMINisAuthenticated, upload.single('file'), new UpdateImageAttributeController().handle);
router.delete('/deleteImageAttributeProduct', ADMINisAuthenticated, new DeleteImageAttributeController().handle);
router.get('/findUniqueImageAttribute', ADMINisAuthenticated, new FindUniqueImageAttributeController().handle);
router.get('/getAllAttributesProduct', ADMINisAuthenticated, new ProductAttributeController().handle);
router.get('/allProductsAndAttributes', new ProductsAndAttributeController().handle);

// -- ROUTES AVALIETION --
router.post('/createAvalietion', ADMINisAuthenticated && isAuthenticated, new CreateAvalietionController().handle);
router.delete('/deleteAvalietion', ADMINisAuthenticated, new DeleteAvalietionController().handle);
router.delete('/deleteAvalietionProductID', ADMINisAuthenticated, new DeleteAvalietionProductIDController().handle);
router.get('/pageAllAvalietion', ADMINisAuthenticated, new PageListAllAvalietionController().handle);
router.get('/pageAvalietion', ADMINisAuthenticated, new PageListAllAvalietionProductIDController().handle);
router.get('/avalietionData', ADMINisAuthenticated, new FindUniqueAvalietionController().handle);
router.put('/updateStatusAvalietion', ADMINisAuthenticated, new UpdateStatusAvalietionController().handle);
router.get('/pageAvalietionStoreProduct', new PageAvalietionStoreProductIDController().handle);

// -- ROUTES VARIATION --
router.post('/createVariation', ADMINisAuthenticated, new CreateVariationController().handle);
router.get('/allVariationProduct', ADMINisAuthenticated, new AllVariationProductController().handle);
router.get('/findVariationName', ADMINisAuthenticated, new FindFirstVariationNameController().handle);
router.delete('/deleteAllVariationProduct', ADMINisAuthenticated, new DeleteAllVariationProductController().handle);
router.delete('/deleteVariation', ADMINisAuthenticated, new DeleteVariationController().handle);
router.get('/findUniqueVariation', ADMINisAuthenticated, new FindUniqueVariationController().handle);
router.put('/updateStatusVariation', ADMINisAuthenticated, new UpdateStatusVariationController().handle);
router.get('/pageAllVariation', ADMINisAuthenticated, new PageListAllVariationController().handle);
router.put('/updateNameVariation', ADMINisAuthenticated, new UpdateNameVariationController().handle);
router.put('/updateOrderVariacao', ADMINisAuthenticated, new UpdateOrderVariacaoController().handle);
router.post('/createImageVariation', ADMINisAuthenticated, upload.single('file'), new CreateImageVariationController().handle);
router.get('/allVariationImages', ADMINisAuthenticated, new AllVariationImageController().handle);
router.get('/allImagesVariation', ADMINisAuthenticated, new AllImagesVariationController().handle);
router.delete('/deleteAllPhotosVariation', ADMINisAuthenticated, new DeleteALLImageVariationProductController().handle);
router.delete('/deleteImageVariantion', ADMINisAuthenticated, new DeleteImageVariationController().handle);
router.put('/updateOrderImageVariation', ADMINisAuthenticated, new UpdateOrderImageVariationController().handle);
router.get('/findUniqueImageVariation', ADMINisAuthenticated, new FindUniqueImageVariationController().handle);
router.post('/createProductVariation', ADMINisAuthenticated, new CreateProductVariationController().handle);
router.delete('/deleteAllProductVariation', ADMINisAuthenticated, new DeleteProductVariationController().handle);
router.delete('/deleteProductVariation', ADMINisAuthenticated, new VariationDeleteController().handle);
router.get('/findFirstProductVariation', ADMINisAuthenticated, new FindFirstProductVariationController().handle);
router.get('/findUniqueProductVariation', ADMINisAuthenticated, new FindUniqueProductVariationController().handle);
router.put('/updateStatusProductVariation', ADMINisAuthenticated, new UpdateStatusProductVariationController().handle);
router.put('/updateProductVariationName', ADMINisAuthenticated, new UpdateNameProductVariationController().handle);
router.put('/updateOrderProductVariationName', ADMINisAuthenticated, new UpdateOrderProductVariationController().handle);

// -- ROUTES BUY TOGETHER --
router.post('/createBuyTogether', ADMINisAuthenticated, new CreateBuyTogetherController().handle);
router.put('/updateProductBuyTogether', ADMINisAuthenticated, new UpdateProductBuyTogetherController().handle);
router.put('/updateNameGroupBuyTogether', ADMINisAuthenticated, new UpdateNameGroupBuyTogetherController().handle);
router.put('/updateOrderBuyTogether', ADMINisAuthenticated, new UpdateOrderBuyTogetherController().handle);
router.put('/updateStatusBuyTogether', ADMINisAuthenticated, new UpdateStatusBuyTogetherController().handle);
router.delete('/deleteGroupAllProductsBuyTogether', ADMINisAuthenticated, new DeleteGroupBuyTogetherController().handle);
router.delete('/deleteGroupBuyTogether', ADMINisAuthenticated, new DeleteBuyTogetherController().handle);
router.delete('/deleteParentIdBuyTogether', ADMINisAuthenticated, new DeleteBuyTogetherAllProductController().handle);
router.get('/findUniqueBuyTogether', ADMINisAuthenticated, new FindUniqueBuyTogetherController().handle);
router.get('/allBuyTogether', ADMINisAuthenticated, new AllBuyTogetherController().handle);
router.get('/findFirstGroupBuyTogether', ADMINisAuthenticated, new FindFirstBuyTogetherController().handle);
router.get('/findProductGroupBuyTogether', ADMINisAuthenticated, new ProductIDBuyTogetherController().handle);
router.get('/findItensGroupBuyTogether', ADMINisAuthenticated, new FindGroupBuyTogetherIDController().handle);
router.get('/buyTogetherProductStore', new FindBuyTogetherIDController().handle);

// -- ROUTES COUNTERPROPOSAL --
router.get('/pagePropousalList', ADMINisAuthenticated, new PageCounterProposalController().handle);
router.get('/findUniqueCounterProposal', ADMINisAuthenticated, new FindUniqueCounterProposalController().handle);
router.put('/updateDataCounterProposal', ADMINisAuthenticated, new CounterProposalController().handle);
router.post('/createCounterProposal', new CreateCounterProposalController().handle);

// -- ROUTES STOCK PRODUCT CUSTOMER --
router.post('/createStockProductZero', new CreateStockProductCustomerController().handle);
router.get('/getStockProduct', new StockProductCustomerController().handle);

// -- ROUTES MENU CATEGORY --
router.post('/createMenuCategory', ADMINisAuthenticated, new CreateMenuCategoryController().handle);
router.get('/pageMenu', ADMINisAuthenticated, new PageListAllMenuCategoryController().handle);
router.get('/findFirstMenu', ADMINisAuthenticated, new FindFirstMenuController().handle);
router.get('/findMenuID', ADMINisAuthenticated, new FindMenuIDController().handle);
router.get('/findUniqueMenu', ADMINisAuthenticated, new FindUniqueMenuIDController().handle);
router.put('/updateOrderCategoryMenu', ADMINisAuthenticated, new UpdateOrderCategoryMenuController().handle);
router.put('/updateStatusMenu', ADMINisAuthenticated, new StatusCategoryMenuCategoriesController().handle);
router.put('/updateNameMenu', ADMINisAuthenticated, new UpdateNameMenuController().handle);
router.put('/updatePositionMenu', ADMINisAuthenticated, new UpdatePositionMenuController().handle);
router.put('/updateNameCategory', ADMINisAuthenticated, new UpdateNameCategoryMenuController().handle);
router.put('/updateItemNameCategory', ADMINisAuthenticated, new UpdateItemNameCategoryController().handle);
router.delete('/deleteCategoryMenu', ADMINisAuthenticated, new DeleteMenuCategoryMenuIDController().handle);
router.delete('/deleteMenu', ADMINisAuthenticated, new DeleteMenuIDController().handle);
router.delete('/deleteImageMenuCategory', ADMINisAuthenticated, new DeletetImageMenuCategoryController().handle);
router.post('/createImageMenuCategory', ADMINisAuthenticated, upload.single('file'), new CreateImageMenuCategoryController().handle);
router.put('/updateImageMenuCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageMenuCategoryController().handle);
router.put('/updateSlugMenu', ADMINisAuthenticated, new UpdateSlugMenuController().handle);
router.get('/positionListMenu', new ListPositionMenuCategoryController().handle);
router.get('/listCategoryMenu', new ListCategoryMenuController().handle);
router.get('/listMenuCategories', new AllCategoriesMenuController().handle);
router.get('/categoriesParentIdBradCrumb', new MenuCategoryController().handle);

// -- ROUTES GROUP FILTERS --
router.post('/createGroupFilter', ADMINisAuthenticated, new CreateGroupFilterController().handle);
router.put('/updateNameGroupFilter', ADMINisAuthenticated, new UpdateNameGroupFilterController().handle);
router.put('/updateTypeAttributeGroup', ADMINisAuthenticated, new UpdateTypeAttributeGroupController().handle);
router.put('/updateSlugGroupFilter', ADMINisAuthenticated, new UpdateSlugGroupFilterController().handle);
router.put('/updateStatusGroupFilter', ADMINisAuthenticated, new UpdateStatusGroupFilterController().handle);
router.get('/pagesGroupFilter', ADMINisAuthenticated, new PageGroupsFiltersController().handle);
router.get('/filterFirstGroupFiltro', ADMINisAuthenticated, new FindFirstGroupsController().handle);
router.delete('/deleteGroupFilter', ADMINisAuthenticated, new DeleteGroupFilterController().handle);
router.get('/findsNameGroupFilter', new FindsNameGroupFilterController().handle);
router.get('/findTypeAttributeGroupFilter', new FindTypeFilterController().handle);
router.get('/findUniqueIDGroup', ADMINisAuthenticated, new FindIDGroupFilterController().handle);
router.get('/listFilterGroup', new FindSlugGroupFilterController().handle);

// -- ROUTES FILTER ATTRIBUTES --
router.post('/createFilterAttribute', ADMINisAuthenticated, new CreateFilterAttributeController().handle);
router.delete('/deleteAllFilterAttributeGroup', ADMINisAuthenticated, new DeleteAllFilterAttributeController().handle);
router.delete('/deleteFilterAttribute', ADMINisAuthenticated, new DeleteFilterAttributeController().handle);
router.get('/pagesFilterAttributes', ADMINisAuthenticated, new PageFilterAttributeController().handle);
router.put('/updateNameFilterAttribute', ADMINisAuthenticated, new UpdateNameFilterAttributeController().handle);
router.put('/updateValueFilterAttribute', ADMINisAuthenticated, new UpdateValueFilterAttributeController().handle);
router.put('/updateOrderFilterAttribute', ADMINisAuthenticated, new UpdateOrderFilterAttributeController().handle);
router.put('/updateStatusFilterAttribute', ADMINisAuthenticated, new UpdateStatusFilterAttributeController().handle);
router.post('/createImageFilterAttribute', ADMINisAuthenticated, upload.single('file'), new CreateImageFilterAttributeController().handle);
router.put('/updateImageFilterAttribute', ADMINisAuthenticated, upload.single('file'), new UpdateImageFilterAttributeController().handle);
router.delete('/deleteImageFilterAttribute', ADMINisAuthenticated, new DeleteImageFilterAttributeController().handle);
router.get('/findUniqueFilterAttribute', ADMINisAuthenticated, new FindUniqueFilterAttributeController().handle);
router.get('/findManyNameFilterAttribute', ADMINisAuthenticated, new FindManyFilterAttributeNameController().handle);
router.get('/allAttributesGroups', new FindFilterAttributeController().handle);

// -- ROUTES FILTER CATEGORY --
router.post('/createFilterCategory', ADMINisAuthenticated, new CreateFilterCategoryController().handle);
router.delete('/deleteFilterCategory', ADMINisAuthenticated, new DeleteFilterCategoryController().handle);
router.get('/pagesFiltrosCategory', ADMINisAuthenticated, new PageFilterCategoryController().handle);
router.get('/findManyFilterName', ADMINisAuthenticated, new FindManyFilterCategoryNameController().handle);
router.get('/findUniqueFilterCategory', ADMINisAuthenticated, new FindUniqueFilterCategoryController().handle);
router.put('/updateFilterNameGroupCategory', ADMINisAuthenticated, new UpdateNameFilterGroupController().handle);
router.put('/updateCategoryNameFilter', ADMINisAuthenticated, new UpdateCategoryNameFilterCategoryController().handle);
router.put('/updateFilterStatusCategory', ADMINisAuthenticated, new UpdateStatusFilterCategoryController().handle);
router.put('/updateFilterOrderCategory', ADMINisAuthenticated, new UpdateCategoryOrderFilterController().handle);
router.post('/createImageFilterCategory', ADMINisAuthenticated, upload.single('file'), new CreateImageFilterCategoryController().handle);
router.put('/updateImageFilterCategory', ADMINisAuthenticated, upload.single('file'), new UpdateImageFilterCategoryController().handle);
router.delete('/deleteImageFilterCategory', ADMINisAuthenticated, new DeleteImageFilterCategoryController().handle);

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

// -- ROUTES CONTACT --
router.post('/createContact', new CreateContactController().handle);
router.delete('/deleteContact', ADMINisAuthenticated, new DeleteContactController().handle);
router.get('/listContact', ADMINisAuthenticated, new ListContactController().handle);
router.get('/findUniqueContact', ADMINisAuthenticated, new FindUniqueContactController().handle);
router.get('/pageContact', ADMINisAuthenticated, new PageListAllContactController().handle);
router.get('/exportContacts', ADMINisAuthenticated, new ExportContactController().handle);

// -- ROUTES SEND EMAILS --
router.get('/admin/sendlistuser', ADMINisAuthenticated, new EmailExportAdminUserController().handle);
router.get('/sendListCustomer', ADMINisAuthenticated, new EmailExportCustomerUserController().handle);
router.get('/sendlistproduct', ADMINisAuthenticated, new EmailExportProductsController().handle);
router.get('/sendEmailNewsletters', ADMINisAuthenticated, new EmailExportNewslettersController().handle);
router.get('/sendEmailContact', ADMINisAuthenticated, new EmailExportContactController().handle);


export { router };
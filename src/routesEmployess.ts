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
import { CreatePhotoProductController } from './controllers/product/photoproduct/CreatePhotoProductController';
import { UpdatePhotoProductController } from './controllers/product/photoproduct/UpdatePhotoProductController';
import { UpdateAllDateProductController } from './controllers/product/UpdateAllDateProductController';
import { AllPhotosProductController } from './controllers/product/photoproduct/AllPhotosProductController';
import { AllPhotosController } from './controllers/product/photoproduct/AllPhotosController';
import { AllProductController } from './controllers/product/AllProductController';
import { AllProductInStoreController } from './controllers/product/AllProductInStoreController';
import { FindFirstProductController } from './controllers/product/FindFirstProductController';
import { UpdateStockProductController } from './controllers/product/UpdateStockProductController';
import { AllProductExistController } from './controllers/product/AllProductExistController';
import { PageListAllProductController } from './controllers/product/PageListAllProductController';
import { ListExactProductController } from './controllers/product/ListExactProductController';
import { DeletePhotoProductController } from './controllers/product/photoproduct/DeletePhotoProductController';
import { DeleteAllPhotoProductController } from './controllers/product/photoproduct/DeleteAllPhotoProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { UpdateNameProductController } from './controllers/product/UpdateNameProductController';
import { ExportProductController } from './controllers/product/ExportProductController';
import { UpdateStatusProductController } from './controllers/product/UpdateStatusProductController';
import { UpdateProductEmphasisController } from './controllers/product/UpdateProductEmphasisController';
import { UpdateProductOfferController } from './controllers/product/UpdateProductOfferController';
import { UpdateOrderPhotoProductController } from './controllers/product/photoproduct/UpdateOrderPhotoProductController';
import { AllPhotosProductInStoreController } from './controllers/product/photoproduct/AllPhotosProductInStoreController';
import { ListAllProductEmphasisController } from './controllers/product/ListAllProductEmphasisController';
import { ListAllProductOfferController } from './controllers/product/ListAllProductOfferController';
import { UpdateProductFreeShippingController } from './controllers/product/UpdateProductFreeShippingController';
import { ListExactProductNameController } from './controllers/product/ListExactProductNameController';
import { AllPhotosProductPageController } from './controllers/product/photoproduct/AllPhotosProductPageController';

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



import { EMPLOYEEisAuthenticated } from './middlewares/EMPLOYEEisAuthenticated';
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';



const routesEmployess = Router();
const upload = multer(uploadConfig.upload("./images"));




// -- ROUTES ADMIN --
routesEmployess.put('/admin/activeOrDesactiveAdmin', EMPLOYEEisAuthenticated, new ActiveOrDesactiveAdminController().handle);
routesEmployess.post('/admin/createAdmin', new AdminCreateController().handle);
routesEmployess.post('/admin/createEmployee', new EmployeCreateController().handle);
routesEmployess.put('/admin/updateRoleAdmin', EMPLOYEEisAuthenticated, new AdminRoleController().handle);
routesEmployess.post('/admin/session', new AuthAdminController().handle);
routesEmployess.put('/admin/authenticatedEmailAdmin', new AuthenticatedEmailAdminController().handle);
routesEmployess.delete('/admin/deleteAdminUser', EMPLOYEEisAuthenticated, new DeleteAdminOrEmployeController().handle);
routesEmployess.get('/admin/me', EMPLOYEEisAuthenticated, new DetailAdminController().handle);
routesEmployess.get('/admin/exportAdmins', EMPLOYEEisAuthenticated, new ExportAdminController().handle);
routesEmployess.get('/admin/listExactAdminName', EMPLOYEEisAuthenticated, new ListExactAdminNameController().handle);
routesEmployess.get('/admin/listExactAdminID', EMPLOYEEisAuthenticated, new ListExactAdminController().handle);
routesEmployess.get('/admin/listForPageEmployes', EMPLOYEEisAuthenticated, new PageListAllAdminsController().handle);
routesEmployess.put('/admin/updateDateAdmin', EMPLOYEEisAuthenticated, new UpdateAllDateAdminController().handle);
routesEmployess.put('/admin/updateRoleEmployee', EMPLOYEEisAuthenticated, new AdminRoleEmployeeController().handle);
routesEmployess.put('/admin/updateNameAdminOrEmployee', EMPLOYEEisAuthenticated, new AdminUpdateNameController().handle);
routesEmployess.delete('/admin/deleteRecoveryIDAdmin', EMPLOYEEisAuthenticated, new DeleteAdminPasswordRecoveryIDController().handle);
routesEmployess.get('/admin/findFirstAdmin', EMPLOYEEisAuthenticated , new FindAdminRecoveryIDController().handle);
routesEmployess.post('/admin/recoverPasswordDashboard', EMPLOYEEisAuthenticated, new EmailPasswordDashboardController().handle);
routesEmployess.get('/admin/getSuperAdmin', new ListSuperAdminController().handle);
routesEmployess.post('/admin/recoverPasswordEmail', new EmailPasswordController().handle);
routesEmployess.put('/admin/recoverAdmin', new RecoveryPasswordAdminController().handle);

// -- ROUTES CUSTOMERS --
routesEmployess.post('/customer/createCustomer', new CreateCustomerController().handle);
routesEmployess.put('/customer/activeOrDesactiveCustomer', isAuthenticated, new ActiveOrDesactiveCustomerController().handle);
routesEmployess.post('/customer/session', new AuthCustomerController().handle);
routesEmployess.delete('/customer/deleteCustomer', EMPLOYEEisAuthenticated && isAuthenticated, new DeleteCustomerController().handle);
routesEmployess.get('/customer/me', EMPLOYEEisAuthenticated && isAuthenticated, new DetailCustomerController().handle);
routesEmployess.get('/customer/exportCustomer', EMPLOYEEisAuthenticated, new ExportCustomerController().handle);
routesEmployess.get('/customer/listExactCustomerName', EMPLOYEEisAuthenticated && isAuthenticated, new ListExactCustomerNameController().handle);
routesEmployess.get('/customer/listExactCustomerID', EMPLOYEEisAuthenticated && isAuthenticated, new ListExactCustomerController().handle);
routesEmployess.get('/customer/listForPageCustomer', EMPLOYEEisAuthenticated, new PageListAllCustomerController().handle);
routesEmployess.put('/customer/updateDateCustomer', EMPLOYEEisAuthenticated && isAuthenticated, new UpdateAllDateCustomerController().handle);
routesEmployess.put('/customer/updateNameCustomer', EMPLOYEEisAuthenticated && isAuthenticated, new CustomerUpdateNameController().handle);
routesEmployess.put('/customer/updateNewslatter', EMPLOYEEisAuthenticated && isAuthenticated, new CustomerUpdateNewslatterController().handle);
routesEmployess.delete('/customer/deleteRecoveryIDCustomer', isAuthenticated, new DeletePasswordRecoveryIDCustomerController().handle);
routesEmployess.get('/customer/findFirstCustomer', EMPLOYEEisAuthenticated && isAuthenticated, new FindRecoveryIDCustomerController().handle);
routesEmployess.post('/customer/delivery/createDeliveryAddress', isAuthenticated, new CreateDeliveryAddressCustomerController().handle);
routesEmployess.put('/customer/delivery/updateAllDateDeliveryAddressCustomer', isAuthenticated, new UpdateAllDateDeliveryAddressCustomerCustomerController().handle);
routesEmployess.delete('/customer/delivery/deleteDeliveryAddress', isAuthenticated, new DeleteDeliveryAddressCustomerController().handle);
routesEmployess.post('/customer/recoverPasswordDashboard', isAuthenticated, new EmailPasswordDashboardCustomerController().handle);
routesEmployess.put('/customer/recoverCustomer', new CustomerRecoveryPasswordController().handle);
routesEmployess.post('/customer/recoverPasswordEmail', new EmailPasswordCustomerController().handle);

// -- ROUTES STORE --
routesEmployess.post('/createStore', EMPLOYEEisAuthenticated, upload.single('file'), new CreateStoreController().handle);
routesEmployess.get('/userStore', EMPLOYEEisAuthenticated, new FindUniqueStoreController().handle);
routesEmployess.get('/findFirstStoreUser', EMPLOYEEisAuthenticated, new FindFirstStoreController().handle);
routesEmployess.get('/store', new StoreController().handle);
routesEmployess.delete('/deleteStore', EMPLOYEEisAuthenticated, new DeleteStoreController().handle);
routesEmployess.put('/logoStoreUpdate', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateLogoStoreController().handle);
routesEmployess.put('/updateAllDateStore', EMPLOYEEisAuthenticated, new UpdateAllDateStoreController().handle);

// -- ROUTES SOCIAL MEDIA --
routesEmployess.post('/createSocialMedia', EMPLOYEEisAuthenticated, upload.single('file'), new CreateSocialMediaController().handle);
routesEmployess.put('/updateOrderSocialMedia', EMPLOYEEisAuthenticated, new UpdateOrderSocialMediaController().handle);
routesEmployess.put('/updateSocialMediaName', EMPLOYEEisAuthenticated, new UpdateSocialMediaNameController().handle);
routesEmployess.put('/updateLinkSocialMedia', EMPLOYEEisAuthenticated, new UpdateLinkSocialMediaController().handle);
routesEmployess.put('/updateImageSocialMedia', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageRedeSocialController().handle);
routesEmployess.put('/updatePositionSocialMedia', EMPLOYEEisAuthenticated, new UpdatePositionSocialMediaController().handle);
routesEmployess.put('/updateStatusSocialMedia', EMPLOYEEisAuthenticated, new UpdateStatusSocialMediaController().handle);
routesEmployess.delete('/deleteSocialMedia', EMPLOYEEisAuthenticated, new DeleteSocialMediaController().handle);
routesEmployess.get('/findUniqueSocialMedia', EMPLOYEEisAuthenticated, new FindUniqueSocialMediaController().handle);
routesEmployess.get('/listAllSocialMedia', new ListAllSocialMediaController().handle);
routesEmployess.get('/listSocialMediaOrder', new ListAllSocialMediaOrderAndPositionController().handle);

// -- ROUTES TEXT INSTITUTIONAL --
routesEmployess.post('/createInstitutionalText', EMPLOYEEisAuthenticated, new CreateInstitutionalTextController().handle);
routesEmployess.delete('/deleteInstitutionalText', EMPLOYEEisAuthenticated, new DeleteInstitutionalTextController().handle);
routesEmployess.get('/findUniqueInstitutionalText', EMPLOYEEisAuthenticated, new FindUniqueInstitutionalTextController().handle);
routesEmployess.get('/listAllText', EMPLOYEEisAuthenticated, new ListAllInstitutionalTextController().handle);
routesEmployess.get('/pageListInstitutionalText', EMPLOYEEisAuthenticated, new PageListInstitutionalTextController().handle);
routesEmployess.put('/updateStatusInstitutionalText', EMPLOYEEisAuthenticated, new UpdateStatusInstitutionalTextController().handle);
routesEmployess.put('/updateOrderInstitutionalText', EMPLOYEEisAuthenticated, new UpdateOrderInstitutionalTextController().handle);
routesEmployess.put('/updatePositionInstitutionalText', EMPLOYEEisAuthenticated, new UpdatePositionInstitutionalTextController().handle);
routesEmployess.put('/updateTitleInstitutionalText', EMPLOYEEisAuthenticated, new UpdateTitleInstitutionalTextController().handle);
routesEmployess.put('/updateDescriptionInstitutionalText', EMPLOYEEisAuthenticated, new UpdateDescriptionInstitutionalTextController().handle);
routesEmployess.get('/listInstitutionalText', new ListAllTextOrderAndPositionController().handle);

// -- ROUTES IMAGE STORE --
routesEmployess.post('/createImageStore', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageStoreController().handle);
routesEmployess.get('/allImagesStore', EMPLOYEEisAuthenticated, new AllImageStoreController().handle);
routesEmployess.delete('/deleteImageStore', EMPLOYEEisAuthenticated, new DeleteImageStoreController().handle);
routesEmployess.put('/updateImageStore', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageStoreController().handle);
routesEmployess.put('/updateTitleImageStore', EMPLOYEEisAuthenticated, new UpdateTitleImageStoreController().handle);
routesEmployess.put('/updateOrderImageStore', EMPLOYEEisAuthenticated, new UpdateOrderImageStoreController().handle);
routesEmployess.put('/updateStatusImageStore', EMPLOYEEisAuthenticated, new UpdateStatusImageStoreController().handle);
routesEmployess.put('/updatePositionImageTextoInstitucional', EMPLOYEEisAuthenticated, new UpdatePositionImageStoreController().handle);
routesEmployess.get('/findUniqueImageStore', EMPLOYEEisAuthenticated, new FindUniqueImageStoreController().handle);
routesEmployess.get('/listImagesStore', new ListAllImageStoreController().handle);

// -- ROUTES CATEGORY --
routesEmployess.post('/createCategory', EMPLOYEEisAuthenticated, new CreateCategoryController().handle);
routesEmployess.post('/createImageCategory', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageCategoryController().handle);
routesEmployess.put('/categoryNameUpdate', EMPLOYEEisAuthenticated, new UpdateNameCategoryController().handle);
routesEmployess.put('/updateDescription', EMPLOYEEisAuthenticated, new UpdateDescriptionCategoryController().handle);
routesEmployess.put('/updateStatusCategory', EMPLOYEEisAuthenticated, new UpdateStatusCategoryController().handle);
routesEmployess.put('/updateOrderCategory', EMPLOYEEisAuthenticated, new UpdateOrderCategoryController().handle);
routesEmployess.put('/updateImageCategory', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageCategoryController().handle);
routesEmployess.get('/allCategorysPage', EMPLOYEEisAuthenticated, new PageListAllCategorysController().handle);
routesEmployess.get('/exactCategoryPage', EMPLOYEEisAuthenticated, new ExactPageListAllCategoryController().handle);
routesEmployess.get('/findFirstCategory', EMPLOYEEisAuthenticated, new FindFirstCategoryController().handle);
routesEmployess.get('/parentIDCategoryAll', EMPLOYEEisAuthenticated, new FindParentIDCategoryController().handle);
routesEmployess.get('/finduniqueCategory', EMPLOYEEisAuthenticated, new FindUniqueCategoryController().handle);
routesEmployess.get('/findCategorys', EMPLOYEEisAuthenticated, new ListCategoryNameController().handle);
routesEmployess.delete('/deleteImageCategory', EMPLOYEEisAuthenticated, new DeleteImageCategoryController().handle);
routesEmployess.get('/listCategorysDisponivel', new ListCategoryController().handle);
routesEmployess.get('/findDateSlugCategory', new FindFirstCategorySlugController().handle);
routesEmployess.get('/categoriesInPageCategory', new ListAllCategoriesStorePageController().handle);

// -- ROUTES PRODUCT --
routesEmployess.post('/createProduct', EMPLOYEEisAuthenticated, new CreateProductController().handle);
routesEmployess.post('/imageProduct', EMPLOYEEisAuthenticated, upload.single('file'), new CreatePhotoProductController().handle);
routesEmployess.put('/updateAllDateProduct', EMPLOYEEisAuthenticated, new UpdateAllDateProductController().handle);
routesEmployess.delete('/deletePhoto', EMPLOYEEisAuthenticated, new DeletePhotoProductController().handle);
routesEmployess.delete('/deleteAllPhotos', EMPLOYEEisAuthenticated, new DeleteAllPhotoProductController().handle);
routesEmployess.put('/updatePhoto', EMPLOYEEisAuthenticated, upload.single('file'), new UpdatePhotoProductController().handle);
routesEmployess.put('/updateOrderPhotoProduct', EMPLOYEEisAuthenticated, new UpdateOrderPhotoProductController().handle);
routesEmployess.get('/allPhotosProducts', EMPLOYEEisAuthenticated, new AllPhotosProductController().handle);
routesEmployess.get('/photos', EMPLOYEEisAuthenticated, new AllPhotosController().handle);
routesEmployess.get('/allProduct', EMPLOYEEisAuthenticated, new AllProductController().handle);
routesEmployess.get('/allExistProducts', EMPLOYEEisAuthenticated, new AllProductExistController().handle);
routesEmployess.get('/allProductsPage', EMPLOYEEisAuthenticated, new PageListAllProductController().handle);
routesEmployess.get('/findUniqueProduct', EMPLOYEEisAuthenticated, new ListExactProductController().handle);
routesEmployess.get('/findFirstProduct', EMPLOYEEisAuthenticated, new FindFirstProductController().handle);
routesEmployess.delete('/deleteProduct', EMPLOYEEisAuthenticated, new DeleteProductController().handle);
routesEmployess.put('/updateNameProduct', EMPLOYEEisAuthenticated, new UpdateNameProductController().handle);
routesEmployess.get('/exportProduct', EMPLOYEEisAuthenticated, new ExportProductController().handle);
routesEmployess.put('/updateStatusProduct', EMPLOYEEisAuthenticated, new UpdateStatusProductController().handle);
routesEmployess.put('/emphasis', EMPLOYEEisAuthenticated, new UpdateProductEmphasisController().handle);
routesEmployess.put('/offer', EMPLOYEEisAuthenticated, new UpdateProductOfferController().handle);
routesEmployess.put('/updateStockProduct', EMPLOYEEisAuthenticated, new UpdateStockProductController().handle);
routesEmployess.put('/updateFreeShipping', EMPLOYEEisAuthenticated, new UpdateProductFreeShippingController().handle);
routesEmployess.post('/createDescriptionProduct', EMPLOYEEisAuthenticated, new CreateDescriptionProductController().handle);
routesEmployess.put('/updateTitleDescription', EMPLOYEEisAuthenticated, new UpdateTitleDescriptionProductController().handle);
routesEmployess.get('/findUniqueDescriptionProduct', EMPLOYEEisAuthenticated, new FindUniqueDescriptionProductController().handle);
routesEmployess.get('/descriptions', EMPLOYEEisAuthenticated, new AllDescriptionsController().handle);
routesEmployess.delete('/deleteAllDescriptionsProduct', EMPLOYEEisAuthenticated, new DeleteAllDescriptionProductController().handle);
routesEmployess.delete('/deleteDescriptionProduct', EMPLOYEEisAuthenticated, new DeleteDescriptionProductController().handle);
routesEmployess.put('/updateOrderDescription', EMPLOYEEisAuthenticated, new UpdateOrderDescriptionProductController().handle);
routesEmployess.put('/updateDescriptionProduct', EMPLOYEEisAuthenticated, new UpdateDescriptionProductController().handle);
routesEmployess.put('/updateStatusDescriptionProduct', EMPLOYEEisAuthenticated, new UpdateStatusDescriptionProductController().handle);
routesEmployess.post('/createTagProduct', EMPLOYEEisAuthenticated, new CreateTagController().handle);
routesEmployess.put('/updateTagNameProduct', EMPLOYEEisAuthenticated, new UpdateTagController().handle);
routesEmployess.delete('/deleteTagProduct', EMPLOYEEisAuthenticated, new DeleteTagController().handle);
routesEmployess.delete('/deleteAllTagProduct', EMPLOYEEisAuthenticated, new DeleteAllTagController().handle);
routesEmployess.get('/findUniqueTagProduct', EMPLOYEEisAuthenticated, new FindUniqueTagController().handle);
routesEmployess.get('/allProductsDescriptionsStore', EMPLOYEEisAuthenticated, new AllDescriptionProductController().handle);
routesEmployess.get('/allTags', EMPLOYEEisAuthenticated, new AllTagController().handle);
routesEmployess.get('/allProductsStore', new AllProductInStoreController().handle);
routesEmployess.get('/allDescriptionProductsStore', new AllDescriptionProductInStoreController().handle);
routesEmployess.get('/allPhotosProductsStore', new AllPhotosProductInStoreController().handle);
routesEmployess.get('/listProductsDestaque', new ListAllProductEmphasisController().handle);
routesEmployess.get('/listProductsOfertas', new ListAllProductOfferController().handle);
routesEmployess.get('/exactProductPage', new ListExactProductNameController().handle);
routesEmployess.get('/allTagProducts', new AllTagProductController().handle);
routesEmployess.get('/listPhotosPageProduct', new AllPhotosProductPageController().handle);

// -- ROUTES SEARCH --
routesEmployess.get('/filter', new FilterController().handle);
routesEmployess.get('/filterPrice', new FilterPriceController().handle);
routesEmployess.get('/searchProduct', new AllProductSearchController().handle);
routesEmployess.get('/orderProducts', new OrderProductsController().handle);
routesEmployess.get('/favoritesProducts', new FavoritesProductsController().handle);

// ROUTES CATEGORIES AND PRODUCT --
routesEmployess.post('/createProductCategory', EMPLOYEEisAuthenticated, new CreateProductCategoryController().handle);
routesEmployess.put('/updateCategoryNameProduct', EMPLOYEEisAuthenticated, new UpdateNameProductCategoryController().handle);
routesEmployess.put('/updateStatusCategoryProduct', EMPLOYEEisAuthenticated, new UpdateStatusCategoryProductController().handle);
routesEmployess.get('/pageRelationsCategorys', EMPLOYEEisAuthenticated, new PageRelationsCategorysController().handle);
routesEmployess.get('/findCategoryAndProduct', EMPLOYEEisAuthenticated, new FindCategoryAndProductController().handle);
routesEmployess.put('/updateOrderRelation', EMPLOYEEisAuthenticated, new UpdateOrderProductCategoryController().handle);
routesEmployess.delete('/deleteCategoryProduct', EMPLOYEEisAuthenticated, new DeleteProductCategoryController().handle);
routesEmployess.delete('/deleteAllCategoiesProduct', EMPLOYEEisAuthenticated, new DeleteAllProductCategoryController().handle);
routesEmployess.get('/findUniqueRelationCategoryProduct', EMPLOYEEisAuthenticated, new FindUniqueRelationProductCategoryController().handle);
routesEmployess.get('/findAllRelationsProductAndCategory', EMPLOYEEisAuthenticated, new FindAllRelationProductAndCategoryController().handle);
routesEmployess.put('/mainCategoryProduct', EMPLOYEEisAuthenticated, new MainCategoryProductController().handle);
routesEmployess.get('/productsPageCategories', new ProductsPageCategoriesController().handle);
routesEmployess.get('/getAllProductsCategory', new ProductsCategoriesController().handle);
routesEmployess.get('/findMainCategoryProduct', new FindMainCategoryProductController().handle);
routesEmployess.get('/findDateSlugCategoryProduct', new FindFirstProductCategoryController().handle);

// ROUTES TYPE ATTRIBUTE --
routesEmployess.post('/createTypeAttribute', EMPLOYEEisAuthenticated, new CreateTypeAttributeController().handle);
routesEmployess.put('/updateTypeAttribute', EMPLOYEEisAuthenticated, new UpdateTypeAttributeController().handle);
routesEmployess.get('/allTypeAttributes', new AllTypeAttributeController().handle);
routesEmployess.get('/findUniqueTypeAttribute', new FindUniqueTypeAttributeController().handle);

// -- ROUTES VALUE ATTRIBUTE --
routesEmployess.post('/createValueAttribute', EMPLOYEEisAuthenticated, new CreateValueAttributeController().handle);
routesEmployess.put('/updateValueAttribute', EMPLOYEEisAuthenticated, new UpdateValueAttributeController().handle);
routesEmployess.put('/updateTypeValueAttribute', EMPLOYEEisAuthenticated, new UpdateTypeValueAttributeController().handle);
routesEmployess.put('/updateOrderValueAttribute', EMPLOYEEisAuthenticated, new UpdateValueOrderAttributeController().handle);
routesEmployess.get('/allValuesTypeAttribute', EMPLOYEEisAuthenticated, new AllValuesTypeAttributeController().handle);
routesEmployess.delete('/deleteValueAttribute', EMPLOYEEisAuthenticated, new DeleteValueAttributeController().handle);
routesEmployess.get('/findUniqueValueAttribute', EMPLOYEEisAuthenticated, new FindUniqueValueAttributeController().handle);
routesEmployess.delete('/deleteAllImagesValueType', EMPLOYEEisAuthenticated, new DeleteImageAttributeRelationIDController().handle);
routesEmployess.get('/getAllValuesAttributes', EMPLOYEEisAuthenticated, new ValuesAttributeController().handle);

// ROUTES RELATION ATTRIBUTE AND PRODUCT --
routesEmployess.post('/createRelationAttributeProduct', EMPLOYEEisAuthenticated, new CreateRelationAttributeProductController().handle);
routesEmployess.delete('/deleteAllRelationProductAttributes', EMPLOYEEisAuthenticated, new DeleteProductRelationAllController().handle);
routesEmployess.delete('/deleteAttributeProduct', EMPLOYEEisAuthenticated, new DeleteRelationAttributeProductController().handle);
routesEmployess.get('/findUniqueRelationAttributeProduct', EMPLOYEEisAuthenticated, new FindUniqueRelationAttributeProductController().handle);
routesEmployess.get('/findFirstRelationAttributeProduct', EMPLOYEEisAuthenticated, new FirstFirstRelationAttributeProductController().handle);
routesEmployess.get('/pageAttributesRelationsProducts', EMPLOYEEisAuthenticated, new PageRelationAttributeProductController().handle);
routesEmployess.get('/findManyAttributeIDproduct', EMPLOYEEisAuthenticated, new AllProductAttributeController().handle);
routesEmployess.put('/updateOrderRelationAttributeProduct', EMPLOYEEisAuthenticated, new UpdateOrderRelationAttributeProductController().handle);
routesEmployess.put('/updateTypeRelationAttributeProduct', EMPLOYEEisAuthenticated, new UpdateTypeRelationAttributeProductController().handle);
routesEmployess.put('/updateValueRelationAttributeProduct', EMPLOYEEisAuthenticated, new UpdateValueRelationAttributeProductController().handle);
routesEmployess.put('/updateStatusRelationAttributeProduct', EMPLOYEEisAuthenticated, new UpdateStatusRelationAttributeProductController().handle);
routesEmployess.post('/createImageAttributeProduct', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageAttributeController().handle);
routesEmployess.put('/updateImageAttribute', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageAttributeController().handle);
routesEmployess.delete('/deleteImageAttributeProduct', EMPLOYEEisAuthenticated, new DeleteImageAttributeController().handle);
routesEmployess.get('/findUniqueImageAttribute', EMPLOYEEisAuthenticated, new FindUniqueImageAttributeController().handle);
routesEmployess.get('/getAllAttributesProduct', EMPLOYEEisAuthenticated, new ProductAttributeController().handle);
routesEmployess.get('/allProductsAndAttributes', new ProductsAndAttributeController().handle);

// -- ROUTES AVALIETION --
routesEmployess.post('/createAvalietion', EMPLOYEEisAuthenticated && isAuthenticated, new CreateAvalietionController().handle);
routesEmployess.delete('/deleteAvalietion', EMPLOYEEisAuthenticated, new DeleteAvalietionController().handle);
routesEmployess.delete('/deleteAvalietionProductID', EMPLOYEEisAuthenticated, new DeleteAvalietionProductIDController().handle);
routesEmployess.get('/pageAllAvalietion', EMPLOYEEisAuthenticated, new PageListAllAvalietionController().handle);
routesEmployess.get('/pageAvalietion', EMPLOYEEisAuthenticated, new PageListAllAvalietionProductIDController().handle);
routesEmployess.get('/avalietionData', EMPLOYEEisAuthenticated, new FindUniqueAvalietionController().handle);
routesEmployess.put('/updateStatusAvalietion', EMPLOYEEisAuthenticated, new UpdateStatusAvalietionController().handle);
routesEmployess.get('/pageAvalietionStoreProduct', new PageAvalietionStoreProductIDController().handle);

// -- ROUTES VARIATION --
routesEmployess.post('/createVariation', EMPLOYEEisAuthenticated, new CreateVariationController().handle);
routesEmployess.get('/allVariationProduct', EMPLOYEEisAuthenticated, new AllVariationProductController().handle);
routesEmployess.get('/findVariationName', EMPLOYEEisAuthenticated, new FindFirstVariationNameController().handle);
routesEmployess.delete('/deleteAllVariationProduct', EMPLOYEEisAuthenticated, new DeleteAllVariationProductController().handle);
routesEmployess.delete('/deleteVariation', EMPLOYEEisAuthenticated, new DeleteVariationController().handle);
routesEmployess.get('/findUniqueVariation', EMPLOYEEisAuthenticated, new FindUniqueVariationController().handle);
routesEmployess.put('/updateStatusVariation', EMPLOYEEisAuthenticated, new UpdateStatusVariationController().handle);
routesEmployess.get('/pageAllVariation', EMPLOYEEisAuthenticated, new PageListAllVariationController().handle);
routesEmployess.put('/updateNameVariation', EMPLOYEEisAuthenticated, new UpdateNameVariationController().handle);
routesEmployess.put('/updateOrderVariacao', EMPLOYEEisAuthenticated, new UpdateOrderVariacaoController().handle);
routesEmployess.post('/createImageVariation', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageVariationController().handle);
routesEmployess.get('/allVariationImages', EMPLOYEEisAuthenticated, new AllVariationImageController().handle);
routesEmployess.get('/allImagesVariation', EMPLOYEEisAuthenticated, new AllImagesVariationController().handle);
routesEmployess.delete('/deleteAllPhotosVariation', EMPLOYEEisAuthenticated, new DeleteALLImageVariationProductController().handle);
routesEmployess.delete('/deleteImageVariantion', EMPLOYEEisAuthenticated, new DeleteImageVariationController().handle);
routesEmployess.put('/updateOrderImageVariation', EMPLOYEEisAuthenticated, new UpdateOrderImageVariationController().handle);
routesEmployess.get('/findUniqueImageVariation', EMPLOYEEisAuthenticated, new FindUniqueImageVariationController().handle);
routesEmployess.post('/createProductVariation', EMPLOYEEisAuthenticated, new CreateProductVariationController().handle);
routesEmployess.delete('/deleteAllProductVariation', EMPLOYEEisAuthenticated, new DeleteProductVariationController().handle);
routesEmployess.delete('/deleteProductVariation', EMPLOYEEisAuthenticated, new VariationDeleteController().handle);
routesEmployess.get('/findFirstProductVariation', EMPLOYEEisAuthenticated, new FindFirstProductVariationController().handle);
routesEmployess.get('/findUniqueProductVariation', EMPLOYEEisAuthenticated, new FindUniqueProductVariationController().handle);
routesEmployess.put('/updateStatusProductVariation', EMPLOYEEisAuthenticated, new UpdateStatusProductVariationController().handle);
routesEmployess.put('/updateProductVariationName', EMPLOYEEisAuthenticated, new UpdateNameProductVariationController().handle);
routesEmployess.put('/updateOrderProductVariationName', EMPLOYEEisAuthenticated, new UpdateOrderProductVariationController().handle);

// -- ROUTES BUY TOGETHER --
routesEmployess.post('/createBuyTogether', EMPLOYEEisAuthenticated, new CreateBuyTogetherController().handle);
routesEmployess.put('/updateProductBuyTogether', EMPLOYEEisAuthenticated, new UpdateProductBuyTogetherController().handle);
routesEmployess.put('/updateNameGroupBuyTogether', EMPLOYEEisAuthenticated, new UpdateNameGroupBuyTogetherController().handle);
routesEmployess.put('/updateOrderBuyTogether', EMPLOYEEisAuthenticated, new UpdateOrderBuyTogetherController().handle);
routesEmployess.put('/updateStatusBuyTogether', EMPLOYEEisAuthenticated, new UpdateStatusBuyTogetherController().handle);
routesEmployess.delete('/deleteGroupAllProductsBuyTogether', EMPLOYEEisAuthenticated, new DeleteGroupBuyTogetherController().handle);
routesEmployess.delete('/deleteGroupBuyTogether', EMPLOYEEisAuthenticated, new DeleteBuyTogetherController().handle);
routesEmployess.delete('/deleteParentIdBuyTogether', EMPLOYEEisAuthenticated, new DeleteBuyTogetherAllProductController().handle);
routesEmployess.get('/findUniqueBuyTogether', EMPLOYEEisAuthenticated, new FindUniqueBuyTogetherController().handle);
routesEmployess.get('/allBuyTogether', EMPLOYEEisAuthenticated, new AllBuyTogetherController().handle);
routesEmployess.get('/findFirstGroupBuyTogether', EMPLOYEEisAuthenticated, new FindFirstBuyTogetherController().handle);
routesEmployess.get('/findProductGroupBuyTogether', EMPLOYEEisAuthenticated, new ProductIDBuyTogetherController().handle);
routesEmployess.get('/findItensGroupBuyTogether', EMPLOYEEisAuthenticated, new FindGroupBuyTogetherIDController().handle);
routesEmployess.get('/buyTogetherProductStore', new FindBuyTogetherIDController().handle);

// -- ROUTES COUNTERPROPOSAL --
routesEmployess.get('/pagePropousalList', EMPLOYEEisAuthenticated, new PageCounterProposalController().handle);
routesEmployess.get('/findUniqueCounterProposal', EMPLOYEEisAuthenticated, new FindUniqueCounterProposalController().handle);
routesEmployess.put('/updateDataCounterProposal', EMPLOYEEisAuthenticated, new CounterProposalController().handle);
routesEmployess.post('/createCounterProposal', new CreateCounterProposalController().handle);

// -- ROUTES STOCK PRODUCT CUSTOMER --
routesEmployess.post('/createStockProductZero', new CreateStockProductCustomerController().handle);
routesEmployess.get('/getStockProduct', new StockProductCustomerController().handle);

// -- ROUTES MENU CATEGORY --
routesEmployess.post('/createMenuCategory', EMPLOYEEisAuthenticated, new CreateMenuCategoryController().handle);
routesEmployess.get('/pageMenu', EMPLOYEEisAuthenticated, new PageListAllMenuCategoryController().handle);
routesEmployess.get('/findFirstMenu', EMPLOYEEisAuthenticated, new FindFirstMenuController().handle);
routesEmployess.get('/findMenuID', EMPLOYEEisAuthenticated, new FindMenuIDController().handle);
routesEmployess.get('/findUniqueMenu', EMPLOYEEisAuthenticated, new FindUniqueMenuIDController().handle);
routesEmployess.put('/updateOrderCategoryMenu', EMPLOYEEisAuthenticated, new UpdateOrderCategoryMenuController().handle);
routesEmployess.put('/updateStatusMenu', EMPLOYEEisAuthenticated, new StatusCategoryMenuCategoriesController().handle);
routesEmployess.put('/updateNameMenu', EMPLOYEEisAuthenticated, new UpdateNameMenuController().handle);
routesEmployess.put('/updatePositionMenu', EMPLOYEEisAuthenticated, new UpdatePositionMenuController().handle);
routesEmployess.put('/updateNameCategory', EMPLOYEEisAuthenticated, new UpdateNameCategoryMenuController().handle);
routesEmployess.put('/updateItemNameCategory', EMPLOYEEisAuthenticated, new UpdateItemNameCategoryController().handle);
routesEmployess.delete('/deleteCategoryMenu', EMPLOYEEisAuthenticated, new DeleteMenuCategoryMenuIDController().handle);
routesEmployess.delete('/deleteMenu', EMPLOYEEisAuthenticated, new DeleteMenuIDController().handle);
routesEmployess.delete('/deleteImageMenuCategory', EMPLOYEEisAuthenticated, new DeletetImageMenuCategoryController().handle);
routesEmployess.post('/createImageMenuCategory', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageMenuCategoryController().handle);
routesEmployess.put('/updateImageMenuCategory', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageMenuCategoryController().handle);
routesEmployess.put('/updateSlugMenu', EMPLOYEEisAuthenticated, new UpdateSlugMenuController().handle);
routesEmployess.get('/positionListMenu', new ListPositionMenuCategoryController().handle);
routesEmployess.get('/listCategoryMenu', new ListCategoryMenuController().handle);
routesEmployess.get('/listMenuCategories', new AllCategoriesMenuController().handle);
routesEmployess.get('/categoriesParentIdBradCrumb', new MenuCategoryController().handle);

// -- ROUTES GROUP FILTERS --
routesEmployess.post('/createGroupFilter', EMPLOYEEisAuthenticated, new CreateGroupFilterController().handle);
routesEmployess.put('/updateNameGroupFilter', EMPLOYEEisAuthenticated, new UpdateNameGroupFilterController().handle);
routesEmployess.put('/updateTypeAttributeGroup', EMPLOYEEisAuthenticated, new UpdateTypeAttributeGroupController().handle);
routesEmployess.put('/updateSlugGroupFilter', EMPLOYEEisAuthenticated, new UpdateSlugGroupFilterController().handle);
routesEmployess.put('/updateStatusGroupFilter', EMPLOYEEisAuthenticated, new UpdateStatusGroupFilterController().handle);
routesEmployess.get('/pagesGroupFilter', EMPLOYEEisAuthenticated, new PageGroupsFiltersController().handle);
routesEmployess.get('/filterFirstGroupFiltro', EMPLOYEEisAuthenticated, new FindFirstGroupsController().handle);
routesEmployess.delete('/deleteGroupFilter', EMPLOYEEisAuthenticated, new DeleteGroupFilterController().handle);
routesEmployess.get('/findsNameGroupFilter', new FindsNameGroupFilterController().handle);
routesEmployess.get('/findTypeAttributeGroupFilter', new FindTypeFilterController().handle);
routesEmployess.get('/findUniqueIDGroup', EMPLOYEEisAuthenticated, new FindIDGroupFilterController().handle);
routesEmployess.get('/listFilterGroup', new FindSlugGroupFilterController().handle);

// -- ROUTES FILTER ATTRIBUTES --
routesEmployess.post('/createFilterAttribute', EMPLOYEEisAuthenticated, new CreateFilterAttributeController().handle);
routesEmployess.delete('/deleteAllFilterAttributeGroup', EMPLOYEEisAuthenticated, new DeleteAllFilterAttributeController().handle);
routesEmployess.delete('/deleteFilterAttribute', EMPLOYEEisAuthenticated, new DeleteFilterAttributeController().handle);
routesEmployess.get('/pagesFilterAttributes', EMPLOYEEisAuthenticated, new PageFilterAttributeController().handle);
routesEmployess.put('/updateNameFilterAttribute', EMPLOYEEisAuthenticated, new UpdateNameFilterAttributeController().handle);
routesEmployess.put('/updateValueFilterAttribute', EMPLOYEEisAuthenticated, new UpdateValueFilterAttributeController().handle);
routesEmployess.put('/updateOrderFilterAttribute', EMPLOYEEisAuthenticated, new UpdateOrderFilterAttributeController().handle);
routesEmployess.put('/updateStatusFilterAttribute', EMPLOYEEisAuthenticated, new UpdateStatusFilterAttributeController().handle);
routesEmployess.post('/createImageFilterAttribute', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageFilterAttributeController().handle);
routesEmployess.put('/updateImageFilterAttribute', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageFilterAttributeController().handle);
routesEmployess.delete('/deleteImageFilterAttribute', EMPLOYEEisAuthenticated, new DeleteImageFilterAttributeController().handle);
routesEmployess.get('/findUniqueFilterAttribute', EMPLOYEEisAuthenticated, new FindUniqueFilterAttributeController().handle);
routesEmployess.get('/findManyNameFilterAttribute', EMPLOYEEisAuthenticated, new FindManyFilterAttributeNameController().handle);
routesEmployess.get('/allAttributesGroups', new FindFilterAttributeController().handle);

// -- ROUTES FILTER CATEGORY --
routesEmployess.post('/createFilterCategory', EMPLOYEEisAuthenticated, new CreateFilterCategoryController().handle);
routesEmployess.delete('/deleteFilterCategory', EMPLOYEEisAuthenticated, new DeleteFilterCategoryController().handle);
routesEmployess.get('/pagesFiltrosCategory', EMPLOYEEisAuthenticated, new PageFilterCategoryController().handle);
routesEmployess.get('/findManyFilterName', EMPLOYEEisAuthenticated, new FindManyFilterCategoryNameController().handle);
routesEmployess.get('/findUniqueFilterCategory', EMPLOYEEisAuthenticated, new FindUniqueFilterCategoryController().handle);
routesEmployess.put('/updateFilterNameGroupCategory', EMPLOYEEisAuthenticated, new UpdateNameFilterGroupController().handle);
routesEmployess.put('/updateCategoryNameFilter', EMPLOYEEisAuthenticated, new UpdateCategoryNameFilterCategoryController().handle);
routesEmployess.put('/updateFilterStatusCategory', EMPLOYEEisAuthenticated, new UpdateStatusFilterCategoryController().handle);
routesEmployess.put('/updateFilterOrderCategory', EMPLOYEEisAuthenticated, new UpdateCategoryOrderFilterController().handle);
routesEmployess.post('/createImageFilterCategory', EMPLOYEEisAuthenticated, upload.single('file'), new CreateImageFilterCategoryController().handle);
routesEmployess.put('/updateImageFilterCategory', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateImageFilterCategoryController().handle);
routesEmployess.delete('/deleteImageFilterCategory', EMPLOYEEisAuthenticated, new DeleteImageFilterCategoryController().handle);

// -- ROUTES BANNER --
routesEmployess.post('/createBanner', EMPLOYEEisAuthenticated, upload.single('file'), new CreateBannerController().handle);
routesEmployess.put('/updateAllDateBanner', EMPLOYEEisAuthenticated, new UpdateAllDateBannerController().handle);
routesEmployess.get('/pageListBanner', EMPLOYEEisAuthenticated, new PageListAllBannerController().handle);
routesEmployess.delete('/deleteBanner', EMPLOYEEisAuthenticated, new DeleteBannerController().handle);
routesEmployess.put('/updateBanner', EMPLOYEEisAuthenticated, upload.single('file'), new UpdateBannerController().handle);
routesEmployess.put('/updatePosicaoBanner', EMPLOYEEisAuthenticated, new UpdatePosicaoBannerController().handle);
routesEmployess.put('/updateStatusBanner', EMPLOYEEisAuthenticated, new StatusBannerController().handle);
routesEmployess.get('/exactBanner', EMPLOYEEisAuthenticated, new ListExactBannerController().handle);
routesEmployess.get('/updatePublishBanner', EMPLOYEEisAuthenticated, new PublishProgramadBannerController().handle);
routesEmployess.get('/activeBanner', new ActiveAllBannerController().handle);

// -- ROUTES NEWSLETTERS --
routesEmployess.post('/createNewsletter', new CreateNewslettersController().handle);
routesEmployess.delete('/deleteNewsletter', EMPLOYEEisAuthenticated, new DeleteNewslettersController().handle);
routesEmployess.get('/listNewsletter', EMPLOYEEisAuthenticated, new ListNewslettersController().handle);
routesEmployess.get('/listExactNewsletter', EMPLOYEEisAuthenticated, new ListExactNewslettersController().handle);
routesEmployess.get('/pageNewsletter', EMPLOYEEisAuthenticated, new PageListAllNewslettersController().handle);
routesEmployess.get('/exportNews', EMPLOYEEisAuthenticated, new ExportNewslettersController().handle);

// -- ROUTES CONTACT --
routesEmployess.post('/createContact', new CreateContactController().handle);
routesEmployess.delete('/deleteContact', EMPLOYEEisAuthenticated, new DeleteContactController().handle);
routesEmployess.get('/listContact', EMPLOYEEisAuthenticated, new ListContactController().handle);
routesEmployess.get('/findUniqueContact', EMPLOYEEisAuthenticated, new FindUniqueContactController().handle);
routesEmployess.get('/pageContact', EMPLOYEEisAuthenticated, new PageListAllContactController().handle);
routesEmployess.get('/exportContacts', EMPLOYEEisAuthenticated, new ExportContactController().handle);

// -- ROUTES SEND EMAILS --
routesEmployess.get('/admin/sendlistuser', EMPLOYEEisAuthenticated, new EmailExportAdminUserController().handle);
routesEmployess.get('/sendListCustomer', EMPLOYEEisAuthenticated, new EmailExportCustomerUserController().handle);
routesEmployess.get('/sendlistproduct', EMPLOYEEisAuthenticated, new EmailExportProductsController().handle);
routesEmployess.get('/sendEmailNewsletters', EMPLOYEEisAuthenticated, new EmailExportNewslettersController().handle);
routesEmployess.get('/sendEmailContact', EMPLOYEEisAuthenticated, new EmailExportContactController().handle);


export { routesEmployess };
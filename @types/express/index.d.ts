declare namespace Express {
  export interface Request {
    admin_id: string;
    customer_id: string;
    slug: string;
    typeAttribute_id: string;
    passwordRecoveryAdmin_id: string;
    deliveryAddressCustomer_id: string;
    passwordRecoveryCustomer_id: string;
    store_id: string;
    socialMedia_id: string;
    institutionalText_id: string;
    imageStore_id: string;
    category_id: string;
    imageCategory: string;
    product_id: string;
    photoProduct_id: string;
    descriptionProduct_id: string;
    productCategory_id: string;
    tag_id: string;
    typeAttribute_id: string;
    valueAttribute_id: string;
    relationAttributeProduct_id: string;
    imageAttribute_id: string;
    avalietion_id: string;
    photoVariation_id: string;
    productVariation_id: string;
    buyTogether_id: string;
    menuCategory_id: string;
    imageMenuCategory_id: string;
    groupFilter_id: string;
    filterAttribute_id: string;
    imageFilterAtributo_id: string;
    filterCategory_id: string;
    imageFilterCategory_id: string;
    banner_id: string;
    newsletter_id: string;
    contact_id: string;
    cupon_id: string;
    store_cart_id: string;
    configAbandonedCart_id: string;
    abandonedCart_id: string;
  }

  export type BoolNullableListFilter = {
    equals?: Enumerable<boolean> | null
    has?: boolean | null
    hasEvery?: Enumerable<boolean>
    hasSome?: Enumerable<boolean>
    isEmpty?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }
}
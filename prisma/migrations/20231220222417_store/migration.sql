-- CreateEnum
CREATE TYPE "RoleAdmin" AS ENUM ('EMPLOYEE', 'ADMIN');

-- CreateEnum
CREATE TYPE "SelectedDelivery" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusSocialMedia" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusInstitutionalText" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusImageStore" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusOfferProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusEmphasisProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusTendenceProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusNewsllaters" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusChatIa" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusSearchBar" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCupomInCart" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCupomInPayment" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusServiceInHeader" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCreditsCustomerInMenu" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusDigitalProductsCustomerInMenu" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusRecentProductsViews" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusPaymentPix" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusPaymentBoleto" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusPaymentCartao" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterCategorys" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterAtributes" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterPrice" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCountdownTimer" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusChatWhatsApp" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFreeShipping" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusEmphasis" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusOffer" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusDescriptionProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusProductCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "MainCategory" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusRelationAttributeProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusProductVariation" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusBuyTogether" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusCoupon" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusMenuCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusGroupFilter" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterAttribute" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusBanner" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusCart" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "CommentCustomer" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusEmailFrete" AS ENUM ('Sim', 'Nao');

-- CreateEnum
CREATE TYPE "StatusEmail" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(295) NOT NULL,
    "slug" VARCHAR(295),
    "email" VARCHAR(180) NOT NULL,
    "password" TEXT NOT NULL,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "role" "RoleAdmin" NOT NULL DEFAULT 'ADMIN',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwordrecoveryadmins" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "passwordrecoveryadmins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(295) NOT NULL,
    "slug" VARCHAR(295),
    "email" VARCHAR(180) NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" VARCHAR(125),
    "cnpj" VARCHAR(125),
    "stateRegistration" VARCHAR(155),
    "phone" VARCHAR(135),
    "dateOfBirth" VARCHAR(125),
    "gender" VARCHAR(135),
    "newslatter" VARCHAR(7),
    "addressee" VARCHAR(405),
    "address" VARCHAR(405),
    "number" VARCHAR(125),
    "complement" VARCHAR(155),
    "reference" VARCHAR(805),
    "neighborhood" VARCHAR(185),
    "cep" VARCHAR(125),
    "city" VARCHAR(185),
    "state" VARCHAR(185),
    "id_customer_assas" TEXT,
    "authenticated" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliveryaddresscustomers" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "addressee" VARCHAR(405),
    "address" VARCHAR(405),
    "number" VARCHAR(125),
    "complement" VARCHAR(155),
    "reference" VARCHAR(405),
    "neighborhood" VARCHAR(185),
    "cep" VARCHAR(125),
    "city" VARCHAR(185),
    "state" VARCHAR(185),
    "phone" VARCHAR(135),
    "deliverySelected" "SelectedDelivery" NOT NULL DEFAULT 'Sim',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "deliveryaddresscustomers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwordrecoverycustomers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "passwordrecoverycustomers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "logo" TEXT,
    "name" VARCHAR(185),
    "cnpj" VARCHAR(85),
    "email" VARCHAR(95),
    "phone" VARCHAR(85),
    "cellPhone" VARCHAR(85),
    "address" VARCHAR(405),
    "number" VARCHAR(8),
    "neighborhood" VARCHAR(95),
    "complement" VARCHAR(155),
    "cep" VARCHAR(25),
    "city" VARCHAR(185),
    "state" VARCHAR(155),
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitedusers" (
    "id" TEXT NOT NULL,
    "visited" INTEGER,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "visitedusers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socialmedias" (
    "id" TEXT NOT NULL,
    "store_id" TEXT,
    "name" VARCHAR(325),
    "link" VARCHAR(2725),
    "image" TEXT,
    "order" INTEGER,
    "position" VARCHAR(300),
    "slugPosition" VARCHAR(295),
    "status" "StatusSocialMedia" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "socialmedias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutionaltexts" (
    "id" TEXT NOT NULL,
    "store_id" TEXT,
    "title" VARCHAR(325) NOT NULL,
    "slug" VARCHAR(325),
    "order" INTEGER,
    "position" VARCHAR(300),
    "slugPosition" VARCHAR(325),
    "description" TEXT,
    "status" "StatusInstitutionalText" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "institutionaltexts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagesstore" (
    "id" TEXT NOT NULL,
    "store_id" TEXT,
    "titleImage" VARCHAR(425),
    "image" TEXT,
    "order" INTEGER,
    "position" VARCHAR(300),
    "slugPosition" VARCHAR(325),
    "status" "StatusImageStore" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagesstore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configsstore" (
    "id" TEXT NOT NULL,
    "offer_products" "StatusOfferProduct" NOT NULL DEFAULT 'Disponivel',
    "emphasis_products" "StatusEmphasisProduct" NOT NULL DEFAULT 'Disponivel',
    "tendence_product" "StatusTendenceProduct" NOT NULL DEFAULT 'Disponivel',
    "newsllaters_section" "StatusNewsllaters" NOT NULL DEFAULT 'Disponivel',
    "chat_ia" "StatusChatIa" NOT NULL DEFAULT 'Disponivel',
    "search_bar" "StatusSearchBar" NOT NULL DEFAULT 'Disponivel',
    "cupom_in_cart" "StatusCupomInCart" NOT NULL DEFAULT 'Disponivel',
    "cupom_in_payment" "StatusCupomInPayment" NOT NULL DEFAULT 'Disponivel',
    "service_in_header" "StatusServiceInHeader" NOT NULL DEFAULT 'Disponivel',
    "credits_customer_in_menu" "StatusCreditsCustomerInMenu" NOT NULL DEFAULT 'Disponivel',
    "digital_products_customer_in_menu" "StatusDigitalProductsCustomerInMenu" NOT NULL DEFAULT 'Disponivel',
    "recent_products_views" "StatusRecentProductsViews" NOT NULL DEFAULT 'Disponivel',
    "payment_pix" "StatusPaymentPix" NOT NULL DEFAULT 'Disponivel',
    "payment_boleto" "StatusPaymentBoleto" NOT NULL DEFAULT 'Disponivel',
    "payment_cartao" "StatusPaymentCartao" NOT NULL DEFAULT 'Disponivel',
    "filter_categorys" "StatusFilterCategorys" NOT NULL DEFAULT 'Disponivel',
    "filter_atributes" "StatusFilterAtributes" NOT NULL DEFAULT 'Disponivel',
    "filter_price" "StatusFilterPrice" NOT NULL DEFAULT 'Disponivel',
    "count_down_timer" "StatusCountdownTimer" NOT NULL DEFAULT 'Disponivel',
    "chat_whatsapp" "StatusChatWhatsApp" NOT NULL DEFAULT 'Disponivel',
    "number_whatsapp" TEXT,
    "code_google_analytics" TEXT DEFAULT 'G-XXXXXXXXXX',
    "code_live_chat_tawkTo" TEXT DEFAULT 'xxxxxxxxxxxxxxxxxxxxxxxx',
    "store_id" TEXT,

    CONSTRAINT "configsstore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countdowntimers" (
    "id" TEXT NOT NULL,
    "text_promotion" TEXT DEFAULT 'VEJA A OFERTA POR TEMPO LIMITADO!!!',
    "text_button" TEXT DEFAULT 'OFERTA AQUI!!!',
    "link_button" TEXT DEFAULT 'https://builderseunegocioonline.com.br',
    "day" TEXT DEFAULT '31',
    "month" TEXT DEFAULT '12',
    "year" TEXT DEFAULT '3025',
    "hour" TEXT DEFAULT '23',
    "minute" TEXT DEFAULT '55',
    "second" TEXT DEFAULT '20',
    "store_id" TEXT,

    CONSTRAINT "countdowntimers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(300),
    "slug" VARCHAR(300),
    "description" VARCHAR(15725),
    "nivel" INTEGER,
    "parentId" TEXT,
    "order" INTEGER,
    "status" "StatusCategory" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagecategories" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagecategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(325) NOT NULL,
    "slug" VARCHAR(325),
    "price" DOUBLE PRECISION,
    "promotion" DOUBLE PRECISION,
    "sku" VARCHAR(25),
    "stock" INTEGER,
    "weight" VARCHAR(15),
    "width" VARCHAR(15),
    "height" VARCHAR(15),
    "depth" VARCHAR(15),
    "amount" INTEGER,
    "reservedAmount" INTEGER DEFAULT 0,
    "brand" VARCHAR(325),
    "urlVideo" TEXT,
    "gtin" TEXT,
    "mpn" TEXT,
    "ncm" TEXT,
    "freeShipping" "StatusFreeShipping" NOT NULL DEFAULT 'Nao',
    "status" "StatusProduct" NOT NULL DEFAULT 'Disponivel',
    "emphasis" "StatusEmphasis" NOT NULL DEFAULT 'Nao',
    "offer" "StatusOffer" NOT NULL DEFAULT 'Nao',
    "buyTogether_id" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photoproducts" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "photoproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descriptionproducts" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "title" VARCHAR(500),
    "description" TEXT,
    "order" INTEGER,
    "status" "StatusDescriptionProduct" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "descriptionproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productcategories" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER,
    "status" "StatusProductCategory" NOT NULL DEFAULT 'Disponivel',
    "mainCategory" "MainCategory" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "productcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "tagName" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typeattributes" (
    "id" TEXT NOT NULL,
    "type" VARCHAR(300),
    "slug" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "typeattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "valuesattributes" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "value" VARCHAR(110),
    "slug" TEXT,
    "order" INTEGER,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "valuesattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imageattributes" (
    "id" TEXT NOT NULL,
    "valueAttribute_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imageattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationattributeproducts" (
    "id" TEXT NOT NULL,
    "product_id" TEXT,
    "type" TEXT,
    "valueAttribute_id" TEXT,
    "order" INTEGER,
    "status" "StatusRelationAttributeProduct" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "relationattributeproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avalietions" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "product_id" TEXT NOT NULL,
    "description" VARCHAR(1225),
    "point" VARCHAR(175),
    "status" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "avalietions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productsvariations" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "variationName" VARCHAR(325),
    "variationProduct" VARCHAR(1125),
    "order" INTEGER,
    "status" "StatusProductVariation" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "productsvariations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photovariations" (
    "id" TEXT NOT NULL,
    "productVariation_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "photovariations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buytogethers" (
    "id" TEXT NOT NULL,
    "nameGroup" VARCHAR(385),
    "product_id" TEXT,
    "nivel" INTEGER,
    "parentId" TEXT,
    "order" INTEGER,
    "status" "StatusBuyTogether" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "buytogethers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countersproposals" (
    "id" TEXT NOT NULL,
    "currentPrice" DOUBLE PRECISION,
    "counterOfferPrice" DOUBLE PRECISION,
    "name" VARCHAR(185),
    "email" TEXT NOT NULL,
    "phone" VARCHAR(85),
    "lowestPricePlace" TEXT,
    "moreInformation" VARCHAR(1585),
    "sku" VARCHAR(285),
    "nameProduct" VARCHAR(485),
    "codeCoupon" VARCHAR(285),
    "information" VARCHAR(6585),
    "status" VARCHAR(200),
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "countersproposals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stockproductscustomers" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(685) NOT NULL,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "stockproductscustomers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupons" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(385),
    "description" VARCHAR(685),
    "startDate" TEXT DEFAULT '01/01/3075 00:00',
    "endDate" TEXT DEFAULT '01/01/5575 00:00',
    "code" VARCHAR(385),
    "amountCoupon" INTEGER,
    "active" "StatusCoupon" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupomsconditionals" (
    "id" TEXT NOT NULL,
    "cupon_id" TEXT,
    "conditional" TEXT,
    "value" DOUBLE PRECISION,

    CONSTRAINT "coupomsconditionals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cupomsproducts" (
    "id" TEXT NOT NULL,
    "cupon_id" TEXT,
    "product_id" TEXT,

    CONSTRAINT "cupomsproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menucategories" (
    "id" TEXT NOT NULL,
    "nameGroup" VARCHAR(385),
    "name" TEXT,
    "categoryName" VARCHAR(385),
    "slugCategory" VARCHAR(400),
    "position" VARCHAR(300),
    "slugPosition" VARCHAR(325),
    "order" INTEGER,
    "nivel" INTEGER,
    "parentId" TEXT,
    "status" "StatusMenuCategory" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "menucategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagemenucategories" (
    "id" TEXT NOT NULL,
    "menuCategory_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagemenucategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupfilters" (
    "id" TEXT NOT NULL,
    "nameGroup" VARCHAR(385),
    "typeAttribute" TEXT,
    "slugCategory" VARCHAR(400),
    "order" INTEGER,
    "status" "StatusGroupFilter" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "groupfilters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filterattributes" (
    "id" TEXT NOT NULL,
    "groupFilter_id" TEXT,
    "value" VARCHAR(150),
    "order" INTEGER,
    "status" "StatusFilterAttribute" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "filterattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagefilteratributos" (
    "id" TEXT NOT NULL,
    "filterAttribute_id" TEXT NOT NULL,
    "imageAttribute" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagefilteratributos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filtercategories" (
    "id" TEXT NOT NULL,
    "groupFilter_id" TEXT,
    "name" TEXT,
    "order" INTEGER,
    "status" "StatusFilterCategory" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "filtercategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagefiltercategories" (
    "id" TEXT NOT NULL,
    "filterCategory_id" TEXT NOT NULL,
    "imageCategory" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagefiltercategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banners" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(355),
    "width" VARCHAR(55),
    "height" VARCHAR(55),
    "startDate" TEXT DEFAULT '01/01/3075 00:00',
    "endDate" TEXT DEFAULT '01/01/5575 00:00',
    "banner" TEXT NOT NULL,
    "order" INTEGER,
    "url" TEXT,
    "position" VARCHAR(325),
    "slugPosition" VARCHAR(325),
    "active" "StatusBanner" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletters" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "email" VARCHAR(155) NOT NULL,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "newsletters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "email" VARCHAR(155) NOT NULL,
    "phone" VARCHAR(155),
    "company" VARCHAR(255),
    "sector" VARCHAR(355),
    "message" VARCHAR(5555),
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,
    "store_cart_id" TEXT,
    "product_id" VARCHAR(825),
    "amount" DOUBLE PRECISION,
    "total" DOUBLE PRECISION,
    "customer_id" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartstotal" (
    "id" TEXT NOT NULL,
    "store_cart_id" TEXT,
    "amount_products" INTEGER,
    "total" DOUBLE PRECISION DEFAULT 0,
    "frete" DOUBLE PRECISION DEFAULT 0,
    "frete_coupon" DOUBLE PRECISION DEFAULT 0,
    "customer_id" TEXT,
    "cep" VARCHAR(125),
    "days_delivery" TEXT,
    "name_cupom" TEXT,
    "coupon" VARCHAR(225),
    "new_subTotal" DOUBLE PRECISION DEFAULT 0,
    "new_value_products" JSONB,
    "data_cart_products" JSONB,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cartstotal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartstotalfinish" (
    "id" TEXT NOT NULL,
    "store_cart_id" TEXT,
    "totalCartFinish" DOUBLE PRECISION DEFAULT 0,
    "customer_id" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cartstotalfinish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartsabandoned" (
    "id" TEXT NOT NULL,
    "created_at" TEXT,
    "slug_day" TEXT,
    "customer_id" TEXT,
    "email_customer" TEXT,
    "store_cart_id" TEXT,
    "cart_abandoned" JSONB,
    "total_cart" DOUBLE PRECISION,
    "created_cart" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cartsabandoned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "totaldaysabandonedcarts" (
    "id" TEXT NOT NULL,
    "day_cart" TEXT,
    "slug_day" TEXT,
    "lost_orders" INTEGER,
    "total_day" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "totaldaysabandonedcarts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templatesabandonedscartsemail" (
    "id" TEXT NOT NULL,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesabandonedscartsemail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configcartsabandoned" (
    "id" TEXT NOT NULL,
    "time_send_email" INTEGER,
    "time_in_hours" INTEGER,
    "subject" TEXT,
    "code_cupom" TEXT,
    "active" "StatusCart" NOT NULL DEFAULT 'Nao',
    "templateAbandonedCartEmail_id" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "configcartsabandoned_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "store_cart_id" TEXT,
    "transaction_id" TEXT,
    "type_payment" VARCHAR(525),
    "key_payment_pix" TEXT,
    "qr_code_pix" TEXT,
    "key_valid_pix" TEXT,
    "external_resource_url" TEXT,
    "expiration_boleto" TEXT,
    "first_number_credit_card" TEXT,
    "last_number_credit_card" TEXT,
    "expiration_month" TEXT,
    "expiration_year" TEXT,
    "date_created" TEXT,
    "cardholder_name" TEXT,
    "cardholder_identification_cpfCnpj" TEXT,
    "cardholder_cpfCnpj" TEXT,
    "flag_credit_card" TEXT,
    "installment" INTEGER,
    "installment_amount" DOUBLE PRECISION,
    "total_payment" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typepayments" (
    "id" TEXT NOT NULL,
    "qtd_type_boleto" INTEGER,
    "qtd_type_pix" INTEGER,
    "qtd_type_cartao" INTEGER,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "typepayments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "id_order_store" SERIAL NOT NULL,
    "customer_id" TEXT,
    "deliveryAddressCustomer_id" TEXT,
    "data_delivery" TEXT,
    "payment_id" TEXT,
    "store_cart_id" TEXT,
    "name_cupom" TEXT,
    "cupom" TEXT,
    "frete" DOUBLE PRECISION,
    "frete_cupom" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "cart" JSONB,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordercomments" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "user_comment" VARCHAR(155),
    "comment" VARCHAR(8555) NOT NULL,
    "active" "CommentCustomer" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ordercomments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipmentstrackings" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "shipmentstrackings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trackings" (
    "id" TEXT NOT NULL,
    "shippingTracking_id" TEXT,
    "status_frete" TEXT,
    "name_transport" TEXT,
    "code_tracking" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "trackings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templatesfretesemails" (
    "id" TEXT NOT NULL,
    "status_frete" TEXT,
    "subject" TEXT,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "active" "StatusEmailFrete" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesfretesemails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statusorders" (
    "id" TEXT NOT NULL,
    "order_id" TEXT,
    "status_order" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "statusorders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templatesorderemails" (
    "id" TEXT NOT NULL,
    "status_order" TEXT,
    "subject" TEXT,
    "name_file_email" TEXT,
    "slug_name_file_email" TEXT,
    "active" "StatusEmail" NOT NULL DEFAULT 'Nao',
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "templatesorderemails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificationsadmin" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "message" TEXT,
    "link" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "block_bell" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "notificationsadmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificationscustomers" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "message" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "block_bell" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "notificationscustomers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "institutionaltexts_slug_key" ON "institutionaltexts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "typeattributes_type_key" ON "typeattributes"("type");

-- CreateIndex
CREATE UNIQUE INDEX "templatesabandonedscartsemail_name_file_email_key" ON "templatesabandonedscartsemail"("name_file_email");

-- CreateIndex
CREATE UNIQUE INDEX "templatesfretesemails_name_file_email_key" ON "templatesfretesemails"("name_file_email");

-- CreateIndex
CREATE UNIQUE INDEX "templatesorderemails_name_file_email_key" ON "templatesorderemails"("name_file_email");

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveryaddresscustomers" ADD CONSTRAINT "deliveryaddresscustomers_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveryaddresscustomers" ADD CONSTRAINT "deliveryaddresscustomers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitedusers" ADD CONSTRAINT "visitedusers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialmedias" ADD CONSTRAINT "socialmedias_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutionaltexts" ADD CONSTRAINT "institutionaltexts_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagesstore" ADD CONSTRAINT "imagesstore_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configsstore" ADD CONSTRAINT "configsstore_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countdowntimers" ADD CONSTRAINT "countdowntimers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagecategories" ADD CONSTRAINT "imagecategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_buyTogether_id_fkey" FOREIGN KEY ("buyTogether_id") REFERENCES "buytogethers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photoproducts" ADD CONSTRAINT "photoproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "descriptionproducts" ADD CONSTRAINT "descriptionproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productcategories" ADD CONSTRAINT "productcategories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productcategories" ADD CONSTRAINT "productcategories_name_fkey" FOREIGN KEY ("name") REFERENCES "categories"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productcategories" ADD CONSTRAINT "productcategories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typeattributes" ADD CONSTRAINT "typeattributes_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valuesattributes" ADD CONSTRAINT "valuesattributes_type_fkey" FOREIGN KEY ("type") REFERENCES "typeattributes"("type") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valuesattributes" ADD CONSTRAINT "valuesattributes_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageattributes" ADD CONSTRAINT "imageattributes_valueAttribute_id_fkey" FOREIGN KEY ("valueAttribute_id") REFERENCES "valuesattributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_type_fkey" FOREIGN KEY ("type") REFERENCES "typeattributes"("type") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_valueAttribute_id_fkey" FOREIGN KEY ("valueAttribute_id") REFERENCES "valuesattributes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productsvariations" ADD CONSTRAINT "productsvariations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productsvariations" ADD CONSTRAINT "productsvariations_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariations" ADD CONSTRAINT "photovariations_productVariation_id_fkey" FOREIGN KEY ("productVariation_id") REFERENCES "productsvariations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buytogethers" ADD CONSTRAINT "buytogethers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buytogethers" ADD CONSTRAINT "buytogethers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countersproposals" ADD CONSTRAINT "countersproposals_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockproductscustomers" ADD CONSTRAINT "stockproductscustomers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockproductscustomers" ADD CONSTRAINT "stockproductscustomers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupons" ADD CONSTRAINT "coupons_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coupomsconditionals" ADD CONSTRAINT "coupomsconditionals_cupon_id_fkey" FOREIGN KEY ("cupon_id") REFERENCES "coupons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cupomsproducts" ADD CONSTRAINT "cupomsproducts_cupon_id_fkey" FOREIGN KEY ("cupon_id") REFERENCES "coupons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cupomsproducts" ADD CONSTRAINT "cupomsproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menucategories" ADD CONSTRAINT "menucategories_name_fkey" FOREIGN KEY ("name") REFERENCES "categories"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menucategories" ADD CONSTRAINT "menucategories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagemenucategories" ADD CONSTRAINT "imagemenucategories_menuCategory_id_fkey" FOREIGN KEY ("menuCategory_id") REFERENCES "menucategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupfilters" ADD CONSTRAINT "groupfilters_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filterattributes" ADD CONSTRAINT "filterattributes_groupFilter_id_fkey" FOREIGN KEY ("groupFilter_id") REFERENCES "groupfilters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filterattributes" ADD CONSTRAINT "filterattributes_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagefilteratributos" ADD CONSTRAINT "imagefilteratributos_filterAttribute_id_fkey" FOREIGN KEY ("filterAttribute_id") REFERENCES "filterattributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filtercategories" ADD CONSTRAINT "filtercategories_groupFilter_id_fkey" FOREIGN KEY ("groupFilter_id") REFERENCES "groupfilters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filtercategories" ADD CONSTRAINT "filtercategories_name_fkey" FOREIGN KEY ("name") REFERENCES "categories"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filtercategories" ADD CONSTRAINT "filtercategories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagefiltercategories" ADD CONSTRAINT "imagefiltercategories_filterCategory_id_fkey" FOREIGN KEY ("filterCategory_id") REFERENCES "filtercategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "newsletters" ADD CONSTRAINT "newsletters_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartstotal" ADD CONSTRAINT "cartstotal_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartstotalfinish" ADD CONSTRAINT "cartstotalfinish_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartsabandoned" ADD CONSTRAINT "cartsabandoned_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templatesabandonedscartsemail" ADD CONSTRAINT "templatesabandonedscartsemail_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configcartsabandoned" ADD CONSTRAINT "configcartsabandoned_templateAbandonedCartEmail_id_fkey" FOREIGN KEY ("templateAbandonedCartEmail_id") REFERENCES "templatesabandonedscartsemail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configcartsabandoned" ADD CONSTRAINT "configcartsabandoned_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "typepayments" ADD CONSTRAINT "typepayments_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_deliveryAddressCustomer_id_fkey" FOREIGN KEY ("deliveryAddressCustomer_id") REFERENCES "deliveryaddresscustomers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordercomments" ADD CONSTRAINT "ordercomments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipmentstrackings" ADD CONSTRAINT "shipmentstrackings_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipmentstrackings" ADD CONSTRAINT "shipmentstrackings_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trackings" ADD CONSTRAINT "trackings_shippingTracking_id_fkey" FOREIGN KEY ("shippingTracking_id") REFERENCES "shipmentstrackings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templatesfretesemails" ADD CONSTRAINT "templatesfretesemails_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statusorders" ADD CONSTRAINT "statusorders_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statusorders" ADD CONSTRAINT "statusorders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templatesorderemails" ADD CONSTRAINT "templatesorderemails_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationsadmin" ADD CONSTRAINT "notificationsadmin_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationscustomers" ADD CONSTRAINT "notificationscustomers_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationscustomers" ADD CONSTRAINT "notificationscustomers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "RoleAdmin" AS ENUM ('EMPLOYEE', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusSocialMedia" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusInstitutionalText" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusImageStore" AS ENUM ('Disponivel', 'Indisponivel');

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
CREATE TYPE "StatusRelationAttributeProduct" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusVariation" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusBuyTogether" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusGroup" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusGroupFilter" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterAttribute" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusFilterCategory" AS ENUM ('Disponivel', 'Indisponivel');

-- CreateEnum
CREATE TYPE "StatusBanner" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(295) NOT NULL,
    "slug" VARCHAR(295),
    "email" VARCHAR(180) NOT NULL,
    "password" TEXT NOT NULL,
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "role" "RoleAdmin" NOT NULL DEFAULT 'ADMIN',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "address" VARCHAR(405),
    "number" VARCHAR(125),
    "complement" VARCHAR(155),
    "neighborhood" VARCHAR(185),
    "cep" VARCHAR(125),
    "city" VARCHAR(185),
    "state" VARCHAR(185),
    "authenticated" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliveryaddresscustomers" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "address" VARCHAR(405),
    "number" VARCHAR(125),
    "complement" VARCHAR(155),
    "reference" VARCHAR(405),
    "neighborhood" VARCHAR(185),
    "cep" VARCHAR(125),
    "city" VARCHAR(185),
    "state" VARCHAR(185),
    "phone" VARCHAR(135),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "description" VARCHAR(95725),
    "status" "StatusInstitutionalText" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagesstore_pkey" PRIMARY KEY ("id")
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagecategories" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagecategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(325) NOT NULL,
    "slug" VARCHAR(325),
    "price" INTEGER,
    "promotion" INTEGER,
    "sku" VARCHAR(25),
    "stock" INTEGER,
    "weight" VARCHAR(15),
    "width" VARCHAR(15),
    "height" VARCHAR(15),
    "depth" VARCHAR(15),
    "amount" INTEGER,
    "reservedAmount" INTEGER,
    "urlVideo" TEXT,
    "freeShipping" "StatusFreeShipping" NOT NULL DEFAULT 'Sim',
    "status" "StatusProduct" NOT NULL DEFAULT 'Disponivel',
    "emphasis" "StatusEmphasis" NOT NULL DEFAULT 'Nao',
    "offer" "StatusOffer" NOT NULL DEFAULT 'Nao',
    "buyTogether_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "productcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "tagName" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typeattributes" (
    "id" TEXT NOT NULL,
    "type" VARCHAR(300),
    "slug" VARCHAR(300),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "typeattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relationattributeproducts" (
    "id" TEXT NOT NULL,
    "product_id" TEXT,
    "type" TEXT,
    "value" TEXT,
    "nivel" INTEGER,
    "parentId" TEXT,
    "order" INTEGER,
    "status" "StatusRelationAttributeProduct" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "relationattributeproducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imageattributes" (
    "id" TEXT NOT NULL,
    "relationAttributeProduct_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imageattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avalietions" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "description" VARCHAR(1225),
    "point" VARCHAR(175),
    "status" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "avalietions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variations" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "name" VARCHAR(325) NOT NULL,
    "slug" VARCHAR(325),
    "order" INTEGER,
    "status" "StatusVariation" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "variations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photovariations" (
    "id" TEXT NOT NULL,
    "variation_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "buytogethers_pkey" PRIMARY KEY ("id")
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
    "status" "StatusGroup" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "menucategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagemenucategories" (
    "id" TEXT NOT NULL,
    "menuCategory_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "imagemenucategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupfilters" (
    "id" TEXT NOT NULL,
    "nameGroup" VARCHAR(385),
    "type" TEXT,
    "slugCategory" VARCHAR(400),
    "order" INTEGER,
    "status" "StatusGroupFilter" NOT NULL DEFAULT 'Disponivel',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "filterattributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagefilteratributos" (
    "id" TEXT NOT NULL,
    "filterAttribute_id" TEXT NOT NULL,
    "imageAttribute" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "filtercategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagefiltercategories" (
    "id" TEXT NOT NULL,
    "filterCategory_id" TEXT NOT NULL,
    "imageCategory" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletters" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(125) NOT NULL,
    "email" VARCHAR(155) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "store_id" TEXT,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_cpf_key" ON "customers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "customers_cnpj_key" ON "customers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "institutionaltexts_slug_key" ON "institutionaltexts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "typeattributes_type_key" ON "typeattributes"("type");

-- AddForeignKey
ALTER TABLE "admins" ADD CONSTRAINT "admins_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveryaddresscustomers" ADD CONSTRAINT "deliveryaddresscustomers_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveryaddresscustomers" ADD CONSTRAINT "deliveryaddresscustomers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialmedias" ADD CONSTRAINT "socialmedias_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutionaltexts" ADD CONSTRAINT "institutionaltexts_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagesstore" ADD CONSTRAINT "imagesstore_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_type_fkey" FOREIGN KEY ("type") REFERENCES "typeattributes"("type") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relationattributeproducts" ADD CONSTRAINT "relationattributeproducts_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageattributes" ADD CONSTRAINT "imageattributes_relationAttributeProduct_id_fkey" FOREIGN KEY ("relationAttributeProduct_id") REFERENCES "relationattributeproducts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avalietions" ADD CONSTRAINT "avalietions_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variations" ADD CONSTRAINT "variations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variations" ADD CONSTRAINT "variations_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photovariations" ADD CONSTRAINT "photovariations_variation_id_fkey" FOREIGN KEY ("variation_id") REFERENCES "variations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buytogethers" ADD CONSTRAINT "buytogethers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buytogethers" ADD CONSTRAINT "buytogethers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menucategories" ADD CONSTRAINT "menucategories_name_fkey" FOREIGN KEY ("name") REFERENCES "categories"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menucategories" ADD CONSTRAINT "menucategories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagemenucategories" ADD CONSTRAINT "imagemenucategories_menuCategory_id_fkey" FOREIGN KEY ("menuCategory_id") REFERENCES "menucategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groupfilters" ADD CONSTRAINT "groupfilters_type_fkey" FOREIGN KEY ("type") REFERENCES "typeattributes"("type") ON DELETE SET NULL ON UPDATE CASCADE;

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

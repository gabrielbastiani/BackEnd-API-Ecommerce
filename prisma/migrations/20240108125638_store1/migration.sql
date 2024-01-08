/*
  Warnings:

  - You are about to drop the `filterattributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `filtercategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `groupfilters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagefilteratributos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagefiltercategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "filterattributes" DROP CONSTRAINT "filterattributes_groupFilter_id_fkey";

-- DropForeignKey
ALTER TABLE "filterattributes" DROP CONSTRAINT "filterattributes_store_id_fkey";

-- DropForeignKey
ALTER TABLE "filtercategories" DROP CONSTRAINT "filtercategories_groupFilter_id_fkey";

-- DropForeignKey
ALTER TABLE "filtercategories" DROP CONSTRAINT "filtercategories_name_fkey";

-- DropForeignKey
ALTER TABLE "filtercategories" DROP CONSTRAINT "filtercategories_store_id_fkey";

-- DropForeignKey
ALTER TABLE "groupfilters" DROP CONSTRAINT "groupfilters_store_id_fkey";

-- DropForeignKey
ALTER TABLE "imagefilteratributos" DROP CONSTRAINT "imagefilteratributos_filterAttribute_id_fkey";

-- DropForeignKey
ALTER TABLE "imagefiltercategories" DROP CONSTRAINT "imagefiltercategories_filterCategory_id_fkey";

-- DropTable
DROP TABLE "filterattributes";

-- DropTable
DROP TABLE "filtercategories";

-- DropTable
DROP TABLE "groupfilters";

-- DropTable
DROP TABLE "imagefilteratributos";

-- DropTable
DROP TABLE "imagefiltercategories";

-- DropEnum
DROP TYPE "StatusFilterAttribute";

-- DropEnum
DROP TYPE "StatusFilterCategory";

-- DropEnum
DROP TYPE "StatusGroupFilter";

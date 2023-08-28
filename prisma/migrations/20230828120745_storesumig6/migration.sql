/*
  Warnings:

  - You are about to drop the column `depth` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `relationattributeproducts` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `carts` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `carts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "carts" DROP COLUMN "depth",
DROP COLUMN "height",
DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "relationattributeproducts",
DROP COLUMN "stock",
DROP COLUMN "weight",
DROP COLUMN "width",
ADD COLUMN     "email_customer" VARCHAR(525),
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "store_cart_id" TEXT,
ALTER COLUMN "product_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

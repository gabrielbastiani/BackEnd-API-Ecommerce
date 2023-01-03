/*
  Warnings:

  - You are about to drop the column `dimensoes` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPhoto1` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPhoto2` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPhoto3` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPhoto4` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPhoto5` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productPhoto6` on the `products` table. All the data in the column will be lost.
  - Added the required column `frete_id` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "cancelar" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "frete_id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "dimensoes",
DROP COLUMN "peso",
DROP COLUMN "productPhoto1",
DROP COLUMN "productPhoto2",
DROP COLUMN "productPhoto3",
DROP COLUMN "productPhoto4",
DROP COLUMN "productPhoto5",
DROP COLUMN "productPhoto6",
ADD COLUMN     "alturaCM" INTEGER,
ADD COLUMN     "freteGratis" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "larguraCM" INTEGER,
ADD COLUMN     "pesoKG" INTEGER,
ADD COLUMN     "productPhoto" TEXT[],
ADD COLUMN     "profundidadeCM" INTEGER,
ADD COLUMN     "promocao" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "city" VARCHAR(185),
ADD COLUMN     "state" VARCHAR(155);

-- CreateTable
CREATE TABLE "variacoes" (
    "id" TEXT NOT NULL,
    "nameVariacao" VARCHAR(225),
    "product_id" TEXT NOT NULL,

    CONSTRAINT "variacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fretes" (
    "id" TEXT NOT NULL,
    "codigoRastreamento" VARCHAR(95),
    "status" BOOLEAN NOT NULL DEFAULT false,
    "custo" INTEGER,
    "prazoDeEntrega" VARCHAR(95),
    "nomeDoRecebedor" VARCHAR(95),
    "address" VARCHAR(405),
    "cep" VARCHAR(25),
    "city" VARCHAR(185),
    "state" VARCHAR(155),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fretes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variacoes" ADD CONSTRAINT "variacoes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_frete_id_fkey" FOREIGN KEY ("frete_id") REFERENCES "fretes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

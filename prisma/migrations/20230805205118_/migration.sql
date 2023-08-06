/*
  Warnings:

  - You are about to drop the column `conditional` on the `coupons` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `cupomsproducts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `cupomsproducts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "coupons" DROP COLUMN "conditional";

-- AlterTable
ALTER TABLE "cupomsproducts" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- CreateTable
CREATE TABLE "coupomsconditionals" (
    "id" TEXT NOT NULL,
    "cupon_id" TEXT,
    "conditional" TEXT,
    "action" TEXT,
    "value" INTEGER,

    CONSTRAINT "coupomsconditionals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coupomsconditionals" ADD CONSTRAINT "coupomsconditionals_cupon_id_fkey" FOREIGN KEY ("cupon_id") REFERENCES "coupons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

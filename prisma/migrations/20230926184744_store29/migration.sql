-- AlterTable
ALTER TABLE "cartsabandoned" ADD COLUMN     "created_cart" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "totaldaysabandonedcarts" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

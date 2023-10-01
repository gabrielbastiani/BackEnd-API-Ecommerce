-- AlterTable
ALTER TABLE "cartsabandoned" ADD COLUMN     "timeZone" TIMESTAMP(3),
ALTER COLUMN "created_cart" SET DEFAULT CURRENT_TIMESTAMP;

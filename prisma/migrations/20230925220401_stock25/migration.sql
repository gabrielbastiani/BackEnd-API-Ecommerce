-- AlterTable
ALTER TABLE "cartsabandoned" ADD COLUMN     "parentId" TEXT,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT;

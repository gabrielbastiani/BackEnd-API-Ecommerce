-- CreateEnum
CREATE TYPE "CommentCustomer" AS ENUM ('Sim', 'Nao');

-- AlterTable
ALTER TABLE "ordercomments" ADD COLUMN     "active" "CommentCustomer" NOT NULL DEFAULT 'Nao';

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "status" TEXT;

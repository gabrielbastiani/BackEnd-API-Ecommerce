/*
  Warnings:

  - You are about to drop the column `configAbandonedCart_id` on the `templatesabandonedscartsemail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "templatesabandonedscartsemail" DROP CONSTRAINT "templatesabandonedscartsemail_configAbandonedCart_id_fkey";

-- AlterTable
ALTER TABLE "configcartsabandoned" ADD COLUMN     "templateAbandonedCartEmail_id" TEXT;

-- AlterTable
ALTER TABLE "templatesabandonedscartsemail" DROP COLUMN "configAbandonedCart_id";

-- AddForeignKey
ALTER TABLE "configcartsabandoned" ADD CONSTRAINT "configcartsabandoned_templateAbandonedCartEmail_id_fkey" FOREIGN KEY ("templateAbandonedCartEmail_id") REFERENCES "templatesabandonedscartsemail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

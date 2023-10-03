/*
  Warnings:

  - The `template_cart_email` column on the `templatesabandonedscartsemail` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "templatesabandonedscartsemail" DROP COLUMN "template_cart_email",
ADD COLUMN     "template_cart_email" JSONB;

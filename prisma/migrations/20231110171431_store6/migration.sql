/*
  Warnings:

  - You are about to drop the `templatesstoresemails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "templatesstoresemails" DROP CONSTRAINT "templatesstoresemails_store_id_fkey";

-- DropTable
DROP TABLE "templatesstoresemails";

-- DropEnum
DROP TYPE "StoreEmails";

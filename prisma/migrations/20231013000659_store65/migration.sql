/*
  Warnings:

  - You are about to drop the column `admin_or_employee` on the `ordercomments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ordercomments" DROP COLUMN "admin_or_employee",
ADD COLUMN     "user_comment" VARCHAR(155);

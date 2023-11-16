/*
  Warnings:

  - You are about to drop the column `admin_id` on the `notificationsadmin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "notificationsadmin" DROP CONSTRAINT "notificationsadmin_admin_id_fkey";

-- AlterTable
ALTER TABLE "notificationsadmin" DROP COLUMN "admin_id";

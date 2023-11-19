-- AlterTable
ALTER TABLE "notificationsadmin" ADD COLUMN     "block_bell" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "notificationscustomers" ADD COLUMN     "block_bell" BOOLEAN NOT NULL DEFAULT true;

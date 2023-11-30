-- AlterTable
ALTER TABLE "configsstore" ALTER COLUMN "code_google_analytics" SET DEFAULT 'G-XXXXXXXXXX',
ALTER COLUMN "code_live_chat_tawkTo" SET DEFAULT 'https://embed.tawk.to/xxxxxxxxxxxxxxxxxxxxxxxx/xxxxxxxxx';

-- AlterTable
ALTER TABLE "notificationsadmin" ADD COLUMN     "user" TEXT;

-- CreateEnum
CREATE TYPE "StatusChatWhatsApp" AS ENUM ('Disponivel', 'Indisponivel');

-- AlterTable
ALTER TABLE "configsstore" ADD COLUMN     "chat_whatsapp" "StatusChatWhatsApp" NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "code_google_analytics" TEXT,
ADD COLUMN     "code_live_chat_tawkTo" TEXT,
ADD COLUMN     "number_whatsapp" TEXT;

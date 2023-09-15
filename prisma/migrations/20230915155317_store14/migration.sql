-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "expiration_boleto" TEXT,
ALTER COLUMN "key_valid_pix" DROP DEFAULT;

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "qtd_type_boleto" INTEGER,
ADD COLUMN     "qtd_type_cartao" INTEGER,
ADD COLUMN     "qtd_type_pix" INTEGER;

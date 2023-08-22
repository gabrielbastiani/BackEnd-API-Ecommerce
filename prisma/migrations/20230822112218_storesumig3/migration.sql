-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(525) NOT NULL,
    "email" VARCHAR(555) NOT NULL,
    "status" VARCHAR(555) NOT NULL,
    "codigo" VARCHAR(555) NOT NULL,
    "id_venda" VARCHAR(555) NOT NULL,
    "store_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

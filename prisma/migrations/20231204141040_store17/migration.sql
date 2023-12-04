-- CreateTable
CREATE TABLE "paymentstotalsstore" (
    "id" TEXT NOT NULL,
    "total_payment" DOUBLE PRECISION,
    "type_payment" TEXT,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "paymentstotalsstore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "paymentstotalsstore" ADD CONSTRAINT "paymentstotalsstore_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

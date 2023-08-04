-- CreateTable
CREATE TABLE "cupomsproducts" (
    "id" TEXT NOT NULL,
    "cupon_id" TEXT,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "cupomsproducts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cupomsproducts" ADD CONSTRAINT "cupomsproducts_cupon_id_fkey" FOREIGN KEY ("cupon_id") REFERENCES "coupons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

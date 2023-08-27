-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "product_id" VARCHAR(825) NOT NULL,
    "image" VARCHAR(825) NOT NULL,
    "name" VARCHAR(525) NOT NULL,
    "amount" DOUBLE PRECISION,
    "price" DOUBLE PRECISION,
    "relationattributeproducts" VARCHAR(525) NOT NULL,
    "stock" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "width" DOUBLE PRECISION,
    "height" DOUBLE PRECISION,
    "depth" DOUBLE PRECISION,
    "total" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

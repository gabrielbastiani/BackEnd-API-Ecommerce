-- CreateTable
CREATE TABLE "cartstotal" (
    "id" TEXT NOT NULL,
    "store_cart_id" TEXT,
    "total" DOUBLE PRECISION,

    CONSTRAINT "cartstotal_pkey" PRIMARY KEY ("id")
);

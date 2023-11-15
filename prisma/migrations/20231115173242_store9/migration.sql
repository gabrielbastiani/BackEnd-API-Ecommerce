-- CreateTable
CREATE TABLE "notificationsadmin" (
    "id" TEXT NOT NULL,
    "admin_id" TEXT,
    "message" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "notificationsadmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificationscustomers" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "message" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(3) DEFAULT CURRENT_TIMESTAMP,
    "store_id" TEXT,

    CONSTRAINT "notificationscustomers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notificationsadmin" ADD CONSTRAINT "notificationsadmin_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationsadmin" ADD CONSTRAINT "notificationsadmin_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationscustomers" ADD CONSTRAINT "notificationscustomers_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificationscustomers" ADD CONSTRAINT "notificationscustomers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

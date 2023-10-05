/*
  Warnings:

  - A unique constraint covering the columns `[name_file_email]` on the table `templatesabandonedscartsemail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "templatesabandonedscartsemail_name_file_email_key" ON "templatesabandonedscartsemail"("name_file_email");

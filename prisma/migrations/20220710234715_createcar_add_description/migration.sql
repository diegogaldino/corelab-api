/*
  Warnings:

  - You are about to drop the column `brand` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `cars` table. All the data in the column will be lost.
  - Added the required column `description` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "brand",
DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "manufacturer" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;

/*
  Warnings:

  - Added the required column `favorite` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "favorite" BOOLEAN NOT NULL;

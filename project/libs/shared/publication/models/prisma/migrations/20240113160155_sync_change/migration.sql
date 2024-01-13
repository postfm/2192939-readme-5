/*
  Warnings:

  - Added the required column `commentsCount` to the `publics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likesCount` to the `publics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publics" ADD COLUMN     "commentsCount" TEXT NOT NULL,
ADD COLUMN     "likesCount" TEXT NOT NULL;

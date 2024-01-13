/*
  Warnings:

  - You are about to drop the column `commentsCount` on the `publics` table. All the data in the column will be lost.
  - You are about to drop the column `likesCount` on the `publics` table. All the data in the column will be lost.
  - Added the required column `comments_count` to the `publics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes_count` to the `publics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publics" DROP COLUMN "commentsCount",
DROP COLUMN "likesCount",
ADD COLUMN     "comments_count" INTEGER NOT NULL,
ADD COLUMN     "likes_count" INTEGER NOT NULL;

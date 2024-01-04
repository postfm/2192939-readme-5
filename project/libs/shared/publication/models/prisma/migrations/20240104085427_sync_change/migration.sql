/*
  Warnings:

  - You are about to drop the column `video_public_id` on the `comments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_video_public_id_fkey";

-- DropIndex
DROP INDEX "comments_video_public_id_text_public_id_quote_public_id_pho_idx";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "video_public_id";

-- CreateTable
CREATE TABLE "video_public_comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "video_public_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_public_comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "video_public_comments_video_public_id_idx" ON "video_public_comments"("video_public_id");

-- CreateIndex
CREATE INDEX "comments_text_public_id_quote_public_id_photo_public_id_lin_idx" ON "comments"("text_public_id", "quote_public_id", "photo_public_id", "link_public_id");

-- AddForeignKey
ALTER TABLE "video_public_comments" ADD CONSTRAINT "video_public_comments_video_public_id_fkey" FOREIGN KEY ("video_public_id") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

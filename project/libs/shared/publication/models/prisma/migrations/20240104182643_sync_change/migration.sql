/*
  Warnings:

  - You are about to drop the `_VideoPublicToVideoPublicTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `video_public_id` to the `video_public_tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_VideoPublicToVideoPublicTag" DROP CONSTRAINT "_VideoPublicToVideoPublicTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_VideoPublicToVideoPublicTag" DROP CONSTRAINT "_VideoPublicToVideoPublicTag_B_fkey";

-- AlterTable
ALTER TABLE "video_public_tags" ADD COLUMN     "video_public_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_VideoPublicToVideoPublicTag";

-- AddForeignKey
ALTER TABLE "video_public_tags" ADD CONSTRAINT "video_public_tags_video_public_id_fkey" FOREIGN KEY ("video_public_id") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

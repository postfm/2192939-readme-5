-- DropForeignKey
ALTER TABLE "video_publics" DROP CONSTRAINT "video_publics_tagId_fkey";

-- CreateTable
CREATE TABLE "_TagToVideoPublic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagToVideoPublic_AB_unique" ON "_TagToVideoPublic"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToVideoPublic_B_index" ON "_TagToVideoPublic"("B");

-- AddForeignKey
ALTER TABLE "_TagToVideoPublic" ADD CONSTRAINT "_TagToVideoPublic_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideoPublic" ADD CONSTRAINT "_TagToVideoPublic_B_fkey" FOREIGN KEY ("B") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

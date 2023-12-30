-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "video_public_id" TEXT NOT NULL,
    "text_public_id" TEXT NOT NULL,
    "quote_public_id" TEXT NOT NULL,
    "photo_public_id" TEXT NOT NULL,
    "link_public_id" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "comments_video_public_id_text_public_id_quote_public_id_idx" ON "comments"("video_public_id", "text_public_id", "quote_public_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_video_public_id_fkey" FOREIGN KEY ("video_public_id") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_text_public_id_fkey" FOREIGN KEY ("text_public_id") REFERENCES "text_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_quote_public_id_fkey" FOREIGN KEY ("quote_public_id") REFERENCES "quote_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_photo_public_id_fkey" FOREIGN KEY ("photo_public_id") REFERENCES "photo_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_link_public_id_fkey" FOREIGN KEY ("link_public_id") REFERENCES "link_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

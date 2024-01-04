-- CreateTable
CREATE TABLE "video_publics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_public_tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_public_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_public_comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "video_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_public_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_public_likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "video_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_public_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "text_publics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "notice" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "text_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "text_public_tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "text_public_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "text_public_comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "text_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "text_public_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "text_public_likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "text_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "text_public_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote_publics" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quote_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote_public_tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quote_public_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote_public_comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quote_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quote_public_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote_public_likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quote_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quote_public_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photo_publics" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photo_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photo_public_tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photo_public_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photo_public_comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "photo_public_id" TEXT NOT NULL,

    CONSTRAINT "photo_public_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photo_public_likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "photo_public_id" TEXT NOT NULL,

    CONSTRAINT "photo_public_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_publics" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "link_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_public_tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "link_public_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_public_comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "link_public_id" TEXT NOT NULL,

    CONSTRAINT "link_public_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_public_likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "link_public_id" TEXT NOT NULL,

    CONSTRAINT "link_public_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VideoPublicToVideoPublicTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TextPublicToTextPublicTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_QuotePublicToQuotePublicTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PhotoPublicToPhotoPublicTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LinkPublicToLinkPublicTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "video_publics_title_idx" ON "video_publics"("title");

-- CreateIndex
CREATE INDEX "video_public_tags_title_idx" ON "video_public_tags"("title");

-- CreateIndex
CREATE INDEX "video_public_comments_video_public_id_idx" ON "video_public_comments"("video_public_id");

-- CreateIndex
CREATE INDEX "video_public_likes_video_public_id_idx" ON "video_public_likes"("video_public_id");

-- CreateIndex
CREATE INDEX "text_publics_title_idx" ON "text_publics"("title");

-- CreateIndex
CREATE INDEX "text_public_tags_title_idx" ON "text_public_tags"("title");

-- CreateIndex
CREATE INDEX "text_public_comments_text_public_id_idx" ON "text_public_comments"("text_public_id");

-- CreateIndex
CREATE INDEX "text_public_likes_text_public_id_idx" ON "text_public_likes"("text_public_id");

-- CreateIndex
CREATE INDEX "quote_publics_author_idx" ON "quote_publics"("author");

-- CreateIndex
CREATE INDEX "quote_public_tags_title_idx" ON "quote_public_tags"("title");

-- CreateIndex
CREATE INDEX "quote_public_comments_quote_public_id_idx" ON "quote_public_comments"("quote_public_id");

-- CreateIndex
CREATE INDEX "quote_public_likes_quote_public_id_idx" ON "quote_public_likes"("quote_public_id");

-- CreateIndex
CREATE INDEX "photo_public_tags_title_idx" ON "photo_public_tags"("title");

-- CreateIndex
CREATE INDEX "photo_public_comments_photo_public_id_idx" ON "photo_public_comments"("photo_public_id");

-- CreateIndex
CREATE INDEX "photo_public_likes_photo_public_id_idx" ON "photo_public_likes"("photo_public_id");

-- CreateIndex
CREATE INDEX "link_public_tags_title_idx" ON "link_public_tags"("title");

-- CreateIndex
CREATE INDEX "link_public_comments_link_public_id_idx" ON "link_public_comments"("link_public_id");

-- CreateIndex
CREATE INDEX "link_public_likes_link_public_id_idx" ON "link_public_likes"("link_public_id");

-- CreateIndex
CREATE UNIQUE INDEX "_VideoPublicToVideoPublicTag_AB_unique" ON "_VideoPublicToVideoPublicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_VideoPublicToVideoPublicTag_B_index" ON "_VideoPublicToVideoPublicTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TextPublicToTextPublicTag_AB_unique" ON "_TextPublicToTextPublicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_TextPublicToTextPublicTag_B_index" ON "_TextPublicToTextPublicTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QuotePublicToQuotePublicTag_AB_unique" ON "_QuotePublicToQuotePublicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_QuotePublicToQuotePublicTag_B_index" ON "_QuotePublicToQuotePublicTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PhotoPublicToPhotoPublicTag_AB_unique" ON "_PhotoPublicToPhotoPublicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotoPublicToPhotoPublicTag_B_index" ON "_PhotoPublicToPhotoPublicTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkPublicToLinkPublicTag_AB_unique" ON "_LinkPublicToLinkPublicTag"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkPublicToLinkPublicTag_B_index" ON "_LinkPublicToLinkPublicTag"("B");

-- AddForeignKey
ALTER TABLE "video_public_comments" ADD CONSTRAINT "video_public_comments_video_public_id_fkey" FOREIGN KEY ("video_public_id") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_public_likes" ADD CONSTRAINT "video_public_likes_video_public_id_fkey" FOREIGN KEY ("video_public_id") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "text_public_comments" ADD CONSTRAINT "text_public_comments_text_public_id_fkey" FOREIGN KEY ("text_public_id") REFERENCES "text_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "text_public_likes" ADD CONSTRAINT "text_public_likes_text_public_id_fkey" FOREIGN KEY ("text_public_id") REFERENCES "text_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote_public_comments" ADD CONSTRAINT "quote_public_comments_quote_public_id_fkey" FOREIGN KEY ("quote_public_id") REFERENCES "quote_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quote_public_likes" ADD CONSTRAINT "quote_public_likes_quote_public_id_fkey" FOREIGN KEY ("quote_public_id") REFERENCES "quote_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photo_public_comments" ADD CONSTRAINT "photo_public_comments_photo_public_id_fkey" FOREIGN KEY ("photo_public_id") REFERENCES "photo_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photo_public_likes" ADD CONSTRAINT "photo_public_likes_photo_public_id_fkey" FOREIGN KEY ("photo_public_id") REFERENCES "photo_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link_public_comments" ADD CONSTRAINT "link_public_comments_link_public_id_fkey" FOREIGN KEY ("link_public_id") REFERENCES "link_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link_public_likes" ADD CONSTRAINT "link_public_likes_link_public_id_fkey" FOREIGN KEY ("link_public_id") REFERENCES "link_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VideoPublicToVideoPublicTag" ADD CONSTRAINT "_VideoPublicToVideoPublicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VideoPublicToVideoPublicTag" ADD CONSTRAINT "_VideoPublicToVideoPublicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "video_public_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TextPublicToTextPublicTag" ADD CONSTRAINT "_TextPublicToTextPublicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "text_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TextPublicToTextPublicTag" ADD CONSTRAINT "_TextPublicToTextPublicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "text_public_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuotePublicToQuotePublicTag" ADD CONSTRAINT "_QuotePublicToQuotePublicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "quote_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuotePublicToQuotePublicTag" ADD CONSTRAINT "_QuotePublicToQuotePublicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "quote_public_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoPublicToPhotoPublicTag" ADD CONSTRAINT "_PhotoPublicToPhotoPublicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "photo_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoPublicToPhotoPublicTag" ADD CONSTRAINT "_PhotoPublicToPhotoPublicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "photo_public_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPublicToLinkPublicTag" ADD CONSTRAINT "_LinkPublicToLinkPublicTag_A_fkey" FOREIGN KEY ("A") REFERENCES "link_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPublicToLinkPublicTag" ADD CONSTRAINT "_LinkPublicToLinkPublicTag_B_fkey" FOREIGN KEY ("B") REFERENCES "link_public_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

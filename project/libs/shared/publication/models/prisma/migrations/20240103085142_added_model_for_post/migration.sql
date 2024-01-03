-- CreateTable
CREATE TABLE "video_publics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "video_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "text_publics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "notice" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "text_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quote_publics" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "quote_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photo_publics" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "photo_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_publics" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "link_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "video_public_id" TEXT NOT NULL,
    "text_public_id" TEXT NOT NULL,
    "quote_public_id" TEXT NOT NULL,
    "photo_public_id" TEXT NOT NULL,
    "link_public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "video_public_id" TEXT NOT NULL,
    "text_public_id" TEXT NOT NULL,
    "quote_public_id" TEXT NOT NULL,
    "photo_public_id" TEXT NOT NULL,
    "link_public_id" TEXT NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_QuotePublicToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PhotoPublicToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LinkPublicToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToVideoPublic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToTextPublic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "video_publics_title_idx" ON "video_publics"("title");

-- CreateIndex
CREATE INDEX "text_publics_title_idx" ON "text_publics"("title");

-- CreateIndex
CREATE INDEX "quote_publics_text_idx" ON "quote_publics"("text");

-- CreateIndex
CREATE INDEX "tags_title_idx" ON "tags"("title");

-- CreateIndex
CREATE INDEX "comments_video_public_id_text_public_id_quote_public_id_pho_idx" ON "comments"("video_public_id", "text_public_id", "quote_public_id", "photo_public_id", "link_public_id");

-- CreateIndex
CREATE INDEX "likes_video_public_id_text_public_id_quote_public_id_photo__idx" ON "likes"("video_public_id", "text_public_id", "quote_public_id", "photo_public_id", "link_public_id");

-- CreateIndex
CREATE UNIQUE INDEX "_QuotePublicToTag_AB_unique" ON "_QuotePublicToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_QuotePublicToTag_B_index" ON "_QuotePublicToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PhotoPublicToTag_AB_unique" ON "_PhotoPublicToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotoPublicToTag_B_index" ON "_PhotoPublicToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkPublicToTag_AB_unique" ON "_LinkPublicToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkPublicToTag_B_index" ON "_LinkPublicToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToVideoPublic_AB_unique" ON "_TagToVideoPublic"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToVideoPublic_B_index" ON "_TagToVideoPublic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToTextPublic_AB_unique" ON "_TagToTextPublic"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToTextPublic_B_index" ON "_TagToTextPublic"("B");

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

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_video_public_id_fkey" FOREIGN KEY ("video_public_id") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_text_public_id_fkey" FOREIGN KEY ("text_public_id") REFERENCES "text_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_quote_public_id_fkey" FOREIGN KEY ("quote_public_id") REFERENCES "quote_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_photo_public_id_fkey" FOREIGN KEY ("photo_public_id") REFERENCES "photo_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_link_public_id_fkey" FOREIGN KEY ("link_public_id") REFERENCES "link_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuotePublicToTag" ADD CONSTRAINT "_QuotePublicToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "quote_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuotePublicToTag" ADD CONSTRAINT "_QuotePublicToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoPublicToTag" ADD CONSTRAINT "_PhotoPublicToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "photo_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PhotoPublicToTag" ADD CONSTRAINT "_PhotoPublicToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPublicToTag" ADD CONSTRAINT "_LinkPublicToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "link_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkPublicToTag" ADD CONSTRAINT "_LinkPublicToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideoPublic" ADD CONSTRAINT "_TagToVideoPublic_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToVideoPublic" ADD CONSTRAINT "_TagToVideoPublic_B_fkey" FOREIGN KEY ("B") REFERENCES "video_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToTextPublic" ADD CONSTRAINT "_TagToTextPublic_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToTextPublic" ADD CONSTRAINT "_TagToTextPublic_B_fkey" FOREIGN KEY ("B") REFERENCES "text_publics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

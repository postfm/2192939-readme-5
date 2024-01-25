-- CreateTable
CREATE TABLE "publics" (
    "public_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_repost" BOOLEAN NOT NULL,
    "original_user_id" TEXT,
    "original_public_id" TEXT,
    "title" TEXT,
    "video" TEXT,
    "notice" TEXT,
    "text" TEXT,
    "quote" TEXT,
    "author" TEXT,
    "photo" TEXT,
    "link" TEXT,
    "description" TEXT,
    "comments_count" INTEGER NOT NULL,
    "likes_count" INTEGER NOT NULL,
    "tags" TEXT[],
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "public_type" TEXT NOT NULL,
    "public_status" TEXT NOT NULL,

    CONSTRAINT "publics_pkey" PRIMARY KEY ("public_id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "likes" (
    "like_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("like_id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_public_id_fkey" FOREIGN KEY ("public_id") REFERENCES "publics"("public_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_public_id_fkey" FOREIGN KEY ("public_id") REFERENCES "publics"("public_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "video_publics" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "tags" TEXT[],
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
    "tags" TEXT[],
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
    "tags" TEXT[],
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "quote_publics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photo_publics" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "tags" TEXT[],
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
    "tags" TEXT[],
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "link_publics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "video_publics_title_idx" ON "video_publics"("title");

-- CreateIndex
CREATE INDEX "text_publics_title_idx" ON "text_publics"("title");

-- CreateIndex
CREATE INDEX "quote_publics_text_idx" ON "quote_publics"("text");

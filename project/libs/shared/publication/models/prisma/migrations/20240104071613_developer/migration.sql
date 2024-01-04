-- DropIndex
DROP INDEX "quote_publics_text_idx";

-- CreateIndex
CREATE INDEX "quote_publics_author_idx" ON "quote_publics"("author");

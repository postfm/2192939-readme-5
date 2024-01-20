export const formatTags = (tags: string[]) => {
  const formatedTags = tags.map((tag) => tag.toLowerCase());
  const uniqueTags = new Set(formatedTags);
  return [...uniqueTags];
};

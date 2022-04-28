export const createRandomId = (existingIds: string[]): string => {
  const id = Math.random().toString(36).substring(8);
  if (existingIds.includes(id)) {
    return createRandomId(existingIds);
  }
  return id;
};

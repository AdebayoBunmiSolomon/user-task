export const truncateText = (value: string, length?: number) => {
  const truncatedText = length
    ? value.substring(0, length)
    : value.substring(0, 20);
  return `${truncatedText}...`;
};

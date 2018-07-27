export const substr = (string, maxLength = 10) => (string.length < maxLength ? string : `${string.substr(0, maxLength)}...`);

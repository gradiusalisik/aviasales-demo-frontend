export const findAltImage = image => {
  let path = image;
  return path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
};

export const requireLocale = async filePathName => {
  try {
    const files = import.meta.globEager(filePathName);
    return files || {};
  } catch (e) {
    console.warn(`The file "./i18n/${filePathName}.json" could not be loaded.`);
    return {};
  }
};

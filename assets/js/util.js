/* List regex*/
export const encryptList = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
export const decryptList = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};
export const regexEncrypt = /[aeiou]/g;
export const regexDecrypt = new RegExp(Object.keys(decryptList).join("|"), "g");

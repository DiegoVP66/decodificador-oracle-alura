import { encryptList, regex } from "./util.js";

let screen = window.matchMedia;

/* Fields */
let textInput = document.getElementById("cod-input-Text");
let btnEncrypt = document.querySelector(".btn-encrypt");
let btnDecrypt = document.querySelector(".btn-decrypt");
let textOutput = document.getElementById("output-msg");
let btnCopy = document.getElementById("copy");

/* Disable/Enable itemns */
let statics = document.querySelector(".static-items");
let img = document.querySelector(".output-img");
let output = document.querySelector(".output-text");

/* Aux */
let result;

// encrypt text funcion
const encryptText = () => {
  result = textInput.value;
  if (result != "") {
    textOutput.innerHTML = result.replace(
      regex,
      (element) => encryptList[element]
    );
  }
  enableDisable();
};

/* Enable and Disable pag items */
const enableDisable = () => {
  if (screen("(max-width: 991px").matches && result != "") {
    statics.style.display = "none";
    img.style.display = "none";
    output.style.display = "unset";
  } else if (screen("(max-width: 991px").matches && result == "") {
    statics.style.display = "unset";
    output.style.display = "none";
  } else if (screen("(min-width: 992px").matches && result != "") {
    statics.style.display = "none";
    img.style.display = "none";
    output.style.display = "unset";
  } else {
    statics.style.display = "unset";
    img.style.display = "unset";
    output.style.display = "none";
  }
};

btnEncrypt.addEventListener("click", encryptText);

import {
  encryptList,
  decryptList,
  regexEncrypt,
  regexDecrypt,
} from "./util.js";

let screen = window.matchMedia;

/* Fields */
let textInput = document.getElementById("cod-input-Text");
let btnEncrypt = document.querySelector(".btn-encrypt");
let btnDecrypt = document.querySelector(".btn-decrypt");
let textOutput = document.getElementById("output-msg");
let btnCopy = document.getElementById("copy");

/* Disable/Enable items */
let statics = document.querySelector(".static-items");
let img = document.querySelector(".output-img");
let output = document.querySelector(".output-text");

/* Aux */
let result;
let decryptText;

// encrypt text funcion
const encryptText = () => {
  result = textInput.value;
  decryptText = textInput.value;
  if (result != "") {
    textOutput.innerHTML = result.replace(
      regexEncrypt,
      (element) => encryptList[element]
    );
  }
  textInput.value = "";
  enableDisable();
};

/* focus textField */
const focus = () => {
  textInput.focus();
};

// decrypt function
const decrypt = () => {
  textOutput.innerHTML = "";
  textOutput.innerHTML = decryptText.replace(
    regexDecrypt,
    (element) => decryptList[element]
  );
  textInput.value = "";
};

// function copy text
const copyText = () => {
  navigator.clipboard.writeText(textOutput.innerHTML);
  btnCopy.style.color = "green";
  textOutput.innerHTML = "";
  focus();
};

/*  Disable special characters and accents  */
const constraints = (e) => {
  const element = String.fromCharCode(e.keyCode);
  const pattern = "[a-zA-Z0-9]";

  if (element.match(pattern)) {
    return true;
  }
};

/* Enable and Disable pag items <-- refactor */
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

/* Events */
btnEncrypt.addEventListener("click", encryptText);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copyText);

textInput.addEventListener("keypress", (e) => {
  if (!constraints(e)) {
    // prevent envent
    e.preventDefault();
  }
});

const textarea = document.querySelector("#text-content");
const counter = document.querySelector(".counter");

const maxLimit = 50;
textarea.addEventListener("input", () => {
  let text = textarea.value;
  if (text.length > maxLimit) {
    text = text.slice(0, maxLimit);
    textarea.value = text;
  }
  if (text.length == 50) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
  counter.textContent = `Character Count: ${text.length}/${maxLimit}`;
});

const valueInput = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const btnApagar = document.querySelector(".apagar");

let arr = [];

document.addEventListener("DOMContentLoaded", () => {
  const storedItems = JSON.parse(localStorage.getItem("valueLi"));

  if (storedItems) {
    arr = storedItems;
    arr.forEach((item) => {
      const createLi = document.createElement("li");
      createLi.innerHTML = item;
      ul.appendChild(createLi);
      createLi.classList.add("li");
    });
  }
});

function handleInput() {
  const createLi = document.createElement("li");
  arr.push(valueInput.value);

  if (valueInput.value !== "") {
    createLi.innerHTML = valueInput.value;
    ul.appendChild(createLi);
    localStorage.valueLi = JSON.stringify(arr);
    createLi.classList.add("li");
  } else {
    console.log("Escreva algo no input");
  }
  valueInput.value = ""

}

function deleteLi() {
  const li = document.querySelector("ul li:last-child");

  const storedItems = JSON.parse(localStorage.getItem("valueLi")) || [];
  storedItems.pop();
  localStorage.setItem("valueLi", JSON.stringify(storedItems));
  li.remove();
}

btnApagar.addEventListener("click", deleteLi);
btn.addEventListener("click", handleInput);

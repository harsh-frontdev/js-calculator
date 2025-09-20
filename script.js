let string = "";
let buttons = document.querySelectorAll("button");
let displayEl = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      displayEl.innerHTML = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      displayEl.innerHTML = string;
    } else {
      string += e.target.innerHTML;
      displayEl.innerHTML = string;
    }
  });
});

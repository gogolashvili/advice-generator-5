let number = document.querySelector(".number");
let result = document.querySelector(".result");
let button = document.querySelector(".butimg");

window.addEventListener("load", function () {
  axios.get("https://api.adviceslip.com/advice").then(function (name) {
    console.log(name.data.slip);
    number.innerHTML = name.data.slip.id;
    result.innerHTML = name.data.slip.advice;
  });
});

button.addEventListener("click", () => {
  axios.get("https://api.adviceslip.com/advice").then(function (name) {
    console.log(name.data.slip);
    number.innerHTML = name.data.slip.id;
    result.innerHTML = name.data.slip.advice;
  });
});

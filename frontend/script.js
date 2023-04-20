const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  fetch("http://localhost:5173/?sentence=" + input.value)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = data.output;
    });
});

const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  fetch("https://pig-latin.patelprem1.repl.co/api?sentence=" + input.value)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = data.output;
    });
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetch("https://pig-latin.patelprem1.repl.co/api?sentence=" + input.value)
      .then((res) => res.json())
      .then((data) => {
        output.innerHTML = data.output;
      });
  }
});

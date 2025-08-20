
    // <input type="text" id="name">
    // <button id="btn">clickme</button>


const nameInput = document.getElementById("name");
const nameButton = document.getElementById("btn");

nameButton.addEventListener("click", () => {
  greet(nameInput.value);
});

function greet(name) {
  console.log("my name is:" + name);
}

document.querySelector("#spanId").textContent = "123";

const para = document.querySelector("p");
para.addEventListener("click", updateName);
function updateName() {
    const name = prompt("Enter a new name");
    para.textContent = `Player 1: ${name}`;
}

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

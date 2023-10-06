document.querySelector("#spanId").textContent = "123";

/* 텍스트 변경 버튼 */
const para = document.querySelector("p");
para.addEventListener("click", updateName);
function updateName() {
    const name = prompt("Enter a new name");
    para.textContent = `Player 1: ${name}`;
}

/* 문단 생성 버튼 */
// createElement | appendChild
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

// querySelectorAll | addEventListener
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
const setGoodbye = (element) => {
  element.innerText = "Goodbye!";
};

const header = document.querySelector("h1");
const button = document.querySelector(".my-btn");

button.onclick = () => setGoodbye(header);

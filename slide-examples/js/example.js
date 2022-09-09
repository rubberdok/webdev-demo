const header = document.querySelector("h1");
const button = document.querySelector(".my-btn");

const setGoodbye = () => {
  header.innerText = "Goodbye!";
};

button.addEventListener("click", setGoodbye);

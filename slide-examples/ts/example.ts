const setGoodbye = (element: HTMLElement) => {
  element.innerText = "Goodbye!";
};

const header = document.querySelector("h1")!;
const button = document.querySelector("button")!;

button.onclick = () => setGoodbye(header);

const content = document.querySelector("#content");

const displayMenu = () => {
  content.style.backgroundColor = "whitesmoke";
  content.style.height = "100%";
  const welcome = document.createElement("div");
  welcome.textContent = "Dis a menu";
  welcome.style.fontSize = "2rem";
  welcome.style.textAlign = "center";
  content.appendChild(welcome);
  console.log("all displayed");
};

export { displayMenu };

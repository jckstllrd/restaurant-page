const content = document.querySelector("#content");

const displayAbout = () => {
  content.style.backgroundColor = "whitesmoke";
  content.style.height = "100%";
  const welcome = document.createElement("div");
  welcome.textContent = "This about";
  welcome.style.fontSize = "2rem";
  welcome.style.textAlign = "center";
  content.appendChild(welcome);
  console.log("all displayed");
};

export { displayAbout };

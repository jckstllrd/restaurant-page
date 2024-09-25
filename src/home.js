const content = document.querySelector("#content");

const displayHome = () => {
  content.style.backgroundColor = "whitesmoke";
  content.style.height = "100%";
  const welcome = document.createElement("div");
  welcome.textContent = "Welcome to The Restaurant";
  welcome.style.fontSize = "2rem";
  welcome.style.textAlign = "center";
  content.appendChild(welcome);
  console.log("all displayed");
};

export { displayHome };

import "./styles.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

displayHome();

function clearContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
  clearContent();
  displayHome();
});

menuButton.addEventListener("click", () => {
  clearContent();
  displayMenu();
});

aboutButton.addEventListener("click", () => {
  clearContent();
  displayAbout();
});

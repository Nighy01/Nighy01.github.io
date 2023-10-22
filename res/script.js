// 2023/10/22
// edited from source: https://codepen.io/DeveloperJone/pen/MWjvvJp

const DLMSwitchBtn = document.querySelector("#navbar_selection_1 > button");
const bodyDLM = document.querySelector("body");
const OpenGithubLink = document.querySelector(".OpenGithubLink");

const DLM = () => {
  bodyDLM.classList.toggle("dark");
};

DLMSwitchBtn.addEventListener("click", () => {
  DLMSwitch = localStorage.getItem("dark");

  if (DLMSwitch !== "on") {
    DLM();
    DLMSwitch = localStorage.setItem("dark", "on");
  } else {
    DLM();
    DLMSwitch = localStorage.setItem("dark", null);
  }
});

let DLMSwitch = localStorage.getItem("dark");

if (DLMSwitch === "on") {
  DLM();
}

OpenGithubLink.addEventListener("click", () => {
  window.open('https://github.com/Nighy01/Nighy01.github.io', '_blank');
});
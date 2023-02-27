// 2023/02/27
// edited from source: https://codepen.io/DeveloperJone/pen/MWjvvJp

const DLMSwitchBtn = document.querySelector("#navbar_selection_1 > button");
const bodyDLM = document.querySelector("body");

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
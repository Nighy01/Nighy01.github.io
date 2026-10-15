// Dark/Light mode toggle, adapted from https://codepen.io/DeveloperJone/pen/MWjvvJp

const THEME_KEY = "dark";
const root = document.documentElement;

function isDarkSaved(storageKey) {
  try {
    return localStorage.getItem(storageKey) === "on";
  } catch {
    return false;
  }
}

function saveDark(storageKey, enabled) {
  try {
    localStorage.setItem(storageKey, enabled ? "on" : "off");
  } catch {}
}

function applyDark(target, enabled) {
  target.classList.toggle("dark", enabled);
}

function onClick(selector, handler) {
  document.querySelectorAll(selector).forEach((el) => el.addEventListener("click", handler));
}

// Apply immediately (script runs in <head>) to avoid a light flash.
applyDark(root, isDarkSaved(THEME_KEY));

document.addEventListener("DOMContentLoaded", () => {
  onClick('[data-action="toggle-theme"]', () => {
    const enabled = !root.classList.contains("dark");
    applyDark(root, enabled);
    saveDark(THEME_KEY, enabled);
  });
});

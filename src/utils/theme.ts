export function toggleColorScheme() {
  const themeDiv = document.querySelector("#main-div");
  if (!themeDiv) return;

  if (themeDiv.classList.contains("color-scheme-red")) {
    themeDiv.classList.remove("color-scheme-red");
    themeDiv.classList.add("color-scheme-green");
  } else {
    themeDiv.classList.remove("color-scheme-green");
    themeDiv.classList.add("color-scheme-red");
  }
}

export function getCurrentColorScheme() {
  const themeDiv = document.querySelector("#main-div");
  return themeDiv?.classList.contains("color-scheme-red") ? "red" : "green";
}

export function setColorScheme(theme: "red" | "green" | "blue") {
  const themeDiv = document.querySelector("#main-div");
  if (!themeDiv) return;

  themeDiv.classList.remove("color-scheme-green");
  themeDiv.classList.remove("color-scheme-red");
  themeDiv.classList.remove("color-scheme-blue");

  themeDiv.classList.add(`color-scheme-${theme}`);
}

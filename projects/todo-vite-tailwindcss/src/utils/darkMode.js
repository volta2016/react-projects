// if dark mode exists in the localStorage
// or if the operating system has the dark mode enabled but it has not been saved in the localStorage
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // we add the dark class to the html element
  document.documentElement.classList.add("dark");
  // save the dark mode in the localStorage
  localStorage.theme = "dark";
} else {
  // if the dark mode does not exist in the localStorage
  // or if the dark mode is disabled in the operating system
  // we remove the dark class from the html element
  document.documentElement.classList.remove("dark");
  // we save the light mode in the localStorage
  localStorage.theme = "light";
}

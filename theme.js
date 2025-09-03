// Cargar preferencia de modo
document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// Alternar modo
function toggleTheme() {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

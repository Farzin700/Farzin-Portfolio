const themeToggle = document.querySelector(".theme-toggle");

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeToggle.querySelector(".theme-label").textContent = `${isDark ? "Light" : "Dark"} mode`;
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#181a18" : "#f5f3ee";
}

setTheme(document.documentElement.dataset.theme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch (error) {
    console.warn("Could not save the color theme preference.", error);
  }
});

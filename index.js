function updateCopyright() {
  // Set the copyright to the current year
  let cr = document.getElementById("copyright");
  let year = new Date().getFullYear();
  cr.innerHTML = "©" + year + " Rei Meguro";
}

function initializeThemeToggle() {
  // Set the initial theme based on the prefered color scheme meta
  const modeIcon = document.getElementById("mode-toggle");

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.setAttribute("data-theme", "light");
    modeIcon.firstChild.classList.add("fa-sun");
  } else {
    document.body.setAttribute("data-theme", "dark");
    modeIcon.firstChild.classList.add("fa-moon");
  }

  // Set handler for theme toggle
  modeIcon.addEventListener("click", function () {
    const body = document.body;

    if (body.getAttribute("data-theme") === "dark") {
      body.setAttribute("data-theme", "light");
      modeIcon.firstChild.classList.replace("fa-moon", "fa-sun");
    } else {
      body.setAttribute("data-theme", "dark");
      modeIcon.firstChild.classList.replace("fa-sun", "fa-moon");
    }
  });
}

function onLoad() {
  // Entry function when page loads
  updateCopyright();
  initializeThemeToggle();
}

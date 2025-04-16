
// Cookie helper functions
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Toggle theme function
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    setCookie("theme", "dark", 365);
  } else {
    body.classList.add("light-theme");
    setCookie("theme", "light", 365);
  }
}

// On page load: check cookie and set theme accordingly
window.onload = function() {
  const theme = getCookie("theme");
  if (theme === "light") {
    document.body.classList.add("light-theme");
  }
}

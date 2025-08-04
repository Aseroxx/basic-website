document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");

  const loginMenu = document.getElementById("loginForm");
  const registerMenu = document.getElementById("registerForm");

  if (loginButton.addEventListener("click", () => {
    loginMenu.style.opacity = "1";
    registerMenu.style.opacity = "0";
  }));


  if (registerButton.addEventListener("click", () => {
    loginMenu.style.opacity = "0";
    registerMenu.style.opacity = "1";
  }));

});

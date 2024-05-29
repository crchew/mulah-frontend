document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("displayname").textContent =
    localStorage.getItem("name");
  document.getElementById("displaybirthday").textContent =
    localStorage.getItem("birthday");
  document.getElementById("displayemail").textContent =
    localStorage.getItem("email");
});

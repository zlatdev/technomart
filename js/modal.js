 //Модальное окно формы.

  "use strict";

  var link = document.querySelector(".write_us");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var login = popup.querySelector("[name=login-name]");
  var form = popup.querySelector("form");
  var password = popup.querySelector("[name=password]");
   var storage = localStorage.getItem("login-name");


  link.addEventListener("click", function(event) {
       event.preventDefault();
       popup.classList.add("modal-content-show");

       if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }

       login.focus();
      });

  close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      });

  form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
           
        } else {
          localStorage.setItem("login", login.value);
        }
      });

  window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });
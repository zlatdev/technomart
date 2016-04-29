 //Модальное окно формы.

  "use strict";

  var link = document.querySelector(".write_us");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content__close");
  var login = popup.querySelector("[name=login-name]");
  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=email]");
  var storage = window.localStorage;
 
  
  link.addEventListener("click", function(event) {
       event.preventDefault();
       popup.classList.add("modal-content-show");

       if (storage) {
          login.value = storage.getItem["login"];
          email.focus();
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

        if (!login.value || !email.value) {
          // event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
           
        } else {
          
          storage.setItem("login",login.value);
          popup.classList.remove("modal-content-show");
      }});

  window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });

  //Всплыващая карата

    var map1Open = document.querySelector(".js-open-map");
    var mapPopup = document.querySelector(".modal-big-map");
    var map2BigOpen = document.querySelector(".map1");
    var map2BigPopup = document.querySelector(".map2");
    var mapClose = mapPopup.querySelector(".big-map-close");


      map1Open.addEventListener("click", function(event) {
        event.preventDefault();
        // map2BigOpen.classList.add("modal-content-show");
        map2BigOpen.style.display="block";
        mapPopup.classList.add("modal-content-show");
       
      });

     

     map2BigOpen.addEventListener("click", function(event) {
        event.preventDefault();
        map2BigOpen.style.display = "none";
        map2BigPopup.style.display = "block";

      });

     


      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });



       window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });

       window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapBigPopup.classList.contains("modal-content-show")) {
            mapBigPopup.classList.remove("modal-content-show");
          }
        }
      });
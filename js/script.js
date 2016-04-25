var write_us = document.getElementById("write_us");
write_us.onclick = function (e) {
  var form_to_send = document.getElementsByClassName("modal-content");
  computed = window.getComputedStyle(form_to_send[0]);          
  form_to_send[0].style.display = "block";          
};
        
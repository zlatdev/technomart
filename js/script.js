var write_us = document.getElementById("write_us");
var write_us_opened = false;
write_us.onclick = function (e) {
	if (write_us_opened == false) {
  var form_to_send = document.getElementsByClassName("modal-content");
//  computed = window.getComputedStyle(form_to_send[0]);          
  form_to_send[0].style.display = "block";
  write_us_opened = true; 
  e.stopImmediatePropagation();
}};
document.body.onclick = function (e) {
	if (write_us_opened == true) {
	var form_to_send = document.getElementsByClassName("modal-content");
//  computed = window.getComputedStyle(form_to_send[0]);          
  form_to_send[0].style.display = "none";
  write_us_opened = false;
  e.stopImmediatePropagation();	
}
};
        
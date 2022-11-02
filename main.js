var nt_number = document.querySelector(".notification_number");
var nt_clear = document.querySelector(".header > p");
var nt_unread = document.querySelectorAll(".body_item.unread");
var nt_dot = document.querySelectorAll(".notification_dot");


nt_clear.addEventListener("click", e=>{
    nt_number.innerHTML = "0";
    for (var i = 0; i < nt_unread.length; i++) {
        nt_unread[i].classList.remove("unread");
      }
    for (var k = 0; k < nt_dot.length; k++) {
        nt_dot[k].innerHTML= "";
      }
});
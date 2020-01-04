var link = document.querySelector(".contacts-our .button-red");
var popup = document.querySelector(".write-us");
var popup_overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".button-close");
var named = popup.querySelector("[name=your_name]"); /*name=your_name*/
var form = popup.querySelector("form");
var emailed = popup.querySelector("[name=your_email]");
var letter = popup.querySelector("textarea");

link.addEventListener("click",function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	popup.classList.remove("modal-error");
	named.focus();
	popup_overlay.classList.add("modal-show");
});

close.addEventListener('click',function(evt) {
	evt.preventDefault();
	popup.classList.remove('modal-show');
	popup_overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode===27) {
    evt.preventDefault();

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
	if (popup_overlay.classList.contains("modal-show")) {
      popup_overlay.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	if (!emailed.value || !named.value || !letter.value) {
		popup.classList.add("modal-error");
	}
});
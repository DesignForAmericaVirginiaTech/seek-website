window.onload = function() {
	//loaded
}

document.onscroll = function() {
	var scroll = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	var headerSize = document.getElementById("header").clientHeight - document.getElementById("nav").clientHeight;

	if (scroll > headerSize) {
		var nav = document.getElementById("nav");
		nav.style.backgroundColor = "#009688";
	} else {
		var nav = document.getElementById("nav");
		var percent = scroll/headerSize;
		nav.style.backgroundColor = "rgba(0,150,136," + percent + ")";
	}
}
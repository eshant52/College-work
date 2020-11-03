$(function (){
	//Event handlesr for navbar when looses its focus.
	//Hide the content
	$("#navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 992){
			$("#navbarSupportedContent").collapse('hide');
		}
	});
});

(function (global) {
	var dc = {};
	var homeHtml = "../html-snippets/home-page.html";
	//home-page html request
	document.addEventListener("DOMContentLoaded", function(event) {
		$ajaxUtils.sendGetRequest (
			homeHtml,
			function (responseText){
				document.querySelector("#main-content").innerHTML = responseText;
			},
			false
		);
	});
	
	global.$dc = dc;

})(window);
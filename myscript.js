$(document).ready(function(){
	thisURL = document.URL;
	imgsrc = "https://chart.googleapis.com/chart?cht=qr&chs=150x150&choe=UTF-8&chld=L|4&chl=" + thisURL;
	var msg={
		to: "popup",
		host: window.location.host,
		src: imgsrc
	};
	chrome.runtime.sendMessage(msg);
});


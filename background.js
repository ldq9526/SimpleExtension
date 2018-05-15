var imgSrc;
var domainValue;
var result;
var n=1;

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.to == "popup") {
			setImageSrc(request.src);
			setDomainValue(request.host);
			switch(n%3) {
				case 0:
					setResult("是钓鱼网站!!!!");
					break;
				case 1:
					setResult("不是钓鱼网站");
					break;
				default:
					setResult("判断依据不足");
			}
			n++;
		}
	})

function setImageSrc(s) {
	imgSrc = s;
}

function setDomainValue(v) {
	domainValue = v;
}

function setResult(r) {
	result = r;
}

function getImageSrc() {
	return imgSrc;
}

function getDomainValue() {
	return domainValue;
}

function getResult() {
	return result;
}
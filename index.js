var bg = chrome.extension.getBackgroundPage();
document.getElementById("page").src = bg.getImageSrc();
document.getElementById("domain").value = bg.getDomainValue();
document.getElementById("conclusion").value = bg.getResult();
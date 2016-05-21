var t = ((window.getSelection && window.getSelection()) || (document.getSelection && document.getSelection()) || (document.selection && document.selection.createRange && document.selection.createRange().text));

var e = (document.charset || document.characterSet);

var traditional = "TW";
var simplified = "CN";

if(t != ""){
	location.href = "http://translate.google.com/?text=" + t + "&hl=en&langpair=auto|zh-" + traditional + "&tbb=1&ie=" + e;
}
else{
	location.href = "http://translate.google.com/translate?u=" + encodeURIComponent(location.href) + "&hl=en&langpair=auto|zh-" + traditional + "&tbb=1&ie=" + e;
};
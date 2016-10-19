var current = location.pathname.match(/\d+/)[0];
var option = location.pathname.match(/_(\w\w)(\w)\//).slice(1);
var optionType = option[0];
var optionLanguage = option[1];
var questionNumber = 0;

/* Drag and Drop */

var mouse;
window.addEventListener("mousemove", function(e) {mouse = e});

var dragOrigin;
function dragEnd(n) {
	console.log("dragEnd");
	window.removeEventListener("mousemove", drag);
	dragOrigin.classList.remove("dragging");
	dragOrigin.removeAttribute("style");
	place(dragOrigin);
}
function drag(e) {
	console.log("drag");
	dragOrigin.style.left = e.x - dragOrigin.e.x + "px";
	dragOrigin.style.top = e.y - dragOrigin.e.y + "px";
	window.addEventListener("mouseup", dragEnd);
}
function dragStart(e) {
	console.log("dragStart");
	dragOrigin = this;
	dragOrigin.e = e;
	dragOrigin.classList.add("dragging");
	window.addEventListener("mousemove", drag);
}

function place(e) {
	var i = separator.indexOf(closest());
	if (i >= 0)
		id("targetspace").appendChild(e);
	else {
		id("tokenspace").appendChild(e);
		e.className = "token tl tr bl br";
	}
	
	id("tokenspace").removeAttribute("style");
	id("targetspace").innerHTML = "";
}

function distance(e) {
	var er = e.getBoundingClientRect();
	var mid = {"x": (er.left + er.right) / 2, "y": (er.top + er.bottom) / 2};
	return Math.sqrt(Math.pow(mouse.x - mid.x, 2) + Math.pow(mouse.y - mid.y, 2));
}
function closest() {
	var pd = 100;
	for (var i = 0; i < separator.length; i++) {
		var d = distance(separator[i]);
		if (d < pd) {
			var c = separator[i];
			pd = d;
		}
	}
	if (c == undefined)
		return id("tokenspace");
	return c;
}

function submit() {
	if (answer == id("targetspace").map(function(e) {return e.innerHTML}).join(""))
		console.log("correct");
}

function unscramblePrompt(s) {
	var item = s.split(" ");
	var answer = item.join("");
	item = shuffled(item);
	
	for (var i = 0; i < item.length; i++) {
		var token = id("tokenspace").appendChild(document.createElement("div"));
		token.className = "token";
		token.addEventListener("mousedown", dragStart);
		token.innerHTML = item[i];
	}
	
	newSeparator();
}

unscramblePrompt("我 朋友 唱歌 唱 得 不 好 。");

/* Variables */

function init() {
	document.title = current + " Sentences: " + code[optionType + optionLanguage];
	id("title").innerHTML = "第" + number(current) + "课";
	id("subject").innerHTML = lesson[current].subject;
	
	correct = [];
}

init();

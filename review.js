var current = location.pathname.match(/\d+/)[0];
var optionText = "a"; // radio buttons and labels just suck
var optionFormat = "plain";

// EXAMPLES

function spanExpand(n) {
	id("mpX").pause();
	id("example").innerHTML = "";
	for (var i = 0, span; span = id("text").getElementsByTagName("span")[i]; i++)
		id("text").getElementsByTagName("span")[i].classList.remove("selected");
	id("text").getElementsByTagName("span")[n].classList.add("selected");
	if (current == 20 && optionText == "a" && optionFormat == "pattern"){
		id("text").getElementsByTagName("span")[0].classList.add("selected");
		id("text").getElementsByTagName("span")[1].classList.add("selected");
		n = 0;
	}
	else if (current == 18 && optionText == "a" && optionFormat == "word" && (n == 5 || n == 7)){
		id("text").getElementsByTagName("span")[5].classList.add("selected");
		id("text").getElementsByTagName("span")[7].classList.add("selected");
		n = 5;
	}
	if (optionFormat == "word") // change to one line after restructuring data
		var term = word[optionText][current][n];
	else if (optionFormat == "pattern")
		var term = pattern[optionText][current][n];
	var key = Object.keys(term)[0]; // should have "title" and "entries" keys instead
	var value = term[key]; // or maybe just have the title as the first in one list
	for (var i = 0; i < value.length; i++) { // to remove the else condition from this loop
		var span = document.createElement("span");
		if (i == 0){
			span.innerHTML = key;
			span.classList.add("tempUnderline");
		}
		else
			span.innerHTML = value[i - 1];
		span.setAttribute("onClick", "mpXPlay(\"/mp3/review/" + optionFormat + "/" + current + optionText + n + "_" + i + ".mp3\")");
		id("example").appendChild(span);
	}
}

function spanHighlight() {
	for (var i = 0, span; span = id("text").getElementsByTagName("span")[i]; i++)
		(function(n){
			span.addEventListener("click", function(){spanExpand(n)});
		})(i);
}

// MAIN CONTENT

function setText(e) {
	optionText = e;
	id("a").classList.remove("selected");
	id("b").classList.remove("selected");
	id(e).classList.add("selected");
	mp3Src("/mp3/review/" + current + optionText.toLowerCase() + ".mp3");
	setFormat(optionFormat);
	if (current < 12 || current == 14)
		id("image").classList.add("disabled");
	else {
		id("photo").src = "/img/" + current + e.toLowerCase() + ".png";
		id("photo").alt = current + e.toLowerCase();
	}
}

function setFormat(e) {
	optionFormat = e;
	id("plain").classList.remove("selected");
	id("word").classList.remove("selected");
	id("pattern").classList.remove("selected");
	id("image").classList.remove("selected");
	id("photo").classList.remove("hidden");
	id("text").classList.remove("hidden");
	id("example").classList.remove("hidden");
	id("example").innerHTML = "";
	id("mpX").pause();
	id(e).classList.add("selected");
	if (e == "plain") {
		id("text").innerHTML = text[optionText][current].replace(/[\[\]{}]/g, "");
		id("example").classList.add("hidden");
		id("photo").classList.add("hidden");
	}
	else if (e == "word") {
		id("text").innerHTML = text[optionText][current].replace(/\[|\]/g, "").replace(/{/g, "<span>").replace(/}/g, "</span>");
		id("photo").classList.add("hidden");
		spanHighlight();
	}
	else if (e == "pattern") {
		id("text").innerHTML = text[optionText][current].replace(/{|}/g, "").replace(/\[/g, "<span>").replace(/]/g, "</span>");
		id("photo").classList.add("hidden");
		spanHighlight();
	}
	else if (e == "image") {
		id("text").classList.add("hidden");
		id("example").classList.add("hidden");
	}
}

function init() {
	document.title = current + " Review";
	id("title").innerHTML = "第" + number(current) + "课";
	id("subject").innerHTML = lesson[current].subject;
	setText(optionText);
	mp3Init();
	id("a").addEventListener("click", function(){setText("a")});
	id("b").addEventListener("click", function(){setText("b")});
	id("plain").addEventListener("click", function(){setFormat("plain")});
	id("word").addEventListener("click", function(){setFormat("word")});
	id("pattern").addEventListener("click", function(){setFormat("pattern")});
	id("image").addEventListener("click", function(){setFormat("image")});
}

init();

var tid = 0; // radio buttons and labels just suck
var fid = "texts";




var textA;
var textB;

var text;
var examples;
var frame;

var plaintext;
var words;
var patterns;
var photo;





// EXAMPLES

function spanExpand(n) {
	document.getElementById("mpX").pause();
	examples.innerHTML = "";
	for (var i = 0, span; span = text.getElementsByTagName("span")[i]; i++)
		text.getElementsByTagName("span")[i].classList.remove("selected");
	text.getElementsByTagName("span")[n].classList.add("selected");
	if (current == 20 && tid == "a" && fid == "patterns"){
		text.getElementsByTagName("span")[0].classList.add("selected");
		text.getElementsByTagName("span")[1].classList.add("selected");
		n = 0;
	}
	else if (current == 18 && tid == "a" && fid == "words" && (n == 5 || n == 7)){
		text.getElementsByTagName("span")[5].classList.add("selected");
		text.getElementsByTagName("span")[7].classList.add("selected");
		n = 5;
	}
	if (fid == "words") // change to one line after restructuring data
		var term = words[tid][current][n];
	else if (fid == "patterns")
		var term = patterns[tid][current][n];
	var key = Object.keys(term)[0]; // should have "title" and "entries" keys instead
	var value = term[key]; // or maybe just have the title as the first in one list
	for (var i = 0; i < value.length; i++) { // to remove the else condition from this loop
		var div = document.createElement("div");
		if (i == 0){
			div.innerHTML = key;
			div.classList.add("tempUnderline");
		}
		else
			div.innerHTML = value[i - 1];
		div.setAttribute("onButtonClick", "mpXPlay(\"/mp3/review/" + fid + "/" + current + tid + n + "_" + i + ".mp3\")");
		examples.appendChild(div);
	}
}

function spanHighlight() {
	for (var i = 0, span; span = text.getElementsByTagName("span")[i]; i++)
		(function(n){
			span.addEventListener("click", function(){spanExpand(n)});
		})(i);
}

// MAIN CONTENT

function setText(id) {
	tid = id;
	// mp3Src("/mp3/review/" + current + tid.toLowerCase() + ".mp3");
	setFormat(fid);
	// if (current < 12 || current == 14)
	// 	photo.classList.add("disabled");
	// else {
	// 	photo.src = "/img/" + current + text.toLowerCase() + ".png";
	// 	photo.alt = current + text.toLowerCase();
	// }
}

function setFormat(id) {
	fid = id;
	photo.classList.remove("hidden");
	text.classList.remove("hidden");
	examples.classList.remove("hidden");
	examples.innerHTML = "";
	// document.getElementById("mpX").pause();
	if (id == "0") {
		text.innerHTML = data.texts[tid].replace(/[\[\]{}]/g, "");
		examples.classList.add("hidden");
		frame.classList.add("hidden");
	}
	else if (id == "1") {
		text.innerHTML = data.texts[tid].replace(/\[|\]/g, "").replace(/{/g, "<span>").replace(/}/g, "</span>");
		frame.classList.add("hidden");
		spanHighlight();
	}
	else if (id == "2") {
		text.innerHTML = data.texts[tid].replace(/{|}/g, "").replace(/\[/g, "<span>").replace(/]/g, "</span>");
		frame.classList.add("hidden");
		spanHighlight();
	}
	else if (id == "3") {
		text.classList.add("hidden");
		examples.classList.add("hidden");
	}
}

function textButtonClick() {
	textA.classList.remove("selected");
	textB.classList.remove("selected");
	this.classList.add("selected");
	setText(this.id);
}

function formatButtonClick() {
	plaintext.classList.remove("selected");
	words.classList.remove("selected");
	patterns.classList.remove("selected");
	photo.classList.remove("selected");
	this.classList.add("selected");
	setFormat(this.id);
}

function init() {
	textA = document.getElementById("text-a");
	textB = document.getElementById("text-b");
	text = document.getElementById("text");
	examples = document.getElementById("examples");
	frame = document.getElementById("frame");
	plaintext = document.getElementById("plaintext");
	words = document.getElementById("words");
	patterns = document.getElementById("patterns");
	photo = document.getElementById("photo");

	textA.addEventListener("click", textButtonClick);
	textB.addEventListener("click", textButtonClick);
	plaintext.addEventListener("click", formatButtonClick);
	words.addEventListener("click", formatButtonClick);
	patterns.addEventListener("click", formatButtonClick);
	photo.addEventListener("click", formatButtonClick);

	textA.click();
	plaintext.click();

	// mp3Init();
}

window.addEventListener("DOMContentLoaded", init);

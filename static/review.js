var currentText, currentFormat;
var photo, text, examples;
var textButtons, formatButtons;

function clickPhoto() {
	if (this.classList.contains("magnified")) {
		this.classList.remove("magnified");
	}
	else {
		this.classList.add("magnified");
	}
}

function clickTerm() { /* TODO: verify this */
	var n = this.dataset.index;
	// document.getElementById("mpX").pause();
	examples.innerHTML = "";
	var terms = Array.from(text.getElementsByTagName("span"));
	for (var term of terms) {
		term.classList.remove("selected");
	}
	terms[n].classList.add("selected");
	// if (current == 20 && currentText == 0 && currentFormat == 2) {
	// 	terms[0].classList.add("selected");
	// 	terms[1].classList.add("selected");
	// 	n = 0;
	// }
	// else if (current == 18 && currentText == 0 && currentFormat == 1 && (n == 5 || n == 7)) {
	// 	terms[5].classList.add("selected");
	// 	terms[7].classList.add("selected");
	// 	n = 5;
	// }
	if (currentFormat == 1) { // change to one line after restructuring data
		var term = data.words[currentText][n];
	}
	else if (currentFormat == 2) {
		var term = data.patterns[currentText][n];
	}
	var key = Object.keys(term)[0]; // should have "title" and "entries" keys instead
	var value = term[key]; // or maybe just have the title as the first in one list
	for (var i = 0; i < value.length; i++) { // to remove the else condition from this loop
		var div = document.createElement("div");
		div.classList.add("loading");
		if (i == 0){
			div.classList.add("tempUnderline");
			div.innerHTML = key;
		}
		else {
			div.innerHTML = value[i - 1];
		}
		// div.setAttribute("onButtonClick", "mpXPlay(\"/mp3/review/" + currentFormat + "/" + current + currentText + n + "_" + i + ".mp3\")");
		examples.appendChild(div);
	}
}

function markTerms() { /* TODO */
	var spans = text.getElementsByTagName("span");
	for (var i = 0; i < spans.length; i++) {
		spans[i].dataset.index = i;
		spans[i].addEventListener("click", clickTerm);
	}
}

function setFormat(n) {
	currentFormat = n;
	examples.innerHTML = "";
	if (currentFormat == 0) {
		text.innerHTML = data.texts[currentText].replace(/[\[\]{}]/g, "");
		examples.classList.add("hidden");
	}
	else {
		if (currentFormat == 1) {
			text.innerHTML = data.texts[currentText].replace(/{|}/g, "").replace(/\[/g, "<span>").replace(/\]/g, "</span>");
		}
		else if (currentFormat == 2) {
			text.innerHTML = data.texts[currentText].replace(/\[|\]/g, "").replace(/{/g, "<span>").replace(/}/g, "</span>");
		}
		markTerms();
		examples.classList.remove("hidden");
	}
	// document.getElementById("mpX").pause();
}

function clickFormatButton() {
	for (var formatButton of formatButtons) {
		formatButton.classList.remove("selected");
	}
	this.classList.add("selected");
	setFormat(formatButtons.indexOf(this));
}

var TEST; /* TODO */

function setText(n) {
	currentText = n;
	photo.alt = data.photos[currentText] ? data.lesson + "ab"[n] : "";
	photo.src = data.photos[currentText];
	formatButtons[currentFormat].click();
	// TEST = getDisc(link( /* TODO*/
	// 	"mp3",
	// 	"review",
	// 	"texts",
	// 	["a", "b"][currentText],
	// 	data.lesson + ".mp3"
	// ));
}

function clickTextButton() {
	for (var textButton of textButtons) {
		textButton.classList.remove("selected");
	}
	this.classList.add("selected");
	setText(textButtons.indexOf(this));
}

function init() {
	currentText = 0;
	currentFormat = 0;
	photo = document.getElementById("photo");
	text = document.getElementById("text");
	examples = document.getElementById("examples");
	textButtons = [
		document.getElementById("text-a"),
		document.getElementById("text-b")
	];
	formatButtons = [
		document.getElementById("plain"),
		document.getElementById("words"),
		document.getElementById("patterns"),
	];

	photo.addEventListener("click", clickPhoto);
	for (var textButton of textButtons) {
		textButton.addEventListener("click", clickTextButton);
	}
	for (var formatButton of formatButtons) {
		formatButton.addEventListener("click", clickFormatButton);
	}

	textButtons[currentText].click();
	formatButtons[currentFormat].click();

	/**/
	var playerElement = document.getElementById("player");
	var player = new Player(playerElement);
	player.insertDisc("/static/mp3/budui.mp3");
	console.log(player);
}

window.addEventListener("DOMContentLoaded", init);

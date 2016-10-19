var current = location.pathname.match(/\d+/)[0];
var optionLanguage = location.pathname.match(/_(\w)\//).slice(1);
var questionNumber = 0;

var questionData;

/* Variables */
var choices;
var answer;
var correct = new Set();
var celebrating = false;

/* Assisting Functions */

function formatSyllable(s, a, b) {
	var toneA = ["a", "ā", "á", "ǎ", "à"];
	var toneE = ["e", "ē", "é", "ě", "è"];
	var toneO = ["o", "ō", "ó", "ǒ", "ò"];
	var toneV = ["ü", "ǖ", "ǘ", "ǚ", "ǜ"];
	var toneI = ["i", "ī", "í", "ǐ", "ì"];
	var toneU = ["u", "ū", "ú", "ǔ", "ù"];
	
	var subs = s.slice(a, b);
	var n = parseInt(s[b]) % 5;
	
	if (subs.includes("a"))
		subs = subs.replace("a", toneA[n]);
	else if (subs.includes("e"))
		subs = subs.replace("e", toneE[n]);
	else if (subs.includes("o"))
		subs = subs.replace("o", toneO[n]);
	else if (subs.includes("ü"))
		subs = subs.replace("ü", toneV[n]);
	else if (subs.indexOf("i") > subs.indexOf("u"))
		subs = subs.replace("i", toneI[n]);
	else if (subs.indexOf("u") > subs.indexOf("i"))
		subs = subs.replace("u", toneU[n]);
	return s.slice(0, a) + subs + s.slice(b + 1, s.length);
}

function formatPinyin(s) {
	s = s.replace(/v/g, "ü");
	var i = 0;
	for (var j = 0; j < s.length; j++)
		if (["1", "2", "3", "4", "5"].includes(s[j])) {
			s = formatSyllable(s, i, j);
			i = j;
			j--;
		}
	return s;
}

/* Display */

function enableButtons(){
	id("toggle").classList.remove("disabled");
	id("points").classList.remove("disabled");
	id("buttons").classList.remove("disabled");
}

function disableButtons(){
	id("toggle").classList.add("disabled");
	id("points").classList.add("disabled");
	id("buttons").classList.add("disabled");
}

/* Logic */

function check(e, n) {
	if (choices[n] == answer) {
		correct.add(answer);
		e.classList.add("correct");
		id("points").children[answer].classList.remove("incorrect");
		id("points").children[answer].classList.add("correct");
		id("henhao").play();
		if (correct.size == questionData.length)
			if (!celebrating) {
				celebrating = true;
				celebrate();
			}
	}
	else {
		correct.delete(answer);
		e.classList.add("incorrect");
		if (id("points").children[answer].classList.contains("correct"))
			id("points").children[answer].classList.remove("correct");
		else
			id("points").children[answer].classList.add("incorrect");
		id("budui").play();
		if (correct.size < questionData.length)
			if (celebrating)
				celebrating = false;
	}
	disableButtons();
}

function randomQuestionNumber() {
	var r = Math.floor(Math.random() * questionData.length);
	if (correct.size != questionData.length)
		if (Array.from(correct).includes(r))
			return randomQuestionNumber();
	return r;
}

function newQuestion(n) {
	for (var i = 0; i < 4; i++) {
		id("buttons").children[i].classList.remove("incorrect");
		id("buttons").children[i].classList.remove("correct");
	}
	Array.from(id("points").children).forEach(function(e){e.classList.remove("selected")});

	answer = n;
	choices = [n];
	id("points").children[n].classList.add("selected");
	while (choices.length < 4) {
		var entry = Math.floor(Math.random() * questionData.length);
		if (!choices.includes(entry))
			choices.push(entry);
	}
	choices = shuffled(choices);

	for (var i = 0; i < 4; i++)
		if (optionLanguage == "p")
			id("buttons").children[i].innerHTML = formatPinyin(questionData[choices[i]]);
		else
			id("buttons").children[i].innerHTML = questionData[choices[i]];

	mpXPlay("/mp3/word/" + current + "_" + n + ".mp3");
	disableButtons();
}

function init() {
	document.title = current + " Words: " + code[optionLanguage];
	id("title").innerHTML = "第" + number(current) + "课";
	id("subject").innerHTML = lesson[current].subject;

	questionData = word[optionLanguage][current];
	if (optionLanguage == "c")
		Array.from(id("buttons").children).forEach(function(e){e.classList.add("zh")});
	else
		Array.from(id("buttons").children).forEach(function(e){e.classList.remove("zh")});

	for (var i = 0; i < questionData.length; i++) {
		var point = document.createElement("div");
		point.className = "button";
		id("points").appendChild(point);
		(function(n) {
			point.addEventListener("click", function() {
				newQuestion(n);
			});
		})(i);
	}

	disableButtons(); // not needed if initialized in the HTML
	newQuestion(randomQuestionNumber());
	
	id("toggle").addEventListener("click", function() {id("mpX").play();disableButtons()});
	id("mpX").addEventListener("pause", function() {enableButtons()});
	id("henhao").addEventListener("pause", function() {newQuestion(randomQuestionNumber())});
	id("budui").addEventListener("pause", function() {newQuestion(randomQuestionNumber())});

	id("buttons").children[0].addEventListener("click", function() {check(this, 0)});
	id("buttons").children[1].addEventListener("click", function() {check(this, 1)});
	id("buttons").children[2].addEventListener("click", function() {check(this, 2)});
	id("buttons").children[3].addEventListener("click", function() {check(this, 3)});
}

function wave(e, n) {
	if (celebrating)
		requestAnimationFrame(function(){wave(e, ++n)});
	e.style.transform = "translateY(" + 2 * Math.cos(Math.PI * n / 8) + "px)";
}

function celebrate() {
	Array.from(id("points").children).forEach(function(e, i) {
		wave(e, i * 4);
	});
}

init();

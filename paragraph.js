var current = location.pathname.match(/\d+/)[0];
var option = location.pathname.match(/_(\w\w)(\w)\//).slice(1);
var optionType = option[0];
var optionLanguage = option[1];
var questionNumber = 0;

var questionData;
var celebrating = false;

/* Display */

function enableButtons() {
	id(optionType).classList.remove("disabled");
	id("points").classList.remove("disabled");
	id("hint").classList.remove("disabled");
}

function disableButtons() {
	id(optionType).classList.add("disabled");
	id("points").classList.add("disabled");
	id("hint").classList.add("disabled");
	// id("mpX").pause();
}

function nextQuestionNumber() {
	if (Array.from(id("points").children).filter(function(e) {return !e.classList.contains("correct")}).length > 0)
		do
			questionNumber = (questionNumber + 1) % questionData.length;
		while (id("points").children[questionNumber].classList.contains("correct"));
	else
		questionNumber = (questionNumber + 1) % questionData.length;
	return questionNumber;
}

/* Logic */

function newQuestion(n) {
	questionNumber = n;

	// reset correctness of answer buttons
	Array.from(id(optionType).children).forEach(function(e) {
		e.classList.remove("correct");
		e.classList.remove("incorrect");
	});
	// reset selection for the points bar
	Array.from(id("points").children).forEach(function(e) {
		e.classList.remove("selected");
	});
	// select correct point in points bar
	id("points").children[questionNumber].classList.add("selected");

	id("question").innerHTML = questionData[questionNumber][0]; // entry 0 is the question

	// set up the choices (should maybe be changed)
	if (optionType == "mc") {
		choices = shuffled(questionData[questionNumber].slice(1));
		for(var i = 0; i < 3; i++)
			id(optionType).children[i].innerHTML = choices[i];
	}
	else if (optionType == "tf")
		choices = [true, false];
	else if (optionType == "mr")
		choices = [0, 1, 2, 3, 4];

	// set up the hint audio
	if (optionType == "mr")
		id("mpX").src = "/mp3/paragraph/" + current + optionType + optionLanguage + "_0.mp3";
	else
		id("mpX").src = "/mp3/paragraph/" + current + optionType + optionLanguage + "_" + (questionNumber + 1) + ".mp3";
	
	enableButtons();
}

function check(e, n) {
	if (choices[n] == questionData[questionNumber][1]) { // entry 1 is the answer
		e.classList.add("correct");
		id("points").children[questionNumber].classList.remove("incorrect");
		id("points").children[questionNumber].classList.add("correct");
		id("henhao").play();
		if (Array.from(id("points").children).filter(function(e) {return !e.classList.contains("correct")}).length == 0)
			if (!celebrating) {
				celebrating = true;
				celebrate();
			}
	}
	else {
		e.classList.add("incorrect");
		if (id("points").children[questionNumber].classList.contains("correct"))
			id("points").children[questionNumber].classList.remove("correct");
		else
			id("points").children[questionNumber].classList.add("incorrect");
		id("budui").play();
		if (Array.from(id("points").children).filter(function(e) {return !e.classList.contains("correct")}).length > 0)
			if (celebrating)
				celebrating = false;
	}
	disableButtons();
}

/* Proceed Transition */
function proceedToQuestions() {
	id("fulltext").classList.add("hidden");
	id("mp3").pause();
	id("tip").classList.add("hid");
	id("question").classList.remove("hidden");
	id(optionType).classList.remove("hidden");
	id("points").classList.remove("hidden");
	id("hint").classList.remove("hidden");
}

// MAIN CONTENT

function setup() {
	// Set up the front cover first

	id("fulltext").classList.remove("hidden");
	id("question").classList.add("hidden");
	id("mc").classList.add("hidden");
	id("tf").classList.add("hidden");
	id("mr").classList.add("hidden");
	id("points").classList.add("hidden");
	id("hint").classList.add("hidden");
	// above block isn't needed if lesson navigator isn't implemented

	mp3Src("/mp3/paragraph/" + current + optionType + optionLanguage + "_0.mp3");

	// and then prepare for the questions to come

	if (optionLanguage == "e") {
		id("question").classList.remove("zh");
		if (optionType == "mc") // the condition is optional
			Array.from(id("mc").children).forEach(function(e) {
				e.classList.remove("zh");
			});
	}
	else if (optionLanguage == "c") {
		id("question").classList.add("zh");
		if (optionType == "mc")
			Array.from(id("mc").children).forEach(function(e) {
				e.classList.add("zh");
			});
	}

	questionData = paragraph[optionType + optionLanguage][current];
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

	newQuestion(0);
}

function init() {
	document.title = current + " Paragraph: " + code[optionType + optionLanguage];
	id("title").innerHTML = "第" + number(current) + "課";
	id("subject").innerHTML = lesson[current].subject;

	setup();

	mp3Init();
	id("hint").addEventListener("click", function() {
		id("mpX").play();
	});
	id("henhao").addEventListener("pause", function() {
		newQuestion(nextQuestionNumber());
	});
	id("budui").addEventListener("pause", function() {
		newQuestion(nextQuestionNumber());
	});

	id("proceed").addEventListener("click", proceedToQuestions);

	id("mc").children[0].addEventListener("click", function() {check(this, 0);});
	id("mc").children[1].addEventListener("click", function() {check(this, 1);});
	id("mc").children[2].addEventListener("click", function() {check(this, 2);});

	id("tf").children[0].addEventListener("click", function() {check(this, 0);});
	id("tf").children[1].addEventListener("click", function() {check(this, 1);});

	id("mr").getElementsByClassName("button")[0].addEventListener("click", function() {check(this, 0);});
	id("mr").getElementsByClassName("button")[1].addEventListener("click", function() {check(this, 1);});
	id("mr").getElementsByClassName("button")[2].addEventListener("click", function() {check(this, 2);});
	id("mr").getElementsByClassName("button")[3].addEventListener("click", function() {check(this, 3);});
	id("mr").getElementsByClassName("button")[4].addEventListener("click", function() {check(this, 4);});
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

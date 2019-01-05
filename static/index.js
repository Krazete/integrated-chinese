function save(key, a, b, d) {
}

function load(key) {
	var value = localStorage.getItem("lesson", );

	return [a, b, d];
}

var currentLesson;
var lessonButtons;
var lessonTitle;
var contentMenu;
var review;
var vocabulary;

var deacronym = {
	"english": "English",
	"pinyin": "Pinyin",
	"chinese": "Chinese",

	"choice-en": "Multiple Choice (English)",
	"choice-zh": "Multiple Choice (Chinese)",
	"boolean-en": "True or False (English)",
	"boolean-zh": "True or False (Chinese)",
	"map": "Map Reading (Chinese)",

	"money": "Money",
	"time": "Time",
	"antonym": "Antonyms",
	"match": "Matching"
};

function setLevel(level, lesson) { // TODO: set the preferred order of buttons
	var levelContainer = document.getElementById(level);
	levelContainer.innerHTML = "";
	var levelData = data[lesson][level];
	for (var i = 0; i < levelData.length; i++) {
		var a = document.createElement("a");
		a.href = [level, levelData[i], lesson].join("/");
		var div = document.createElement("div");
		div.className = "button";
		div.innerHTML = deacronym[levelData[i]];
		a.appendChild(div);
		levelContainer.appendChild(a);
	}
}

function setLesson(lesson) {
	lessonTitle.innerHTML = data[lesson].title;
	review.href = ["review", lesson].join("/");
	setLevel("word", lesson);
	setLevel("sentence", lesson);
	setLevel("paragraph", lesson);
	vocabulary.href = ["vocabulary", lesson].join("/");
}

function lessonButtonClick() {
	currentLesson = this.dataset.lesson;
	localStorage.setItem("lesson", currentLesson);
	for (var i = 0; i < lessonButtons.length; i++) {
		lessonButtons[i].classList.remove("selected");
	}
	this.classList.add("selected");
	lessonButtonLeave();
}

function lessonButtonEnter() {
	lessonTitle.classList.add("disabled");
	contentMenu.classList.add("disabled");
	setLesson(this.dataset.lesson);
}

function lessonButtonLeave() {
	lessonTitle.classList.remove("disabled");
	contentMenu.classList.remove("disabled");
	setLesson(currentLesson);
}

function initKonami() {
	var konami = /38_38_40_40_37_39_37_39_66_65_$/;
	var code = "";
	window.addEventListener("keydown", function(e) {
		code += e.keyCode + "_";
		if (konami.test(code)) {
			var hidden = document.getElementsByClassName("konami");
			Array.from(hidden).forEach(function (hid) {
				hid.classList.remove("konami");
			});
		}
	});
}

function init() {
	var gettedLesson = localStorage.getItem("lesson");
	currentLesson = gettedLesson > 0 && gettedLesson < 21 ? gettedLesson : 1;
	lessonButtons = document.getElementById("lesson-menu").getElementsByClassName("button");
	lessonTitle = document.getElementById("lesson-title");
	contentMenu = document.getElementById("content-menu");
	review = document.getElementById("review");
	vocabulary = document.getElementById("vocabulary");

	for (var i = 0; i < lessonButtons.length; i++) {
		var lessonButton = lessonButtons[i];
		if (lessonButton.dataset.lesson == currentLesson) {
			lessonButton.classList.add("selected");
		}
		if (mobile) {
			lessonButton.addEventListener("touchstart", lessonButtonClick);
		}
		else {
			lessonButton.addEventListener("click", lessonButtonClick);
			lessonButton.addEventListener("mouseenter", lessonButtonEnter);
			lessonButton.addEventListener("mouseleave", lessonButtonLeave);
		}
	}
	setLesson(currentLesson);
	initKonami();
}

window.addEventListener("DOMContentLoaded", init);

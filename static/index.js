function getCurrentCookie(key, a, b, d) { // TODO: use this
	var cookie = getCookie(key);
	if (a <= cookie && cookie <= b) {
		return cookie;
	}
	return d;
}

var current;
var lessonButtons;
var lessonTitle;
var contentMenu;
var review;
var vocabulary;

function setLevel(level, lesson) {
	var levelContainer = document.getElementById(level);
	levelContainer.innerHTML = "";
	var levelData = lessonData[lesson][level];
	for (var i = 0; i < levelData.length; i++) {
		var a = document.createElement("a");
		a.href = [level, levelData[i], lesson].join("/");
		var div = document.createElement("div");
		div.className = "button";
		div.innerHTML = parseAcronym[levelData[i]];
		a.appendChild(div);
		levelContainer.appendChild(a);
	}
}

function setLesson(lesson) {
	lessonTitle.innerHTML = lessonData[lesson].title;
	review.href = ["review", lesson].join("/");
	setLevel("word", lesson);
	setLevel("sentence", lesson);
	setLevel("paragraph", lesson);
	vocabulary.href = ["vocabulary", lesson].join("/");
}

function lessonButtonClick() {
	current = this.dataset.lesson;
	setCookie("lesson", current);
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
	setLesson(current);
}

function initKonami() {
	var konami = /38_38_40_40_37_39_37_39_66_65_$/;
	var code = "";
	window.addEventListener("keydown", function(e) {
		code += e.keyCode + "_";
		if (konami.test(code)) {
			var hidden = document.getElementsByClassName("hidden");
			for (var i = 0; i < hidden.length; i++) {
				hidden[i].classList.remove("hidden");
			}
		}
	});
}

function init() {
	current = getCookie("lesson") > 0 && getCookie("lesson") < 21 ? getCookie("lesson") : 1;
	lessonButtons = document.getElementById("lesson-menu").getElementsByClassName("button");
	lessonTitle = document.getElementById("lesson-title");
	contentMenu = document.getElementById("content-menu");
	review = document.getElementById("review");
	vocabulary = document.getElementById("vocabulary");

	for (var i = 0; i < lessonButtons.length; i++) {
		var lessonButton = lessonButtons[i];
		if (lessonButton.dataset.lesson == current) {
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
	setLesson(current);
	initKonami();
}

window.addEventListener("DOMContentLoaded", init);

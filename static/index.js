var currentLesson, lessonButtons, lessonTitle, lessonMenu, review, vocabulary;

var deacronym = {
	/* word level */
	"pinyin": "Pinyin",
	"english": "English",
	"chinese": "Chinese",
	/* paragraph (and sentence) level */
	"choice-en": "Multiple Choice (English)",
	"choice-zh": "Multiple Choice (Chinese)",
	"boolean-en": "True or False (English)",
	"boolean-zh": "True or False (Chinese)",
	"map": "Map Reading (Chinese)",
	/* sentence level */
	"fill-type": "Fill in the Blanks",
	"fill-drag-INCOMPLETE": "Fill in the Blank (Drag and Drop)",
	"alternative": "Change Question Form (?)",
	"question": "Generate Questions",
	"match": "Matching",
	"number": "Numbers",
	"money": "Money Expressions",
	"time": "Set the Clock",
	"antonym": "Antonyms",
	"COMMENT": "Dunno"
};

function setLevel(lesson, level) {
	var levelContainer = document.getElementById(level);
	levelContainer.innerHTML = "";
	for (var sublevel of data[lesson][level]) { /* sorting is done in main.py */
		var a = document.createElement("a");
		a.href = [level, sublevel, lesson].join("/");
		var div = document.createElement("div");
		div.className = "button";
		div.innerHTML = deacronym[sublevel];
		a.appendChild(div);
		levelContainer.appendChild(a);
	}
}

function setLesson(lesson) {
	lessonTitle.innerHTML = data[lesson].title;
	review.href = link("review", lesson);
	setLevel(lesson, "word");
	setLevel(lesson, "sentence");
	setLevel(lesson, "paragraph");
	vocabulary.href = link("vocabulary", lesson);
}

function enterLessonButton() {
	lessonTitle.classList.add("disabled");
	lessonMenu.classList.add("disabled");
	setLesson(this.dataset.lesson);
}

function leaveLessonButton() {
	lessonTitle.classList.remove("disabled");
	lessonMenu.classList.remove("disabled");
	setLesson(currentLesson);
}

function clickLessonButton() {
	currentLesson = this.dataset.lesson;
	for (var lessonButton of lessonButtons) {
		lessonButton.classList.remove("selected");
	}
	this.classList.add("selected");
	leaveLessonButton();
	localStorage.setItem("lesson", currentLesson);
}

function initKonami() {
	var konami = /38_38_40_40_37_39_37_39_66_65_$/;
	var code = "";
	window.addEventListener("keydown", function (e) {
		code += e.keyCode + "_";
		if (konami.test(code)) {
			var secrets = Array.from(document.getElementsByClassName("konami"));
			for (var secret of secrets) {
				secret.classList.remove("konami");
			}
		}
	});
}

function init() {
	currentLesson = Math.max(1, Math.min(localStorage.getItem("lesson"), 20));
	lessonButtons = Array.from(document.getElementById("lesson-buttons").getElementsByClassName("button"));
	lessonTitle = document.getElementById("lesson-title");
	lessonMenu = document.getElementById("lesson-menu");
	review = document.getElementById("review");
	vocabulary = document.getElementById("vocabulary");

	for (var lessonButton of lessonButtons) {
		if (lessonButton.dataset.lesson == currentLesson) {
			lessonButton.classList.add("selected");
		}
		if (mobile) {
			lessonButton.addEventListener("touchstart", clickLessonButton);
		}
		else {
			lessonButton.addEventListener("mouseenter", enterLessonButton);
			lessonButton.addEventListener("mouseleave", leaveLessonButton);
			lessonButton.addEventListener("click", clickLessonButton);
		}
	}
	setLesson(currentLesson);
	initKonami();
}

window.addEventListener("DOMContentLoaded", init);

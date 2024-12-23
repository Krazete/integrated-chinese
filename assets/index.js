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

function setLesson(lesson) {
	lessonTitle.innerHTML = data.title[lesson];
	review.href = link("review", lesson);
	for (var level of ["word", "sentence", "paragraph"]) {
		var levelContainer = document.getElementById(level);
		var levelLabel = levelContainer.children[0];
		levelContainer.innerHTML = "";
		levelContainer.appendChild(levelLabel);
		var n = 0;
		for(var sublevel in deacronym) {
			if (sublevel in data[level] && data[level][sublevel].includes(parseInt(lesson))) {
				var a = document.createElement("a");
				a.className = "button";
				a.href = link(level, sublevel, lesson);
				a.innerHTML = deacronym[sublevel];
				levelContainer.appendChild(a);
				n++;
			}
		}
		levelLabel.style.gridRow = "span " + n;
	}
	vocabulary.href = link("vocabulary", lesson);
}

function getPointer(e, preventScrolling) {
	if (e.touches) {
		if (preventScrolling && e.type == "touchmove") {
			e.preventdefault();
		}
		return e.touches[0];
	}
	return e;
}

/* Listeners */

function enterLessonButton() {
	lessonTitle.classList.add("disabled");
	lessonMenu.classList.add("disabled");
	var h0 = document.body.scrollHeight;
	setLesson(this.dataset.lesson);
	var h1 = document.body.scrollHeight;
	document.body.style.height = Math.max(h0, h1) + "px"; /* prevents glitchy rapid height change */
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

/* Initializers */

function initIndex() {
	currentLesson = Math.min(Math.max(1, localStorage.getItem("lesson")), 20);
	lessonButtons = document.getElementById("lesson-buttons").getElementsByClassName("button");
	lessonTitle = document.getElementById("lesson-title");
	lessonMenu = document.getElementById("lesson-menu");
	review = document.getElementById("review");
	vocabulary = document.getElementById("vocabulary");

	for (var lessonButton of lessonButtons) {
		if (lessonButton.dataset.lesson == currentLesson) {
			lessonButton.classList.add("selected");
		}
		lessonButton.addEventListener("mouseenter", enterLessonButton);
		lessonButton.addEventListener("mouseleave", leaveLessonButton);
		lessonButton.addEventListener("click", clickLessonButton);
		lessonButton.addEventListener("touchstart", clickLessonButton);
	}

	setLesson(currentLesson);
}

function initKonami() {
	var konami = /(arrowup~){2}(arrowdown~){2}(arrowleft~arrowright~){2}b~a~$/;
	var code = "";
	window.addEventListener("keydown", function (e) {
		code += e.key.toLowerCase() + "~";
		if (konami.test(code)) {
			var secrets = document.getElementsByClassName("konami");
			for (var secret of secrets) {
				if (secret.classList.contains("hidden")) {
					secret.classList.remove("hidden");
				}
				else {
					secret.classList.add("hidden");
				}
			}
		}
	});
}

var inits = [initKonami, initIndex];

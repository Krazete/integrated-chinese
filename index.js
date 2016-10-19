var current = getCookie("lesson") > 0 && getCookie("lesson") < 21 ? getCookie("lesson") : 1;

function adjustLabels() {
	for (var i = 3, label, labeled; label = cn("label")[i], labeled = cn("labeled")[i]; i--) // because CSS won't cooperate
		label.style.height = (labeled.clientHeight - 9) + "px"; // padding-top + margin-bottom = 9
}

function adjustLink(n, l) {
	id(l).href = "/" + l + "/" + n;
}

function showLevel(n, l) {
	id(l).innerHTML = "";
	for (var i = 0, level; level = lesson[n][l][i]; i++) {
		var li = document.createElement("li");
		li.className = "button link right";
		if (i == 0)
			li.classList.add("tr");
		if (i == lesson[n][l].length - 1)
			li.classList.add("br");
		var anchor = document.createElement("a");
		anchor.innerHTML = code[level];
		anchor.href = "/" + l + "_" + level + "/" + n;
		li.appendChild(anchor);
		id(l).appendChild(li);
	}
}

function showSubject(n) {
	id("subject").innerHTML = lesson[n].subject;
	adjustLink(n, "review");
	showLevel(n, "word");
	showLevel(n, "sentence");
	showLevel(n, "paragraph");
	adjustLabels();
	adjustLink(n, "vocabulary");
	id("original").href = (navigator.appName == "Microsoft Internet Explorer" ? "" : "http://ie10.ieonchrome.com/#")
						+ "http://www.language.berkeley.edu/ic/gb/" + (n < 10 ? "0" : "" ) + n + ".html";
	// rudimentary IE checker
}

function init() {
	for (var i = 0, div_lesson; div_lesson = cn("lesson")[i]; i++) {
		(function(n) {
			if (mobile) {
				div_lesson.addEventListener("click", function(e){
					if (current)
						cn("lesson")[current - 1].classList.remove("selected");
					current = n + 1;
					showSubject(current);
					this.classList.add("selected");
					setCookie("lesson", current);
				});
			}
			else {
				div_lesson.addEventListener("mouseenter", function(e){
					id("subject").classList.add("disabled");
					id("menu").classList.add("disabled");
					showSubject(n + 1);
				});
				div_lesson.addEventListener("mouseleave", function(e){
					id("subject").classList.remove("disabled");
					id("menu").classList.remove("disabled");
					showSubject(current);
				});
				div_lesson.addEventListener("click", function(e){
					cn("lesson")[current - 1].classList.remove("selected");
					current = n + 1;
					this.classList.add("selected");
					id("subject").classList.remove("disabled");
					id("menu").classList.remove("disabled");
					setCookie("lesson", current);
				});
			}
		})(i);
	}

	cn("lesson")[current - 1].classList.add("selected");
	showSubject(current);

	var konami = "";
	document.body.addEventListener("keydown", function(e){
		konami += e.keyCode + "_";
		if (/38_38_40_40_37_39_37_39_66_65_$/.test(konami))
			id("konami").classList.remove("hidden");
	});
}

init();

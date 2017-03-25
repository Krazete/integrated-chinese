function request(l, f) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", l);
	xhr.onload = f;
	xhr.send();
}

// Multiple Choice (Audio) (English)
var db = {};
for (var n = 1; n < 24; n++) {
	(function(i) {
		request("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_listeningonly_main.html", function() {
			db[i] = this.response.match(/db\[\d+\] ?= ?.+;/g);
		});
	})(n);
}

// True or False (Audio)
var db = {};
for (var i = 2; i < 24; i++)
	if (i != 3 && i != 8)
		(function(i) {
			request("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_listeningreading_main.html", function() {
				db[i] = this.response.match(/db\[\d+\] ?= ?.+;/g);
			});
		})(i);

// Drag and Drop (Static) (Fill In)
var db = {};
for (var i = 2; i < 24; i++)
	if (![4, 6, 9, 10, 22].includes(i))
		(function(i) {
			request("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_fillin" + (i == 19 ? "2" : "") + "_main.html", function() {
				db[i] = this.response.match(/(([\w]\[\d+\])|document\.all\.txt\.innerHTML) ?= ?.+;/g);
			});
		})(i);

// Drag and Drop (Dynamic) (Unscramble)
var db = {};
[1, 2, 4, 5, 7, 22].forEach(i => request("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_unscramble_main.html", function() {
	db[i] = this.response.match(/db\[\d+\] ?= ?.+;/g);
}));

/********************************************************************************************************************************/

// Multiple Choice (Audio) (English)
for (var i = 1; i < 24; i++)
	open("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_listeningonly.html");

// Multiple Choice (Audio)
[1, 8].forEach(i => open("http://www.language.berkeley.edu/ic/gb/exercises/ex0" + i + "s_listeningreading.html"));

// True or False (Audio)
for (var i = 2; i < 24; i++)
	if (i != 3 && i != 8)
		open("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_listeningreading.html");

// Drag and Drop (Static) (Fill In)
// Lesson 18 is strange.
// Lessons 2, 3, 5, 7, 8, 11, and 19 have multiple questions.
// Lessons 21 and 23 also have multiple question, but are split into a series of pages.
for (var i = 2; i < 24; i++)
	if (![4, 6, 9, 10, 22].includes(i))
		open("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_fillin" + (i == 19 ? "2" : "") + ".html");

// Drag and Drop (Dynamic) (Unscramble)
[1, 2, 4, 5, 7, 22].forEach(i => open("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_unscramble.html"));

// Drag and Drop (Static) (Antonyms)
open("http://www.language.berkeley.edu/ic/gb/exercises/ex10s_antonyms.html");

// Typing (Fill In)
[1, 9, 19].forEach(i => open("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_fillin.html"));
open("http://www.language.berkeley.edu/ic/gb/exercises/ex02s_complete.html");

// Typing (Audio)
open("http://www.language.berkeley.edu/ic/gb/exercises/ex03s_generatequestions.html");

// Typing
open("http://www.language.berkeley.edu/ic/gb/exercises/ex03s_changequestionform.html");

// Numbers (Audio)
open("http://www.language.berkeley.edu/ic/gb/exercises/ex01s_numbers.html");
open("http://www.language.berkeley.edu/ic/gb/exercises/ex03s_clock.html");
open("http://www.language.berkeley.edu/ic/gb/exercises/ex09s_money.html");

/********************************************************************************************************************************/

// Mapping
10 -> 11
11 -> 10
12 -> 12
13 -> 21
14 -> 13
15 -> 14
16 -> 15
17 -> 16
18 -> 17
19 -> 22
20 -> 18
21 -> 19
22 -> 23
23 -> 20

/********************************************************************************************************************************/

// Verify and Search for Hidden Pages
var found = [];
["listeningonly", "listeningreading", "fillin", "fillin2", "fillin3", "unscramble",
"antonyms", "complete", "changequestionform", "numbers", "clock", "generatequestions", "money"].forEach(
	function (e) {
		var xhr = [];
		for (var i = 1; i < 24; i++)
			(function (n) {
				xhr[n] = new XMLHttpRequest();
				xhr[n].open("GET", "http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 10 ? "0" : "") + i + "s_" + e + ".html");
				xhr[n].onload = function () {
					if (!this.responseText.includes("The resource you are looking for has been removed, had its name changed, or is temporarily unavailable."))
						found.push(this.responseURL);
				}
				xhr[i].send();
			})(i);
	}
);
function getFound() {
	return JSON.stringify(found);
}

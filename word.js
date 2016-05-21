/* Variables */

var hash;
var lesson;

var range;
var db;
var choices;
var answer;
var correct;

var butt = document.getElementsByClassName("choice");

/* Assisting Functions */

if(!Array.prototype.pull){
	Array.prototype.pull = function(){
		"use strict";
		var i = Array.prototype.indexOf.apply(this, arguments);
		if(i >= 0){
			for(i; i < this.length - 1; i++){
				this[i] = this[i + 1];
			}
			this.pop();
		}
	};
}

if(!Array.prototype.count){
	Array.prototype.count = function(){
		"use strict";
		var n = 0;
		for(var i = 0; i < this.length; i++){
			if(this[i] == arguments[0]){
				n++;
			}
		}
		return n;
	};
}

function setLength(a){
	// Creates a set from a list.
	var set = new Set(a);
	return set.size;
}

function rInt(a, b){
	// Generates a random integer in the specified range.
	if(typeof(b) == "undefined"){
		b = 0;
	}
	return Math.floor(a + ((b - a) * Math.random()));
}

function formatSyllable(s, a, b){
	var toneA = ["a", "ā", "á", "ǎ", "à"];
	var toneE = ["e", "ē", "é", "ě", "è"];
	var toneO = ["o", "ō", "ó", "ǒ", "ò"];
	var toneV = ["ü", "ǖ", "ǘ", "ǚ", "ǜ"];
	var toneI = ["i", "ī", "í", "ǐ", "ì"];
	var toneU = ["u", "ū", "ú", "ǔ", "ù"];
	
	var subs = s.slice(a, b);
	var n = parseInt(s[b]) % 5;
	
	if(subs.includes("a")){
		subs = subs.replace("a", toneA[n]);
	}
	else if(subs.includes("e")){
		subs = subs.replace("e", toneE[n]);
	}
	else if(subs.includes("o")){
		subs = subs.replace("o", toneO[n]);
	}
	else if(subs.includes("ü")){
		subs = subs.replace("ü", toneV[n]);
	}
	else if(subs.indexOf("i") > subs.indexOf("u")){
		subs = subs.replace("i", toneI[n]);
	}
	else if(subs.indexOf("u") > subs.indexOf("i")){
		subs = subs.replace("u", toneU[n]);
	}
	return s.slice(0, a) + subs + s.slice(b + 1, s.length);
}

function formatPinyin(s){
	// Format a pinyin string.
	s = s.replace(/v/g, "ü");
	var i = 0;
	for(var j = 0; j < s.length; j++){
		if(["1", "2", "3", "4", "5"].includes(s[j])){
			s = formatSyllable(s, i, j);
			i = j;
			j--;
		}
	}
	return s;
}

/* Display */

function enableButts(){
	// Enables buttons.
	if(id("mpX").paused){
		// Prevents execution during transition.
		for(var i = 0; i < 4; i++){
			butt[i].removeAttribute("style");
		}
	}
}

function disableButts(b){
	// Disables buttons.
	for(var i = 0; i < 4; i++){
		if(b == 0){
			butt[i].style.color = "#fb8";
		}
		butt[i].style.pointerEvents = "none";
	}
}

function update(){
	// Updates elements.
	for(var i = 0; i < 4; i++){
		if(hash[2] == "P"){
			butt[i].innerHTML = formatPinyin(choices[i]);
		}
		else{
			butt[i].innerHTML = choices[i];
		}
	}
	continuity();

	id("complete").style.width = 100 * (setLength(correct) / db.length) + "%";
	id("completion").innerHTML = "Completion: " + setLength(correct) + "/" + setLength(db);

	id("mp3").src = "mp3/vocab/wl" + hash.slice(0, 2) + "-" + db.indexOf(choices[answer]) + ".mp3";
	id("mp3").playbackRate = mp3Rate;
	id("mp3").play();
	disableButts(0);
}

/* Logic */

function check(n){
	// Reveals answer.
	if(n == answer){
		correct.push(choices[answer]);
		butt[n].style.background = "#8d3";
		id("mpX").src = "mp3/henhao.mp3";
	}
	else{
		correct.pull(choices[answer]);
		butt[n].style.background = "#f43";
		id("mpX").src = "mp3/budui.mp3";
	}
	id("mpX").play();
	disableButts(1);
}

function newChoices(){
	// Randomly chooses new choices.
	db = vocab[hash[2]][lesson];
	
	for(var i = 0; i < 4; i++){
		butt[i].removeAttribute("style");
	}
	choices = [];
	answer = rInt(4);
	while(choices.length < 4){
		var entry = db[rInt(db.length)];
		if(choices.length == answer && correct.includes(entry)){
			// Previously correct answers will have lower chances of being chosen.
			if(Math.random() > Math.pow(1 / (1 + correct.count(entry)), Math.E)){
				continue;
			}
		}
		if(!choices.includes(entry)){
			choices.push(entry);
		}
	}
	update();
}

/* Hash Control */

function newHash(h){
	// Sets a new hash based on hash fragment given.
	var oldH = location.hash.slice(1);
	location.hash = oldH.slice(0, 2) + h;
}

function hashValid(){
	// Checks whether the hash is valid.
	var hsh = location.hash.slice(1);
	var lsn = parseInt(hsh.slice(0, 2));
	if(hsh.length == 3){
		if(lsn >= 1 && lsn <= 23){
			if(hsh[2] == "P" || hsh[2] == "E" || hsh[2] == "C"){
				return true;
			}
		}
	}
	return false;
}

function changeHash(){
	// Oversees hash changes; calls setup for valid hashes and reverts invalid hashes.
	if(hashValid()){
		id(hash[2]).removeAttribute("style");
		setup();
	}
	else{
		location.hash = hash;
	}
}

function setup(){
	// Sets up website display based on the hash.
	if(!hashValid()){
		location.hash = "01P";
	}
	hash = location.hash.slice(1);
	lesson = parseInt(hash.slice(0, 2));
	
	var pec = {"P": "Pinyin", "E": "English", "C": "Chinese"};

	document.title = "Lesson " + lesson + " Words: " + pec[hash[2]];
	id("title").innerHTML = "第" + (number(lesson)) + "课";
	
	// hash[2] controls the language
	id(hash[2]).style.background = "#fff";
	id(hash[2]).style.color = "#000";
	
	correct = [];
	newChoices();
}

setup();
window.onhashchange = changeHash;

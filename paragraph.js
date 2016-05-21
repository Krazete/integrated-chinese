/* Variables */

var hash;
var lesson;

var range;
var db;
var choices;
var question;
var answer;
var points;
var current;

var butt = document.getElementsByClassName("choice");

var exercise = {
	"ME": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
	"MC": [4, 5, 6, 8, 9, 10, 11],
	"TE": [3, 7],
	"TC": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
	"TM": [13]
};

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

function rInt(a, b){
	// Generates a random integer in the specified range.
	if(typeof(b) == "undefined"){
		b = 0;
	}
	return Math.floor(a + ((b - a) * Math.random()));
}

function shuffle(s){
	// Shuffles an array.
	var set = [];
	while(set.length < s.length){
		var entry = s[rInt(s.length)];
		if(!set.includes(entry)){
			set.push(entry);
		}
	}
	return set;
}

/* Display */

function enableButts(){
	// Enables buttons.
	for(var i = 0; i < 5; i++){
		var n = choicePositionCorrection(i);
		butt[n].removeAttribute("style");
	}
}

function disableButts(){
	// Disables buttons.
	for(var i = 0; i < 5; i++){
		var n = choicePositionCorrection(i);
		butt[n].style.pointerEvents = "none";
	}
}

function point(){
	// Display points.
	id("points").innerHTML = "";
	for(var i = 0; i < points.length; i++){
		var point = document.createElement("div");
		point.className = "point";
		point.setAttribute("onClick", "changeQuestion(" + i + ")");
		if(points[i] == 0){
			point.style.background = "#fca";
		}
		else if(points[i] == 1){
			point.style.background = "#8d3";
		}
		if(i == current){
			point.style.boxShadow = "0 0 10px #fff";
		}
		point.style.margin = "0 " + (33 / points.length) + "% 0 " + (33 / points.length) + "%";
		id("points").appendChild(point);
	}
}

/* Logic */

function changeQuestion(n){
	// Change current question.
	if(current != n){
		current = n;
		id("question").innerHTML = db[current][question];
		if(hash[2] == "M"){
			choices = shuffle(db[current].slice(1));
			for(var i = 0; i < 3; i++){
				butt[i].innerHTML = choices[i];
			}
		}
		else if(hash[2] == "T" && lesson != 13){
			choices = [true, false];
		}
		if(!(lesson == 13 && hash[2] == "T")){
			id("mp3").src = "mp3/paragraph/pl" + hash.toLowerCase() + "-" + (current + 1) + ".mp3";
			id("mp3").playbackRate = mp3Rate;
		}
		continuity();
		point();
	}
	enableButts();
}

function choicePositionCorrection(n){
	if(hash[2] == "T"){
		n += 3;
		if(lesson == 13){
			n += 2;
		}
	}
	return n;
}

function check(n){
	// Reveals answer.
	if(choices[n] == db[current][answer]){
		n = choicePositionCorrection(n);
		points[current] = 1;
		butt[n].style.background = "#8d3";
		id("mpX").src = "mp3/henhao.mp3";
		id("mpX").setAttribute("onPause", "changeQuestion(" + ((current + 1) % db.length) + ")");
		if(lesson == 13 && hash[2] == "T"){
			point();
		}
	}
	else{
		n = choicePositionCorrection(n);
		butt[n].style.background = "#f43";
		id("mpX").src = "mp3/budui.mp3";
		id("mpX").setAttribute("onPause", "changeQuestion(" + current + ")");
	}
	disableButts();
	id("mpX").play();
}

/* Proceed Transition */
function proceed(){
	// Hide introductory page and show exercise.
	id("playScroll").style.transform = "translateY(-100%)";
	id("fulltext").style.display = "none";
	
	id("exercise").style.display = "table";
	if(lesson == 13 && hash[2] == "T"){
		id("map").style.display = "table-row-group";
		question = 1;
		answer = 0;
		choices = [0, 1, 2, 3, 4];
	}
	else if(hash[2] == "M"){
		id("choice").style.display = "table-row-group";
		question = 0;
		answer = 1;
	}
	else if (hash[2] == "T"){
		id("truth").style.display = "table-row-group";
		question = 1;
		answer = 0;
	}
	
	id("speedposition2").appendChild(document.getElementsByClassName("speed")[0]);
	
	points = [];
	db = paragraph[hash.slice(2)][lesson];
	for(var i = 0; i < db.length; i++){
		points.push(0);
	}
	
	changeQuestion(0);
}

// BEGIN
// AUDIO
// CONTROLS

function mp3Seek(event){
	// Sets audio to clicked time.
	x = event.clientX / innerWidth;
	id("mp3").currentTime = x * id("mp3").duration;
}

id("playScroll").addEventListener("click", mp3Seek);

function mp3Time(){
	// Changes width of playTime bar according to audio time.
	requestAnimationFrame(mp3Time);
	id("playTime").style.width = 100 * (id("mp3").currentTime / id("mp3").duration) + "%";
}

function mp3Pause(){
	// Resets play button.
	id("playIcon").removeAttribute("style");
}

function mp3Play(){
	// Turns play button into a pause button.
	id("playIcon").style.height = "30px";
	id("playIcon").style.width = "10px";
	id("playIcon").style.borderTop = "0 solid transparent";
	id("playIcon").style.borderBottom = "0 solid transparent";
	id("playIcon").style.borderLeft = "10px solid #000";
	id("playIcon").style.borderRight = "10px solid #000";
}

function mp3Src(){
	// Changes the audio source.
	mp3Pause();
	id("playTime").style.width = "0";
	id("mp3").src = "mp3/paragraph/pl" + hash.toLowerCase() + "-0.mp3";
	id("mp3").playbackRate = mp3Rate;
}

function mp3Toggle(){
	// Toggle play and pause.
	if(id("mp3").paused){
		id("mp3").play();
	}
	else{
		id("mp3").pause();
	}
}

// END
// AUDIO
// CONTROLS

/* Hash Control */

function resetLayout(){
	// Reset navigation menu.
	id("M").removeAttribute("style");
	id("T").removeAttribute("style");
	id("T").innerHTML = "True or False";
	id("E").removeAttribute("style");
	id("E").colSpan = 1;
	id("C").removeAttribute("style");
	id("C").colSpan = 1;
	
	id("playScroll").removeAttribute("style");
	id("speedposition1").appendChild(document.getElementsByClassName("speed")[0]);
	id("fulltext").removeAttribute("style");
	id("exercise").removeAttribute("style");
	id("choice").removeAttribute("style");
	id("truth").removeAttribute("style");
	id("map").removeAttribute("style");
	
	current = -1;
}

function newLayout(){
	// Reconfigure navigation menu.
	resetLayout();
	if(exercise["TM"].includes(lesson)){
		id("T").innerHTML = "Map Reading";
	}
	if(hash[2] == "M"){
		if(!exercise["ME"].includes(lesson)){
			id("E").style.display = "none";
			id("C").colSpan = 2;
		}
		if(!exercise["MC"].includes(lesson)){
			id("C").style.display = "none";
			id("E").colSpan = 2;
		}
	}
	else if(hash[2] == "T"){
		if(exercise["TM"].includes(lesson)){
			id("E").style.display = "none";
			id("C").colSpan = 2;
		}
		else{
			if(!exercise["TE"].includes(lesson)){
				id("E").style.display = "none";
				id("C").colSpan = 2;
			}
			if(!exercise["TC"].includes(lesson)){
				id("C").style.display = "none";
				id("E").colSpan = 2;
			}
		}
	}
	mp3Src();
}

function newHash(h){
	// Sets a new hash based on hash fragment given.
	var oldH = location.hash.slice(1);
	if(h == "M" || h == "T"){
		location.hash = oldH.slice(0, 2) + h + oldH[3];
	}
	else if(h == "E" || h == "C"){
		location.hash = oldH.slice(0, 3) + h;
	}
}

function lessonValid(){
	// Checks whether the lesson is valid.
	var hsh = location.hash.slice(1);
	var lsn = parseInt(hsh.slice(0, 2));
	if(lsn >= 1 && lsn <= 23){
		return true;
	}
	return false;
}

function hashValid(){
	// Checks whether the hash and exercise is valid.
	var hsh = location.hash.slice(1);
	var lsn = parseInt(hsh.slice(0, 2));
	if(hsh.length == 4){
		if(hsh.slice(2) in exercise){
			if(exercise[hsh.slice(2)].includes(lsn)){
				return true;
			}
		}
	}
	return false;
}

function changeHash(){
	// Oversees hash changes; calls setup for valid hashes and reverts invalid hashes.
	if(lessonValid()){
		setup();
	}
	else{
		location.hash = hash;
	}
}

function setup(){
	// Sets up website display based on the hash.
	if(!lessonValid()){
		location.hash = "01ME";
	}
	lesson = parseInt(location.hash.slice(1, 3));
	if(!hashValid()){
		if(location.hash[3] == "M"){
			if(exercise["ME"].includes(lesson)){
				var ecm = "ME";
			}
			else if(exercise["MC"].includes(lesson)){
				var ecm = "MC";
			}
		}
		else if(location.hash[3] == "T"){
			if(exercise["TE"].includes(lesson)){
				var ecm = "TE";
			}
			else if(exercise["TC"].includes(lesson)){
				var ecm = "TC";
			}
			else if(exercise["TM"].includes(lesson)){
				var ecm = "TM";
			}
		}
		else{
			var ecm = "ME";
		}
		location.hash = location.hash.slice(1, 3) + ecm;
	}
	hash = location.hash.slice(1);
	
	document.title = "Lesson " + lesson + " Paragraphs: " + hash.slice(2, 4);
	id("title").innerHTML = "第" + (number(lesson)) + "课";
	
	newLayout();
	// hash[2] controls the exercise
	id(hash[2]).style.background = "#fff";
	// hash[3] controls the language
	if(lesson == 13 && hash[2] == "T"){
		id("C").style.background = "#fff";
	}
	else{
		id(hash[3]).style.background = "#fff";
	}
		
	continuity();
}

setup();
mp3Time();
window.onhashchange = changeHash;

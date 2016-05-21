var hash;
var lesson;
var textFile;

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
	id("mp3").src = "mp3/text/t" + hash[2].toLowerCase() + lesson + ".mp3";
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

// BEGIN
// MPX
// TOOLTIP

activateTooltip();

function hideTooltip(){
	// Overwrite the hideTooltip function.
	tooltip.removeAttribute("style");
	tooltip.innerHTML = "";
	id("mpX").pause();
	id("mpX").removeAttribute("src");
	document.body.onmousedown = "";
}

function mpXPlay(f){	
	id("mpX").src = f;
	id("mpX").play();
}

function mpXTooltip(n){
	// Display vocabulary information.
	mp3.pause();
		
	showTooltip(id("innerText").getElementsByTagName("a")[n]);
	if(lesson == 20 && hash[2] == "A" && hash[4] == "P" && n == 1){
		// Takes into account the special case of the second pattern in Text 20A.
		n = 0;
	}
	if(lesson == 18 && hash[2] == "A" && hash[4] == "W" && n == 7){
		// Takes into account the special case of the eighth word in Text 18A.
		n = 5;
	}
	
	switch(hash[4]){
		case "W":	var vocab = word[hash[2]][lesson][n];
					var root = "mp3/word/";
					break;
		case "P":	var vocab = pattern[hash[2]][lesson][n];
					var root = "mp3/pattern/";
					break;
	}
	var key = Object.keys(vocab)[0];
	var val = vocab[key];
	
	var file = root + hash[4].toLowerCase() + hash[2].toLowerCase() + hash.slice(0, 2);
	file += (n < 9 ? "0" : "") + (n + 1) + "-";
		
	for(var i = 0; i < val.length + 1; i++){
		var x = create("a");
		if(i == 0){
			var title = "<b>" + key + "</b>:";
			if(lesson < 12){
				tooltip.innerHTML = title;
			}
			else{
				x.innerHTML = title;
			}
		}
		else{
			brTooltip();
			x.innerHTML = val[i - 1];
		}
		x.setAttribute("onClick", "mpXPlay('" + file + i + ".mp3')");
		tooltip.appendChild(x);
	}
	
	continuity();
}

function highlight(){
	// Gives anchor elements an onClick attribute respective of their index.
	for(var i = 0; i < id("innerText").getElementsByTagName("a").length; i++){
		id("innerText").getElementsByTagName("a")[i].setAttribute("onClick", "mpXTooltip(" + i + ")");
	}
}

// END
// MPX
// TOOLTIP

function newLayout(h){
	// Sets up button displays based on hash fragment.
	if(h == "R" || h == "L"){
		switch(h){
			case "R":	id("outerText").removeAttribute("style");
						id("innerText").removeAttribute("style");
						id("T").style.display = "";
						id("W").style.display = "";
						id("P").style.display = "";
						break;
			case "L":	id("outerText").style.height = "218px";
						id("outerText").style.backgroundColor="black";
						id("outerText").style.backgroundImage = "url(img/" + ((lesson < 12 || lesson == 14) ? "000.png" : hash.slice(0, 3).toLowerCase() + ".jpg)");
						id("innerText").style.opacity = "0";
						id("innerText").style.pointerEvents = "none";
						id("T").style.display = "none";
						id("W").style.display = "none";
						id("P").style.display = "none";
						break;
		}
	}
	else if(h == "T" || h == "W" || h == "P"){
		switch(h){
			case "T":	id("innerText").innerHTML = id("innerText").innerHTML.replace(/\[/g, "").replace(/{/g, "").replace(/}/g, "").replace(/]/g, "");
						break;
			case "W":	id("innerText").innerHTML = id("innerText").innerHTML.replace(/\[/g, "").replace(/]/g, "").replace(/{/g, "<a>").replace(/}/g, "</a>");
						highlight();
						break;
			case "P":	id("innerText").innerHTML = id("innerText").innerHTML.replace(/{/g, "").replace(/}/g, "").replace(/\[/g, "<a>").replace(/]/g, "</a>");
						highlight();
						break;
		}
	}
}

function newHash(h){
	// Sets a new hash based on hash fragment given.
	var oldH = location.hash.slice(1);
	if(parseInt(h) > 0 && parseInt(h) <= 23){
		location.hash = h + oldH.slice(2);
	}
	else if(h == "A" || h == "B"){
		location.hash = oldH.slice(0, 2) + h + oldH.slice(3);
	}
	else if(h == "R" || h == "L"){
		location.hash = oldH.slice(0, 3) + h + oldH.slice(4);
	}
	else if(h == "T" || h == "W" || h == "P"){
		location.hash = oldH.slice(0, 4) + h;
	}
	newLayout(h);
}

function hashValid(){
	// Checks whether the hash is valid.
	var hsh = location.hash.slice(1);
	var lsn = parseInt(hsh.slice(0, 2));
	if(hsh.length == 5){
		if(lsn > 0 && lsn <= 23){
			if(hsh[2] == "A" || hsh[2] == "B"){
				if(hsh[3] == "R" || hsh[3] == "L"){
					if(hsh[4] == "T" || hsh[4] == "W" || hsh[4] == "P"){
						return true;
					}
				}
			}
		}
	}
	return false;
}

function changeHash(){
	// Oversees hash changes; calls setup for valid hashes and reverts invalid hashes.
	if(hashValid()){
		id(hash[2]).removeAttribute("style");
		id(hash[3]).removeAttribute("style");
		id(hash[4]).removeAttribute("style");
		setup();
	}
	else{
		location.hash = hash;
	}
}

function setup(){
	// Sets up website display based on the hash.
	if(!hashValid()){
		// Sets hash to 01ART if location begins on an invalid hash.
		location.hash = "01ART";
	}
	hash = location.hash.slice(1);
	lesson = parseInt(hash.slice(0, 2));
	textFile = text[hash[2]];
	
	document.title = "Lesson " + lesson + " Review";
	id("title").innerHTML = "第" + (number(lesson)) + "课";
	
	id("innerText").innerHTML = textFile[lesson];
	continuity();
	
	// hash[2] controls the text version (A or B)
	id(hash[2]).style.background = "#fff";
	id(hash[2]).style.color = "#000";
	
	// hash[3] controls listening or reading
	id(hash[3]).style.background = "#fff";
	id(hash[3]).style.color = "#000";
	newLayout(hash[3]);
	
	// hash[4] controls text highlighting
	id(hash[4]).style.background = "#fff";
	id(hash[4]).style.color = "#000";
	newLayout(hash[4]);
	
	mp3Src();
	
}

setup();
mp3Time();
window.onhashchange = changeHash;

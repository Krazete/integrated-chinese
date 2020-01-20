function mp3Src(e) {
	var rate = id("mp3").playbackRate; // (playbackRate = 1) is default
	id("mp3").pause(); // just in case
	mp3Pause();
	id("progress-after").removeAttribute("style");
	id("mp3").src = e;
	id("mp3").load(); // just in case
	mp3Speed(rate);
}

function mp3Progress() {
	var ratio = id("mp3").currentTime / id("mp3").duration;
	id("progress-after").style.width = (ratio * 100) + "%";
	if (!id("mp3").paused)
		requestAnimationFrame(mp3Progress); // (progress) event listener is slow
}

function mp3SetTime(n){
	id("mp3").currentTime = n; // (0 â‰¤ currentTime â‰¤ duration) is automatic
	if (id("mp3").paused)
		mp3Progress();
}

function mp3Seek(e) {
	var ratio = e.offsetX / id("progress").clientWidth;
	mp3SetTime(id("mp3").duration * ratio); // (duration == Infinity) on localhost sometimes
}

function mp3Play() {
	id("mpX").pause();
	id("toggle").classList.add("pause");
	id("toggle").classList.remove("play");
	mp3Progress();
}

function mp3Pause() {
	id("toggle").classList.add("play");
	id("toggle").classList.remove("pause");
}

function mp3Toggle() {
	if (id("mp3").paused)
		id("mp3").play();
	else
		id("mp3").pause();
}

function mp3Speed(n) {
	id("mp3").playbackRate = n ? n : 1; // just in case
	id("speed-100").classList.add("speed-selected");
	id("speed-75").classList.add("speed-selected");
	id("speed-50").classList.add("speed-selected");
	if (n < 1)
		id("speed-100").classList.remove("speed-selected");
	if (n < 0.75)
		id("speed-75").classList.remove("speed-selected");
	if (n < 0.5)
		id("speed-50").classList.remove("speed-selected"); // should never happen
}

function mp3Keys(e) {
	var key = e.keyCode;
	if (key == 32)
		mp3Toggle();
	else if (key == 37)
		mp3SetTime(id("mp3").currentTime - 1);
	else if (key == 38)
		mp3Speed(Math.min(id("mp3").playbackRate + 0.25, 1));
	else if (key == 39)
		mp3SetTime(id("mp3").currentTime + 1);
	else if (key == 40)
		mp3Speed(Math.max(id("mp3").playbackRate - 0.25, 0.5));
	else if (47 < key && key < 58)
		mp3SetTime(id("mp3").duration * (key - 48) / 10);
	else if (95 < key && key < 106)
		mp3SetTime(id("mp3").duration * (key - 96) / 10);
}

function mp3Init(){
	id("mp3").addEventListener("play", mp3Play);
	id("mp3").addEventListener("pause", mp3Pause);
	id("toggle").addEventListener("click", mp3Toggle);
	id("progress").addEventListener("click", mp3Seek);
	id("speed-50").addEventListener("click", function(){mp3Speed(0.5)}); // arrow functions aren't standard yet
	id("speed-75").addEventListener("click", function(){mp3Speed(0.75)});
	id("speed-100").addEventListener("click", function(){mp3Speed(1)});
	if (!mobile) // idk about this
		document.body.addEventListener("keydown", mp3Keys);
	id("tip").addEventListener("click", function(){id("tip").classList.add("hid")});
	id("tip-button").addEventListener("click", function(){id("tip").classList.remove("hid")})
}

// MPX

function mpXPlay(e) {
	if (id("mp3"))
		id("mp3").pause();
	id("mpX").pause(); // just in case
	id("mpX").src = e;
	id("mpX").load(); // just in case
	id("mpX").play();
}

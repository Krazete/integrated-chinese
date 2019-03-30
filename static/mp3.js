function MP3(source, element) {
	this.audio = new Audio();
	this.audio.src = source;

	if (element) {
		this.connect(element);
	}
}

MP3.prototype.loadAudio = function () {
	element.classList.remove("loading");
};

MP3.prototype.play = function () {
	for (var component in this.speaker) {
		this.speaker[component].classList.remove("playing");
	}
};

MP3.prototype.pause = function () {
	for (var component in this.speaker) {
		this.speaker[component].classList.add("playing");
	}
};

MP3.prototype.clickToggle = function () {
	if (this.classList.contains("play")) {
		this.classList.remove("play");
	}
	else {
		this.classList.add("play");
	}
};

MP3.prototype.clickProgress = function () {
};

MP3.prototype.clickSpeed = function () {
	if (this.classList.contains("")) {
		this.classList.remove("");
	}
	else {
		this.classList.add("");
	}
};

MP3.prototype.connect = function (element) {
	this.speaker = {
		"toggle": element.getElementsByClassName("toggle")[0],
		"progress": element.getElementsByClassName("progress")[0],
		"speed": element.getElementsByClassName("speed")[0]
	};

	if (this.speaker.toggle) {
		this.pause();
		this.speaker.toggle.addEventListener("click", this.clickToggle);
	}
	if (this.speaker.progress) {
		this.pause();
		this.speaker.progress.addEventListener("click", this.clickProgress);
	}
	if (this.speaker.speed) {
		this.pause();
		this.speaker.speed.addEventListener("click", this.clickSpeed);
	}
};

MP3.prototype.disconnect = function () {
	if (this.speaker.toggle) {
		this.pause();
		this.speaker.toggle.removeEventListener("click", this.clickToggle);
	}
	if (this.speaker.progress) {
		this.pause();
		this.speaker.progress.removeEventListener("click", this.clickProgress);
	}
	if (this.speaker.speed) {
		this.pause();
		this.speaker.speed.removeEventListener("click", this.clickSpeed);
	}
}

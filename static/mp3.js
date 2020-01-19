var Player = (function () {
	var anchor = document.createElement("a");
	var discs = [];
	var players = [];

	function getAbsoluteURL(url) {
		anchor.href = url;
		return anchor.href;
	}

	function getDisc(url) {
		var src = getAbsoluteURL(url);
		for (var disc of discs) {
			if (disc.src == src) {
				return disc;
			}
		}
		var newDisc = new Audio(src);
		discs.push(newDisc);
		return newDisc;
	}

	function getListener(element, add) {
		var elementListener = add ? window.addEventListener : window.removeEventListener;
		return elementListener.bind(element);
	}

	function updateToggle(player) {
		if (player.disc.paused) {
			player.toggle.classList.add("play");
			player.toggle.classList.remove("pause");
		}
		else {
			player.toggle.classList.remove("play");
			player.toggle.classList.add("pause");
		}
	}

	function updateProgress(player) {
		var fg = "maroon";
		var bg = "var(--lo)";
		var percent = 100 * player.disc.currentTime / player.disc.duration;
		player.progress.style.background = "linear-gradient(to right, " + fg + " " + percent + "%, " + bg + " " + percent + "%)";
	}

	function updateSpeed(player) {
		for (var speed of player.speeds) {
			speed.classList.add("selected");
		}
	}

	function updatePlayer(player) {
		updateToggle(player);
		updateProgress(player);
		updateSpeed(player);
	}

	function updatePlayers() {
		var keepUpdating = false;
		for (var player of players) {
			updatePlayer(player);
			if (!player.disc.paused) {
				keepUpdating = true;
			}
		}
		if (keepUpdating) {
			requestAnimationFrame(updatePlayers);
		}
	}

	function Player(element) {
		this.disc = null;
		this.element = element;
		players.push(this);
	}

	Player.prototype.handleEvent = function (e) {
		var thisElement = e.target;
		while (thisElement != this.currentTarget) {
			if (thisElement.classList.contains("toggle")) {
				if (this.disc.paused) {
					this.disc.play();
				}
				else {
					this.disc.pause();
				}
				updatePlayers(); /* maybe isolate? */
			}
			else if (thisElement.classList.contains("progress")) {
				var percent = e.offsetX / this.progress.clientWidth;
				console.log(this.disc.duration * percent);
				this.disc.currentTime = this.disc.duration * percent;
				updatePlayer(this);
			}
			else if (thisElement.id == "speed-50") {
				console.log(50);
			}
			else if (thisElement.id == "speed-75") {
				console.log(75);
			}
			else if (thisElement.id == "speed-100") {
				console.log(100);
			}
			else {
				thisElement = thisElement.parentElement;
				continue;
			}
			break;
		}
	};

	Player.prototype.installDisc = function (install) {
		if (install) {
			this.element.addEventListener("click", this);
		}
		else {
			this.element.removeEventListener("click", this);
		}
		// var toggleListener = getListener(this.toggle, install);
		// var progressListener = getListener(this.progress, install);
		// toggleListener("click", this);
		// progressListener("click", this);
		// for (var speed of this.speeds) {
		// 	var speedListener = getListener(speed, install);
		// 	speedListener("click", this.updateDisplay);
		// }
	};

	Player.prototype.insertDisc = function (src) {
		if (this.disc) { /* uninstall current disc */
			this.installDisc(false);
		}
		this.disc = getDisc(src);
		this.installDisc(true);
	};

	return Player;
})();

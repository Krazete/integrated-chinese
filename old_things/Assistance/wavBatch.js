function download(h) {
	var a = document.createElement("a");
	a.setAttribute("download", "");
	a.href = h;
	a.click();
}

function batchDownload(d) {
	var downloaded = [];
	var xhr = [];
	for (var i = 0; i <= 100; i++)
		(function(i) {
			var h = d + i + ".wav";
			xhr[i] = new XMLHttpRequest();
			xhr[i].open("GET", h);
			xhr[i].onload = function() {
				if (this.status == 200) {
					download(h);
					downloaded.push(h);
				}
			};
			xhr[i].send();
		})(i);
	return downloaded;
}

var downloaded = batchDownload("http://www.language.berkeley.edu/ic/gb/wav/");

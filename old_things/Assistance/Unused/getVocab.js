/* Store all sound files in valid array. */

function download(n, l){
	var dl = document.createElement("a");
	dl.setAttribute("download", n);
	dl.href = l;
	dl.click();
}

function getVocab(ws){
	var i;
	font = ws.getElementsByTagName("font");
	bgsound = ws.getElementsByTagName("bgsound");
	option = ws.getElementsByTagName("option");
	download(font[0].innerHTML, bgsound[0].getAttribute("src"))
	for(i = 0; i < option.length; i++){
		download(option[i].innerHTML, option[i].value);
	}
}

function GETALL(wp, ab){
	var i, j;
	var xhr = [];
	for(i = 0; i < 25; i++){
		xhr.push([]);
		for(j = 0; j < 100; j++){
			xhr[i].push([]);
			(function(i, j){
				var temp;
				var h = "http://www.language.berkeley.edu/ic/gb/review/" + wp + "/" + wp + (i < 10 ? '0' : '') + i + ab + "_" + (j < 10 ? '0' : '') + j + ".html";
				xhr[i][j] = new XMLHttpRequest();
				xhr[i][j].open("GET", h);
				xhr[i][j].send();
				xhr[i][j].onreadystatechange = function(){
					if(xhr[i][j].readyState == 4 && xhr[i][j].status == 200){
						temp = document.createElement('div');
						temp.innerHTML = xhr[i][j].response;
						getVocab(temp);
					}
				};
			})(i, j);
		}
	}
}

//GETALL("words", "");
//GETALL("words", "b");
//GETALL("patterns", "");
GETALL("patterns", "b");

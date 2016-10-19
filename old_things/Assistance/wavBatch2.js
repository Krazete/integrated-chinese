/* Store all sound files in valid array. */
var valid = [];
var xhr = [];

for(var i = 0; i < 23; i++){
	xhr[i] = [];
	for(var j = 0; j < 100; j++){	
		(function(i, j){
			var h = "http://www.language.berkeley.edu/ic/gb/wav/words/" + (i + 1) + "b." + (j < 10 ? "0" : "") + j + ".0.wav";
			xhr[i][j] = new XMLHttpRequest();
			xhr[i][j].open("GET", h);
			xhr[i][j].send();
			xhr[i][j].onreadystatechange=function(){
				if(xhr[i][j].readyState == 4 && xhr[i][j].status == 200){
					valid.push(h);
					}
				};
		})(i, j);
	}
}

/* Download all valid sound files. Execute separately. */
for(var i = 0; i < valid.length; i++){
	var a = document.createElement("a");
	a.setAttribute("download", "");
	a.href = valid[i];
	a.click();
}

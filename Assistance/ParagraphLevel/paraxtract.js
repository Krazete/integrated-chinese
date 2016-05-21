/* Store all sound files in valid array. */
var valid = [];
var xhr = [];

for(var i = 0; i < 23; i++){
	(function(i){
		var h="http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 9 ? "0" : "") + (i+1) + "p_listeningreading.html";
		xhr[i] = new XMLHttpRequest();
		xhr[i].open("GET", h);
		xhr[i].send();
		xhr[i].onreadystatechange = function(){
			if(xhr[i].readyState == 4 && xhr[i].status == 200){
				var doc = document.createElement("div");
				doc.innerHTML = xhr[i].response;
				valid.push((i + 1) + doc.getElementsByTagName("script")[0].innerHTML);
				}
			};
	})(i);
}

/* Download all valid sound files. */
function done(){
	var blob = new Blob(valid, {type: "text/plain"});
	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "WORDS";
	document.body.appendChild(link);
	link.click();
}

/*
var valid = ["../wav/733.wav",
"../wav/333.wav",
"../wav/132.wav",
"../wav/232.wav",
"../wav/833.wav",
"../wav/a33.wav",
"../wav/exercises/12p2.wav",
"../wav/exercises/13p2.wav",
"../wav/exercises/17p2.wav",
"../wav/exercises/15p2.wav",
"../wav/exercises/16p2.wav",
"../wav/exercises/18p2.wav",
"../wav/exercises/19p2.wav",
"../wav/exercises/21p2.wav",
"../wav/exercises/23p2.wav",
"../wav/exercises/22p2.wav",
"../wav/exercises/20p2.wav"];
for(i = 0; i < valid.length; i++){
	var a = document.createElement("a");
	a.setAttribute("download", "");
	a.href = valid[i];
	a.click();
}
*/
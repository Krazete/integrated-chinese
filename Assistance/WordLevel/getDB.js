var xhr = [];
var typ = ["pinyin", "english", "characters"];
var active = 2;

for(var i = 0; i < 23; i++){
	xhr[i] = [];
	(function(i){
		var page = "http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 9 ? "0" : "") + (i + 1) + "w_sound" + typ[active] + "_main.html";
		xhr[i] = new XMLHttpRequest();
		xhr[i].open("GET", page);
		xhr[i].send();
		xhr[i].onreadystatechange = function(){
			if (xhr[i].readyState == 4 && xhr[i].status == 200){
				var newDoc = document.createElement("div");
				newDoc.innerHTML = xhr[i].response;
				
				if(newDoc.innerHTML.search("dball") >= 0){
					open(page);
				}
			}
		};
	})(i);
}

// Separate
avascript:
var typ = ["pinyin", "english", "characters"];
var active = 2;

function getDB(){
	var str = JSON.stringify(dball);
	var blob = new Blob([str.slice(2, str.length - 2).replace(/\",\"/g, "\n")], {type: "text/plain"});
	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = typ[active];
	link.click();
}

getDB();
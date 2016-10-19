var xhr = [];
var trunk = [];
var names = ["WAcontents.js", "WBcontents.js", "PAcontents.js", "PBcontents.js"];
var links = [["/words/words", "_"], ["/words/words", "b_"], ["/patterns/patterns", "_"], ["/patterns/patterns", "b_"]];
var active = 0

function done(){
	var blob = new Blob(trunk, {type: "text/plain"});
	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = names[active];
	document.body.appendChild(link);
	link.click();
}

var dictionary = [];

for (var i = 0; i < 23; i++){
	xhr[i] = [];
	dictionary[i] = []
	for (var j = 0; j < 50; j++){
		(function (i, j){
			var h = "http://www.language.berkeley.edu/ic/gb/review" + links[active][0] + (i < 9 ? "0" : "") + (i + 1) + links[active][1] + (j < 9 ? "0" : "") + (j + 1) + ".html";
			xhr[i][j] = new XMLHttpRequest();
			xhr[i][j].open("GET", h);
			xhr[i][j].send();
			xhr[i][j].onreadystatechange = function(){
				if (xhr[i][j].readyState == 4 && xhr[i][j].status == 200){
					var newDoc = document.createElement("div");
					newDoc.innerHTML = h + xhr[i][j].response;
					document.body.appendChild(newDoc);
					
					var preword = newDoc.getElementsByTagName("font")[0].innerHTML;
					var word = preword.slice(1, preword.length - 1);
					var example = newDoc.getElementsByTagName("option");
					
					/*
 					var count = 1;
					try{
						var down = document.createElement("a");
						down.href = newDoc.getElementsByTagName("bgsound")[0].getAttribute("src");
						down.download = (i < 9 ? "0" : "") + (i + 1) + "-" + (j < 9 ? "0" : "") + (j + 1) + "-0.mp3";
						down.click();
					}
					catch (e){
					}
					*/
					
					var examples = [];
					for (var k in example){
						examples.push(example[k].innerHTML);
						/*
						if(example[k].value != "../../wav/"){
							down = document.createElement("a");
							down.href = example[k].value;
							down.download = (i < 9 ? "0" : "") + (i + 1) + "-" + (j < 9 ? "0" : "") + (j + 1) + "-" + (count++) + ".mp3";
							down.click();
						}
						*/
					}
					
					inner = {};
					inner[word] = examples;
					dictionary[i].push(inner);
				}
			};
		})(i, j);
	}
}

function getText(){
	for (var i in dictionary){
		for (var j in dictionary[i][Object.keys(dictionary[i])[0]]){
			if (dictionary[i][Object.keys(dictionary[i])[0]][j] == undefined){
				delete dictionary[i][Object.keys(dictionary[i])[0]][j];
			}
		}
	}
	trunk = [JSON.stringify(dictionary)];
	done();
}
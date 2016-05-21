/* Only works on
http://www.language.berkeley.edu/ic/gb/review/review01.html
*/

var xhr = [];
var xhr2 = [];
var trunk = [];
var names = ["w-content.js", "WBcontent.js", "p-content.js", "PBcontent.js"];
var links = ["_words.html", "b_words.html", "_patterns.html", "b_patterns.html"];
var file = ["wa", "wb", "pa", "pb"]
var active = 3

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
	xhr2[i] = [];
	for (var butt = 0; butt < 50; butt++){
		xhr2[i][butt] = undefined;
	}
	dictionary[i] = [];
	(function (i){
		var textpage = "http://www.language.berkeley.edu/ic/gb/review/review" + (i < 9 ? "0" : "") + (i + 1) + links[active];
		xhr[i] = new XMLHttpRequest();
		xhr[i].open("GET", textpage);
		xhr[i].send();
		xhr[i].onreadystatechange = function(){
			if (xhr[i].readyState == 4 && xhr[i].status == 200){
				var newDoc = document.createElement("div");
				newDoc.innerHTML = xhr[i].response;
				
				var fonts = newDoc.getElementsByTagName("font");
				var vocabs = fonts[fonts.length - 2].getElementsByTagName("a");
				for (var j = 0; j < vocabs.length; j++){
					(function (j){
						var vocabpage = vocabs[j].href;
						xhr2[i][j] = new XMLHttpRequest();
						xhr2[i][j].open("GET", vocabpage);
						xhr2[i][j].send();
						xhr2[i][j].onreadystatechange = function(){
							if (xhr2[i][j].readyState == 4 && xhr2[i][j].status == 200){
								var newVoc = document.createElement("div");
								newVoc.innerHTML = xhr2[i][j].response;
								
								var preword = newVoc.getElementsByTagName("font")[0].innerHTML;
								var word = preword.slice(1, preword.length - 1);
								var example = newVoc.getElementsByTagName("option");
								
								var count = 1;
								try{
									var down = document.createElement("a");
									down.href = newVoc.getElementsByTagName("bgsound")[0].getAttribute("src").slice(3);
									down.download = file[active] + (i < 9 ? "0" : "") + (i + 1) + "" + (j < 9 ? "0" : "") + (j + 1) + "-0.wav";
									down.click();
								}
								catch (e){
								}
								
								var examples = [];
								for (var k in example){
									examples.push(example[k].innerHTML);
									if(example[k].value != "../../wav/"){
										down = document.createElement("a");
										down.href = example[k].value.slice(3);
										down.download = file[active] + (i < 9 ? "0" : "") + (i + 1) + "" + (j < 9 ? "0" : "") + (j + 1) + "-" + (count++) + ".wav";
										down.click();
									}
								}
								
								var inner = {};
								inner[word] = examples;
								dictionary[i][j] = inner;
							}
						};
					})(j);
				}
			}
		};
	})(i);
}

function getText(){
	trunk = [JSON.stringify(dictionary)];
	done();
}
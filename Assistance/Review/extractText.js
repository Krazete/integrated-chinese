var xhr = [];
var trunk = [];

function done(){
	var blob = new Blob(trunk, {type: "text/plain"});
	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "WORDS";
	document.body.appendChild(link);
	link.click();
}

for (var i = 0; i < 23; i++){
	(function (i){
		var h = "http://www.language.berkeley.edu/ic/gb/review/review" + (i < 9 ? "0" : "") + (i + 1) + "_words.html";
		xhr[i] = new XMLHttpRequest();
		xhr[i].open("GET", h);
		xhr[i].send();
		xhr[i].onreadystatechange = function(){
			if (xhr[i].readyState == 4 && xhr[i].status == 200){
				var newDoc = document.createElement("div");
				newDoc.innerHTML = xhr[i].response;
				document.body.appendChild(newDoc);
				
				var fonts = newDoc.getElementsByTagName("font");
				var root = fonts[fonts.length - 2];
				for (var j = 0; j < root.getElementsByTagName("a").length; j++){
					root.getElementsByTagName("a")[j].removeAttribute("href");
				}
				
				var sap = root.innerHTML.replace(/<a>/g, "{");
				sap = sap.replace(/<\/a>/g, "}");
				sap = sap.replace(/\"/g, "\\\"");
				sap = sap.replace(/\n/g, "");
				
				//trunk.push((i < 9 ? "0" : "") + (i + 1));
				trunk.push("\"" + sap + "\",\n");
				
				if(i == 22){
					done();
				}
			}
		};
	})(i);
}

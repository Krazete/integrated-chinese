var typ = ["pinyin", "english", "characters"];
var active = 2;

for(var i = 11; i < 23; i++){
	open("http://www.language.berkeley.edu/ic/gb/exercises/ex" + (i < 9 ? "0" : "") + (i + 1) + "w_sound" + typ[active] + "_main.html");
}

// Separate
javascript:
(function (){
	var str = JSON.stringify(db);
	var blob = new Blob([str.slice(2, str.length - 2).replace(/\",\"/g, "\n")], {type: "text/plain"});
	var link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "characters";
	link.click();
})();
var current = location.pathname.match(/\d+/)[0];

function id(e) {
	return document.getElementById(e);
}

function fixSyllable(s, a, b) {
	var toneA = ["a", "ā", "á", "ǎ", "à"];
	var toneE = ["e", "ē", "é", "ě", "è"];
	var toneO = ["o", "ō", "ó", "ǒ", "ò"];
	var toneV = ["ü", "ǖ", "ǘ", "ǚ", "ǜ"];
	var toneI = ["i", "ī", "í", "ǐ", "ì"];
	var toneU = ["u", "ū", "ú", "ǔ", "ù"];
	
	var subs = s.slice(a, b);
	var n = parseInt(s[b]) % 5;
	
	if (subs.includes("a")) {
		subs = subs.replace("a", toneA[n]);
	}
	else if (subs.includes("e")) {
		subs = subs.replace("e", toneE[n]);
	}
	else if (subs.includes("o")) {
		subs = subs.replace("o", toneO[n]);
	}
	else if (subs.includes("ü")) {
		subs = subs.replace("ü", toneV[n]);
	}
	else if (subs.indexOf("i") > subs.indexOf("u")) {
		subs = subs.replace("i", toneI[n]);
	}
	else if (subs.indexOf("u") > subs.indexOf("i")) {
		subs = subs.replace("u", toneU[n]);
	}
	return s.slice(0, a) + subs + s.slice(b + 1, s.length);
}

function fixPinyin(s) {
	s = s.replace(/v/g, "ü");
	var i = 0;
	for (var j = 0; j < s.length; j++) {
		if (["1", "2", "3", "4", "5"].includes(s[j])) {
			s = fixSyllable(s, i, j);
			i = j;
			j--;
		}
	}
	return s;
}

function newTable(k) {
	var table = document.createElement("table");
	table.className = k;
	id("container").appendChild(table);
	return table;
}

function newTr(table) {
	var tr = document.createElement("tr");
	table.appendChild(tr);
	return tr;
}

function newTd(tr, c) {
	var td = document.createElement("td");
	td.innerHTML = c;
	tr.appendChild(td);
	return td;
}

var traditional = false;

function preference() {
	traditional = traditional == false;
	loadLesson(current);
}

function loadLesson(n) {
	window.history.replaceState("", "", n);
	document.title = n + " Vocabulary";
	id("title").innerHTML = "Lesson " + n;
	for (var i = 0; i < vocabulary[n].length; i++) {
		var x = vocabulary[n][i][0].includes(":") ? "" : "extra ";
		newTd(newTr(newTable(x + "title bold")), vocabulary[n][i][0].trimLeft());
		var table = newTable(x + "content");
		var c = 0;
		for (var j = 1; j < vocabulary[n][i].length; j++) {
			var tr = newTr(table);
			if (typeof(vocabulary[n][i][j]) == "string") {
				var td = newTd(tr, vocabulary[n][i][j]);
				td.className = "bold";
				td.setAttribute("colspan", "6");
			}
			else {
				if (!mobile) {
					if (vocabulary[n][i][j][0].startsWith(" ")) {
						tr.style.color = "#aaa";
						newTd(tr, "");
					}
					else
						newTd(tr, ++c + ".");
				}
				if (traditional) {
					newTd(tr, vocabulary[n][i][j][0].trimLeft()).className = "zh";
					newTd(tr, vocabulary[n][i][j][1] == vocabulary[n][i][j][0].trimLeft() ? "" : vocabulary[n][i][j][1]).className = "zh";
				}
				else {
					newTd(tr, vocabulary[n][i][j][0].trimLeft() == vocabulary[n][i][j][1] ? "" : vocabulary[n][i][j][0].trimLeft()).className = "zh";
					newTd(tr, vocabulary[n][i][j][1]).className = "zh";
				}
				newTd(tr, fixPinyin(vocabulary[n][i][j][2]));
				if (!mobile)
					newTd(tr, vocabulary[n][i][j][3]);
				newTd(tr, vocabulary[n][i][j][4]);
			}
		}
	}
	if (active) {
		toggler();
	}
}

function glossary(q) {
	q = q.trim().toLowerCase();
	if (q == "") {
		loadLesson(current);
	}
	else {
		id("container").innerHTML = "<center><h1>Search Results for \"" + q + "\"</h1></center>";
		hsh = Number(current);
		seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0];
		seq = [hsh].concat(seq.slice(0, seq.indexOf(hsh)).concat(seq.slice(seq.indexOf(hsh) + 1)));
		for (var uence = 0; uence < seq.length; uence++) {
			var i = seq[uence];
			var lsn = [];
			var lsnio = false;
			for (var j = 0; j < vocabulary[i].length; j++) {
				var txt = [vocabulary[i][j][0]];
				var txtio = false;
				for (var k = 0; k < vocabulary[i][j].length; k++) {
					if (typeof(vocabulary[i][j][k]) != "string") {
						for (var l = 0; l < vocabulary[i][j][k].length; l++) {
							var v = vocabulary[i][j][k][l].toLowerCase().replace(/<.*>/g, "");
							var que = q.split(",");
							var wrdio = false;
							for (var ries = 0; ries < que.length; ries++) {
								var qs = que[ries].trim();
								if (qs != "" && (v.includes(qs) || (l == 2 && (v.includes(qs.replace(/[uü]/g, "v")) || v.replace(/\d/g, "").includes(qs) || v.replace(/\d/g, "").includes(qs.replace(/[uü]/g, "v")) || fixPinyin(v).includes(qs) || fixPinyin(v).replace(/[ǖǘǚǜ]/g, "ü").includes(qs) || (fixPinyin(qs) != "" && fixPinyin(v).includes(fixPinyin(qs))))))) {
									txt.push(vocabulary[i][j][k]);
									lsnio = true;
									txtio = true;
									wrdio = true;
									break;
								}
							}
							if (wrdio) {
								break;
							}
						}
					}
				}
				if (txtio) {
					lsn = lsn.concat(txt);
				}
			}
			if (lsnio) {
				newTd(newTr(newTable("title bold")), "Lesson " + i);
				var table = newTable("content");
				for (j = 0; j < lsn.length; j++) {
					var tr = newTr(table);
					if (typeof(lsn[j]) == "string")
						newTd(tr, lsn[j].replace(/:.+/, "")).setAttribute("colspan", "6");
					else {
						if (lsn[j][0].startsWith(" ")) {
							tr.style.color = "#aaa";
							newTd(tr, "");
						}
						else {
							newTd(tr, "•");
						}
						if (traditional) {
							newTd(tr, lsn[j][0].trimLeft()).className = "zh";
							newTd(tr, lsn[j][1] == lsn[j][0].trimLeft() ? "" : lsn[j][1]).className = "zh";
						}
						else {
							newTd(tr, lsn[j][0].trimLeft() == lsn[j][1] ? "" : lsn[j][0].trimLeft()).className = "zh";
							newTd(tr, lsn[j][1]).className = "zh";
						}
						newTd(tr, fixPinyin(lsn[j][2]));
						newTd(tr, lsn[j][3]);
						newTd(tr, lsn[j][4]);
					}
				}
			}
		}
		newTd(newTr(newTable("title bold")), "Search Tips");
		table = newTable("content")
		newTd(newTr(table), "•&emsp;Search multiple phrases by separating them with commas.");
		newTd(newTr(table), "•&emsp;You can search in Pinyin with tone numbers or accent marks.");
		newTd(newTr(table), "&emsp;&emsp;&emsp;For example, nu, nv, nü, nu3, nv3, nü3, and nǚ will all find nǚ.");
		newTd(newTr(table), "&emsp;&emsp;&emsp;In fact, u, v, ü, u3, v3, ü3, ǚ, and even 3 will also find nǚ.");
	}
}

glossary("");

for (var i = 0; i < 21; i++)
	(function(n) {
		id("lesson-thing").children[n].addEventListener("click", function() {loadLesson(n)})
	})(i);




function toggle(e) {
	if (e.style.webkitFilter == "opacity(1)") {
		e.style.webkitFilter = "opacity(0)";
	}
	else {
		e.style.webkitFilter = "opacity(1)";
	}
}

function action(e) {
	var sl = e.getBoundingClientRect();
	for (var i = 0; i < document.body.getElementsByTagName("td").length; i++) {
		var td = document.body.getElementsByTagName("td")[i].getBoundingClientRect();
		if (td.left < sl.right && td.right > sl.left && td.top < sl.bottom && td.bottom > sl.top) {
			toggle(document.body.getElementsByTagName("td")[i]);
		}
	}
}

function release(event) {
	if (a[0] == b[0] && a[1] == b[1]) {
		b = [a[0] + 1, a[1] + 1];
		id("selection").style.left = Math.min(a[0], b[0]) + "px";
		id("selection").style.top = Math.min(a[1], b[1]) + "px";
		id("selection").style.width = Math.abs(b[0] - a[0]) + "px";
		id("selection").style.height = Math.abs(b[1] - a[1]) + "px";
	}
	action(id("selection"));
	id("selection").removeAttribute("style");
	document.body.removeEventListener("mousemove", drag);
	document.body.removeEventListener("mouseup", release);
}

function drag(event) {
	b = [event.pageX, event.pageY];
	id("selection").style.left = Math.min(a[0], b[0]) + "px";
	id("selection").style.top = Math.min(a[1], b[1]) + "px";
	id("selection").style.width = Math.abs(b[0] - a[0]) + "px";
	id("selection").style.height = Math.abs(b[1] - a[1]) + "px";
}

function press(event) {
	a = [event.pageX, event.pageY];
	b = [event.pageX, event.pageY];
	document.body.addEventListener("mousemove", drag);
	document.body.addEventListener("mouseup", release);
}

var a, b;
var active = false;

function toggler() {
	if (active) {
		for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
			document.getElementsByTagName("td")[i].removeAttribute("style");
		}
		id("select").removeAttribute("style");
		document.body.removeAttribute("style");
		document.body.removeEventListener("mousedown", press);
	}
	else {
		for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
			document.getElementsByTagName("td")[i].style.boxShadow = "0 0 1px #888";
			toggle(document.getElementsByTagName("td")[i]);
		}
		id("select").style.background = "radial-gradient(#894, #569)";
		document.body.style.webkitUserSelect = "none";
		document.body.addEventListener("mousedown", press);
	}
	active = active == false;
}

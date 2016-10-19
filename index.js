activateTooltip();

function lesson(n){
	tooltip.innerHTML = "<b>第" + number(n) + "课</b>";
	
	brTooltip();
	var review = create("a");
	review.innerHTML = "复习 - Review";
	review.href = "review.html#" + (n < 10 ? "0" : "") + n + "ART";
	tooltip.appendChild(review);
	
	brTooltip();
	var exercise = create("a");
	exercise.innerHTML = "练习 - Exercises";
	exercise.setAttribute("onClick", "exercises(" + n + ")");
	tooltip.appendChild(exercise);
	
	showTooltip(document.getElementsByTagName("td")[n - 1]);
	continuity();
}

function exercises(n){
	tooltip.innerHTML = "<b>第" + number(n) + "课 练习</b>";
	
	brTooltip();
	var word = create("a");
	word.innerHTML = "Word Level";
	word.setAttribute("onClick", "words(" + n + ")");
	tooltip.appendChild(word);
	
	brTooltip();
	var sentence = create("a");
	sentence.innerHTML = "Sentence Level";
	sentence.setAttribute("onClick", "sentences(" + n + ")");
	tooltip.appendChild(sentence);
	
	brTooltip();
	var paragraph = create("a");
	paragraph.innerHTML = "Paragraph Level";
	paragraph.setAttribute("onClick", "paragraphs(" + n + ")");
	tooltip.appendChild(paragraph);
	
	continuity();
}

function words(n){
	tooltip.innerHTML = "<b>第" + number(n) + "课 练习 Word Level</b>";
	
	var base = "word.html#" + (n < 10 ? "0" : "") + n;
	
	brTooltip();
	var pinyin = create("a");
	pinyin.innerHTML = "Sound - Pinyin";
	pinyin.href = base + "P";
	tooltip.appendChild(pinyin);
	
	brTooltip();
	var english = create("a");
	english.innerHTML = "Sound - English";
	english.href = base + "E";
	tooltip.appendChild(english);
	
	brTooltip();
	var chinese = create("a");
	chinese.innerHTML = "Sound - Chinese";
	chinese.href = base + "C";
	tooltip.appendChild(chinese);
	
	continuity();
}

function sentences(n){
	tooltip.innerHTML = "<b>第" + number(n) + "课 练习 Sentence Level</b>";
	
	var base = "sentence.html#" + (n < 10 ? "0" : "") + n;
	
	/*	
	for(i=0;i<23;i++){open("http://www.language.berkeley.edu/ic/gb/exercises/ex"+(i<9?"0":"")+(i+1)+"p_listeningonly_main.html")}
	javascript:link=document.createElement("a");link.href=URL.createObjectURL(new Blob([document.getElementsByTagName("script")[0].innerHTML],{type:"text/plain"}));link.download=location.pathname.slice(19,21);link.click();
	
	Numbers
	Money Expressions
	Listening Only (Multiple Choice)
	Set the Clock
	Listening and Reading (True or False)
	Listening and Reading (Multiple Choice)
	Choice of Words (Fill in the Blanks)
	Question Words (Fill in the Blanks)
	Measure Words (Fill in the Blanks)
	Reading (Fill in the Blanks)
	Reading 1 (Fill in the Blanks)
	Reading 2 (Fill in the Blanks)
	Fill in the Blanks
	Antonyms (Word Match)
	Unscramble Sentences
	Complete Sentences
	Change Question Form (Type in Chinese)
	Generate Questions (Type in Chinese)
	
	brTooltip();
	var multiple = create("a");
	multiple.innerHTML = "Multiple Choice (English)";
	multiple.href = base;
	tooltip.appendChild(multiple);
	*/

	brTooltip();
	tooltip.innerHTML += "All sentence level exercises are under construction.";
	
	brTooltip();
	var fornow = create("a");
	fornow.innerHTML = "Original Website";
	fornow.href = (navigator.appName == "Microsoft Internet Explorer" ? "" : "http://ie10.ieonchrome.com/#") + "http://www.language.berkeley.edu/ic/gb/exercises/ex" + (n < 10 ? "0" : "") + n + "s_toc.html";
	tooltip.appendChild(fornow);
	
	continuity();
}

function paragraphs(n){
	tooltip.innerHTML = "<b>第" + number(n) + "课 练习 Paragraph Level</b>";

	var base = "paragraph.html#" + (n < 10 ? "0" : "") + n;
		
	if(true){
		brTooltip();
		var multiple = create("a");
		multiple.innerHTML = "Multiple Choice (English)";
		multiple.href = base + "ME";
		tooltip.appendChild(multiple);
	}
	if(n > 3 && n != 7 && n < 12){
		brTooltip();
		var chinese = create("a");
		chinese.innerHTML = "Multiple Choice (Chinese)";
		chinese.href = base + "MC";
		tooltip.appendChild(chinese);
	}
	if(n == 3 || n == 7){
		brTooltip();
		var truth = create("a");
		truth.innerHTML = "True or False (English)";
		truth.href = base + "TE";
		tooltip.appendChild(truth);
	}
	if(n != 13){
		brTooltip();
		var read = create("a");
		read.innerHTML = "True or False (Chinese)";
		read.href = base + "TC";
		tooltip.appendChild(read);
	}
	if(n == 13){
		brTooltip();
		var map = create("a");
		map.innerHTML = "Map Reading";
		map.href = base + "TM";
		tooltip.appendChild(map);
	}
			
	continuity();
}

/* Secret Project */

var entry = "";

function vocab(n){
	code = "7-7-7-7-";
	entry += n + "-";
	if(entry == code){
		location = "vocabulary.html";
	}
	if(!code.startsWith(entry)){
		entry = "";
	}
	console.log(n)
}

for(var i = 0; i < 20; i++){
	document.getElementsByTagName("th")[i].setAttribute("onclick", "vocab(" + document.getElementsByTagName("th")[i].innerHTML + ")")
}

// INITIALIZATION

var mobile = "ontouchstart" in window;

// GET ELEMENT

function id(e) {
	return document.getElementById(e);
}

function cn(e) {
	return document.getElementsByClassName(e);
}

// COOKIE

function setCookie(key, value) {
	var date = new Date();
	date.setTime(date.getTime() + 31536000000); // 365 days
	document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
}

function getCookie(key) {
	var pair = document.cookie.match(key + "=([^;]*)");
	if (pair == null)
		return "";
	return pair[1];
}

function delCookie(key) {
	var epoch = new Date(0);
	document.cookie = key + "=;expires=" + epoch.toUTCString();
}

// MP3

function mp3Src(e) {
	var rate = id("mp3").playbackRate; // (playbackRate = 1) is default
	id("mp3").pause(); // just in case
	mp3Pause();
	id("progress-after").removeAttribute("style");
	id("mp3").src = e;
	id("mp3").load(); // just in case
	mp3Speed(rate);
}

function mp3Progress() {
	var ratio = id("mp3").currentTime / id("mp3").duration;
	id("progress-after").style.width = (ratio * 100) + "%";
	if (!id("mp3").paused)
		requestAnimationFrame(mp3Progress); // (progress) event listener is slow
}

function mp3SetTime(n){
	id("mp3").currentTime = n; // (0 ≤ currentTime ≤ duration) is automatic
	if (id("mp3").paused)
		mp3Progress();
}

function mp3Seek(e) {
	var ratio = e.offsetX / id("progress").clientWidth;
	mp3SetTime(id("mp3").duration * ratio); // (duration == Infinity) on localhost sometimes
}

function mp3Play() {
	id("mpX").pause();
	id("toggle").classList.add("pause");
	id("toggle").classList.remove("play");
	mp3Progress();
}

function mp3Pause() {
	id("toggle").classList.add("play");
	id("toggle").classList.remove("pause");
}

function mp3Toggle() {
	if (id("mp3").paused)
		id("mp3").play();
	else
		id("mp3").pause();
}

function mp3Speed(n) {
	id("mp3").playbackRate = n ? n : 1; // just in case
	id("speed-100").classList.add("speed-selected");
	id("speed-75").classList.add("speed-selected");
	id("speed-50").classList.add("speed-selected");
	if (n < 1)
		id("speed-100").classList.remove("speed-selected");
	if (n < 0.75)
		id("speed-75").classList.remove("speed-selected");
	if (n < 0.5)
		id("speed-50").classList.remove("speed-selected"); // should never happen
}

function mp3Keys(e) {
	var key = e.keyCode;
	if (key == 32)
		mp3Toggle();
	else if (key == 37)
		mp3SetTime(id("mp3").currentTime - 1);
	else if (key == 38)
		mp3Speed(Math.min(id("mp3").playbackRate + 0.25, 1));
	else if (key == 39)
		mp3SetTime(id("mp3").currentTime + 1);
	else if (key == 40)
		mp3Speed(Math.max(id("mp3").playbackRate - 0.25, 0.5));
	else if (47 < key && key < 58)
		mp3SetTime(id("mp3").duration * (key - 48) / 10);
	else if (95 < key && key < 106)
		mp3SetTime(id("mp3").duration * (key - 96) / 10);
}

function mp3Init(){
	id("mp3").addEventListener("play", mp3Play);
	id("mp3").addEventListener("pause", mp3Pause);
	id("toggle").addEventListener("click", mp3Toggle);
	id("progress").addEventListener("click", mp3Seek);
	id("speed-50").addEventListener("click", function(){mp3Speed(0.5)}); // arrow functions aren't standard yet
	id("speed-75").addEventListener("click", function(){mp3Speed(0.75)});
	id("speed-100").addEventListener("click", function(){mp3Speed(1)});
	if (!mobile) // idk about this
		document.body.addEventListener("keydown", mp3Keys);
	id("tip").addEventListener("click", function(){id("tip").classList.add("hid")});
	id("tip-button").addEventListener("click", function(){id("tip").classList.remove("hid")})
}

// MPX

function mpXPlay(e) {
	if (id("mp3"))
		id("mp3").pause();
	id("mpX").pause(); // just in case
	id("mpX").src = e;
	id("mpX").load(); // just in case
	id("mpX").play();
}

// TRANSLATION

function number(n) {
	// Converts Hindu-Arabic numbers to Chinese numbers. This function is limited to numbers 0-99.
	if (n == 0)
		return "零";
	var digit = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
	var zhDigit = "";
	if (n > 19)
		zhDigit += digit[(n - (n % 10)) / 10];
	if (n > 9)
		zhDigit += "十";
	return zhDigit + digit[n % 10];
}

// SETS

function shuffled(s) {
	var set = [];
	while (set.length < s.length) {
		var entry = s[Math.floor(Math.random() * s.length)];
		if(!set.includes(entry))
			set.push(entry);
	}
	return set;
}

/*
function navigate(d) {
	// Navigates through content via hashes.
	if (d == -1) {
		if (--lesson < 1)
			lesson = 20;
	}
	else if (d == 1) {
		if (++lesson > 20)
			lesson = 1;
	}
	location.hash = (lesson < 10 ? '0' : '') + lesson + hash.slice(2);	
}

function within(e, s) {
	// Checks if element is or is within a specified element.
	if (e == s)
		return true;
	else if (e == document.body)
		return false;
	else
		return within(e.parentNode, s);
}

// CHARACTER SWITCHER

var characters = {"廣": "广", "營": "营", "腦": "脑", "襯": "衬", "磯": "矶", "個": "个", "關": "关", "記": "记", "問": "问", "係": "系", "錄": "录", "許": "许", "嗎": "吗", "塊": "块", "見": "见", "聽": "听", "藍": "蓝", "紙": "纸", "傷": "伤", "遊": "游", "寫": "写", "顏": "颜", "務": "务", "當": "当", "機": "机", "紅": "红", "報": "报", "課": "课", "調": "调", "貼": "贴", "張": "张", "體": "体", "極": "极", "廚": "厨", "別": "别", "讓": "让", "線": "线", "練": "练", "圓": "圆", "買": "买", "護": "护", "灣": "湾", "謝": "谢", "盤": "盘", "罰": "罚", "鐘": "钟", "經": "经", "賽": "赛", "運": "运", "麼": "么", "屬": "属", "點": "点", "馬": "马", "聰": "聪", "壞": "坏", "煩": "烦", "漢": "汉", "動": "动", "準": "准", "藥": "药", "廳": "厅", "黃": "黄", "長": "长", "請": "请", "燈": "灯", "遠": "远", "週": "周", "書": "书", "邊": "边", "夠": "够", "電": "电", "國": "国", "來": "来", "過": "过", "為": "为", "頓": "顿", "號": "号", "訂": "订", "鎮": "镇", "熱": "热", "筆": "笔", "願": "愿", "樹": "树", "貨": "货", "職": "职", "該": "该", "餃": "饺", "際": "际", "針": "针", "圖": "图", "幾": "几", "驗": "验", "幣": "币", "慶": "庆", "籃": "篮", "紐": "纽", "滿": "满", "導": "导", "飾": "饰", "燒": "烧", "條": "条", "進": "进", "癢": "痒", "漲": "涨", "閉": "闭", "沒": "没", "倆": "俩", "錢": "钱", "約": "约", "說": "说", "應": "应", "裡": "里", "對": "对", "級": "级", "後": "后", "廁": "厕", "緊": "紧", "彈": "弹", "車": "车", "鮮": "鲜", "隨": "随", "計": "计", "證": "证", "習": "习", "親": "亲", "飛": "飞", "養": "养", "氣": "气", "種": "种", "臉": "脸", "兩": "两", "鋼": "钢", "劇": "剧", "發": "发", "鄉": "乡", "時": "时", "錯": "错", "實": "实", "館": "馆", "剛": "刚", "須": "须", "適": "适", "飯": "饭", "連": "连", "輸": "输", "價": "价", "鐵": "铁", "學": "学", "贏": "赢", "著": "着", "園": "园", "歡": "欢", "韓": "韩", "葉": "叶", "順": "顺", "險": "险", "們": "们", "餓": "饿", "語": "语", "給": "给", "碼": "码", "郵": "邮", "間": "间", "場": "场", "誰": "谁", "複": "复", "現": "现", "魚": "鱼", "視": "视", "華": "华", "預": "预", "腳": "脚", "風": "风", "歲": "岁", "話": "话", "賣": "卖", "銀": "银", "稱": "称", "湯": "汤", "員": "员", "雙": "双", "淚": "泪", "樓": "楼", "樣": "样", "貴": "贵", "爺": "爷", "紹": "绍", "劃": "划", "還": "还", "內": "内", "壓": "压", "綠": "绿", "轉": "转", "媽": "妈", "檢": "检", "節": "节", "談": "谈", "簽": "签", "開": "开", "掛": "挂", "慣": "惯", "換": "换", "擔": "担", "試": "试", "網": "网", "門": "门", "孫": "孙", "興": "兴", "難": "难", "這": "这", "師": "师",
	"家": "家", //"傢",
	"讀": "读", "題": "题", "帥": "帅", "愛": "爱", "悶": "闷", "備": "备", "參": "参", "禮": "礼", "掃": "扫", "濟": "济", "樂": "乐", "靜": "静", "專": "专", "從": "从", "兒": "儿", "識": "识", "餵": "喂", "臥": "卧", "認": "认", "醫": "医", "辦": "办", "褲": "裤", "續": "续", "趕": "赶", "單": "单", "覺": "觉", "幫": "帮", "帶": "带", "頭": "头", "倫": "伦", "藉": "借", "業": "业", "訴": "诉", "詞": "词", "離": "离", "舊": "旧", "東": "东", "雖": "虽", "涼": "凉", "費": "费", "將": "将", "簡": "简", "會": "会", "減": "减"};

// CHARACTERS TO FIX: 家

function swapped(d) {
	// Swaps the keys and values of a dictionary.
	var sd = {};
	for (var k in d)
		sd[d[k]] = k;
	return sd;
}

function toggle() {
	// Toggles all text within a specified element between traditional and simplified Chinese.
	var docs = document.getElementsByClassName("zh");
	// State 0 signifies that the text is currently traditional and 1 means it's simplified.
	var ch = (state ? characters : swapped(characters));
	for (var i=0; i<docs.length; i++) {
		var doc = docs[i].innerHTML;
		var t = "";
		for (var j=0; j<doc.length; j++) {
			if (doc[j] in ch)
				t += ch[doc[j]];
			else
				t += doc[j];
		}
		docs[i].innerHTML = t;
	}
	state = (state ? 0 : 1);
	id("translator").innerHTML = "Switch to " + (state ? "Traditional" : "Simplified");
}

function continuity() { // rename zhPreserve
	// To be called in case a zh element changes.
	state = (state ? 0 : 1);
	toggle();
}

var state = 1;

var tr = create("div");
tr.innerHTML = "Switch to Traditional";
tr.id = "translator";
tr.setAttribute("class", "A B C");
tr.setAttribute("onClick", "toggle()");
document.body.appendChild(tr);

*/

// DATA

var lesson = {
	"0": {
		"subject": "&nbsp;",
		"word": [],
		"sentence": [],
		"paragraph": [],
	},
	"1": {
		"subject": "Greetings",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "mcc", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"2": {
		"subject": "Family",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", "fic", ""],
		"paragraph": ["mce", "tfc"],
	},
	"3": {
		"subject": "Dates and Time",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", "fic", ""],
		"paragraph": ["mce", "tfe", "tfc"],
	},
	"4": {
		"subject": "Hobbies",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"5": {
		"subject": "Visiting Friends",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", "fic", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"6": {
		"subject": "Making Appointments",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"7": {
		"subject": "Studying Chinese",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", "fic", ""],
		"paragraph": ["mce", "tfe", "tfc"],
	},
	"8": {
		"subject": "School Life",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "mcc", "tfc", "fic", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"9": {
		"subject": "Shopping",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"10": {
		"subject": "Transportation",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", "fic", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"11": {
		"subject": "Talking about the Weather",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "mcc", "tfc"],
	},
	"12": {
		"subject": "Dining",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"13": {
		"subject": "Asking Directions",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "mrc"],
	},
	"14": {
		"subject": "Birthday Party",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"15": {
		"subject": "Seeing a Doctor",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"16": {
		"subject": "Dating",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"17": {
		"subject": "Renting an Apartment",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"18": {
		"subject": "Sports",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"19": {
		"subject": "Travel",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"20": {
		"subject": "At the Airport",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"21": {
		"subject": "At the Library",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"22": {
		"subject": "Post Office",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
	"23": {
		"subject": "Hometown",
		"word": ["p", "e", "c"],
		"sentence": ["mce", "tfc", ""],
		"paragraph": ["mce", "tfc"],
	},
};

var code = {
	"p": "Pinyin",
	"e": "English",
	"c": "Chinese",

	"mce": "Multiple Choice (English)",
	"mcc": "Multiple Choice (Chinese)",
	"tfe": "True or False (English)",
	"tfc": "True or False (Chinese)",
	"mrc": "Map Reading",

	"mc": "Multiple Choice",
	"tf": "True or False",
	"fc": "Fill In (Multiple Choice)",
	"fd": "Fill In (Drag and Drop)",
	"ad": "Antonyms (Drag and Drop)",
	"ud": "Unscramble Sentences (Drag and Drop)",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
};

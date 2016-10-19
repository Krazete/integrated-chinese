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

var characters = {"广": "廣", "营": "營", "脑": "腦", "衬": "襯", "矶": "磯", "个": "個", "关": "關", "记": "記", "问": "問", "系": "係", "录": "錄", "许": "許", "吗": "嗎", "块": "塊", "见": "見", "听": "聽", "蓝": "藍", "纸": "紙", "伤": "傷", "游": "遊", "写": "寫", "颜": "顏", "务": "務", "当": "當", "机": "機", "红": "紅", "报": "報", "课": "課", "调": "調", "贴": "貼", "张": "張", "体": "體", "极": "極", "厨": "廚", "别": "別", "让": "讓", "线": "線", "练": "練", "圆": "圓", "买": "買", "护": "護", "湾": "灣", "谢": "謝", "盘": "盤", "罚": "罰", "钟": "鐘", "经": "經", "赛": "賽", "运": "運", "么": "麼", "属": "屬", "点": "點", "马": "馬", "聪": "聰", "坏": "壞", "烦": "煩", "汉": "漢", "动": "動", "准": "準", "药": "藥", "厅": "廳", "黄": "黃", "长": "長", "请": "請", "灯": "燈", "远": "遠", "周": "週", "书": "書", "边": "邊", "够": "夠", "电": "電", "国": "國", "来": "來", "过": "過", "为": "為", "顿": "頓", "号": "號", "订": "訂", "镇": "鎮", "热": "熱", "笔": "筆", "愿": "願", "树": "樹", "货": "貨", "职": "職", "该": "該", "饺": "餃", "际": "際", "针": "針", "图": "圖", "几": "幾", "验": "驗", "币": "幣", "庆": "慶", "篮": "籃", "纽": "紐", "满": "滿", "导": "導", "饰": "飾", "烧": "燒", "条": "條", "进": "進", "痒": "癢", "涨": "漲", "闭": "閉", "没": "沒", "俩": "倆", "钱": "錢", "约": "約", "说": "說", "应": "應", "里": "裡", "对": "對", "级": "級", "后": "後", "厕": "廁", "紧": "緊", "弹": "彈", "车": "車", "鲜": "鮮", "随": "隨", "计": "計", "证": "證", "习": "習", "亲": "親", "飞": "飛", "养": "養", "气": "氣", "种": "種", "脸": "臉", "两": "兩", "钢": "鋼", "剧": "劇", "发": "發", "乡": "鄉", "时": "時", "错": "錯", "实": "實", "馆": "館", "刚": "剛", "须": "須", "适": "適", "饭": "飯", "连": "連", "输": "輸", "价": "價", "铁": "鐵", "学": "學", "赢": "贏", "着": "著", "园": "園", "欢": "歡", "韩": "韓", "叶": "葉", "顺": "順", "险": "險", "们": "們", "饿": "餓", "语": "語", "给": "給", "码": "碼", "邮": "郵", "间": "間", "场": "場", "谁": "誰", "复": "複", "现": "現", "鱼": "魚", "视": "視", "华": "華", "预": "預", "脚": "腳", "风": "風", "岁": "歲", "话": "話", "卖": "賣", "银": "銀", "称": "稱", "汤": "湯", "员": "員", "双": "雙", "泪": "淚", "楼": "樓", "样": "樣", "贵": "貴", "爷": "爺", "绍": "紹", "划": "劃", "还": "還", "内": "內", "压": "壓", "绿": "綠", "转": "轉", "妈": "媽", "检": "檢", "节": "節", "谈": "談", "签": "簽", "开": "開", "挂": "掛", "惯": "慣", "换": "換", "担": "擔", "试": "試", "网": "網", "门": "門", "孙": "孫", "兴": "興", "难": "難", "这": "這", "师": "師",
	"家": "家", //"傢",
	"题": "題", "帅": "帥", "爱": "愛", "闷": "悶", "备": "備", "参": "參", "礼": "禮", "扫": "掃", "济": "濟", "乐": "樂", "静": "靜", "专": "專", "从": "從", "儿": "兒", "识": "識", "喂": "餵", "卧": "臥", "认": "認", "医": "醫", "办": "辦", "裤": "褲", "续": "續", "赶": "趕", "单": "單", "觉": "覺", "帮": "幫", "带": "帶", "头": "頭", "伦": "倫", "借": "藉", "业": "業", "诉": "訴", "词": "詞", "离": "離", "旧": "舊", "东": "東", "虽": "雖", "凉": "涼", "费": "費", "将": "將", "简": "簡", "会": "會", "减": "減"};

// CHARACTERS TO ADD: 八
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

// Switch from simplified to traditional characters onLoad.
//document.body.setAttribute("onLoad", "toggle()");

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

var mobile = "ontouchstart" in window; // TODO: ensure that this works (esp. on touchscreen laptops)

function link() {
	var url = "/";
	for (var i = 0; i < arguments.length; i++) {
		url += arguments[i];
	}
	return url;
}

// INITIALIZATION

// GET ELEMENT
//
// function id(e) {
// 	return document.getElementById(e);
// }

// MP3

var mp3;

function mp3Src(e) {
	var rate = mp3.audio.playbackRate; // (playbackRate = 1) is default
	mp3Pause();
	id("progress-after").removeAttribute("style");
	mp3.audio.src = e;
	mp3Speed(rate);
}

function mp3Progress() {
	var ratio = id("mp3").currentTime / id("mp3").duration;
	id("progress-after").style.width = (ratio * 100) + "%";
	if (!mp3.audio.paused)
		requestAnimationFrame(mp3Progress); // (progress) event listener is slow
}

function mp3SetTime(n){
	mp3.audio.currentTime = n; // currentTime is in [0, duration] by default
	if (mp3.audio.paused)
		mp3Progress();
}

function mp3Seek(e) {
	var ratio = e.offsetX / id("progress").clientWidth;
	mp3SetTime(mp3.audio.duration * ratio); // (duration == Infinity) on localhost sometimes
}

// function mpXPlay() {
// }

function mp3Play() {
	id("mpX").pause();
	id("toggle").classList.add("pause");
	id("toggle").classList.remove("play");
	mp3Progress();
}

function mp3Pause() {
	mp3.toggle.classList.add("play");
	mp3.toggle.classList.remove("pause");
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
	var mp3 = {
		"audio": document.getElementById("mp3"),
		"toggle": document.getElementById("toggle"),
		"progress": document.getElementById("progress"),
		"speed": {
			50: document.getElementById("speed-50"),
			75: document.getElementById("speed-50"),
			100: document.getElementById("speed-50"),
		},
		"tip": document.getElementById("tip"),
		"tipToggle": document.getElementById("tip-button")
	};
	mp3.audio.addEventListener("play", mp3Play);
	mp3.audio.addEventListener("pause", mp3Pause);
	mp3.toggle.addEventListener("click", mp3Toggle);
	mp3.progress.addEventListener("click", mp3Seek);
	mp3.speed[50].addEventListener("click", function(){mp3Speed(0.5)}); // arrow functions aren't standard yet
	mp3.speed[75].addEventListener("click", function(){mp3Speed(0.75)});
	mp3.speed[100].addEventListener("click", function(){mp3Speed(1)});
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
//
// function number(n) {
// 	// Converts Hindu-Arabic numbers to Chinese numbers. This function is limited to numbers 0-99.
// 	if (n == 0)
// 		return "零";
// 	var digit = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
// 	var zhDigit = "";
// 	if (n > 19)
// 		zhDigit += digit[(n - (n % 10)) / 10];
// 	if (n > 9)
// 		zhDigit += "十";
// 	return zhDigit + digit[n % 10];
// }

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
*/

var characters = {
	"貴": "贵", "線": "线", "燈": "灯", "屬": "属", "醫": "医", "紅": "红", "轉": "转", "訂": "订",
	"筆": "笔", "兒": "儿", "複": "复", "讓": "让", "燒": "烧", "準": "准", "滿": "满", "節": "节",
	"願": "愿", "葉": "叶", "遠": "远", "餓": "饿", "帶": "带", "當": "当", "襯": "衬", "們": "们",
	"認": "认", "輸": "输", "風": "风", "週": "周", "員": "员", "視": "视", "趕": "赶", "悶": "闷",
	"雖": "虽", "壞": "坏", "漲": "涨", "驗": "验", "寫": "写", "約": "约", "師": "师", "長": "长",
	"倆": "俩", "業": "业", "來": "来", "練": "练", "幾": "几", "經": "经", "過": "过", "會": "会",
	"郵": "邮", "黃": "黄", "別": "别", "氣": "气", "實": "实", "該": "该", "難": "难", "腳": "脚",
	"夠": "够", "談": "谈", "紹": "绍", "幫": "帮", "語": "语", "稱": "称", "飯": "饭", "邊": "边",
	"兩": "两", "紙": "纸", "適": "适", "塊": "块", "馬": "马", "裡": "里", "對": "对", "臉": "脸",
	"褲": "裤", "國": "国", "體": "体", "須": "须", "緊": "紧", "護": "护", "掃": "扫", "辦": "办",
	"掛": "挂", "碼": "码", "飛": "飞", "臥": "卧", "備": "备", "鄉": "乡", "劃": "划", "關": "关",
	"鐵": "铁", "買": "买", "樣": "样", "簽": "签", "廚": "厨", "爺": "爷", "鎮": "镇", "韓": "韩",
	"歡": "欢", "藉": "借", "檢": "检", "車": "车", "聽": "听", "藍": "蓝", "係": "系", "誰": "谁",
	"藥": "药", "贏": "赢", "隨": "随", "間": "间", "網": "网", "際": "际", "著": "着", "從": "从",
	"賽": "赛", "條": "条", "識": "识", "濟": "济", "歲": "岁", "媽": "妈", "靜": "静", "證": "证",
	"參": "参", "顏": "颜", "連": "连", "涼": "凉", "園": "园", "務": "务", "倫": "伦", "題": "题",
	"嗎": "吗", "謝": "谢", "計": "计", "癢": "痒", "覺": "觉", "頭": "头", "舊": "旧", "銀": "银",
	"罰": "罚", "還": "还", "機": "机", "愛": "爱", "圖": "图", "廁": "厕", "換": "换", "錄": "录",
	"沒": "没", "報": "报", "給": "给", "紐": "纽", "導": "导", "帥": "帅", "順": "顺", "聰": "聪",
	"煩": "烦", "傷": "伤", "進": "进", "養": "养", "籃": "篮", "這": "这", "種": "种", "貨": "货",
	"詞": "词", "費": "费", "賣": "卖", "鐘": "钟", "壓": "压", "減": "减", "應": "应", "將": "将",
	"開": "开", "價": "价", "館": "馆", "錯": "错", "熱": "热", "見": "见", "專": "专", "號": "号",
	"發": "发", "簡": "简", "貼": "贴", "險": "险", "東": "东", "內": "内", "請": "请", "劇": "剧",
	"鮮": "鲜", "擔": "担", "動": "动", "點": "点", "單": "单", "麼": "么", "慶": "庆", "淚": "泪",
	"圓": "圆", "綠": "绿", "餵": "喂", "雙": "双", "灣": "湾", "極": "极", "磯": "矶", "電": "电",
	"彈": "弹", "華": "华", "鋼": "钢", "慣": "惯", "門": "门", "運": "运", "廳": "厅", "續": "续",
	"職": "职", "個": "个", "廣": "广", "樓": "楼", "孫": "孙", "魚": "鱼", "許": "许", "閉": "闭",
	"遊": "游", "場": "场", "盤": "盘", "課": "课", "飾": "饰", "餃": "饺", "營": "营", "級": "级",
	"幣": "币", "頓": "顿", "樂": "乐", "時": "时", "書": "书", "離": "离", "湯": "汤", "試": "试",
	"訴": "诉", "記": "记", "預": "预", "話": "话", "樹": "树", "興": "兴", "針": "针", "腦": "脑",
	"問": "问", "現": "现", "後": "后", "說": "说", "張": "张", "調": "调", "剛": "刚", "習": "习",
	"禮": "礼", "學": "学", "錢": "钱", "漢": "汉", "為": "为", "親": "亲", "傢": "家", "讀": "读",
	"軟": "软", "講": "讲", "橋": "桥", "妝": "妆", "像": "象", "畫": "画", "甚": "什", "統": "统",
	"細": "细", "託": "托", "丟": "丢", "萬": "万", "總": "总", "飲": "饮", "鹹": "咸", "雞": "鸡",
	"復": "复", "髮": "发", "飽": "饱", "踴": "踊", "數": "数", "麵": "面", "淨": "净", "蔥": "葱",
	"戲": "戏", "濕": "湿", "艙": "舱", "稅": "税", "夾": "夹", "寵": "宠", "宮": "宫", "顧": "顾",
	"勝": "胜", "戶": "户", "蝦": "虾", "噴": "喷", "襪": "袜", "騎": "骑", "貓": "猫", "歷": "历",
	"塵": "尘", "觀": "观", "櫃": "柜", "蔔": "卜", "鉛": "铅", "軍": "军", "亂": "乱", "蘿": "萝",
	"蘋": "苹", "響": "响", "零": "〇", "蹟": "迹", "懶": "懒", "農": "农", "裝": "装", "裏": "里",
	"乾": "干", "臘": "腊", "鹽": "盐", "豬": "猪", "陰": "阴", "餅": "饼", "亞": "亚", "貝": "贝",
	"鴨": "鸭", "礦": "矿"
};

/*
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

var parseAcronym = {
	/* word level */
	"p": "Pinyin",
	"e": "English",
	"c": "Chinese",
	/* sentence level */
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
	/* paragraph level */
	"mce": "Multiple Choice (English)",
	"mcc": "Multiple Choice (Chinese)",
	"tfe": "True or False (English)",
	"tfc": "True or False (Chinese)",
	"mrc": "Map Reading",
};

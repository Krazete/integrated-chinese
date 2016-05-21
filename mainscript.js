function id(e){
	// Gets an element by its id.
	return document.getElementById(e);
}

function create(e){
	// Creates an element of the specified type.
	return document.createElement(e);
}

function number(n){
	// Converts Hindu-Arabic numbers to Chinese numbers. This function is limited to numbers 1-29.
	m = n - 1;
	var digits = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
	var limited = "";
	if(m >= 19){
		limited += digits[1];
	}
	if(m >= 10 && m != 19){
		limited += digits[9];
	}
	limited += digits[m % 10];
	return limited;
}

function navigate(d){
	// Navigates through content via hashes.
	if(d == -1){
		if(--lesson < 1){
			lesson = 20;
		}
	}
	else if(d == 1){
		if(++lesson > 20){
			lesson = 1;
		}
	}
	location.hash = (lesson < 10 ? '0' : '') + lesson + hash.slice(2);	
}

function within(e, s){
	// Checks if element is or is within a specified element.
	if(e == s){
		return true;
	}
	else if(e == document.body){
		return false;
	}
	else{
		return within(e.parentNode, s);
	}
}

// MP3

var mp3Rate = 1;

function mp3Speed(r){
	mp3Rate = r;
	id("mp3").playbackRate = r;
}

// TOOLTIP

function activateTooltip(){
	// Create a custom tooltip element.
	tooltip = create("div");
	tooltip.id = "tooltip";
	tooltip.className = "B C D zh";
	document.body.appendChild(tooltip);
}

function showTooltip(p){
	// Display the tooltip under a specified element.	
	var docInfo = document.body.getBoundingClientRect();
	var pInfo = p.getBoundingClientRect();
	var w = pInfo.width;
	var h = pInfo.height;
	var x = pInfo.left - docInfo.left;
	var y = pInfo.top - docInfo.top;
	
	tooltip.style.top = y + h + "px";
	tooltip.style.left = x + "px";
	tooltip.style.display = "inline";
	
	document.body.onmousedown = function(e){
		if(!within(e.target, tooltip) && !within(e.target, tr)){
			hideTooltip();
		}
	};
}

function hideTooltip(){
	// Reset tooltip.
	tooltip.removeAttribute("style");
	tooltip.innerHTML = "";
	document.body.onmousedown = "";
}

function brTooltip(){
	// Put a new line in the tooltip.
	var br = create("br");
	tooltip.appendChild(br);
}

// CHARACTER SWITCHER

var characters = {"广": "廣", "营": "營", "脑": "腦", "衬": "襯", "矶": "磯", "个": "個", "关": "關", "记": "記", "问": "問", "系": "係", "录": "錄", "许": "許", "吗": "嗎", "块": "塊", "见": "見", "听": "聽", "蓝": "藍", "纸": "紙", "伤": "傷", "游": "遊", "写": "寫", "颜": "顏", "务": "務", "当": "當", "机": "機", "红": "紅", "报": "報", "课": "課", "调": "調", "贴": "貼", "张": "張", "体": "體", "极": "極", "厨": "廚", "别": "別", "让": "讓", "线": "線", "练": "練", "圆": "圓", "买": "買", "护": "護", "湾": "灣", "谢": "謝", "盘": "盤", "罚": "罰", "钟": "鐘", "经": "經", "赛": "賽", "运": "運", "么": "麼", "属": "屬", "点": "點", "马": "馬", "聪": "聰", "坏": "壞", "烦": "煩", "汉": "漢", "动": "動", "准": "準", "药": "藥", "厅": "廳", "黄": "黃", "长": "長", "请": "請", "灯": "燈", "远": "遠", "周": "週", "书": "書", "边": "邊", "够": "夠", "电": "電", "国": "國", "来": "來", "过": "過", "为": "為", "顿": "頓", "号": "號", "订": "訂", "镇": "鎮", "热": "熱", "笔": "筆", "愿": "願", "树": "樹", "货": "貨", "职": "職", "该": "該", "饺": "餃", "际": "際", "针": "針", "图": "圖", "几": "幾", "验": "驗", "币": "幣", "庆": "慶", "篮": "籃", "纽": "紐", "满": "滿", "导": "導", "饰": "飾", "烧": "燒", "条": "條", "进": "進", "痒": "癢", "涨": "漲", "闭": "閉", "没": "沒", "俩": "倆", "钱": "錢", "约": "約", "说": "說", "应": "應", "里": "裡", "对": "對", "级": "級", "后": "後", "厕": "廁", "紧": "緊", "弹": "彈", "车": "車", "鲜": "鮮", "随": "隨", "计": "計", "证": "證", "习": "習", "亲": "親", "飞": "飛", "养": "養", "气": "氣", "种": "種", "脸": "臉", "两": "兩", "钢": "鋼", "剧": "劇", "发": "發", "乡": "鄉", "时": "時", "错": "錯", "实": "實", "馆": "館", "刚": "剛", "须": "須", "适": "適", "饭": "飯", "连": "連", "输": "輸", "价": "價", "铁": "鐵", "学": "學", "赢": "贏", "着": "著", "园": "園", "欢": "歡", "韩": "韓", "叶": "葉", "顺": "順", "险": "險", "们": "們", "饿": "餓", "语": "語", "给": "給", "码": "碼", "邮": "郵", "间": "間", "场": "場", "谁": "誰", "复": "複", "现": "現", "鱼": "魚", "视": "視", "华": "華", "预": "預", "脚": "腳", "风": "風", "岁": "歲", "话": "話", "卖": "賣", "银": "銀", "称": "稱", "汤": "湯", "员": "員", "双": "雙", "泪": "淚", "楼": "樓", "样": "樣", "贵": "貴", "爷": "爺", "绍": "紹", "划": "劃", "还": "還", "内": "內", "压": "壓", "绿": "綠", "转": "轉", "妈": "媽", "检": "檢", "节": "節", "谈": "談", "签": "簽", "开": "開", "挂": "掛", "惯": "慣", "换": "換", "担": "擔", "试": "試", "网": "網", "门": "門", "孙": "孫", "兴": "興", "难": "難", "这": "這", "师": "師", "家": "家"/*"傢"*/, "题": "題", "帅": "帥", "爱": "愛", "闷": "悶", "备": "備", "参": "參", "礼": "禮", "扫": "掃", "济": "濟", "乐": "樂", "静": "靜", "专": "專", "从": "從", "儿": "兒", "识": "識", "喂": "餵", "卧": "臥", "认": "認", "医": "醫", "办": "辦", "裤": "褲", "续": "續", "赶": "趕", "单": "單", "觉": "覺", "帮": "幫", "带": "帶", "头": "頭", "伦": "倫", "借": "藉", "业": "業", "诉": "訴", "词": "詞", "离": "離", "旧": "舊", "东": "東", "虽": "雖", "凉": "涼", "费": "費", "将": "將", "简": "簡", "会": "會", "减": "減"};

/*
CHARACTERS TO ADD
	八
CHARACTERS TO FIX
	家
*/

function swapped(d){
	// Swaps the keys and values of a dictionary.
	var sd = {};
	for(var k in d){
		sd[d[k]] = k;
	}
	return sd;
}

function toggle(){
	// Toggles all text within a specified element between traditional and simplified Chinese.
	var docs = document.getElementsByClassName("zh");
	// State 0 signifies that the text is currently traditional and 1 means it's simplified.
	var ch = (state ? characters : swapped(characters));
	for(var i=0; i<docs.length; i++){
		var doc = docs[i].innerHTML;
		var t = "";
		for(var j=0; j<doc.length; j++){
			if(doc[j] in ch){
				t += ch[doc[j]];
			}
			else{
				t += doc[j];
			}
		}
		docs[i].innerHTML = t;
	}
	state = (state ? 0 : 1);
	id("translator").innerHTML = "Switch to " + (state ? "Traditional" : "Simplified");
}

function continuity(){
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

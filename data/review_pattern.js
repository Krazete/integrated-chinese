var pattern = {
	"a": {
		"1": [
			{"我姓王": ["老師姓王。", "學生也姓王。", "王小姐不姓李。"]},
			{"你呢<br>Use of 呢": ["李小姐是美國人，王先生呢？", "我是學生，你呢？", "老師是中國人，學生呢？", "我姓王，您呢？", "王先生叫王貴生，王小姐呢？"]},
			{"你叫什麼名字": ["李先生叫什麼名字？", "老師叫什麼名字？", "請問，您姓什麼？叫什麼名字？", "王小姐叫王美。", "李先生叫李貴生。", "我不叫李朋。"]}
		],
		"2": [
			{"張<br>Measure Words": ["十個人", "七個美國人", "三個中國人", "五個律師", "兩個老師", "八個醫生", "一個哥哥", "兩個弟弟", "一個姐姐", "三個妹妹", "十個學生", "四個女兒", "一個兒子", "兩個名字", "六個孩子", "一張照片", "兩張照片", "這個老師是中國人。", "那張照片不是我的。"]},
			{"這兩個男孩子是誰<br>Question Pronouns": ["她是誰？", "誰是醫生？", "誰有照片？", "這是誰的孩子？", "你有幾張照片？", "他有幾個弟弟？", "你叫什麼名字？", "你爸爸做什麼？"]},
			{"高先生沒有女兒<br>踴鮫r \"to possess\" or for \"Existence\"": ["我有三張照片。", "他有兩個弟弟。", "李小姐沒有姐姐。", "你有孩子嗎？", "我家有七個人。", "他家有四個大學生。"]}
		],
		"3": [
			{"你們今年多大<br>Inquiring about age": ["小張今年多大？", "你小弟弟今年幾歲？", "李老師的爸爸今年多大歲數？"]},
			{"你請他吃飯還是他請你吃飯<br>Alternative Questions": ["張先生是律師還是醫生？", "今天是星期三還是星期四？", "你十五號請我們還是十六號請我們？", "你喜歡張小姐還是喜歡李小姐？", "現在是三點一刻還是三點十分？"]},
			{"我請你們吃晚飯<br>Pivotal Sentences": ["明天王先生請我吃飯。", "我請張小姐看電影。(L.4)", "小高請我去聽音樂。(L.4)"]}
		],
		"4": [
			{"你周末常常去唱歌": ["去打球", "去吃飯", "去跳舞", "去聽音樂", "我不想去看電影。", "他們常常去看中國電影。"]},
			{"因為": ["因為我今天很忙，所以我不去跳舞。", "因為別人都不去，所以我也不去。", "因為看電視沒有意思，所以我們去打球。", "因為老師現在不忙，所以我們都去找他。", "因為那個電影不錯，所以我很想看。"]},
			{"所以": ["因為我今天很忙，所以我不去跳舞。", "因為別人都不去，所以我也不去。", "因為看電視沒有意思，所以我們去打球。", "因為老師現在不忙，所以我們都去找他。", "因為那個電影不錯，所以我很想看。"]}
		],
		"5": [
			{"他在哪兒工作<br>The preposition 在": ["你們在哪兒打球？", "我想在家睡覺。", "他媽媽在學校工作。", "你不可以在圖書館跳舞。", "我們有時候在小張家看電視。"]},
			{"我很高興<br>Adjective used as a predicate": ["這個孩子很漂亮。", "我們的書很不錯。", "他很有意思。", "昨天我媽媽很高興，因為我們都回家了。", "這個星期我很忙。"]},
			{"我介紹一下<br>一下(quantifies the verb) and 一點兒(quantifies the object)": ["我想喝一點兒水。", "請你介紹一下。", "我們在圖書館字一下吧。", "他給了我們一點兒茶。", "我們今天喝點兒什麼？"]},
			{"給你一杯水吧<br>吧 in an imperative sentence": ["來吃飯吧！", "我們去跳舞吧！", "那個外國電影很不錯，你去看吧。", "這個週末我們去聽音樂吧！", "你去找別人吧。"]}
		],
		"6": [
			{"我一點半要開會<br>The Auxiliary Verb 要": ["他們現在要去吃飯。", "你下午要做什麼？", "我考試以後要回家，不想去打球。", "我們九點半要開會。你下午來吧。", "現在我要到李醫生的辦公室去。"]},
			{"給你打電話<br>給 as a preposition": ["他給我打了兩個電話。", "媽媽給我們做晚飯了。你在我家吃吧！", "她給我看了幾張她和小王的照片。", "你給我們唱一個中國歌兒吧。", "李先生給王小姐介紹了一個男朋友。"]}
		],
		"7": [
			{"學中文學得怎麼樣<br>Descriptive Complements": ["他吃飯吃得很快。", "我睡覺睡得很好。", "張老師唱歌唱得不錯。", "你寫字寫得也很漂亮。", "白小姐舞跳得好，歌唱得不太好。"]},
			{"有一點兒<br>有一點兒 Adj": ["我的辦公室有一點兒小。", "這個星期我有一點兒忙。", "學校的咖啡有一點兒貴。", "在學校打電話有一點兒不方便。", "老師，您說話說得有一點兒快。"]},
			{"上個星期就預習了<br>就 for earliness, briefness, or quickness": ["我明天就去。", "他們四點半就吃晚飯了。", "我現在就可以教你。", "我們今天就去找他，好嗎？", "他上個週末就預習語法了。"]}
		],
		"8": [
			{"八點一刻起床<br>Position of Time Word": ["我們十二月去中國。", "他明天下午來看我。", "你幾點回宿舍？", "昨天半夜他給我打了一個電話。", "你們下午三點半來吧。"]},
			{"就<br>就 indicates the second action happens right after the first is completed": ["我做了功課就幫助你。", "昨天他回了家就睡覺了。", "你看了書就懂了。", "他今天下午聽了錄音就去圖書館。", "我給他打了電話以後他就來了。"]},
			{"一邊吃早飯一邊看報<br>Simultaneity of two ongoing actions": ["我喜歡一邊聽音樂一邊做萛課。", "他們常常一邊唱歌一邊跳舞。", "她一邊笑一邊說：¨我知道！〃", "你能一邊跳舞一邊喝咖啡嗎？", "你不可以一邊上課一邊打電話！"]},
			{"去餐廳吃午飯<br>Series of Actions": ["我今天要回家吃飯。", "你可以來幫我嗎？", "我們去哪兒看電影？", "他們下午去教室練習發音。", "你也去小王家學唱歌嗎？"]},
			{"小張來找我的時候，我正在寫一篇日記": ["他來的時候我正在聽音樂。", "我去的時候她正在看電視。", "我們去找小李的時候，他正在打球。", "爸爸回家的時候，我們正在吃晚飯。", "我進去的時候，老師正在給大家介紹中國音樂。"]},
			{"請你告訴他，我已經買了<br>Double Objects": ["請你告訴我他的名字。", "我可以教你跳中國舞。", "他問了我們很多問題。", "我不想給他這張照片。", "王老師教你們什麼？"]}
		],
		"9": [
			{"你今天要買什麼<br>Use of 要": ["下午你要去哪兒？", "我要去買一杯咖啡。", "你要喝可樂嗎。我不想喝。", "我們要去看小高。", "明天我和張律師要去聽音樂。"]},
			{"我喜歡黃的<br>Adj 的": ["我的書不是新的。", "我有兩件襯衫，你想穿大的還是小的？", "你喜歡哪雙鞋？黑的還是咖啡色的？", "我們今天學了十六個漢字。這個是最容易的。", "紅的是你的，藍的是我的。"]},
			{"多大的<br>多 Adj = How Adj?": ["那本新書(有)多貴？", "你朋友說中文說得(有)多快？", "小張的女朋友今年多大？", "你的鞋是多大的？是八號的嗎？", "我不知道我明天(有)多忙。"]}
		],
		"11": [
			{"不下雨了<br>了 indicating a change of status": ["我會用電腦了！", "她今年不學中文了。", "十二點半了。", "今天暖和一點兒了。", "我現在不忙了。"]},
			{"天氣會好一點兒<br>會 indicating possibility": ["我想今天他不會來。", "爸爸今年會給我買一個新電腦嗎？", "這個學期他太忙了。我想他不會學中文。", "明天會下雨嗎？", "下午你會在圖書館嗎？"]},
			{"不但<br>Pattern 不但...而且...": ["他不但會說中文，而且會寫漢字。", "我媽媽不但給我打電話了，而且這個週末要來看我。", "這件衣服不但便宜，而且很漂亮。", "小張不但唱歌唱得很好，而且跳舞也跳得不錯。", "哥哥不但回來了，而且給你買了一雙鞋！"]},
			{"比<br>Comparison": ["我比你高。", "他比你客氣一點兒。", "那件襯衫比這件合適。", "這雙鞋比那雙貴五塊錢。", "這個星期的課比上個星期的容易多了。"]}
		],
		"10": [
			{"飛機票已經買了<br>Topic~Comment Sentences": ["那張照片我給他了。", "今天的語法你們有問題嗎？", "那雙黑鞋你去換了嗎？", "這個星期的功課他做得很好。", "這封信我看了。寫得不錯。"]},
			{"先": ["你得先洗澡，再睡覺。", "我們先去看小張，再去看小王。", "先吃飯再喝茶，好嗎？", "我先吃晚飯再去幫你，好嗎？", "你先唱，然後我再唱。"]},
			{"坐七路或者九路<br>Use of 或者": ["今天下午我會在宿舍或者在圖書館。", "我們三點或者四點去。", "我想找李老師或者高老師。", "我們可以走去或者坐公共汽車去。", "這個週末他們會去打球或者去看電影。"]},
			{"還是我開車送你們去吧<br>Use of 還是...吧": ["我們還是明天去吧。", "還是你教大家唱歌吧。", "你還是坐出租汽車去好。", "我知道您很忙。還是我自己妝吧。", "你們還是坐七路公共汽車去吧。"]}
		],
		"12": [
			{"一個位子都沒有": ["我們一點兒味精都沒放。", "他一杯啤酒都沒喝。", "我今天一本書也不想看。", "他們的菜一點兒也不好吃。", "週末我一個漢字都沒寫。"]},
			{"做好": ["今天的功課做好了嗎？", "飯做好了。來吃吧！", "等你寫好日記，我們就一起看電視吧。", "衣服做好了，可是做得不太好。", "我下個月才去中國，可是飛機票已經買好了。"]}
		],
		"21": [
			{"把": ["你把這個電腦賣給我吧。", "他把我的車開到學校去了。", "誰把紅燒牛肉吃完了？", "對不起，我把你的名字忘了。", "請大家把書放在桌子上。"]},
			{"留在這兒<br>在、到、給 used in complements:": ["那盤餃子放在這兒吧！", "他走到家的時候已經十點了。", "我把錄音帶還給老師了。", "我們可以坐在那兒。", "她送給我一張照片。"]},
			{"開到幾點<br>Indicating the end point of a duration": ["我昨天晚上學中文學到半夜。", "現在我們學到第十三課了。", "圖書館開到五點半。", "我們昨天等到下午三點。他還沒來。", "你怎麼吃到現在還沒吃完？"]},
			{"半個鐘頭<br>Time Duration Expressions": ["他每年在中國工作四個月。", "昨天我妹妹洗澡洗了一個半鐘頭！", "今天晚上我要睡十個鐘頭的覺。", "我等你等了三刻鐘。", "這本書我可以藉多久？"]}
		],
		"13": [
			{"旁邊<br>location words": ["王小姐在我左邊。", "學校旁邊有一家飯館。", "那本書在桌子上。", "教室裡有沒有人？", "圖書館就在活動中心旁邊。"]},
			{"沒有<br>comparative sentences (not as Adj As...)": ["我沒有你高。", "他們沒有我們這麼忙。", "今天沒有昨天那麼熱。", "我寫字寫得沒有你快。", "我們說中文說得沒有老師那麼好。"]},
			{"那麼遠<br>那麼/這麼 Adj (so Adj Like that/this)": ["飛機場怎麼那麼遠？", "我沒有我妹妹那麼漂亮。", "你怎麼來得這麼晚？", "我沒有那麼大的照片。", "這件衣服這麼貴！我不買了。"]},
			{"到學校書店去買書<br>denotes the purpose of going somewhere": ["我想到中國去學中文。", "你去學校做什麼？", "他們去小張家看錄像。", "我們都去圖書館還書。", "你周末想不想去公園看紅葉？"]},
			{"就<br>a conjunction used in the second clause when the first clause suggests a condition": ["你不喜歡吃西餐，我們就吃中餐吧！", "今天沒時間，你就明天去吧。", "要是不方便，我就以後再來看你吧。", "要是牛肉賣完了，就買一條魚！", "你沒錢，就別買這麼貴的鞋。"]}
		],
		"14": [
			{"做什麼呢<br>Progressive Aspect": ["我做功課呢。", "他們都在上課呢。", "妹妹還在看電視嗎？", "別進去，他睡覺呢。", "我去的時候，他正在洗澡呢。"]},
			{"住的地方<br>Attributives": ["這是我昨天買的書。", "你寫的字太大了。", "我很喜歡吃媽媽做的紅燒魚。", "你送我的錄像帶有意思極了。", "我們上中文課的教室又大又亮(bright)。"]}
		],
		"15": [
			{"疼死了": ["今天外邊熱死了！", "坐公共汽車麻煩死了。", "有什麼吃的？我餓死了！", "來兩瓶啤酒。我渴死了。", "我今天走了很多路，腿疼死了。"]},
			{"次": ["上個星期我打了兩次針。", "這個月他看了四次病。", "他來看過我三次。", "我們去過中國城五次。", "我們去過五次中國城。"]}
		],
		"16": [
			{"玩兒得很高興<br>Descriptive complement describing the subject": ["他們聊得很高興。", "今天我們都吃得很飽(full)。", "你在我家睡得舒服嗎？", "我看電影看得很緊張。", "我忙得沒有時間吃飯。"]},
			{"買得到<br>Potential complement": ["你看得清楚嗎？", "我找不到那本字典了。", "門太小了。進得去進不去？", "你一進去就走不出來了。", "我們都聽不懂他說的話。"]},
			{"就~only": ["我的中文書不多，就三本。", "怎麼這兒就你們兩個人？", "上個星期下了六天雨，就星期四沒下。", "我們家就我一個人學中文。", "我不想吃別的，就想吃魚。"]}
		],
		"17": [
			{"住了一個學期了<br>The action has been continuing up to now.": ["妹妹打電話打了一個鐘頭了！", "這個電影我看了三次了。", "我買了五本字典了。", "我已經花了六十塊錢了。不想買別的了。", "他喝了四瓶啤酒了，還想喝。"]},
			{"連電腦都... ": ["你怎麼連我的名字都忘了？", "連我弟弟都認識這個字。", "他連周末都很忙。", "我連廚房都找了，還是沒找到。", "小白連紅燒魚都不喜歡吃。"]},
			{"放不下<br>V得下/V不下：capacity to hold something": ["桌子太小，放不下兩個電腦。", "這間臥室只放得下一張床。", "這套公寓住得下住不下七個人？", "我吃不下了。", "我的車應該坐得下五個人。"]},
			{"一個多星期<br>多 indicating an approximate number": ["我有二十多本中文書。", "那個醫生太忙了，每天要看一百多個病人！", "今天他吃了三十多個餃子。", "昨天我只睡了四個多小時。", "我會在紐約住一個多月。"]}
		],
		"22": [
			{"三、四<br>Combination of two adjacent numbers for Approximation": ["張老師有十五、六本字典。", "過兩、三個路口就到運動場了。", "他們的客廳裡有六、七把椅子。", "我每個月交二、三十塊錢的水電費。", "他一個月花八、九百塊錢。"]},
			{"越快越好<br>the more... the more...": ["你怎麼越走越慢了？", "他越想越高興。", "你明天來得越早越好。", "這種家具越舊越貴。", "別說了。你越說我越想家。", ""]},
			{"就<br>就 links two related clauses or sentences. It appears in the second clause or sentence, following the subject.": ["不能往左拐，就往右拐吧。", "你想吃糖醋魚，我們就點一個！", "要是平信太慢，我就寄快信。", "你不舒服，就躺下吧。", "要是你想不起來，我就告訴你。"]}
		],
		"18": [
			{"兩年沒運動了~Duration for no~action": ["他上個星期有三天沒來上課。", "我有四個鐘頭沒喝水了。渴死了。", "他們每年有兩個半月不工作。", "我好久沒打籃球了，可能打不好了。", "你多長時間沒看見他了？"]},
			{"難受~好/難V": ["你的車很好開。", "我寫的字太難看了。", "酸辣湯酸酸的，辣辣的，好喝極了。", "你吃了藥就不難受了。", "我覺得這個電腦比我的好用。"]},
			{"下去~Continuation of an action already in progress": ["你說得很好。請說下去。", "媽媽，別關電視。我還想看下去呢。", "這個電影真沒意思。我看不下去了。", "雖然中文很難，但是我一定要學下去！", "我不聽錄音了。我要回家了。你還想听下去嗎？"]}
		],
		"19": [],
		"23": [
			{"父母~Terms of Address for Relatives": ["我的父母就是我的爸爸媽媽。", "爸爸的媽媽是我的奶奶。", "媽媽的爸爸是我的外公。", "爸爸的姐姐是我的姑姑。", "媽媽的姐姐是我的阿姨。"]},
			{"左邊有幾座小山~Existential Sentences (PL~有~Num. M. Noun.)": ["桌子上有很多書。", "我前邊有一個人。", "學校後邊有很多大樹。", "這張紙上有很多字。", "教室裡有三十個學生。"]},
			{"右邊是一條小河~Existential Sentences (PL~是~Noun.) for identification": ["桌子上是什麼？", "我前邊是王朋。", "學校後邊不是房子，是樹。", "這張紙上是我寫的字。", "教室裡是我們班的同學。"]},
			{"小河兩邊種著很多樹~Existential Sentences (PL~V著~Num.M.Noun)": ["桌子上放著很多書。", "我前邊站著一個人。", "學校後邊種著很多樹。", "這張紙上寫著很多字。", "教室裡坐著三十個學生。"]}
		],
		"20": [
			{"的時候 vs 以後": ["出門的時候別忘了關燈。", "出門以後我才想起來：我忘了帶錢了。", "下飛機的時候外面正在下雨。", "下了飛機以後他就去拿行李。", "我們一起回家的時候，我告訴他我回家以後要做什麼。"]}
		]
	},
	"b": {
		"1": [
			{"我是學生<br>Use of 是": ["李先生是中國人。", "王小姐是美國人。", "老師是中國人。", "我是中國學生。", "李友是美國學生。"]},
			{"我也是學生<br>Use of 也": ["老師也姓李。", "李小姐也是學生。", "王小姐也叫王朋。", "李先生也是老師。", "老師也是中國人。"]},
			{"你是美國人嗎<br>Use of 嗎": ["你是中國人嗎？", "李小姐是學生嗎？", "王老師是美國人嗎？", "老師也姓李嗎？", "請問，您是王先生嗎？"]},
			{"我不是美國人<br>Use of 不": ["老師不姓李。", "老師不是美國人。", "李小姐不叫李友。", "王先生不是學生。", "我也不姓王。"]}
		],
		"2": [
			{"他爸爸媽媽都是律師<br>Use of 都": ["我和弟弟都有照片。", "小王和小張都是中國人。", "張小朋，張小友和張小美都是張先生的孩子。", "你和他都沒有弟弟。", "李先生和王小姐都不是律師。"]},
			{"兩個姐姐<br>二 and 兩": ["1, 2, 3,... = 一，二，三，......", "我有兩張照片。", "他有兩個妹妹。", "李先生有兩個孩子。", "我有三個哥哥。兩個哥哥是律師，一個是老師。"]}
		],
		"3": [
			{"忙不忙<br>Affirmative~Negative Questions": ["請問，您是不是老師？", "王朋有沒有弟弟？", "你請不請白小姐？", "你吃不吃中國飯？", "今年是不是一九九八年？", "他認識不認識你？", "你們喜歡不喜歡這張照片？", "他忙不忙？", "你們老師好不好？"]}
		],
		"4": [
			{"你想請誰": ["我想睡覺。", "你想看書嗎？", "他不想去跳舞。", "我們都想明年去中國。", "你哥哥想不想去打球？"]},
			{"我不請小白，好嗎": ["我們請李老師吃飯，好嗎？", "我們星期日去，好嗎？", "張律師很沒有意思，我們不請他，好嗎？", "我很忙，你去找別人，好嗎？", "今天晚上十點半見，好嗎？"]}
		],
		"5": [
			{"十二點半才回家<br>才 indicating actions later than expected": ["他明天才來。", "小張常常八點來，可是今天九點才來。", "你為什麼現在才去學校？", "我昨天兩點才睡覺。", "我昨天才認識他。"]},
			{"你們喝了幾瓶酒<br>Use of 了": ["張老師來了。", "他今天沒回家。", "昨天我沒玩兒，我看書了。", "我們都跳舞了。", "我們跳了六個舞。", "他喝了五杯啤酒。", "她也喝酒了。", "我沒喝酒。"]}
		],
		"6": [
			{"別客氣<br>Use of 別": ["吃吧，別客氣。", "你今天別去找他。", "請你們別在圖書館聊天兒。", "你現在別給他打電話。我知道他不在。", "要是你不想喝，就別喝！"]},
			{"回來<br>Directional Complements": ["我哥哥八點才回來。", "你們快進去吧。", "你看，他請來了三十個朋友！", "我給你們找來了一位好律師。", "今天你想不想回去？"]},
			{"得練習說中文<br>Auxiliary Verb 得 for \"need\" or \"must\"": ["我現在得回家。", "你今天得給媽媽打電話吧？", "我得想一下。", "要是今天下午我去看電影，晚上就得看書。", "你今天可以去玩兒，但是明天得回來練習中文。"]}
		],
		"7": [
			{"半夜才回家<br>才 vs 就": ["我平常十一點鐘睡覺，今天十二點半才睡覺。", "我平常十一點睡覺，今天十點就睡了。", "我平常十一點睡覺，明天十點就睡！", "他平常五點回家，昨天六點半才回家。", "他平常五點回家，昨天四點就回家了。", "他平常五點回家，他說他明天四點就回家。"]},
			{"怎麼來得這麼晚": ["你怎麼寫字寫得這麼漂亮？", "他怎麼複習得這麼不好？", "你怎麼昨天沒回家？", "怎麼老師不在辦公室？", "怎麼這杯咖啡這麼貴？"]}
		],
		"8": [
			{"除了教我們中文語法和漢字以外，還教我們唱中國歌<br>The Pattern 除了...還": ["除了小白，小高以外，我還請了小李。", "他除了英文，日文以外，還會中文。", "除了寫漢字以外，我昨天還念了課文。", "除了咖啡，可樂，和英國茶以外，我們還要了中國酒。", "除了打球，看電視以外，你們週末還做什麼？"]},
			{"我會唱兩個中國歌<br>能 and 會 compared": ["我會跳舞，可是現在不能跳。", "他不會用電腦，你能不能教他？", "晚上我得在家複習中文，不能去看電影。", "我知道你會打球，可是你不能在這兒打。", "你會唱中國歌兒嗎？"]}
		],
		"9": [
			{"跟你的鞋大小一樣<br>A 跟 B 一樣 Adj": ["他姐姐跟他一樣高。", "你女兒跟你一樣漂亮。", "這個圖書館跟那個一樣大嗎？", "今天我跟他起床起得一樣早。", "他寫漢字寫得跟你一樣快。"]},
			{"雖然不太新，可是你穿很合適<br>Pattern 雖然...可是...": ["雖然這件衣服很漂亮，但是太貴了。", "雖然她很喜歡聽音樂，可是今天沒去聽。", "他雖然是美國人，但是喜歡吃中國飯。", "雖然我認識他，可是我不知道他的名字。", "雖然李先生喜歡喝酒，但是只能喝三杯。"]}
		],
		"11": [
			{"又下雨了<br>又 indicating past repetition": ["他又來了！", "你看，張小姐又笑了。", "我們辦公室又買了一個電腦。", "你昨天晚上又沒給我打電話！", "你怎麼又不高興了？"]},
			{"又好看，又好吃": ["今天的功課又不多又容易！", "他們的教室又小又黑。", "這雙鞋又漂亮又合適。", "你們的床又大又舒服。", "張先生寫漢字寫得又快又好。"]}
		],
		"10": [
			{"我每天都練習<br>Use of 每...都...": ["我弟弟每天都寫日記。", "每年冬天他都去台北。", "我們每個人都有電腦。", "她的衣服每件都很貴。", "你每個字都寫得一樣大，真漂亮！"]},
			{"快到了": [" 快 V 了~something is about to happen.", "週末又快到了。你想做什麼？", "冬天快到了。你有暖和的衣服嗎？", "電影快開始了。我們快去吧！", "快上課了。你怎麼還在睡覺？", "我們快考試了。我這個週末不出去玩兒了。"]}
		],
		"12": [
			{"酸酸的，甜甜的": ["這碗牛肉湯辣辣的，真好喝！", "她的男朋友高高的，大大的。", "今天很熱。喝一杯涼涼的水舒服極了。", "她的頭髮(hair)黑黑的，長長的，漂亮極了。", "你們的宿舍暖暖和和的，很舒服。"]},
			{"極了": ["王老師的書多極了。", "昨天晚上冷極了。", "那個外國電影有意思極了。", "這條褲子貴極了。", "他做紅燒魚做得好吃極了。"]},
			{"賣完": ["你們吃完了嗎？", "我做完了功課就去看電影。", "我還沒寫完這課的漢字。", "涼拌黃瓜賣完了。", "我們點了五個菜，可是一個都沒吃完。"]},
			{"來": ["來五瓶啤酒！", "請你給我們來三十個餃子。", "再來二兩米飯吧。", "我寫得不好看。你來吧！", "唱得真好。再來一個！"]},
			{"多找了我一塊錢": ["你少寫了十個漢字。", "今天你多吃一點兒吧。", "我比他多穿一件衣服，可是還覺得冷。", "我這個學期比上個學期少上一門課。", "媽媽希望你多給她打幾個電話。"]}
		],
		"21": [
			{"藉多久<br>Duration of an Action": ["他們在中國學了三個月的中文。", "你昨天聽錄音聽了多久？", "你昨天聽了多久的錄音？", "這個星期下了五天的雨。", "他們聊天聊了兩個鐘頭。"]}
		],
		"13": [
			{"去過<br>V 過~past experience": ["你去過上海嗎？", "我沒吃過素餃子，你呢？", "我沒跟他跳過舞。", "這個學期我們還沒考過試呢。", "我看過好幾次那本書，可是沒看完過。"]},
			{"走到<br>Resultative Complements": ["我們吃完了！", "你找到字典了嗎？", "你沒寫對。你寫錯了。", "我聽清楚了，可是沒聽懂。", "對不起，我來晚了。"]},
			{"一拐就到了<br>一...就...~as soon as... then... ": ["他一回來我們就去，好嗎？", "小王一喝啤酒就想唱歌。", "我一看就知道他今天不太高興。", "他每天一上課就睡覺。", "怎麼我一進來他就出去了？"]}
		],
		"14": [
			{"還沒來<br>還 meaning \"still\" ": ["你怎麼還不去？", "老師開始上課了，可是小張還沒來呢！", "妹妹還在打電話，打了一個鐘頭了！", "我寫了三刻鐘了，還沒寫完。", "李友回來了，可是王朋還在中國。"]},
			{"是在哪兒學的": ["這本書你是在哪兒買的？", "你們是坐車來的嗎？", "我不是跟他一起來的。", "我會一點兒中文。是我媽媽教我的。", "你是不是在暑期學校認識他的？"]},
			{"讓他學彈鋼琴<br>Pivotal sentences": ["我們想請你給我們介紹一下上海。", "爸爸叫我去買一張今天的報。", "我可以叫小弟去給我借一本字典。", "我唱得不好，你讓李友唱吧。", "老師讓我們明天把漢字練習帶來。"]}
		],
		"15": [
			{"對什麼過敏<br>Preposition 對": ["他對我很好。", "學中文對我將來的工作很有幫助。", "我對味精過敏。", "這件襯衫對你很合適。", "電腦對我們都很有用。"]},
			{"買回來<br>Compound directional complement": ["我們把這些剩菜帶回去吧。", "你能不能從樓上把字典拿下來？", "他開進學校去了。", "我想帶幾個同學回來。", "昨天晚上他買回來了兩條魚。"]},
			{"再說<br>To provide additional reason(s)": ["我不去看電影，因為我太忙。再說那個電影也不好。", "去幫幫他吧。你是他哥哥，再說你現在也不忙。", "我不去還書。我現在沒時間，再說圖書館也關門了。", "我們走去吧。我的車壞了，再說也不遠。", "我們點一個豆腐吧。小王和小李都吃素，再說豆腐對身體也很好。"]},
			{"對不對<br>Tag question": ["他是美國人，對不對？", "他是不是正在學中文？", "他正在學中文，是不是？", "你是不是每天都很忙？", "你想家了，對不對？"]}
		],
		"16": [
			{"慶祝慶祝<br>Reduplication of Verbs": ["你想不想看看我朋友的照片？", "你說說，昨天去哪兒了？", "明天考試，晚上我得複習複習。", "今天我不想看書，想去跳跳舞，唱唱歌。", "我的車很容易開。你試試。"]}
		],
		"17": [
			{"什麼動物都不養": ["我在這兒誰也不認識。", "我女兒什麼都愛吃。", "我們幾點鐘去都行。", "小王怎麼找也找不到他的書。", "你們哪天來我家都可以。"]}
		],
		"22": [
			{"收到": ["我給你寄了一封信。你收到了嗎？", "我們今天寄。她什麼時候能收到？", "收到以後，別忘了給我打個電話。", "他常常收到從中國來的信。", "要是你的信上不貼郵票，他就收不到。"]},
			{"除了人民幣以外，別的錢都不能存<br>Indicates an exclusion pertaining to what is said in the clause led by 除了": ["除了信用卡以外，我什麼證件都沒有。", "我妹妹除了啤酒以外，什麼都愛喝。", "除了謝先生以外，我誰都不認識。", "除了這個書架以外，別的家具都不錯。", "他來美國以後，除了中國城以外，哪兒都沒去過。"]}
		],
		"18": [
			{"看兩個小時的電視~Another duration pattern (Sub~V~Duration~(的)~Obj.)": ["我昨天只睡了五個鐘頭的覺。", "他每天都聽一個小時錄音。", "你們今天打了多長時間的籃球？", "媽媽讓姐姐每天彈一個小時的鋼琴。", "你每天遊半個鐘頭泳，身體就會好了。"]},
			{"跑起來~V起來 indicating the beginning of an action (V~起~Obj.~來)": ["妹妹一回家就打起電話來了。", "他們已經吃起來了，你怎麼還坐在這兒？", "你說我們一起去買東西，怎麼看起報紙來了？", "糟糕，剛要出去就下起雨來了！", "我還沒說完，她就笑起來了。"]},
			{"被~The passive voice": ["我的可樂被誰喝了？", "你的車被小李開到紐約去了。", "電腦被弟弟用壞了。", "爸爸給我的錢都被我花完了。", "我的新襯衫被媽媽送給老張的兒子了。"]}
		],
		"19": [
			{"有的": ["他買的書有的是中文的，有的是英文的。", "我們班的同學有的做功課了，有的沒做。", "我有的時候忙，有的時候不忙。", "有的地方我去過，有的我沒去過。", "有的人死了，有的人還活著。"]},
			{"一千": ["十個一百就是一千。", "九百九十九加一就是一千。", "他會寫一千多個漢字。", "我租的公寓一個月要付一千多塊錢。", "我銀行里的錢不到一千塊了。"]},
			{"哪家的便宜，就買哪家的~Question words used as References. Usually a 就 is used in the second clause.": ["你想吃什麼菜，我們就點什麼菜。", "哪天天氣好，我們就哪天去公園。", "你幾點有空兒，我就幾點來看你。", "誰寫字寫得好看，我們就請誰寫。", "你去哪兒，我就去哪兒。"]},
			{"比韓航貴兩百多塊~Comparison indicating disparity in an exact amount": ["我比你大三歲。", "他比我高兩寸(inch)。", "今天比昨天熱五度(degree)。", "這件襯衫比那件便宜十塊錢。", "我的書比你的少一本。"]}
		],
		"23": [
			{"美國好是好，但是我更喜歡我的家鄉~\"V/Adj 是 V/Adj，但是/可是...\"": ["今天熱是熱，但是不太悶。", "這本書有意思是有意思，可是太長了。", "我想去是想去，但是沒有時間。", "他聰明是聰明，可是不太用功。", "日文我會說是會說，但是說得不好。"]}
		],
		"20": [
			{"地": ["小王高高興興地說，“今天我考試考得很好！”", "今天我來晚了。明天一定要早早兒地來！", "爸爸常說，“孩子，你要好好兒地學中文！”", "時間還早。我們可以慢慢地走，一邊走一邊聊。", "白小姐很小心地把花瓶拿起來給我看。"]},
			{"拿不動~V 得/不動 indicating whether or not the subject has the physical strength to do something.": ["我們走了三個鐘頭了。我走不動了！", "你提得動提不動這個大箱子？", "這張桌子這麼重。我們兩個人搬得動嗎？", "我的舊汽車早就開不動了。", "奶奶說，“再過幾年我就抱不動小孫子了！”"]},
			{"才 suggesting \"early\" or \"not enough\"": ["我們出門才五分鐘就下起雨來了。", "餃子怎麼都被你吃完了？我才吃了兩個！", "她弟弟今年才十歲。", "媽媽，現在才八點，您就叫我起床！", "這本書我才看了三天，怎麼會過期呢？"]},
			{"還好~\"還 + positive adjective\" indicating something is acceptable if not desirable": ["這家飯館的牛肉做得不太好，但是紅燒魚還行。", "今天天氣還好，沒下雪。", "我爺爺的身體還不錯，最近沒生病。", "這家旅行社的服務還可以。", "他雖然不會寫漢字，但是中文說得還不錯。"]}
		]
	},
};

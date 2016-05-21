var patternA = {
	1:	[{"我姓王":["老师姓王。","学生也姓王。","王小姐不姓李。"]},{"你呢<br>Use of 呢":["李小姐是美国人，王先生呢？","我是学生，你呢？","老师是中国人，学生呢？","我姓王，您呢？","王先生叫王贵生，王小姐呢？"]},{"你叫什么名字":["李先生叫什么名字？","老师叫什么名字？","请问，您姓什么？叫什么名字？","王小姐叫王美。","李先生叫李贵生。","我不叫李朋。"]}],
	2:	[{"张<br>Measure Words":["十个人","七个美国人","三个中国人","五个律师","两个老师","八个医生","一个哥哥","两个弟弟","一个姐姐","三个妹妹","十个学生","四个女儿","一个儿子","两个名字","六个孩子","一张照片","两张照片","这个老师是中国人。","那张照片不是我的。"]},{"这两个男孩子是谁<br>Question Pronouns":["她是谁？","谁是医生？","谁有照片？","这是谁的孩子？","你有几张照片？","他有几个弟弟？","你叫什么名字？","你爸爸做什么？"]},{"高先生没有女儿<br>踊鮫r \"to possess\" or for \"Existence\"":["我有三张照片。","他有两个弟弟。","李小姐没有姐姐。","你有孩子吗？","我家有七个人。","他家有四个大学生。"]}],
	3:	[{"你们今年多大<br>Inquiring about age":["小张今年多大？","你小弟弟今年几岁？","李老师的爸爸今年多大岁数？"]},{"你请他吃饭还是他请你吃饭<br>Alternative Questions":["张先生是律师还是医生？","今天是星期三还是星期四？","你十五号请我们还是十六号请我们？","你喜欢张小姐还是喜欢李小姐？","现在是三点一刻还是三点十分？"]},{"我请你们吃晚饭<br>Pivotal Sentences":["明天王先生请我吃饭。","我请张小姐看电影。(L.4)","小高请我去听音乐。(L.4)"]}],
	4:	[{"你周末常常去唱歌":["去打球","去吃饭","去跳舞","去听音乐","我不想去看电影。","他们常常去看中国电影。"]},{"因为":["因为我今天很忙，所以我不去跳舞。","因为别人都不去，所以我也不去。","因为看电视没有意思，所以我们去打球。","因为老师现在不忙，所以我们都去找他。","因为那个电影不错，所以我很想看。"]},{"所以":["因为我今天很忙，所以我不去跳舞。","因为别人都不去，所以我也不去。","因为看电视没有意思，所以我们去打球。","因为老师现在不忙，所以我们都去找他。","因为那个电影不错，所以我很想看。"]}],
	5:	[{"他在哪儿工作<br>The preposition 在":["你们在哪儿打球？","我想在家睡觉。","他妈妈在学校工作。","你不可以在图书馆跳舞。","我们有时候在小张家看电视。"]},{"我很高兴<br>Adjective used as a predicate":["这个孩子很漂亮。","我们的书很不错。","他很有意思。","昨天我妈妈很高兴，因为我们都回家了。","这个星期我很忙。"]},{"我介绍一下<br>一下(quantifies the verb) and 一点儿(quantifies the object)":["我想喝一点儿水。","请你介绍一下。","我们在图书馆字一下吧。","他给了我们一点儿茶。","我们今天喝点儿什么？"]},{"给你一杯水吧<br>吧 in an imperative sentence":["来吃饭吧！","我们去跳舞吧！","那个外国电影很不错，你去看吧。","这个周末我们去听音乐吧！","你去找别人吧。"]}],
	6:	[{"我一点半要开会<br>The Auxiliary Verb 要":["他们现在要去吃饭。","你下午要做什么？","我考试以后要回家，不想去打球。","我们九点半要开会。你下午来吧。","现在我要到李医生的办公室去。"]},{"给你打电话<br>给 as a preposition":["他给我打了两个电话。","妈妈给我们做晚饭了。你在我家吃吧！","她给我看了几张她和小王的照片。","你给我们唱一个中国歌儿吧。","李先生给王小姐介绍了一个男朋友。"]}],
	7:	[{"学中文学得怎么样<br>Descriptive Complements":["他吃饭吃得很快。","我睡觉睡得很好。","张老师唱歌唱得不错。","你写字写得也很漂亮。","白小姐舞跳得好，歌唱得不太好。"]},{"有一点儿<br>有一点儿 adj":["我的办公室有一点儿小。","这个星期我有一点儿忙。","学校的咖啡有一点儿贵。","在学校打电话有一点儿不方便。","老师，您说话说得有一点儿快。"]},{"上个星期就预习了<br>就 for earliness, briefness, or quickness":["我明天就去。","他们四点半就吃晚饭了。","我现在就可以教你。","我们今天就去找他，好吗？","他上个周末就预习语法了。"]}],
	8:	[{"八点一刻起床<br>Position of Time Word":["我们十二月去中国。","他明天下午来看我。","你几点回宿舍？","昨天半夜他给我打了一个电话。","你们下午三点半来吧。"]},{"就<br>就 indicates the second action happens right after the first is completed":["我做了功课就帮助你。","昨天他回了家就睡觉了。","你看了书就懂了。","他今天下午听了录音就去图书馆。","我给他打了电话以后他就来了。"]},{"一边吃早饭一边看报<br>Simultaneity of two ongoing actions":["我喜欢一边听音乐一边做萛课。","他们常常一边唱歌一边跳舞。","她一边笑一边说：¨我知道！〃","你能一边跳舞一边喝咖啡吗？","你不可以一边上课一边打电话！"]},{"去餐厅吃午饭<br>Series of Actions":["我今天要回家吃饭。","你可以来帮我吗？","我们去哪儿看电影？","他们下午去教室练习发音。","你也去小王家学唱歌吗？"]},{"小张来找我的时候，我正在写一篇日记":["他来的时候我正在听音乐。","我去的时候她正在看电视。","我们去找小李的时候，他正在打球。","爸爸回家的时候，我们正在吃晚饭。","我进去的时候，老师正在给大家介绍中国音乐。"]},{"请你告诉他，我已经买了<br>Double Objects":["请你告诉我他的名字。","我可以教你跳中国舞。","他问了我们很多问题。","我不想给他这张照片。","王老师教你们什么？"]}],
	9:	[{"你今天要买什么<br>Use of 要":["下午你要去哪儿？","我要去买一杯咖啡。","你要喝可乐吗。我不想喝。","我们要去看小高。","明天我和张律师要去听音乐。"]},{"我喜欢黄的<br>Adj.的":["我的书不是新的。","我有两件衬衫，你想穿大的还是小的？","你喜欢哪双鞋？黑的还是咖啡色的？","我们今天学了十六个汉字。这个是最容易的。","红的是你的，蓝的是我的。"]},{"多大的<br>多 adj. = How adj.?":["那本新书(有)多贵？","你朋友说中文说得(有)多快？","小张的女朋友今年多大？","你的鞋是多大的？是八号的吗？","我不知道我明天(有)多忙。"]}],
	11:	[{"不下雨了<br>了 indicating a change of status":["我会用电脑了！","她今年不学中文了。","十二点半了。","今天暖和一点儿了。","我现在不忙了。"]},{"天气会好一点儿<br>会 indicating possibility":["我想今天他不会来。","爸爸今年会给我买一个新电脑吗？","这个学期他太忙了。我想他不会学中文。","明天会下雨吗？","下午你会在图书馆吗？"]},{"不但<br>Pattern 不但 ...而且 ...":["他不但会说中文，而且会写汉字。","我妈妈不但给我打电话了，而且这个周末要来看我。","这件衣服不但便宜，而且很漂亮。","小张不但唱歌唱得很好，而且跳舞也跳得不错。","哥哥不但回来了，而且给你买了一双鞋！"]},{"比<br>Comparison":["我比你高。","他比你客气一点儿。","那件衬衫比这件合适。","这双鞋比那双贵五块钱。","这个星期的课比上个星期的容易多了。"]}],
	10:	[{"飞机票已经买了<br>Topic-Comment Sentences":["那张照片我给他了。","今天的语法你们有问题吗？","那双黑鞋你去换了吗？","这个星期的功课他做得很好。","这封信我看了。写得不错。"]},{"先":["你得先洗澡，再睡觉。","我们先去看小张，再去看小王。","先吃饭再喝茶，好吗？","我先吃晚饭再去帮你，好吗？","你先唱，然后我再唱。"]},{"坐七路或者九路<br>Use of 或者":["今天下午我会在宿舍或者在图书馆。","我们三点或者四点去。","我想找李老师或者高老师。","我们可以走去或者坐公共汽车去。","这个周末他们会去打球或者去看电影。"]},{"还是我开车送你们去吧<br>Use of 还是...吧":["我们还是明天去吧。","还是你教大家唱歌吧。","你还是坐出租汽车去好。","我知道您很忙。还是我自己妆吧。","你们还是坐七路公共汽车去吧。"]}],
	12:	[{"一个位子都没有":["我们一点儿味精都没放。","他一杯啤酒都没喝。","我今天一本书也不想看。","他们的菜一点儿也不好吃。","周末我一个汉字都没写。"]},{"做好":["今天的功课做好了吗？","饭做好了。来吃吧！","等你写好日记，我们就一起看电视吧。","衣服做好了，可是做得不太好。","我下个月才去中国，可是飞机票已经买好了。"]}],
	21:	[{"把":["你把这个电脑卖给我吧。","他把我的车开到学校去了。","谁把红烧牛肉吃完了？","对不起，我把你的名字忘了。","请大家把书放在桌子上。"]},{"留在这儿<br>在、到、给 used in complements:":["那盘饺子放在这儿吧！","他走到家的时候已经十点了。","我把录音带还给老师了。","我们可以坐在那儿。","她送给我一张照片。"]},{"开到几点<br>Indicating the end point of a duration":["我昨天晚上学中文学到半夜。","现在我们学到第十三课了。","图书馆开到五点半。","我们昨天等到下午三点。他还没来。","你怎么吃到现在还没吃完？"]},{"半个钟头<br>Time Duration Expressions":["他每年在中国工作四个月。","昨天我妹妹洗澡洗了一个半钟头！","今天晚上我要睡十个钟头的觉。","我等你等了三刻钟。","这本书我可以借多久？"]}],
	13:	[{"旁边<br>location words":["王小姐在我左边。","学校旁边有一家饭馆。","那本书在桌子上。","教室里有没有人？","图书馆就在活动中心旁边。"]},{"没有<br>comparative sentences (not as Adj. As ...)":["我没有你高。","他们没有我们这么忙。","今天没有昨天那么热。","我写字写得没有你快。","我们说中文说得没有老师那么好。"]},{"那么远<br>那么/这么 Adj. (so Adj. Like that/this)":["飞机场怎么那么远？","我没有我妹妹那么漂亮。","你怎么来得这么晚？","我没有那么大的照片。","这件衣服这么贵！我不买了。"]},{"到学校书店去买书<br>denotes the purpose of going somewhere":["我想到中国去学中文。","你去学校做什么？","他们去小张家看录像。","我们都去图书馆还书。","你周末想不想去公园看红叶？"]},{"就<br>a conjunction used in the second clause when the first clause suggests a condition":["你不喜欢吃西餐，我们就吃中餐吧！","今天没时间，你就明天去吧。","要是不方便，我就以后再来看你吧。","要是牛肉卖完了，就买一条鱼！","你没钱，就别买这么贵的鞋。"]}],
	14:	[{"做什么呢<br>Progressive Aspect":["我做功课呢。","他们都在上课呢。","妹妹还在看电视吗？","别进去，他睡觉呢。","我去的时候，他正在洗澡呢。"]},{"住的地方<br>Attributives":["这是我昨天买的书。","你写的字太大了。","我很喜欢吃妈妈做的红烧鱼。","你送我的录像带有意思极了。","我们上中文课的教室又大又亮(bright)。"]}],
	15:	[{"疼死了":["今天外边热死了！","坐公共汽车麻烦死了。","有什么吃的？我饿死了！","来两瓶啤酒。我渴死了。","我今天走了很多路，腿疼死了。"]},{"次":["上个星期我打了两次针。","这个月他看了四次病。","他来看过我三次。","我们去过中国城五次。","我们去过五次中国城。"]}],
	16:	[{"玩儿得很高兴<br>Descriptive complement describing the subject":["他们聊得很高兴。","今天我们都吃得很饱(full)。","你在我家睡得舒服吗？","我看电影看得很紧张。","我忙得没有时间吃饭。"]},{"买得到<br>Potential complement":["你看得清楚吗？","我找不到那本字典了。","门太小了。进得去进不去？","你一进去就走不出来了。","我们都听不懂他说的话。"]},{"就 - only":["我的中文书不多，就三本。","怎么这儿就你们两个人？","上个星期下了六天雨，就星期四没下。","我们家就我一个人学中文。","我不想吃别的，就想吃鱼。"]}],
	17:	[{"住了一个学期了<br>The action has been continuing up to now.":["妹妹打电话打了一个钟头了！","这个电影我看了三次了。","我买了五本字典了。","我已经花了六十块钱了。不想买别的了。","他喝了四瓶啤酒了，还想喝。"]},{"连电脑都... ":["你怎么连我的名字都忘了？","连我弟弟都认识这个字。","他连周末都很忙。","我连厨房都找了，还是没找到。","小白连红烧鱼都不喜欢吃。"]},{"放不下<br>V得下/V不下：capacity to hold something":["桌子太小，放不下两个电脑。","这间卧室只放得下一张床。","这套公寓住得下住不下七个人？","我吃不下了。","我的车应该坐得下五个人。"]},{"一个多星期<br>多 indicating an approximate number":["我有二十多本中文书。","那个医生太忙了，每天要看一百多个病人！","今天他吃了三十多个饺子。","昨天我只睡了四个多小时。","我会在纽约住一个多月。"]}],
	22:	[{"三、四 <br>Combination of two adjacent numbers for Approximation":["张老师有十五、六本字典。","过两、三个路口就到运动场了。","他们的客厅里有六、七把椅子。","我每个月交二、三十块钱的水电费。","他一个月花八、九百块钱。"]},{"越快越好<br>the more... the more ...":["你怎么越走越慢了？","他越想越高兴。","你明天来得越早越好。","这种家具越旧越贵。","别说了。你越说我越想家。",""]},{"就<br>就 links two related clauses or sentences. It appears in the second clause or sentence, following the subject.":["不能往左拐，就往右拐吧。","你想吃糖醋鱼，我们就点一个！","要是平信太慢，我就寄快信。","你不舒服，就躺下吧。","要是你想不起来，我就告诉你。"]}],
	18:	[{"两年没运动了 - Duration for no-action":["他上个星期有三天没来上课。","我有四个钟头没喝水了。渴死了。","他们每年有两个半月不工作。","我好久没打篮球了，可能打不好了。","你多长时间没看见他了？"]},{"难受 - 好/难V":["你的车很好开。","我写的字太难看了。","酸辣汤酸酸的，辣辣的，好喝极了。","你吃了药就不难受了。","我觉得这个电脑比我的好用。"]},{"下去 - Continuation of an action already in progress":["你说得很好。请说下去。","妈妈，别关电视。我还想看下去呢。","这个电影真没意思。我看不下去了。","虽然中文很难，但是我一定要学下去！","我不听录音了。我要回家了。你还想听下去吗？"]}],
	19:	[],
	23:	[{"父母 - Terms of Address for Relatives":["我的父母就是我的爸爸妈妈。","爸爸的妈妈是我的奶奶。","妈妈的爸爸是我的外公。","爸爸的姐姐是我的姑姑。","妈妈的姐姐是我的阿姨。"]},{"左边有几座小山 - Existential Sentences (PL-有-Num. M. Noun.)":["桌子上有很多书。","我前边有一个人。","学校后边有很多大树。","这张纸上有很多字。","教室里有三十个学生。"]},{"右边是一条小河 - Existential Sentences (PL-是-Noun.) for identification":["桌子上是什么？","我前边是王朋。","学校后边不是房子，是树。","这张纸上是我写的字。","教室里是我们班的同学。"]},{"小河两边种着很多树 - Existential Sentences (PL-V着-Num.M.Noun)":["桌子上放着很多书。","我前边站着一个人。","学校后边种着很多树。","这张纸上写着很多字。","教室里坐着三十个学生。"]}],
	20:	[{"的时候  vs. 以后":["出门的时候别忘了关灯。","出门以后我才想起来：我忘了带钱了。","下飞机的时候外面正在下雨。","下了飞机以后他就去拿行李。","我们一起回家的时候，我告诉他我回家以后要做什么。"]}]
};

var patternB = {
	1:	[{"我是学生<br>Use of 是":["李先生是中国人。","王小姐是美国人。","老师是中国人。","我是中国学生。","李友是美国学生。"]},{"我也是学生<br>Use of 也":["老师也姓李。","李小姐也是学生。","王小姐也叫王朋。","李先生也是老师。","老师也是中国人。"]},{"你是美国人吗<br>Use of 吗":["你是中国人吗？","李小姐是学生吗？","王老师是美国人吗？","老师也姓李吗？","请问，您是王先生吗？"]},{"我不是美国人<br>Use of 不":["老师不姓李。","老师不是美国人。","李小姐不叫李友。","王先生不是学生。","我也不姓王。"]}],
	2:	[{"他爸爸妈妈都是律师<br>Use of 都":["我和弟弟都有照片。","小王和小张都是中国人。","张小朋，张小友和张小美都是张先生的孩子。","你和他都没有弟弟。","李先生和王小姐都不是律师。"]},{"两个姐姐<br>二 and 两":["1, 2, 3, ... =  一，二，三，... ...","我有两张照片。","他有两个妹妹。","李先生有两个孩子。","我有三个哥哥。两个哥哥是律师，一个是老师。"]}],
	3:	[{"忙不忙<br>Affirmative-Negative Questions":["请问，您是不是老师？","王朋有没有弟弟？","你请不请白小姐？","你吃不吃中国饭？","今年是不是一九九八年？","他认识不认识你？","你们喜欢不喜欢这张照片？","他忙不忙？","你们老师好不好？"]}],
	4:	[{"你想请谁":["我想睡觉。","你想看书吗？","他不想去跳舞。","我们都想明年去中国。","你哥哥想不想去打球？"]},{"我不请小白，好吗":["我们请李老师吃饭，好吗？","我们星期日去，好吗？","张律师很没有意思，我们不请他，好吗？","我很忙，你去找别人，好吗？","今天晚上十点半见，好吗？"]}],
	5:	[{"十二点半才回家<br>才 indicating actions later than expected":["他明天才来。","小张常常八点来，可是今天九点才来。","你为什么现在才去学校？","我昨天两点才睡觉。","我昨天才认识他。"]},{"你们喝了几瓶酒<br>Use of 了":["张老师来了。","他今天没回家。","昨天我没玩儿，我看书了。","我们都跳舞了。","我们跳了六个舞。","他喝了五杯啤酒。","她也喝酒了。","我没喝酒。"]}],
	6:	[{"别客气<br>Use of 别":["吃吧，别客气。","你今天别去找他。","请你们别在图书馆聊天儿。","你现在别给他打电话。我知道他不在。","要是你不想喝，就别喝！"]},{"回来<br>Directional Complements":["我哥哥八点才回来。","你们快进去吧。","你看，他请来了三十个朋友！","我给你们找来了一位好律师。","今天你 想不想回去？"]},{"得练习说中文<br>Auxiliary Verb 得 for \"need\" or \"must\"":["我现在得回家。","你今天得给妈妈打电话吧？","我得想一下。","要是今天下午我去看电影，晚上就得看书。","你今天可以去玩儿，但是明天得回来练习中文。"]}],
	7:	[{"半夜才回家<br>才  v.s. 就":["我平常十一点钟睡觉，今天十二点半才睡觉。","我平常十一点睡觉，今天十点就睡了。","我平常十一点睡觉，明天十点就睡！","他平常五点回家，昨天六点半才回家。","他平常五点回家，昨天四点就回家了。","他平常五点回家，他说他明天四点就回家。"]},{"怎么来得这么晚":["你怎么写字写得这么漂亮？","他怎么复习得这么不好？","你怎么昨天没回家？","怎么老师不在办公室？","怎么这杯咖啡这么贵？"]}],
	8:	[{"除了教我们中文语法和汉字以外，还教我们唱中国歌<br>The Pattern 除了 ...还":["除了小白，小高以外，我还请了小李。","他除了英文，日文以外，还会中文。","除了写汉字以外，我昨天还念了课文。","除了咖啡，可乐，和英国茶以外，我们还要了中国酒。","除了打球，看电视以外，你们周末还做什么？"]},{"我会唱两个中国歌<br>能 and 会 compared":["我会跳舞，可是现在不能跳。","他不会用电脑，你能不能教他？","晚上我得在家复习中文，不能去看电影。","我知道你会打球，可是你不能在这儿打。","你会唱中国歌儿吗？"]}],
	9:	[{"跟你的鞋大小一样<br>A 跟 B 一样 Adj.":["他姐姐跟他一样高。","你女儿跟你一样漂亮。","这个图书馆跟那个一样大吗？","今天我跟他起床起得一样早。","他写汉字写得跟你一样快。"]},{"虽然不太新，可是你穿很合适<br>Pattern 虽然 ...可是 ...":["虽然这件衣服很漂亮，但是太贵了。","虽然她很喜欢听音乐，可是今天没去听。","他虽然是美国人，但是喜欢吃中国饭。","虽然我认识他，可是我不知道他的名字。","虽然李先生喜欢喝酒，但是只能喝三杯。"]}],
	11:	[{"又下雨了<br>又 indicating past repetition":["他又来了！","你看，张小姐又笑了。","我们办公室又买了一个电脑。","你昨天晚上又没给我打电话！","你怎么又不高兴了？"]},{"又好看，又好吃":["今天的功课又不多又容易！","他们的教室又小又黑。","这双鞋又漂亮又合适。","你们的床又大又舒服。","张先生写汉字写得又快又好。"]}],
	10:	[{"我每天都练习<br>Use of 每 ...都 ...":["我弟弟每天都写日记。","每年冬天他都去台北。","我们每个人都有电脑。","她的衣服每件都很贵。","你每个字都写得一样大，真漂亮！"]},{"快到了":[" 快 V 了 - something is about to  happen.","周末又快到了。你想做什么？","冬天快到了。你有暖和的衣服吗？","电影快开始了。我们快去吧！","快上课了。你怎么还在睡觉？","我们快考试了。我这个周末不出去玩儿了。"]}],
	12:	[{"酸酸的，甜甜的":["这碗牛肉汤辣辣的，真好喝！","她的男朋友高高的，大大的。","今天很热。喝一杯凉凉的水舒服极了。","她的头发(hair)黑黑的，长长的，漂亮极了。","你们的宿舍暖暖和和的，很舒服。"]},{"极了":["王老师的书多极了。","昨天晚上冷极了。","那个外国电影有意思极了。","这条裤子贵极了。","他做红烧鱼做得好吃极了。"]},{"卖完":["你们吃完了吗？","我做完了功课就去看电影。","我还没写完这课的汉字。","凉拌黄瓜卖完了。","我们点了五个菜，可是一个都没吃完。"]},{"来":["来五瓶啤酒！","请你给我们来三十个饺子。","再来二两米饭吧。","我写得不好看。你来吧！","唱得真好。再来一个！"]},{"多找了我一块钱":["你少写了十个汉字。","今天你多吃一点儿吧。","我比他多穿一件衣服，可是还觉得冷。","我这个学期比上个学期少上一门课。","妈妈希望你多给她打几个电话。"]}],
	21:	[{"借多久<br>Duration of an Action":["他们在中国学了三个月的中文。","你昨天听录音听了多久？","你昨天听了多久的录音？","这个星期下了五天的雨。","他们聊天聊了两个钟头。"]}],
	13:	[{"去过<br>V 过 - past experience":["你去过上海吗？","我没吃过素饺子，你呢？","我没跟他跳过舞。","这个学期我们还没考过试呢。","我看过好几次那本书，可是没看完过。"]},{"走到<br>Resultative Complements":["我们吃完了！","你找到字典了吗？","你没写对。你写错了。","我听清楚了，可是没听懂。","对不起，我来晚了。"]},{"一拐就到了<br>一...就... - as soon as ... then... ":["他一回来我们就去，好吗？","小王一喝啤酒就想唱歌。","我一看就知道他今天不太高兴。","他每天一上课就睡觉。","怎么我一进来他就出去了？"]}],
	14:	[{"还没来<br>还 meaning \"still\" ":["你怎么还不去？","老师开始上课了，可是小张还没来呢！","妹妹还在打电话，打了一个钟头了！","我写了三刻钟了，还没写完。","李友回来了，可是王朋还在中国。"]},{"是在哪儿学的":["这本书你是在哪儿买的？","你们是坐车来的吗？","我不是跟他一起来的。","我会一点儿中文。是我妈妈教我的。","你是不是在暑期学校认识他的？"]},{"让他学弹钢琴<br>Pivotal sentences":["我们想请你给我们介绍一下上海。","爸爸叫我去买一张今天的报。","我可以叫小弟去给我借一本字典。","我唱得不好，你让李友唱吧。","老师让我们明天把汉字练习带来。"]}],
	15:	[{"对什么过敏<br>Preposition 对":["他对我很好。","学中文对我将来的工作很有帮助。","我对味精过敏。","这件衬衫对你很合适。","电脑对我们都很有用。"]},{"买回来<br>Compound directional complement":["我们把这些剩菜带回去吧。","你能不能从楼上把字典拿下来？","他开进学校去了。","我想带几个同学回来。","昨天晚上他买回来了两条鱼。"]},{"再说<br>To provide additional reason(s)":["我不去看电影，因为我太忙。再说那个电影也不好。","去帮帮他吧。你是他哥哥，再说你现在也不忙。","我不去还书。我现在没时间，再说图书馆也关门了。","我们走去吧。我的车坏了，再说也不远。","我们点一个豆腐吧。小王和小李都吃素，再说豆腐对身体也很好。"]},{"对不对<br>Tag question":["他是美国人，对不对？","他是不是正在学中文？","他正在学中文，是不是？","你是不是每天都很忙？","你想家了，对不对？"]}],
	16:	[{"庆祝庆祝<br>Reduplication of Verbs":["你想不想看看我朋友的照片？","你说说，昨天去哪儿了？","明天考试，晚上我得复习复习。","今天我不想看书，想去跳跳舞，唱唱歌。","我的车很容易开。你试试。"]}],
	17:	[{"什么动物都不养":["我在这儿谁也不认识。","我女儿什么都爱吃。","我们几点钟去都行。","小王怎么找也找不到他的书。","你们哪天来我家都可以。"]}],
	22:	[{"收到":["我给你寄了一封信。你收到了吗？","我们今天寄。她什么时候能收到？","收到以后，别忘了给我打个电话。","他常常收到从中国来的信。","要是你的信上不贴邮票，他就收不到。"]},{"除了人民币以外，别的钱都不能存 <br>Indicates an exclusion pertaining to what is said in the clause led by 除了":["除了信用卡以外，我什么证件都没有。","我妹妹除了啤酒以外，什么都爱喝。","除了谢先生以外，我谁都不认识。","除了这个书架以外，别的家具都不错。","他来美国以后，除了中国城以外，哪儿都没去过。"]}],
	18:	[{"看两个小时的电视 - Another duration pattern (Sub-V-Duration-(的)-Obj.)":["我昨天只睡了五个钟头的觉。","他每天都听一个小时录音。","你们今天打了多长时间的篮球？","妈妈让姐姐每天弹一个小时的钢琴。","你每天游半个钟头泳，身体就会好了。"]},{"跑起来 - V起来 indicating the beginning of an action (V-起-Obj.-来)":["妹妹一回家就打起电话来了。","他们已经吃起来了，你怎么还坐在这儿？","你说我们一起去买东西，怎么看起报纸来了？","糟糕，刚要出去就下起雨来了！","我还没说完，她就笑起来了。"]},{"被 - The passive voice":["我的可乐被谁喝了？","你的车被小李开到纽约去了。","电脑被弟弟用坏了。","爸爸给我的钱都被我花完了。","我的新衬衫被妈妈送给老张的儿子了。"]}],
	19:	[{"有的":["他买的书有的是中文的，有的是英文的。","我们班的同学有的做功课了，有的没做。","我有的时候忙，有的时候不忙。","有的地方我去过，有的我没去过。","有的人死了，有的人还活着。"]},{"一千":["十个一百就是一千。","九百九十九加一就是一千。","他会写一千多个汉字。","我租的公寓一个月要付一千多块钱。","我银行里的钱不到一千块了。"]},{"哪家的便宜，就买哪家的 - Question words used as References. Usually a 就 is used in the second clause.":["你想吃什么菜，我们就点什么菜。","哪天天气好，我们就哪天去公园。","你几点有空儿，我就几点来看你。","谁写字写得好看，我们就请谁写。","你去哪儿，我就去哪儿。"]},{"比韩航贵两百多块 - Comparison indicating disparity in an exact amount":["我比你大三岁。","他比我高两寸(inch)。","今天比昨天热五度(degree)。","这件衬衫比那件便宜十块钱。","我的书比你的少一本。"]}],
	23:	[{"美国好是好，但是我更喜欢我的家乡- \"V/Adj 是 V/Adj.，但是/可是...\"":["今天热是热，但是不太闷。","这本书有意思是有意思，可是太长了。","我想去是想去，但是没有时间。","他聪明是聪明，可是不太用功。","日文我会说是会说，但是说得不好。"]}],
	20:	[{"地":["小王高高兴兴地说，“今天我考试考得很好！”","今天我来晚了。明天一定要早早儿地来！","爸爸常说，“孩子，你要好好儿地学中文！”","时间还早。我们可以慢慢地走，一边走一边聊。","白小姐很小心地把花瓶拿起来给我看。"]},{"拿不动 - V 得/不动 indicating whether or not the subject has the physical strength to do something.":["我们走了三个钟头了。我走不动了！","你提得动提不动这个大箱子？","这张桌子这么重。我们两个人搬得动吗？","我的旧汽车早就开不动了。","奶奶说，“再过几年我就抱不动小孙子了！”"]},{"才 suggesting \"early\" or \"not enough\"":["我们出门才五分钟就下起雨来了。","饺子怎么都被你吃完了？我才吃了两个！","她弟弟今年才十岁。","妈妈，现在才八点，您就叫我起床！","这本书我才看了三天，怎么会过期呢？"]},{"还好 - \"还 + positive adjective\" indicating something is acceptable if not desirable":["这家饭馆的牛肉做得不太好，但是红烧鱼还行。","今天天气还好，没下雪。","我爷爷的身体还不错，最近没生病。","这家旅行社的服务还可以。","他虽然不会写汉字，但是中文说得还不错。"]}]
};

var pattern = {"A": patternA, "B": patternB};

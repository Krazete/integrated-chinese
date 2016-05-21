var textA = {
	1:	"{请问}，{您}{贵姓}？<br>[我{姓}{王}]，[你{呢}]？<br>我姓李。王{先生}，{你}{好}！<br>你好，{李}{小姐}！我{叫}{王朋}，[你叫{什么}{名字}]？<br>我叫{李友}。<br>",
	2:	"这[{张}]{照片}是{小李}的吗？<br>不是，那是高先生的。他是我{爸爸}{妈妈}的朋友。<br>[{这}两{个}{男孩子}是{谁}]？<br>一个是他{儿子}，一个是我{弟弟}。<br>这个{女孩子}是他女儿吗？<br>不是。[高先生{没}有女儿]。{那}是我{妹妹}。<br>",
	3:	"{七月}{十四}{号}是我的{生日}，也是{小白}的生日！<br>是吗？[你们{今年}{多大}]？<br>我十八岁，{可是}他十九岁。<br>[你{请}他{吃}饭还是他请你吃饭]？<br>我们都不请。<br>[我请你们吃{晚饭}]，{怎么样}？<br>我们都不{喜欢}吃美国饭。<br>那我们吃中国饭，{好}吗？<br>{太好了}。{谢谢}你！<br>那{天}是{星期几}？<br>{星期六}。<br>我们星期六{晚上}六{点}{半}{见}！<br>几点钟？<br>六点半。<br>好，再见！<br>",
	4:	"[你周末{常常}{去}{唱歌}]，{跳舞}，{对}不对？<br>对。你呢？你{周末}喜欢不喜欢{打球}？<br>不喜欢。我喜欢{看}{书}，看{电视}。{有时候}也去看{外国}{电影}，可是这个周末没有好电影。<br>{那}我们明天去听{音乐}，怎么样？<br>太好了。我{请客}！<br>为什么你请我？<br>[因为]你{昨天}请我吃饭，[{所以}]我明天请你{听}音乐。<br>",
	5:	"谁{呀}？请{进}！<br>张先生，您好！<br>啊，是小白。{快}进{来}！你找小张，对不对？小张不{在}家。他今天{工作}。<br>[他在{哪儿}工作？]<br>在{学校}。小白，你来我家，[我很{高兴}]。[我{介绍}{一下}]，这是王医生。王医生，这个{漂亮}的女孩子是我儿子的同学。小白，你{坐}一下{吧}，想{喝}{点儿}什么？<br>您喝什么？<br>我们喝啤酒。你还不{可以}喝啤酒，对不对？你{要}{茶}还是要{咖啡}？<br>您有{可乐}吗？<br>{对不起}，没有可乐。[{给}你一{杯}{水}吧]。<br>谢谢您！<br>",
	6:	"喂，小王{在}吗？<br>我{就}是。您是{哪}{位}呀？<br>我是小高。你今天忙吗？<br>我{上午}有三{节}{课}。你有什么事？<br>我{下午}想到李小姐家去听中国音乐。{要是}你{有空}儿，我们一起去吧！<br>不{行}。[我一点半要{开会}]。三点{以后}我想去老师的{办公室}问他{几}个问题，因为明天我们二{年级}有一个{考试}。<br>要是你下午没{时间}，我们可以晚上去。<br>可以吗？你几点吃晚饭？我六点以后[给你{打电话}]，{方便}吗？<br>{没问题}，我{等}你的电话。<br>谢谢你！<br>{不客气}！<br>",
	7:	"李友，你现在[{学}中文学得怎么样]？<br>我觉得中文很{难}。我们老师{说话}说得[有一点儿快]，所以我常常不{懂}{语法}。我也不知道{怎么}{复习}中文。{生词}太{多}了！<br>你们学{第}几课了？<br>第七课。我[{上个}星期就{预习}了]，可是现在还有问题。王朋，你{写}{字}写得很漂亮！<br>{哪里}！要是你有好{笔}，常常练习，也可以写得很好。<br>你{教}我怎么写，好吗？<br>没问题。{汉字}很{容易}。我下午就来{帮助}你练习！<br>谢谢！<br>{不谢}！<br>",
	8:	"(电话录音)<br><br>姐姐，你好！我来学校以后很忙，所以今天才给你打电话。你想知道我在学校怎么样，我告诉你：我平常{早上}[八点一刻{起床}]，{洗}了{澡}以后[就][一边吃{早饭}一边看{报}]。九点半去学校。上课{以前}在{教室}练习{发音}。{中午}我常常[去{餐厅}吃{午饭}]。我在{那儿}认识了几个{新}朋友。他们常常来我{宿舍}，一边听音乐一边聊天儿。昨天我朋友[小张来找我{的时候}，我{正在}写一{篇}{日记}]。上个月我回家的时候爸爸说他要给我买一个{电脑}。姐姐，[请你{告诉}他，我{已经}买了]。谢谢你。再见！<br>",
	9:	"小李！你也来买{衣服}了！[你今天要买什么？]<br>我想买一件衬衫。你呢，小高？<br>我想买一{条}{裤子}。你想买什么{颜色}的{衬衫}？<br>[我喜欢{黄}的]，可是黄的太{贵}了。<br>这件{红}的怎么样？很{便宜}，也很漂亮。<br>对！我{买}两件吧，给我妹妹一件。小高，裤子在{这儿}！你{穿}[多大的]？<br>我穿中{号}的。买这条吧。这儿的{东西}很不错。以后我要常来。我们去{付钱}吧！<br>......<br>你的衬衫{多少}钱？<br>我给{售货员}六十{块}钱，她{找}我两分钱，所以两{件}衬衫{一共}五十九块九{毛}八{分}钱。<br>",
	11:	"你知道吗？小谢下个星期回{上海}。这个周末我们想{约}她去{公园}看红叶。你想不想去？<br>今天上午下大雨了。要是周末下雨{怎么办}？<br>报上的{天气}{预报}说，明天就[不下雨了]，[天气{会}好{一点儿}]。这个周末[不但]不会{下雨}，而且会[{比}]现在{更}{暖和}。<br>太好了。我们去看{红叶}以后，我请大家来我家看{录像}吧！<br>",
	10:	"小李，你{寒假}作什么？<br>我和哥哥要回家去看爸爸妈妈。[{飞机}{票}已经买了]。明天就{走}。<br>你们知道怎么去{机场}吗？<br>我哥哥说，我们可以[{先}][坐七路{或者}九路]公共汽车，再换十三路。{然后}坐{地铁}。{坐}五{站}以后{下车}。{最后}坐出租汽车去机场。<br>你们知道坐地铁要坐哪条线吗？{蓝}线还是{绿}{线}？<br>不知道。我可以打电话问一下。<br>太{麻岁}了！我明天没事。[{还是}我{开车}{送}你们去吧]！<br>谢谢你！<br>",
	12:	"(在{饭馆儿})<br>{服务员}：请进，请进。<br>李小姐：人怎么这么多？{好像}[一个{位子}都没有]了。<br>王先生：请问，还有没有位子？<br>服务员：有，有，有。那张{桌子}没有人。<br><br>服务员：二位要吃一点儿什么？<br>李小姐：老王你{点菜}吧。<br>王先生：好。先给我们三十个{饺子}，要{素}的。<br>服务员：除了饺子以外，还要什么？<br>李小姐：还要一{盘}{家常}{豆腐}，不要{肉}，我们吃素。<br>服务员：我们的家常豆腐没有肉。<br>李小姐：还要两{碗}{酸}{辣}{汤}，请不要{放}{味精}。<br>服务员：好，两碗酸辣汤。那喝点儿什么呢？<br>王先生：我要一瓶啤酒。<br>李小姐：我很{渴}，给我一杯可乐。<br>服务员：好，三十个饺子，一盘家常豆腐，两碗酸辣汤，一瓶啤酒，一杯可乐。还要别的吗？<br>李小姐：不要别的了，这{些}{够}了。小姐，我们都{饿}了，请{上菜}快一点儿。<br>服务员：没问题，菜很快就能[做好]。<br>",
	21:	"学生：我要{借}这两{盘}{录音带}。<br>{职员}：请你[{把}]{学生证}[{留}在这儿]。{语言}{实验室}在{楼下}，你可以去那儿听。{还}录音带的时候，我{再}把学生证还给你。<br>学生：糟糕，学生证我{忘}了{带}了。<br>职员：你有没有{其他的}{证件}？<br>学生：{信用卡}可以吗？<br>职员：不行。<br>学生：语言实验室[{开}到几点]？<br>职员：我们五点{关}{门}。<br>学生：只{剩}[半个{钟头}]了，{可能}{来不及}了，我明天再来吧。<br>",
	13:	"田小姐：老金，你{上}哪儿去？<br>金先生：我想去学校的电脑{中心}。你知道怎么走吗？是不是在{运动}{场}[{旁边}]？<br>田小姐：电脑中心[没有]运动场[{那么}{远}]。你知道学校图书馆在{哪里}吗？<br>金先生：知道。我{住}的{地方}{离}图书馆不太远。<br>田小姐：电脑中心离图书馆很{近}，{就}在图书馆和学生{活动}中心{中间}。<br>金先生：小田，你去哪儿呢？<br>田小姐：我想[到学校书{店}去买书]。<br>金先生：书店在什么地方？<br>田小姐：就在学生活动中心{里头}。我们一起走吧。<br>金先生：{早知道}{同路}，我[就]不{问路}了。<br>",
	14:	"(李友给王朋打电话。)<br>李友：王朋，你[做什么{呢}]？<br>王朋：我在看书呢。<br>李友：今天小林{过}生日，晚上我们在小林家开{舞会}，你能来吗？<br>王朋：几点钟？<br>李友：七点钟。我们先吃饭，吃完饭再唱歌跳舞。<br>王朋：哪些人会去？<br>李友：小林的{女朋友}，我的{表姐}，还有我们中文{班}的几个同学。<br>王朋：要带什么东西？你知道我不会{做饭}。<br>李友：{汽水儿}或者{水果}都可以。<br>王朋：那我带几瓶{果汁}吧。<br>李友：你没有车，要不要我来{接}你？<br>王朋：不用，我[住的地方]离小林那儿不远，我{走路}去，可以运动一下。<br>",
	15:	"({看病})<br>{病人}：医生，我{肚子}[{疼}{死}了]。<br>医生：你昨天吃什么东西了？<br>病人：我昨天没时间做饭，吃了一{些}{剩菜}。一天上了{好几}[次]{厕所}。<br>医生：菜{放}了几天了？<br>病人：不知道。<br>医生：你{躺下}。我给你{检查}一下。<br>医生：你是吃{坏}肚子了。<br>病人：要不要{打针}？<br>医生：不用打针，吃这{种}{药}就可以。一天三次，一次两{片}。<br>病人：好！是饭前吃还是饭后吃？<br>医生：饭前吃。不过，你最好二十四{小时}不吃饭。<br>病人：那我不是要饿死了吗？这个{办法}不好！<br>",
	16:	"王朋跟李友在{同}一个学校学习，他们认识已经快三个月了。王朋常常帮助李友练习说中文。上个星期他们{参加}小林的生日舞会，[玩儿得很高兴]。李友对王朋的{印象}很好，王朋也很喜欢李友，他们{成}了好朋友。<br>王朋：这个周末学校{演}新电影，我们一起去看，好吗？<br>李友：什么电影？<br>王朋：中国电影《{活}著》。<br>李友：好啊！不过，听说看电影的人很多，[买得到]票吗？<br>王朋：票已经买了，我{费}了很大的{力气}{才}买到。<br>李友：好极了！我早就想看这个电影了。还有{别人}跟我们一起去吗？<br>王朋：没有，[就]我们{俩}。<br>李友：好啊。什么时候？<br>王朋：{后天}晚上八点。<br>李友：看电影以前，我请你吃晚饭。<br>王朋：好，{一言为定}。<br>",
	17:	"王朋在学校的宿舍[住了一个学期了]。他觉得宿舍太{吵}，睡不好觉。房间太小，[连电脑都][放不下]，再说也没有地方可以做饭，很不方便，所以{准备}下个学期{搬}出去住。他找房子找了[一个多星期]了，可是还没有找到。今天早上他在{报纸}上看到一个{广告}，说学校{附近}有一个{公寓}出租，离学校只有一{英里}，很方便。那{套}公寓有一个{卧室}，一个{厨房}，一个{洗澡间}，一个{客厅}，还{带}{家俱}。王朋觉得那套公寓可能对他很合适。<br>",
	22:	"(在台湾的{邮局})<br><br>{留学生}：先生，从台北{寄}一封信到台南{要}几天？<br>{营业员}：{平信}[三、四]天，{快信}只要一天。<br>留学生：我希望[{越快越好}]，{那}[就]寄快信吧。要{贴}多少钱的{邮票}？<br>营业员：十二块钱。<br>留学生：这封信很{重要}。可以{挂号}吗？<br>营业员：可以。如果挂号，还要再{加}十四块。<br>留学生：好，那就寄挂号快信。{另外}，我还要买{明信片}，一张多少钱？<br>营业员：三块钱。<br>留学生：好，我买五张。除了明信片以外，我还要买邮票，一张多少钱？<br>营业员：一张十块钱。<br>留学生：我要十张。<br>营业员：一共一百四十一块。<br>",
	18:	"老李：你看，我的肚子越来越大了。<br>小林：你平常吃得那么多，又不运动，{当然}越来越{胖}了。<br>老李：那怎么办呢？<br>小林：如果{怕}胖，你一个星期运动两、三次，每次半个小时，肚子就会小了。<br>老李：我[两年没运动了]，做什么运动呢？<br>小林：最{简单}的运动是{跑步}。<br>老李：冬天那么冷，夏天那么热，跑步{多}[{难受}]{啊}。<br>小林：你打{网球}吧。<br>老李：那我得买网球{拍}、网球鞋，太贵了！<br>小林：找几个人打{篮球}吧。买个篮球很便宜。<br>老李：那每次都得打电话找人，麻烦死了。<br>小林：你去{游泳}吧。不用找人，也不用花很多钱，什么时候都可以去。<br>老李：游泳？多{危险}哪，{淹死}了怎么办？<br>小林：我也没办法了。你不{愿意}运动，那就胖[下去]吧。<br>",
	19:	"钱：小白，时间过得真快，还有一个月就{放假}了。你有什么{计划}？<br>白：我还没有想好。你呢，老钱？<br>钱：我要到台湾去。<br>白：真的啊？你要到台湾做什么？<br>钱：我想一边教英文，一边学中文。有空的时候，到台湾{各地}去看看。<br>白：你以前去过台湾没有？<br>钱：没有。这是第一次。<br>白：什么时候{走}？<br>钱：我{打算}六月中走。我{护照}已经{办}好了，可是我的{签证}还没办。<br>白：我听说到台湾的签证不难办，可是六月的机票不好买。你得赶快{订}机票。<br>钱：昨天报纸上的广告说西北、中华这两{家}{航空}{公司}的机票都在大{减价}。可是我忙得没有时间打电话。<br>白：我哥哥在一家{旅行社}工作。你把你的旅行{日程}告诉我。我请他帮你办。<br>钱：好极了。机票能不能{打折}扣？<br>白：这个...我请他给你打{九折}，但是你得请我吃饭。<br>钱：那没问题。<br>白：一言为定。<br>钱：好，一言为定。<br>",
	23:	"李友和住在她{对面}的王德中在谈{春假}的{计划}。王德中是中国来的留学生。<br><br>王德中：李友，你春假有什么计划？<br>李友：我要回家看我的[{父母}]。你呢？<br>王德中：我要去{加州}看我的{外公}、{外婆}，还有{阿姨}。<br>李友：我{以为}你在美国没有{亲戚}呢。<br>王德中：我的外公、外婆跟我阿姨住在{旧金山}，{伯伯}{一家}住在洛杉矶。你的{老家}在哪儿？<br>李友：在{麻州}西边。<br>王德中：你家住在大{城市}吗？<br>李友：不是。是在{乡下}的一个小{镇}。{人口}只有五千。[左边有几{座}小{山}]，[右边是一条小{河}]，[小河两边{种}{着}很多{树}]。春天的时候，树上{开}{满}了花，{美}极了。<br>王德中：{听起来}{风景}很不错。<br>李友：是啊。我很喜欢那个地方。那儿一年四{季}都很好。<br>{比方说}，春天可以看花，夏天可以游泳，秋天可以看红叶，冬天可以{滑雪}。<br>王德中：真是一个好地方！<br>李友：{欢迎}你来我家玩儿。<br>",
	20:	"{放}{暑假}了，王朋要回中国{探亲}。{前一天}晚上李友帮他{收拾}{行李}。第二天李友开车送他到机场。{出门}[的时候]，李友{提醒}他检查一下机票和证件。这一天坐飞机的人很多。{停车场}{差不多}都满了。{差一点}{找不到}停车的地方。李友找了半天才找到一个。他们停好车[以后]，{来到}了中国民航的{服务台}。<br><br>王朋：小姐，这是我的机票。<br>服务员：先生，请把护照给我看看。你有几{件}行李要{托运}？<br>王朋：两件。这个小{皮箱}我{随身}带着。<br>服务员：麻烦您拿上来，我{称}称。<br>李友：没{超重}吧？<br>服务员：没有。这是您的护照、机票，这是{登机证}。请到五号门上飞机。<br>王朋：谢谢。<br><br>李友：飞机要{起飞}了，你快进去吧。<br>王朋：不{急}，还有二十分钟呢。你怎么{哭}了呢？别哭，别哭。我一个月就回来了。<br>李友：什么“就”回来，你一个月以后“才”回来。<br>王朋：回国以后，我会给你打电话。<br>李友：从中国打{长途}电话到美国来太贵了。还是我给你打吧。你常给我写信就行了。<br>王朋：好，我要上飞机了。你多{保重}。回家的时候，开车要{小心}。<br>李友：我会小心的。你也多保重。{一路顺风}！<br>"
};

var textB = {
	1:	"[我{是}{学生}]。<br>[我也是学生]。<br>[你是美国{人}吗？]<br>[我{不}是美国人]，我是{中国}人。<br>{老师}呢？老师是{美国}人{吗}？<br>不，老师是中国人。老师{也}姓李。<br>",
	2:	"{小张}的爸爸是{英文}老师吗？<br>不是。[他爸爸妈妈{都}是{律师}]。<br>他{家}有{几}个孩子？<br>四个。小张有一个{哥哥}，[{两}个姐姐]。小张{和}他{姐姐}都是{大学生}。<br>他哥哥呢？他哥哥{做}什么？<br>他是{医生}。<br>",
	3:	"妈妈，{现在}几点钟？<br>五点一{刻}。你晚上有{事}吗？<br>我{同学}小李请我吃晚饭。<br>小李是谁？<br>你不{认识}她。妈妈，{今天}她请我，我们{明天}请她，怎么样？你明天[{忙}不忙]？<br>我明天{很}忙。<br>{为什么}？<br>{因为}明天我请四个人吃饭-张先生，张小姐，王律师，{还有}高医生。<br>",
	4:	"{好久}不见，小王！你好吗？<br>{不错}。你来{找}我吗？<br>对！这个星期六是我的生日。我妈妈{想}请我同学吃饭。<br>[你想请谁]？<br>我想请你，还有小高，小张，小李，小白。你{觉得}怎么样？<br>我觉得{别}人都不错，可是小白很没{有意思}。他不喜欢听音乐，也不喜欢跳舞，{只}想{睡觉}！<br>那{算了}，[我不请小白，好吗]？<br>好！<br>",
	5:	"小李，你去哪儿？<br>我去{图书馆}。你昨天晚上为什么不在家？<br>我昨天去小白家{玩儿}。我们{一起}{聊天儿}，喝酒，[十二点半{才}{回家}]。<br>[你们喝了几{瓶}酒]？<br>喝了八瓶！<br>",
	6:	"王朋，我可以请你{帮忙}吗？<br>[别客气]，{帮}什么忙？<br>你{知道}吗？现在张老师在中国开会，她{下个}星期[回来]。下个星期五我们要听老师介绍中国，还要一起唱中国歌，跳中国舞，所以我这个周末[得练习{说}{中文}]。你可以帮我{练习}吗？<br>没问题，{但是}我星期六没砍儿，我们星期天练习，好吗？<br>好{啊}！谢谢你！<br>",
	7:	"{早}，小李！<br>啊，小白！我昨天想和你一起做{功课}，可是给你打电话，你不在。你去哪儿了？<br>我的中国朋友请{大家}吃晚饭。我们吃得{很早}，可是我在他家听{录音}，{念}{课文}，所以我[{半夜}才回家]。<br>你的中国{朋友}是{男}的吧？我认识他，他{真}{帅}！你今天几点{上课}？<br>{平常}我们十点上课。可是老师说今天九点半就要{开始}上课。他要帮我们复习一下。<br>现在九点三刻了。你[{怎么}来得{这么}晚]？快去吧！<br>",
	8:	"(一{封}信)<br><br>小高：你好！<br>你{最近}怎么样？我这个{学期}{专业}课很忙，可是中文课很有意思。<br>我们中文老师说话说得很快。{开始}我不{习惯}。{后来}我觉得她说得很{清楚}。[老师除了教我们中文语法和汉字以外，还教我们唱中国歌]。<br>现在[我{会}唱两个中国歌]。明天我们学校有一个{音乐会}，你{能}来吗？可是我唱得不好，你别{笑}我！现在我常常{用}中文写信，所以中文{进步}得很快。{希望}你也用中文给我写一{封}信，好吗？<br><br>{祝}好！<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;李友&nbsp;&nbsp;&nbsp;九月三号<br>",
	9:	"今天晚上小高要和同学一起去听音乐。小高昨天买了一双咖啡色的鞋。大家都说{黑}的漂亮，所以他想去换一双黑的。哥哥说，¨我有一双黑{鞋}，[跟你的鞋{大小}一样]。[虽然不太新，可是你穿很{合适}]。我知道你也很喜欢这{双}{咖啡色}的鞋。你{不用}去{换}了！〃<br>",
	11:	"白小姐，明年我想去{台北}学汉语，可是小高{刚才}告诉我：台北{冬天}太冷，{夏天}又{闷}又{热}，很不{舒服}。<br>他说得不错。{台湾}的天气就是{这样}。<br>那我{春天}去怎么样？比夏天{凉快}一点儿，对不对？<br>春天常常下雨。你{最好}{秋天}去。<br>好，我明年秋天去！......{糟糕}，[又下雨了]！<br>你今天在这儿吃饭吧。我妈妈的中国菜[又好看，又好吃]。<br>行！{下次}我请你吃美国饭。<br>",
	10:	"小高：<br>我去看你的时候，{让}你{花}了很多时间教我开车，真{不好意思}。回来以后，[我{每}天都练习]，{这几天}已经能{自己}开了。开车的时候我还是很{紧张}，{不过}这儿的{高速公路}上车不多，大家开得也不快，所以没有问题。<br>{新年}[快{到}了]。祝你新年{快乐}！<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小白&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十二月二十二号<br>",
	12:	"(在学生餐厅)<br>学生：请问今天晚饭有什么{好吃}的？<br>{师傅}：{中餐}还是{西餐}？<br>学生：中餐。<br>师傅：我们今天有{糖}{醋}{鱼}，[酸酸的，{甜}甜的]，好吃[{极了}]，你买一个吧。<br>学生：好。今天有没有{红烧}{牛肉}？<br>师傅：红烧牛肉[{卖}{完}]了。今天天气热，[来]个{凉拌}{黄瓜}吧？<br>学生：好极了。{再}来二两{米饭}。一共多少钱？<br>师傅：糖醋鱼，十块五，凉拌黄瓜，四块五；二两米饭，五毛钱。一共十五块五。<br>学生：这是二十块。<br>师傅：找你四块五。<br>学生：对不起，钱你找{错}了，这是五块五，[多找了我一块钱]。<br>师傅：对不起，谢谢。<br>学生：明天见。<br>师傅：明天见。<br>",
	21:	"学生：我想借这四{本}书。<br>{图书馆员}：请你在这儿等一下，我进去找。<br>图书馆员：四本书都{找到}了。<br>学生：谢谢你。<br>图书馆员：请你把{借书证}给我。<br>学生：请问，书可以[借{多久}]？<br>图书馆员：可以借半个月。{如果}{过期}，每天{罚}五毛。<br>学生：可以{续借}吗？<br>图书馆员：可以。可以续借半个月，可是一个月以后{必须}还。<br>学生：可以借{字典}吗？<br>图书馆员：不行。你还要借别的书吗？<br>学生：不借别的书了。谢谢，再见！<br>图书馆员：不谢，再见！<br>",
	13:	"老王：我没[去{过}]{中国城}，不知道中国城在哪儿。我开车，你得告诉我怎么走。<br>老李：没问题。<br>老王：你带{地图}了没有？<br>老李：不用地图，中国城我去过很多次，{闭}著{眼睛}都能[走到]。你{从}这儿{一直}{往}{南}开，{过}三个{路口}，往{西}[一{拐}就到了]。<br>老王：哎，我不知道{东}西南{北}。<br>老李：那你一直往{前}开，过三个{红绿灯}，往{右}一拐就到了。<br>(过了三个路口)<br>老王：不{对}，不对。你看，这个路口是{单行道}，只能往{左}拐，不能往右拐。<br>老李：那就是下一个路口。到了，到了，往右拐，往前开。你看，前{面}不是有很多中国字吗？<br>老王：那不是中文，那是{日文}，我们到了小{东京}了。<br>",
	14:	"(在小林家)<br>王朋：小林，祝你生日快乐！<br>小林：谢谢。王朋，快进来，李友正在问我，你怎么[还没来]！<br>王朋：这是送给你的生日礼物。<br>小林：你太客气了，真不好意思。<br>李友：王朋，你怎么现在才来？来，我给你们介绍一下，这是我表姐海伦，这是她儿子汤姆。<br>王朋：你好，海伦。<br>海伦：你好，王朋。李友常常{说到}你，说你又{聪明}又{用功}。<br>王朋：哪里，哪里。你的中文说得真好，[是在哪儿学的]？<br>海伦：在{暑期学校}学的。<br>王朋：哎，汤姆{长得}真{可爱}！你们看，他正在笑呢。他几岁了？<br>海伦：他是{前年}生的，{属}{狗}的，下个月就两岁了。<br>小林：你们看，他的眼睛大大的，{鼻子}高高的，{嘴}不大也不小，很{像}海伦。妈妈这么漂亮，儿子{将来}{一定}也很帅。<br>海伦：大家都说汤姆的{脸}长得像我，但是笑的时候很像他爸爸。<br>王朋：汤姆的{腿}很{长}，一定会长得很高。<br>李友：你看看，汤姆的{手指}这么长，{以后}{应该}[让他学{弹}{钢琴}]。<br>",
	15:	"马：小谢，你怎么了？怎么眼睛红红的，是不是{想家}了？<br>谢：不是想家。我也不知道为什么，最近这几天{身体}很不舒服。一直{流}{眼泪}。眼睛又红又{痒}。<br>马：你一定是[对什么{过敏}]了。<br>谢：我想也是。所以我去{药店}[买回来]一些药。已经吃过四、五种了，都没有用。<br>马：把你买的药{拿}出来给我看看。<br>谢：这些就是。<br>马：这些药没有用。你得{赶快}去看医生。{要不然}病会{越来越}{重}。<br>谢：我这个学期功课很多。看医生不但{花}钱，而且得花很多时间。我想再吃点儿别的药{试}试。[{再说}]我上次{生病}，没去看医生，最后也好了。<br>马：你一定是没买{健康保险}，[对不对]？<br>谢：你{猜}对了。<br>",
	16:	"白健明：喂，请问李友小姐在吗？<br>李友：我就是。请问你是哪一位？<br>白健明：我是白健明，你还{记得}我吗？<br>李友：白健明？<br>白健明：你还记得上个星期小林的生日舞会吗？我就是{最后}请你跳舞的那个人。你{想起来}了吗？<br>李友：对不起，我想不起来。你怎么知道我的电话{号码}？<br>白健明：是小林告诉我的。<br>李友：白先生，你有什么事吗？<br>白健明：我想请你看{歌剧}，这个周末你有空儿吗？<br>李友：这个周末不行，下个星期我有三个考试。<br>白健明：那下个周末怎么样？你考完试，我们{好好儿}[{庆祝}庆祝]。<br>李友：下个周末也不行，我得帮我妈妈{打扫}{房子}，{整理}{房间}。<br>白健明：你看下下个周末，好不好？<br>李友：对不起，下下个周末更不行了，我要跟我的男朋友去{纽约}{旅行}。<br>白健明：{没关系}，那就算了吧。<br>",
	17:	"王朋：喂，请问你们是不是有公寓出租？<br>{房东}：是啊，{一房一厅}，还带家俱。<br>王朋：有什么家俱？<br>房东：客厅里有一套{沙发}、一张{饭桌}跟四{把}{椅子}。卧室里有一张{单人床}、一张{书桌}和一个{书架}。<br>王朋：你们{那里}{安静}不安静？<br>房东：{非常}安静。<br>王朋：每个月{房租}多少钱？<br>房东：四百五十{元}。<br>王朋：{水电}{费}多少钱？<br>房东：水电费不用付。<br>王朋：要不要付{押金}？<br>房东：要多付一个月的房租{当}押金，搬出去的时候还给你。还有，我们公寓不{许}{养}小{动物}。<br>王朋：我[什么动物都不养]。<br>房东：那太好了。你今天下午来看看吧。<br>王朋：好。<br>",
	22:	"(在{北京}的邮局)<br><br>白：张意文下个月过生日，以前我{老是}送{首饰}，这次我想送点儿{新鲜}的东西，你说我应该送什么好？<br>王：{花}最“新鲜”，就送她一{束}花吧。<br>白：她住在上海，花不能寄，怎么送啊？<br>王：邮局有送花的{服务}，你在北京{订}花，过两、三天，她在上海就[{收到}]了。<br>白：那太方便了。<br>王：{这里}的邮局还可以{存钱}呢。<br>白：真的啊？我爸爸{刚}从美国给我寄来一张{美元}{支票}，我可以把{它}存在邮局吗？<br>王：不行，不行，邮局[除了{人民币}以外，别的钱都不能存]。你还是到中国{银行}去存吧。<br>",
	18:	"意文的弟弟思文刚从台湾来，要在美国{上大学}，现在住在姐姐家里学英文。{为了}{提高}英文{听力}，他每天都[看两个小时的电视]。<br><br>意文：思文，快{调}到第六{台}，{足球}{赛}开始了。<br>思文：是吗？我也喜欢看足球赛。...这是什么足球啊？怎么不是{圆}的？<br>意文：这不是{国际}足球，这是{美式}足球。<br>思文：足球应该用{脚}{踢}，为什么那个人用{手}{抱}着[跑{起来}]了呢？<br>意文：美式足球可以用手。<br>思文：你看，你看，那么多人都压在一起，下面的人不是要[{被}]{压坏}了吗？<br>意文：别{担心}，他们的身体都很{棒}，而且还穿着{特别}的{运动服}，不容易{受伤}。<br>思文：我看了{半天}，也{看不出来}谁{输}了谁{赢}了。还是看别的吧。<br>意文：你在美国住半年就会喜欢美式足球了。我有很多同学一看足球赛，就常常连饭都不吃了。<br>",
	19:	"职员：大中旅行社。你好。<br>王朋：你好。小姐，请问六月{初}到北京的机票多少钱？<br>职员：您要买{单程}票还是{来回}票？<br>王朋：我要买一张来回票。<br>职员：[有的]航空公司[一千]多块钱，有的{不到}一千。你想买哪家航空公司的？<br>王朋：[哪家的便宜，就买哪家的]。<br>职员：你打算从哪儿走？<br>王朋：华盛顿。<br>职员：韩国航空公司的票最便宜。<br>王朋：韩航怎么飞？<br>职员：先从{华盛顿}飞到{芝加哥}，在芝加哥{转机}到{洛杉矶}，然後从洛杉矶{直飞}{汉城}。在那儿住一{夜}，然後再飞{香港}。从香港再飞北京。<br>王朋：这太麻烦了。有没有从洛杉矶直飞北京的{班机}？<br>职员：有。西北、中国民航都有。但是都[比韩航贵两百多块]。<br>王朋：我现在订，什么时候必须付钱？<br>职员：一个星期内。<br>王朋：好，我想想再给你打电话。<br>职员：这个星期机票在减价。下个星期就{涨价}了。要是你要订就得快一点儿。<br>",
	23:	"小林：王朋，你到美国已经几个月了，你喜欢不喜欢现在的{生活}？<br>王朋：[美国好是好，但是我更喜欢我的{家乡}]。<br>小林：是吗？怎么，你想家啦？<br>王朋：是啊。<br>小林：你的老家在哪儿？<br>王朋：在北京。<br>小林：北京怎么样？我常{听说}北京很好，可是我还没有去过呢。<br>王朋：北京是中国的{首都}，也是中国的{政治}、{经济}和{文化}的中心。<br>小林：北京的{气候}怎么样？<br>王朋：北京在中国的北{部}，气候跟这儿{差不多}。春、夏、秋、冬，四季{分明}。冬天冷，夏天热，春天常常{刮风}，秋天最舒服。<br>小林：你打算什么时候回家看看？<br>王朋：今年暑假。如果你跟小高要去北京旅行{的话}，我们可以一起走。<br>小林：那太好了。你可以当我们的{导游}。<br>",
	20:	"王朋的父母跟他的{表弟}都到北京{首都机场}来接他。表弟一看到王朋就高兴[地]跑了过来。<br><br>表弟：{表哥}，{路上}{辛苦}了。来，我帮你{提}行李。<br>王朋：不，你[{拿}不动]，还是我自己拿吧。[才]一年不见，你又长高了。<br>王母：王朋，你好像{瘦}了一点儿。<br>王朋：学校功课太忙，没时间做饭，又吃不{惯}美国饭，所以瘦了五{公斤}。<br>王母：这次回来要多吃一点儿。坐了二十多个钟头的飞机，{累坏}了吧？<br>王朋：[还好]。飞机上的服务很好，{座位}也很舒服。<br>王父：走吧。我们回家以后，再慢慢儿{聊}吧。{爷爷}、{奶奶}还在家里等着看{孙子}呢！<br>表弟：你们在{门口}等着。我去{叫}出租汽车。<br>"
};

var text = {"A": textA, "B": textB};

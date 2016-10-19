var words = ["{请问}，{您}{贵姓}？<br>我{姓}{王}，你{呢}？<br>我姓李。王{先生}，{你}{好}！<br>你好，{李}{小姐}！我{叫}{王朋}，你叫{什么}{名字}？<br>我叫{李友}。<br>",
             "这{张}{照片}是{小李}的吗？<br>不是，那是高先生的。他是我{爸爸}{妈妈}的朋友。<br>{这}两{个}{男孩子}是{谁}？<br>一个是他{儿子}，一个是我{弟弟}。<br>这个{女孩子}是他女儿吗？<br>不是。高先生{没}有女儿。{那}是我{妹妹}。 <br>",
             "{七月}{十四}{号}是我的{生日}，也是{小白}的生日！<br>是吗？你们{今年}{多大}？<br>我十八岁，{可是}他十九岁。<br>你{请}他{吃}饭还是他请你吃饭？<br>我们都不请。<br>我请你们吃{晚饭}，{怎么样}？<br>我们都不{喜欢}吃美国饭。<br>那我们吃中国饭，{好}吗？<br>{太好了}。{谢谢}你！<br>那{天}是{星期几}？<br>{星期六}。<br>我们星期六{晚上}六{点}{半}{见}！<br>几点钟？<br>六点半。<br>好，再见！<br>",
             "你周末{常常}{去}{唱歌}，{跳舞}，{对}不对？<br>对。你呢？你{周末}喜欢不喜欢{打球}？<br>不喜欢。我喜欢{看}{书}，看{电视}。{有时候}也去看{外国}{电影}，可是这个周末没有好电影。<br>{那}我们明天去听{音乐}，怎么样？<br>太好了。我{请客}！<br>为什么你请我？<br>因为你{昨天}请我吃饭，{所以}我明天请你{听}音乐。<br>",
             "谁{呀}？请{进}！<br>张先生，您好！<br>啊，是小白。{快}进{来}！你找小张，对不对？小张不{在}家。他今天{工作}。<br>他在{哪儿}工作？<br>在{学校}。小白，你来我家，我很{高兴}。我{介绍}{一下}，这是王医生。王医生，这个{漂亮}的女孩子是我儿子的同学。小白，你{坐}一下{吧}，想{喝}{点儿}什么？<br>您喝什么？<br>我们喝啤酒。你还不{可以}喝啤酒，对不对？你{要}{茶}还是要{咖啡}？<br>您有{可乐}吗？<br>{对不起}，没有可乐。{给}你一{杯}{水}吧。<br>谢谢您！<br>",
             "喂，小王{在}吗？<br>我{就}是。您是{哪}{位}呀？<br>我是小高。你今天忙吗？<br>我{上午}有三{节}{课}。你有什么事？<br>我{下午}想到李小姐家去听中国音乐。{要是}你{有空}儿，我们一起去吧！<br>不{行}。我一点半要{开会}。三点{以后}我想去老师的{办公室}问他{几}个问题，因为明天我们二{年级}有一个{考试}。<br>要是你下午没{时间}，我们可以晚上去。<br>可以吗？你几点吃晚饭？我六点以后给你{打电话}，{方便}吗？<br>{没问题}，我{等}你的电话。<br>谢谢你！<br>{不客气}！<br>",
             "李友，你现在{学}中文学得怎么样？<br>我觉得中文很{难}。我们老师{说话}说得有一点儿快，所以我常常不{懂}{语法}。我也不知道{怎么}{复习}中文。{生词}太{多}了！<br>你们学{第}几课了？<br>第七课。我{上个}星期就{预习}了，可是现在还有问题。王朋，你{写}{字}写得很漂亮！<br>{哪里}！要是你有好{笔}，常常练习，也可以写得很好。<br>你{教}我怎么写，好吗？<br>没问题。{汉字}很{容易}。我下午就来{帮助}你练习！<br>谢谢！<br>{不谢}！<br>",
             "(电话录音)<br><br>姐姐，你好！ 我来学校以后很忙，所以今天才给你打电话。你想知道我在学校怎么样，我告诉你：我平常{早上}八点一刻{起床}，{洗}了{澡}以后就一边吃{早饭}一边看{报}。九点半去学校。上课{以前}在{教室}练习{发音}。{中午}我常常去{餐厅}吃{午饭}。我在{那儿}认识了几个{新}朋友。他们常常来我{宿舍}，一边听音乐一边聊天儿。昨天我朋友小张来找我{的时候}，我{正在}写一{篇}{日记}。上个月我回家的时候爸爸说他要给我买一个{电脑}。姐姐，请你{告诉}他，我{已经}买了。谢谢你。再见！<br>",
             "小李！你也来买{衣服}了！你今天要买什么？<br>我想买一件衬衫。你呢，小高？<br>我想买一{条}{裤子}。你想买什么{颜色}的{衬衫}？<br>我喜欢{黄}的，可是黄的太{贵}了。<br>这件{红}的怎么样？很{便宜}，也很漂亮。<br>对！我{买}两件吧，给我妹妹一件。小高，裤子在{这儿}！你{穿}多大的？<br>我穿中{号}的。买这条吧。这儿的{东西}很不错。以后我要常来。我们去{付钱}吧！<br>... ...<br>你的衬衫{多少}钱？<br>我给{售货员}六十{块}钱，她{找}我两分钱，所以两{件}衬衫{一共}五十九块九{毛}八{分}钱。<br>",
             "你知道吗？小谢下个星期回{上海}。这个周末我们想{约}她去{公园}看红叶。你想不想去？<br>今天上午下大雨了。要是周末下雨{怎么办}？<br>报上的{天气}{预报}说，明天就不下雨了，天气{会}好{一点儿}。这个周末不但不会{下雨}，而且会{比}现在{更}{暖和}。<br>太好了。我们去看{红叶}以后，我请大家来我家看{录像}吧！<br>",
             "小李，你{寒假}作什么？<br>我和哥哥要回家去看爸爸妈妈。{飞机}{票}已经买了。明天就{走}。<br>你们知道怎么去{机场}吗？<br>我哥哥说，我们可以{先}坐七路{或者}九路公共汽车，再换十三路。{然后}坐{地铁}。{坐}五{站}以后{下车}。{最后}坐出租汽车去机场。<br>你们知道坐地铁要坐哪条线吗？{蓝}线还是{绿}{线}？<br>不知道。我可以打电话问一下。<br>太{麻岁}了！我明天没事。{还是}我{开车}{送}你们去吧！<br>谢谢你！<br>",
             "(在{饭馆儿})<br>{服务员}：请进，请进。<br>李小姐：人怎么这么多？{好像}一个{位子}都没有了。<br>王先生：请问，还有没有位子？<br>服务员：有，有，有。那张{桌子}没有人。<br><br>服务员：二位要吃一点儿什么？<br>李小姐：老王你{点菜}吧。<br>王先生：好。先给我们三十个{饺子}，要{素}的。<br>服务员：除了饺子以外，还要什么？<br>李小姐：还要一{盘}{家常}{豆腐}，不要{肉}，我们吃素。<br>服务员：我们的家常豆腐没有肉。<br>李小姐：还要两{碗}{酸}{辣}{汤}，请不要{放}{味精}。<br>服务员：好，两碗酸辣汤。那喝点儿什么呢？<br>王先生：我要一瓶啤酒。<br>李小姐：我很{渴}，给我一杯可乐。<br>服务员：好，三十个饺子，一盘家常豆腐，两碗酸辣汤，一瓶啤酒，一杯可乐。还要别的吗？<br>李小姐：不要别的了，这{些}{够}了。小姐，我们都{饿}了，请{上菜}快一点儿。<br>服务员：没问题，菜很快就能做好。<br>",
             "学生：我要{借}这两{盘}{录音带}。<br>{职员}：请你{把}{学生证}{留}在这儿。{语言}{实验室}在{楼下}，你可以去那儿听。{还}录音带的时候，我{再}把学生证还给你。<br>学生：糟糕，学生证我{忘}了{带}了。<br>职员：你有没有{其他的}{证件}？<br>学生：{信用卡}可以吗？<br>职员：不行。<br>学生：语言实验室{开}到几点？<br>职员：我们五点{关}{门}。<br>学生：只{剩}半个{钟头}了，{可能}{来不及}了，我明天再来吧。<br>",
             "田小姐：老金，你{上}哪儿去？<br>金先生：我想去学校的电脑{中心}。你知道怎么走吗？是不是在{运动}{场}{旁边}？<br>田小姐：电脑中心没有运动场{那么}{远}。你知道学校图书馆在{哪里}吗？<br>金先生：知道。我{住}的{地方}{离}图书馆不太远。<br>田小姐：电脑中心离图书馆很{近}，{就}在图书馆和学生{活动}中心{中间}。<br>金先生：小田，你去哪儿呢？<br>田小姐：我想到学校书{店}去买书。<br>金先生：书店在什么地方？<br>田小姐：就在学生活动中心{里头}。我们一起走吧。<br>金先生：{早知道}{同路}，我就不{问路}了。<br>",
             "(李友给王朋打电话。)<br>李友：王朋，你做什么{呢}？<br>王朋：我在看书呢。<br>李友：今天小林{过}生日，晚上我们在小林家开{舞会}，你能来吗？<br>王朋：几点钟？<br>李友：七点钟。我们先吃饭，吃完饭再唱歌跳舞。<br>王朋：哪些人会去？<br>李友：小林的{女朋友}，我的{表姐}，还有我们中文{班}的几个同学。<br>王朋：要带什么东西？你知道我不会{做饭}。<br>李友：{汽水儿}或者{水果}{都可以。<br>王朋：那我带几瓶}{果汁}吧。<br>李友：你没有车，要不要我来{接}你？<br>王朋：不用，我住的地方离小林那儿不远，我{走路}去，可以运动一下。<br>",
             "({看病})<br>{病人}：医生，我{肚子}{疼}{死}了。<br>医生：你昨天吃什么东西了？<br>病人：我昨天没时间做饭，吃了一{些}{剩菜}。一天上了{好几}次{厕所}。<br>医生：菜{放}了几天了？<br>病人：不知道。<br>医生：你{躺下}。我给你{检查}一下。<br>医生：你是吃{坏}肚子了。<br>病人：要不要{打针}？<br>医生：不用打针，吃这{种}{药}就可以。一天三次，一次两{片}。<br>病人：好！是饭前吃还是饭后吃？<br>医生：饭前吃。不过，你最好二十四{小时}不吃饭。<br>病人：那我不是要饿死了吗？这个{办法}不好！<br>",
             "王朋跟李友在{同}一个学校学习，他们认识已经快三个月了。王朋常常帮助李友练习说中文。上个星期他们{参加}小林的生日舞会，玩儿得很高兴。李友对王朋的{印象}很好，王朋也很喜欢李友，他们{成}了好朋友。<br>王朋：这个周末学校{演}新电影，我们一起去看，好吗？<br>李友：什么电影？<br>王朋：中国电影《{活}著》。<br>李友：好啊！不过，听说看电影的人很多，买得到票吗？<br>王朋：票已经买了，我{费}了很大的{力气}{才}买到。<br>李友：好极了！我早就想看这个电影了。还有{别人}跟我们一起去吗？<br>王朋：没有，就我们{俩}。<br>李友：好啊。什么时候？<br>王朋：{后天}晚上八点。<br>李友：看电影以前，我请你吃晚饭。<br>王朋：好，{一言为定}。<br>",
             "王朋在学校的宿舍住了一个学期了。他觉得宿舍太{吵}，睡不好觉。房间太小，连电脑都放不下，再说也没有地方可以做饭，很不方便，所以{准备}下个学期{搬}出去住。他找房子找了一个多星期了，可是还没有找到。今天早上他在{报纸}上看到一个{广告}，说学校{附近}有一个{公寓}出租，离学校只有一{英里}，很方便。那{套}公寓有一个{卧室}，一个{厨房}，一个{洗澡间}，一个{客厅}，还{带}{家俱}。王朋觉得那套公寓可能对他很合适。<br>",
             "(在台湾的{邮局})<br><br>{留学生}：先生，从台北{寄}一封信到台南{要}几天？<br>{营业员}：{平信}三、四天，{快信}只要一天。<br>留学生：我希望{越快越好}，{那}就寄快信吧。要{贴}多少钱的{邮票}？<br>营业员：十二块钱。<br>留学生：这封信很{重要}。可以{挂号}吗？<br>营业员：可以。如果挂号，还要再{加}十四块。<br>留学生：好，那就寄挂号快信。{另外}，我还要买{明信片}，一张多少钱？<br>营业员：三块钱。<br>留学生：好，我买五张。除了明信片以外，我还要买邮票，一张多少钱？<br>营业员：一张十块钱。<br>留学生：我要十张。<br>营业员：一共一百四十一块。<br>",
             "老李：你看，我的肚子越来越大了。<br>小林：你平常吃得那么多，又不运动，{当然}越来越{胖}了。<br>老李：那怎么办呢？<br>小林：如果{怕}胖，你一个星期运动两、三次，每次半个小时，肚子就会小了。<br>老李：我两年没运动了，做什么运动呢？<br>小林：最{简单}的运动是{跑步}。<br>老李：冬天那么冷，夏天那么热，跑步{多}{难受}{啊}{。<br>小林：你打}{网球}吧。<br>老李：那我得买网球{拍}、网球鞋，太贵了！<br>小林：找几个人打{篮球}吧。买个篮球很便宜。<br>老李：那每次都得打电话找人，麻烦死了。<br>小林：你去{游泳}吧。不用找人，也不用花很多钱，什么时候都可以去。<br>老李：游泳？多{危险}哪，{淹死}了怎么办？<br>小林：我也没办法了。你不{愿意}运动，那就胖下去吧。<br>",
             "钱：小白，时间过得真快，还有一个月就{放假}了。你有什么{计划}？<br>白：我还没有想好。你呢，老钱？<br>钱：我要到台湾去。<br>白：真的啊？你要到台湾做什么？<br>钱：我想一边教英文，一边学中文。有空的时候，到台湾{各地}去看看。<br>白：你以前去过台湾没有？<br>钱：没有。这是第一次。<br>白：什么时候{走}？<br>钱：我{打算}六月中走。我{护照}已经{办}好了，可是我的{签证}还没办。<br>白：我听说到台湾的签证不难办，可是六月的机票不好买。你得赶快{订}机票。<br>钱：昨天报纸上的广告说西北、中华这两{家}{航空}{公司}的机票都在大{减价}。可是我忙得没有时间打电话。<br>白：我哥哥在一家{旅行社}工作。你把你的旅行{日程}告诉我。我请他帮你办。<br>钱：好极了。机票能不能{打折}扣？<br>白：这个...我请他给你打{九折}，但是你得请我吃饭。<br>钱：那没问题。<br>白：一言为定。<br>钱：好，一言为定。<br>",
             "李友和住在她{对面}的王德中在谈{春假}的{计划}。王德中是中国来的留学生。<br><br>王德中：李友，你春假有什么计划？<br>李友：我要回家看我的{父母}。你呢？<br>王德中：我要去{加州}看我的{外公}、{外婆}，还有{阿姨}。<br>李友：我{以为}你在美国没有{亲戚}呢。<br>王德中：我的外公、外婆跟我阿姨住在{旧金山}，{伯伯}{一家}住在洛杉矶。你的{老家}在哪儿？<br>李友：在{麻州}西边。<br>王德中：你家住在大{城市}吗？<br>李友：不是。是在{乡下}的一个小{镇}。{人口}只有<br>五千。左边有几{座}小{山}，右边是一条小{河}，小河两边{种}{着}很多{树}。春天的时候，树上{开}{满}了花，{美}极了。<br>王德中：{听起来}{风景}很不错。<br>李友：是啊。我很喜欢那个地方。那儿一年四{季}都很好。<br>{比方说}，春天可以看花，夏天可以游泳，秋天可以看红叶，冬天可以{滑雪}。<br>王德中：真是一个好地方！<br>李友：{欢迎}你来我家玩儿。<br>",
             "{放}{暑假}了，王朋要回中国{探亲}。{前一天}晚上李友帮他{收拾}{行李}。第二天李友开车送他到机场。{出门}的时候，李友{提醒}他检查一下机票和证件。这一天坐飞机的人很多。{停车场}{差不多}都满了。{差一点}{找不到}停车的地方。李友找了半天才找到一个。他们停好车以后，{来到}了中国民航的{服务台}。<br><br>王朋：小姐，这是我的机票。<br>服务员：先生，请把护照给我看看。你有几{件}行李要{托运}？<br>王朋：两件。这个小{皮箱}我{随身}带着。<br>服务员：麻烦您拿上来，我{称}称。<br>李友：没{超重}吧？<br>服务员：没有。这是您的护照、机票，这是{登机证}。请到五号门上飞机。<br>王朋：谢谢。<br><br>李友：飞机要{起飞}了，你快进去吧。<br>王朋：不{急}，还有二十分钟呢。你怎么{哭}了呢？别哭，别哭。我一个月就回来了。<br>李友：什么“就”回来，你一个月以后“才”回来。<br>王朋：回国以后，我会给你打电话。<br>李友：从中国打{长途}电话到美国来太贵了。还是我给你打吧。你常给我写信就行了。<br>王朋：好，我要上飞机了。你多{保重}。回家的时候，开车要{小心}。<br>李友：我会小心的。你也多保重。{一路顺风}！<br>"];

var patterns = ["请问，您贵姓？<br>[我姓王]，[你呢]？<br>我姓李。王先生，你好！<br>你好，李小姐！我叫王朋，[你叫什么名字]？<br>我叫李友。<br>",
                "这[张]照片是小李的吗？<br>不是，那是高先生的。他是我爸爸妈妈的朋友。<br>[这两个男孩子是谁]？<br>一个是他儿子，一个是我弟弟。<br>这个女孩子是他女儿吗？<br>不是。[高先生没有女儿]。那是我妹妹。 <br>",
                "七月十四号是我的生日，也是小白的生日！<br>是吗？[你们今年多大]？<br>我十八岁，可是他十九岁。<br>[你请他吃饭还是他请你吃饭]？<br>我们都不请。<br>[我请你们吃晚饭]，怎么样？<br>我们都不喜欢吃美国饭。<br>那我们吃中国饭，好吗？<br>太好了。谢谢你！<br>那天是星期几？<br>星期了担<br>我们星期六晚上六点半见！<br>几点钟？<br>六点半。<br>好，再见！<br>",
                "[你周末常常去唱歌]，跳舞，对不对？<br>对。你呢？你周末喜欢不喜欢打球？<br>不喜欢。我喜欢看书，看电视。有时候也去看外国电影，可是这个周末没有好电影。<br>那我们明天去听音乐，怎么样？<br>太好了。我请客！<br>为什么你请我？<br>[因为]你昨天请我吃饭，[所以]我明天请你听音乐。<br>",
                "谁呀？请进！<br>张先生，您好！<br>啊，是小白。快进来！你找小张，对不对？小张不在家。他今天工作。<br>[他在哪儿工作？]<br>在学校。小白，你来我家，[我很高兴]。[我介绍一下]，这是王医生。王医生，这个漂亮的女孩子是我儿子的同学。小白，你坐一下吧，想喝点儿什么？<br>您喝什么？<br>我们喝啤酒。你还不可以喝啤酒，对不对？你要茶还是要咖啡？<br>您有可乐吗？<br>对不起，没有可乐。[给你一杯水吧]。<br>谢谢您！<br>",
                "喂，小王在吗？<br>我就是。您是哪位呀？<br>我是小高。你今天忙吗？<br>我上午有三节课。你有什么事？<br>我下午想到李小姐家去听中国音乐。要是你有砍儿，我们一起去吧！<br>不行。[我一点半要开会]。三点以后我想去老师的办公室问他几个问题，因为明天我们二年级有一个考试。<br>要是你下午没时间，我们可以晚上去。<br>可以吗？你几点吃晚饭？我六点以后[给你打电话]，方便吗？<br>没问题，我等你的电话。<br>谢谢你！<br>不客气！<br>",
                "李友，你现在[学中文学得怎么样]？<br>我觉得中文很难。我们老师说话说得[有一点儿快]，所以我常常不懂语法。我也不知道怎么复习中文。生词太多了！<br>你们学第几课了？<br>第七课。我[上个星期就预习了]，可是现在还有问题。王朋，你写字写得很漂亮！<br>哪里！要是你有好笔，常常练习，也可以写得很好。<br>你教我怎么写，好吗？<br>没问题。汉字很容易。我下午就来帮助你练习！<br>谢谢！<br>不谢！<br>",
                "(电话录音)<br><br>姐姐，你好！ 我来学校以后很忙，所以今天才给你打电话。你想知道我在学校怎么样，我告诉你：我平常早上[八点一刻起床]，洗了澡以后[就][一边吃早饭一边看报]。九点半去学校。上课以前在教室练习发音。中午我常常[去餐厅吃午饭]。我在那儿认识了几个新朋友。他们常常来我宿舍，一边听音乐一边聊天儿。昨天我朋友[小张来找我的时候，我正在写一篇日记]。上个月我回家的时候爸爸说他要给我买一个电脑。姐姐，[请你告诉他，我已经买了]。谢谢你。再见！<br>",
                "小李！你也来买衣服了！[你今天要买什么？]<br>我想买一件衬衫。你呢，小高？<br>我想买一条裤子。你想买什么颜色的衬衫？<br>[我喜欢黄的]，可是黄的太贵了。<br>这件红的怎么样？很便宜，也很漂亮。<br>对！我买两件吧，给我妹妹一件。小高，裤子在这儿！你穿[多大的]？<br>我穿中号的。买这条吧。这儿的东西很不错。以后我要常来。我们去付钱吧！<br>... ...<br>你的衬衫多少钱？<br>我给售货员六十块钱，她找我两分钱，所以两件衬衫一共五十九块九毛八分钱。<br>",
                "你知道吗？小谢下个星期回上海。这个周末我们想约她去公园看红叶。你想不想去？<br>今天上午下大雨了。要是周末下雨怎么办？<br>报上的天气预报说，明天就[不下雨了]，[天气会好一点儿]。这个周末[不但]不会下雨，而且会[比]现在更暖和。<br>太好了。我们去看红叶以后，我请大家来我家看录像吧！<br>",
                "小李，你寒假作什么？<br>我和哥哥要回家去看爸爸妈妈。[飞机票已经买了]。明天就走。<br>你们知道怎么去机场吗？<br>我哥哥说，我们可以[先][坐七路或者九路]公共汽车，再换十三路。然后坐地铁。坐五站以后下车。最后坐出租汽车去机场。<br>你们知道坐地铁要坐哪条线吗？蓝线还 是绿线？<br>不知道。我可以打电话问一下。<br>太麻岁了！我明天没事。[还是我开车送你们去吧]！<br>谢谢你！<br>",
                "(在饭馆儿)<br>服务员：请进，请进。<br>李小姐：人怎么这么多？好像[一个位子都没有]了。<br>王先生：请问，还有没有位子？<br>服务员：有，有，有。那张桌子没有人。<br><br>服务员：二位要吃一点儿什么？<br>李小姐：老王你点菜吧。<br>王先生：好。先给我们三十个饺子，要素的。<br>服务员：除了饺子以外，还要什么？<br>李小姐：还要一盘家常豆腐，不要肉，我们吃素。<br>服务员：我们的家常豆腐没有肉。<br>李小姐：还要两碗酸辣汤，请不要放味精。<br>服务员：好，两碗酸辣汤。那喝点儿什么呢？<br>王先生：我要一瓶啤酒。<br>李小姐：我很渴，给我一杯可乐。<br>服务员：好，三十个饺子，一盘家常豆腐，两碗酸辣汤，一瓶啤酒，一杯可乐。还要别的吗？<br>李小姐：不要别的了，这些够了。小姐，我们都饿了，请上菜快一点儿。<br>服务员：没问题，菜很快就能[做好]。<br>",
                "学生：我要借这两盘录音带。<br>职员：请你[把]学生证[留在这儿]。语言实验室在楼下，你可以去那儿听。还录音带的时候，我再把学生证还给你。<br>学生：糟糕，学生证我忘了带了。<br>职员：你有没有其他的证件？<br>学生：信用卡可以吗？<br>职员：不行。<br>学生：语言实验室[开到几点]？<br>职员：我们五点关门。<br>学生：只剩[半个钟头]了，可能来不及了，我明天再来吧。<br>",
                "田小姐：老金，你上哪儿去？<br>金先生：我想去学校的电脑中心。你知道怎么走吗？是不是在运动场[旁边]？<br>田小姐：电脑中心[没有]运动场[那么远]。你知道学校图书馆在哪里吗？<br>金先生：知道。我住的地方离图书馆不太远。<br>田小姐：电脑中心离图书馆很近，就在图书馆和学生活动中心中间。<br>金先生：小田，你去哪儿呢？<br>田小姐：我想[到学校书店去买书]。<br>金先生：书店在什么地方？<br>田小姐：就在学生活动中心里头。我们一起走吧。<br>金先生：早知道同路，我[就]不问路了。<br>",
                "(李友给王朋打电话。)<br>李友：王朋，你[做什么呢]？<br>王朋：我在看书呢。<br>李友：今天小林过生日，晚上我们在小林家开舞会，你能来吗？<br>王朋：几点钟？<br>李友：七点钟。我们先吃饭，吃完饭再唱歌跳舞。<br>王朋：哪些人会去？<br>李友：小林的女朋友，我的表姐，还有我们中文班的几个同学。<br>王朋：要带什么东西？你知道我不会做饭。<br>李友：汽水儿或者水果都可以。<br>王朋：那我带几瓶果汁吧。<br>李友：你没有车，要不要我来接你？<br>王朋：不用，我[住的地方]离小林那儿不远，我走路去，可以运动一下。<br>",
                "(看病)<br>病人：医生，我肚子[疼死了]。<br>医生：你昨天吃什么东西了？<br>病人：我昨天没时间做饭，吃了一些剩菜。一天上了好几[次]厕所。<br>医生：菜放了几天了？<br>病人：不知道。<br>医生：你躺下。我给你检查一下。<br>医生：你是吃坏肚子了。<br>病人：要不要打针？<br>医生：不用打针，吃这种药就可以。一天三次，一次两片。<br>病人：好！是饭前吃还是饭后吃？<br>医生：饭前吃。不过，你最好二十四小时不吃饭。<br>病人：那我不是要饿死了吗？这个办法不好！<br>",
                "王朋跟李友在同一个学校学习，他们认识已经快三个月了。王朋常常帮助李友练习说中文。上个星期他们参加小林的生日舞会，[玩儿得很高兴]。李友对王朋的印象很好，王朋也很喜欢李友，他们成了好朋友。<br>王朋：这个周末学校演新电影，我们一起去看，好吗？<br>李友：什么电影？<br>王朋：中国电影《活著》。<br>李友：好啊！不过，听说看电影的人很多，[买得到]票吗？<br>王朋：票已经买了，我费了很大的力气才买到。<br>李友：好极了！我早就想看这个电影了。还有别人跟我们一起去吗？<br>王朋：没有，[就]我们俩。<br>李友：好啊。什么时候？<br>王朋：后天晚上八点。<br>李友：看电影以前，我请你吃晚饭。<br>王朋：好，一言为定。<br>",
                "王朋在学校的宿舍[住了一个学期了]。他觉得宿舍太吵，睡不好觉。房间太小，[连电脑都][放不下]，再说也没有地方可以做饭，很不方便，所以准备下个学期搬出去住。他找房子找了[一个多星期]了，可是还没有找到。今天早上他在报纸上看到一个广告，说学校附近有一个公寓出租，离学校只有一英里，很方便。那套公寓有一个卧室，一个厨房，一个洗澡间，一个客厅，还带家俱。王朋觉得那套公寓可能对他很合适。<br>",
                "留学生：先生，从台北寄一封信到台南要几天？<br>营业员：平信[三、四]天，快信只要一天。<br>留学生：我希望[越快越好]，那[就]寄快信吧。要贴多少钱的邮票？<br>营业员：十二块钱。<br>留学生：这封信很重要。可以挂号吗？<br>营业员：可以。如果挂号，还要再加十四块。<br>留学生：好，那就寄挂号快信。另外，我还要买明信片，一张多少钱？<br>营业员：三块钱。<br>留学生：好，我买五张。除了明信片以外，我还要买邮票，一张多少钱？<br>营业员：一张十块钱。<br>留学生：我要十张。<br>营业员：一共一百四十一块。<br>",
                "老李：你看，我的肚子越来越大了。<br>小林：你平常吃得那么多，又不运动，当然越来越胖了。<br>老李：那怎么办呢？<br>小林：如果怕胖，你一个星期运动两、三次，每次半个小时，肚子就会小了。<br>老李：我[两年没运动了]，做什么运动呢？<br>小林：最简单的运动是跑步。<br>老李：冬天那么冷，夏天那么热，跑步多[难受]啊。<br>小林：你打网球吧。<br>老李：那我得买网球拍、网球鞋，太贵了！<br>小林：找几个人打篮球吧。买个篮球很便宜。<br>老李：那每次都得打电话找人，麻烦死了。<br>小林：你去游泳吧。不用找人，也不用花很多钱，什么时候都可以去。<br>老李：游泳？多危险哪，淹死了怎么办？<br>小林：我也没办法了。你不愿意运动，那就胖[下去]吧。<br>",
                "钱：小白，时间过得真快，还有一个月就放假了。你有什么计划？<br>白：我还没有想好。你呢，老钱？<br>钱：我要到台湾去。<br>白：真的啊？你要到台湾做什么？<br>钱：我想一边教英文，一边学中文。有空的时候，到台湾各地去看看。<br>白：你以前去过台湾没有？<br>钱：没有。这是第一次。<br>白：什么时候走？<br>钱：我打算六月中走。我护照已经办好了，可是我的签证还没办。<br>白：我听说到台湾的签证不难办，可是六月的机票不好买。你得赶快订机票。<br>钱：昨天报纸上的广告说西北、中华这两家航空公司的机票都在大减价。可是我忙得没有时间打电话。<br>白：我哥哥在一家旅行社工作。你把你的旅行日程告诉我。我请他帮你办。<br>钱：好极了。机票能不能打折扣？<br>白：这个...我请他给你打九折，但是你得请我吃饭。<br>钱：那没问题。<br>白：一言为定。<br>钱：好，一言为定。<br>",
                "李友和住在她对面的王德中在谈春假的计划。王德中是中国来的留学生。<br><br>王德中：李友，你春假有什么计划？<br>李友：我要回家看我的[父母]。你呢？<br>王德中：我要去加州看我的外公、外婆，还有阿姨。<br>李友：我以为你在美国没有亲戚呢。<br>王德中：我的外公、外婆跟我阿姨住在旧金山，伯伯一家住在洛杉矶。你的老家在哪儿？<br>李友：在麻州西边。<br>王德中：你家住在大城市吗？<br>李友：不是。是在乡下的一个小镇。人口只有五千。[左边有几座小山]，<br>[右边是一条小河]，[小河两边种着很多树]。春天的时候，树上开满了花，<br>美极了。<br>王德中：听起来风景很不错。<br>李友：是啊。我很喜欢那个地方。那儿一年四季都很好。比方说，春天可以看花，夏天可以游泳，秋天可以看红叶，冬天可以滑雪。<br>王德中：真是一个好地方！<br>李友：欢迎你来我家玩儿。<br>",
                "放暑假了，王朋要回中国探亲。前一天晚上李友帮他收拾行李。第二天李友开车送他到机场。出门[的时候]，李友提醒他检查一下机票和证件。这一天坐飞机的人很多。停车场差不多都满了。差一点找不到停车的地方。李友找了半天才找到一个。他们停好车[以后]，来到了中国民航的服务台。<br><br>王朋：小姐，这是我的机票。<br>服务员：先生，请把护照给我看看。你有几件行李要托运？<br>王朋：两件。这个小皮箱我随身带着。<br>服务员：麻烦您拿上来，我称称。<br>李友：没超重吧？<br>服务员：没有。这是您的护照、机票，这是登机证。请到五号门上飞机。<br>王朋：谢谢。<br><br>李友：飞机要起飞了，你快进去吧。<br>王朋：不急，还有二十分钟呢。你怎么哭了呢？别哭，别哭。我一个月就回来了。<br>李友：什么“就”回来，你一个月以后“才”回来。<br>王朋：回国以后，我会给你打电话。<br>李友：从中国打长途电话到美国来太贵了。还是我给你打吧。你常给我写信就行了。<br>王朋：好，我要上飞机了。你多保重。回家的时候，开车要小心。<br>李友：我会小心的。你也多保重。一路顺风！<br>"];

function descending(a,b){
    return b-a;
}

function copyObj(obj){
    var copy={};
    for(var i in obj){
        copy[i]=obj[i];
    }
    return copy;
}

var result=[];

for(i=0;i<23;i++){
    var length=0;
    
    var curly = {};
    for(j=0;j<words[i].length;j++){
        if(words[i][j]=="{" || words[i][j]=="}"){
            if(typeof(curly[j-length])=="undefined"){
                curly[j-length]=words[i][j];
            }
            else{
                curly[j-length]="}{";
            }
            length++;
        }
    }
    length=0;
    var square = {};
    for(j=0;j<patterns[i].length;j++){
        if(patterns[i][j]=="[" || patterns[i][j]=="]"){
            if(typeof(square[j-length])=="undefined"){
                square[j-length]=patterns[i][j];
            }
            else{
                square[j-length]="][";
            }
            length++;
        }
    }
    var combo = {};
    combo = copyObj(curly);
    for(j in square){
        if(j in combo){
            if(combo[j]=="{"){
                combo[j]=square[j]+"{";
            }
            else if(combo[j]=="}"){
                combo[j]="}"+square[j];
            }
            else if(combo[j]=="}{"){
                combo[j]="}"+square[j]+"{";
            }
            else if(combo[j]=="}\[{" || combo[j]=="}\]{"){
                combo[j]="}"+square[j]+"{";
            }
        }
        else{
            combo[j]=square[j];
        }
    }
    
    var final = words[i].replace(/{/g,"").replace(/}/g,"").replace(/\[/g,"").replace(/\]/g,"");
    
    var fallingKeys=keys(combo).sort(descending);
    
    for(j=0;j<fallingKeys.length;j++){
        final=final.slice(0,fallingKeys[j])+combo[fallingKeys[j]]+final.slice(fallingKeys[j]);
    }
    
    result.push(final);
}

/*
console.log(words[0]);
console.log(patterns[0]);
console.log(result[0]);
*/

for(i=0;i<result.length;i++){
    result[i]="\""+result[i]+"\"";
    if(i==0){
        result[i]="\["+result[i];
    }
    if(i==result.length-1){
        result[i]=result[i]+"]";
    }
    else{
        result[i]=result[i]+",\n";
    }
}

var note=[];
for(i=0;i<23;i++){
    if(words[i].replace(/{/g,"").replace(/}/g,"")!=patterns[i].replace(/\[/g,"").replace(/]/g,"")){
        note.push(i+1);
    }
}

var blob = new Blob(["Check "+note.toString()+".\n\n"].concat(result), {type: "text/plain"});
var link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "COMBO";
document.body.appendChild(link);
link.click();

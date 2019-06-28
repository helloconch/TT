/* jshint esversion: 6 */

//手动标记排卵日
var manualOvulaionDay = "manualOvulaionDay";
//饮食推荐
var dietaryRecommendation = 7;
//运动推荐
var sportRecommendation = 8;
//上传今日体温数据
var uploadTemperature = "uploadTemperature";
//体温波动的允许次数。超过这个次数，认为波动较大
var tempFluctuationCount = 5;
//体温波动幅度。超过这个幅度，记为一次波动
var tempFluctuationRange = 0.3;

//正常舌下体温为：36.3~37.39℃ ，37.4～38度是低烧，38以上为体温过高，36.29℃以下的温度为体温过低。
var minNormalTemperature = 36.3;
var maxNormalTemperature = 37.39;
var minHighTemperature = 38;
var timeflag_00_00_00 = ' 00:00:00';
var timeflag_23_59_59 = ' 23:59:59';

//智能分析
var analysisAction = "analysisAction";
//测温帮助
var measureTemperatureHelpAction = "measureTemperatureHelpAction";
//记录经期
var recordMensAction = "recordMensAction";
//立即咨询
var consultAction = "consultAction";
//健康档案
var healthAction = "healthAction";
//商城试纸
var shopPaperAction = "shopPaperAction";
//备孕营
var pregnantCampAction = "pregnantCampAction";
//图标baseURl
var iconBaseUrl = "https://yunchengfile.oss-cn-beijing.aliyuncs.com/app/reminder/";


var foodObj = {
    "food": [{
        "type": 1,
        "message1": "月经期间，吃点温补类食物可以益气补血，今日饮食推荐：",
        "message2": [
            "红糖姜茶：补血养颜，温胃驱寒。",
            "山药红豆粥：可益气补血，利水消肿。",
            "小炒猪肝：动物肝脏，肾脏，含铁丰富，可以小炒食之。",
            "红豆薏米粥：祛湿排毒，同时有养颜功能。",
            "鸡蛋炒木耳：黑木耳具有滋补，润燥，养血益胃，活血止血的功效。",
            "乌鸡丝瓜汤：可以帮助补血，另外还能帮助益气健脾。",
            "猪皮冻胶：可以养血益阴，滋肾补肝。"
        ]
    },
    {
        "type": 2,
        "message1": "月经期快结束啦，可以补补近期损失的血液，今日饮食推荐：",
        "message2": [
            "菠菜猪肝汤：菠菜和猪肝都是含铁丰富的食材，菠菜猪肝汤是补血良品哦。",
            "红豆粥：红豆，蚕豆，含铁丰富，可以吃一碗红豆粥，或者杂豆米饭都是可以的哦。",
            "小炒青菜：青菜，生菜等绿叶蔬菜都是维C含量高的食材，可以吃一盘小炒青菜哦,促进铁的吸收。",
            "木耳红枣粥：活血养血，但若经血量多，少食。",
            "紫菜鸡蛋汤：紫菜有清热利水、补肾养心的功效。",
            "西红柿炒鸡蛋：富含维生素C，蛋白质，可抗衰老，保护心血管功能。",
            "西蓝花炒虾仁：富含维生素C和蛋白质，有增强机体免疫力的功效，体质虚弱者建议食用。"
        ]
    },
    {
        "type": 3,
        "message1": "月经终于结束啦，现在可以吃一些促进卵泡发育的食物，今日饮食推荐：",
        "message2": [
            "水鱼汤：可增加透明拉丝白带，促进卵泡发育。",
            "紫米粥：紫米可补血益气，暖脾胃，具有补血，健脾以及治疗神经衰弱等功效。",
            "红薯：红薯含有类雌激素物质，具有养颜功效。同时升糖指数低，可降低升糖速度。今日主食可以用红薯替代。",
            "黑豆汤：黑豆可促卵泡发育、补充雌激素，今日宜来一份黑豆汤哦。",
            "黑豆浆：黑豆可促卵泡发育、补充雌激素，一杯300-500ml的黑豆浆是适宜的选择哦",
            "猕猴桃：含有丰富的维C，被誉为水果之王，饭后可以吃一个。",
            "柚子：富含丰富的维C，具有抗氧化作用，可健胃、润肺、补血、清肠、利便",
            "西红柿炒豆腐：豆腐含有丰富的植物雌激素，可以促进卵泡发育，西红柿富含维C，有养颜功效~",
            "木耳炖豆腐：木耳具有和血养容的功效。豆腐具有益气和中促进卵泡发育的功效。",
            "瘦肉豆腐汤：可促进卵泡发育，吸收好。"
        ]
    },
    {
        "type": 4,
        "message1": "进入排卵期了，推荐补血促排类食物，今日饮食推荐：",
        "message2": [
            "黑豆炖猪蹄：黑豆可促卵泡发育、补充雌激素，今日宜来一份黑豆炖猪蹄哦，滋补又养颜。",
            "西兰花：深色蔬果比浅色含更多维生素和抗氧化物质，比如西兰花，紫甘蓝，可以自制简单的蔬菜沙拉，养颜又健康哦。",
            "鸡蛋羹：动物肝脏，鸡蛋，叶酸含量丰富，今天可以给自己加份鸡蛋羹哦。",
            "蒜蓉炒菠菜：绿叶蔬菜类，比如菠菜，可以用热水焯一下后，做个蒜蓉炒菠菜，还有排毒功效哦。",
            "糙米粥：糙米含有丰富的维生素A，B，C，E以及锌，镁，铁，磷等人体所需的微量元素。今日主食可以用糙米替代哦。",
            "樱桃：樱桃可祛风除湿，升糖指数低，宜食用。今日饭后水果可以选择樱桃哦。",
            "火龙果：含有一般水果少有的粘胶状的植物性白蛋白，可增强免疫力。",
            "葡萄：可补气血、益肝肾、生津液、强筋骨，更有安胎之说。"
        ]
    },
    {
        "type": 5,
        "message1": "女性黄体期间得吃一些有益子宫内膜的食物，今日饮食推荐：",
        "message2": [
            "黑豆糯米粥：可以补充雌孕激素，改善黄体功能不足。",
            "黑豆枸杞粥：可补充雌激素，缓解疲劳。",
            "芹菜炒牛肉：芹菜中含有较多雌激素，牛肉属于温补食材，二者结合，可有补血益气之效。",
            "香菇鸡肉粥：鸡肉有调经作用，香菇可抗衰老，二者结合，可活血补气。",
            "玉米排骨汤：玉米具有健脾利湿，宁心活血的作用，对预防高血压，冠心病有积极作用。",
            "银耳红枣粥：可补中益气，长期服用可以润肤，并有祛除脸部黄褐斑、雀斑的功效。",
            "银耳羹：有养颜护肤,通血，抗辐射之效",
            "黑米红枣粥：可补益脾胃，益气活血，经常食用黑米，有利于防治头昏、目眩、贫血等症状。",
            "龙眼牛肉汤：龙眼肉有补心安神作用，配合牛肉，简单易做，适合气血两虚失眠者饮用。",
            "薏米莲子粥：补充气血、预防失眠。",
            "虾皮炒青菜心：鲜美可口，可活学补气，抗衰老。",
            "家常炒豆腐：豆制品含雌激素丰富，豆制品还含有丰富的钙，是营养食材。",
            "哈密瓜：铁的含量比鸡肉多两三倍，比牛奶高17倍，是补血良品。",
            "柠檬：富含维C，可延缓衰老抑制色素沉着，消除晨吐。",
            "橙子：可生津止渴，止呕，化痰宽胸。",
            "菠萝：可分解蛋白，帮助消化，适宜消化功能紊乱的人群。"
        ]
    }
    ]
};

var sportObj = {
    "motion": [{
        "type": 1,
        "message1": "月经期间，简单动动可有助缓解痛经和疲劳感，今日运动推荐：",
        "message2": [
            "用拇指和食指、中指或环指相对推拿一定部位的皮肤肌肉或肌腱，进行一松一紧的拿捏，用力由轻到重，均匀连贯，此法可缓解肌肉痉挛，有开窍止痛作用。",
            "用拇指或掌根按压穴位，逐渐用力按动，或以指尖在穴位上用力按压，或用指腹用力点按。用力要持续，由小到大，直到有感觉时再减压力，也可揉按相结合，具有止痛功能。",
            "两足分开同肩宽站立，一手叉腰，头稍后仰使颈部肌肉放松，另一手四指放在颈部，从下向上再从上向下按摩肌肉。两手交替，反复10次。可以帮助我们放松颈部肌肉。",
            "用指腹或手掌在腹部皮肤上单方向直线推动，手要紧贴皮肤，用力要稳，速度要慢。此法能促进血液循环，提高肌肉的兴奋性。",
            "用食、中、环指指腹或手掌附着于腹部皮肤，做有节律的环形抚摩运动，用劲要缓和自然，速率120次/分。用于胸腹肋按摩，可调节胃肠蠕动，理气和中，消积导滞。",
            "用掌和鱼际、小鱼际部位于腹部皮肤局部进行直线来回摩擦，贴近皮肤，速度均匀，速率为100~120次/分。多用于胸腹腰肢，具有温经通络，消肿止痛，健脾及和胃作用。"
        ]
    },
    {
        "type": 2,
        "message1": "月经期快结束啦，适度活动可缓解经期不适，今日运动推荐：",
        "message2": [
            "冥想30分钟，可放松压力，舒缓子宫肌肉。",
            "保持跪坐姿，双手自然放在身体两侧，上身慢慢往前倾，直到让额头贴于瑜伽垫上，胸部紧贴两腿，保持5个呼吸来回，有放松功效，使子宫得到休息。",
            "保持山式站立，双脚并拢两条腿伸直，从髋部折叠你的身体向下，如果柔韧度比较好，可以将双手扶脚后跟，保持5个呼吸来回，可锻炼腰部柔软度，增加腰部血液循环，有暖宫效果。",
            "步行10000步，或者步行1小时，速度如遛狗速度，可促进血液循环，保护心肺功能。",
            "散步一小时，相当于10000步，可促进血液循环，保护心肺功能。",
            "快走四十分钟，相当于走了3公里，或者快走10000步，可促进血液循环，保护心肺功能。",
            "面壁蹲墙法：首先要求面对着墙壁，然后两脚并拢，身体也要立正，然后双手自然的下垂，身体也要放轻松，内心保持平和，然后下蹲，下蹲的时候要注意体内要用力，头不能够向后边仰望，深呼吸一次后在蹲一次，一次连续蹲三十次，每天蹲两次左右就完全可以了。"
        ]
    },
    {
        "type": 3,
        "message1": "月经终于结束啦，运动强度也要上来喽，所以千万不能偷懒哦~今日运动推荐：",
        "message2": [
            "慢跑四十分钟，相当于4.5公里，可促进血液循环，保护心肺功能。",
            "跑步40分钟及以上，运动时心率维持在（170-年龄）*（50～70）％，可促进血液循环，保护心肺功能。",
            "游泳40分钟，每周3次。水温不宜太凉，可以选择温暖环境下游泳，可促进血液循环，保护心肺功能。",
            "打乒乓球40分钟，每周3次，注意空气环境，防止雾霾天气运动，可促进血液循环，保护心肺功能。",
            "慢跑四十分钟，相当于4.5公里，可促进血液循环，保护心肺功能。",
            "打羽毛球40分钟，心率达到（170-年龄）*（50～70）％，可促进血液循环，保护心肺功能。",
            "瑜伽运动40分钟左右。",
            "普拉提运动40分钟左右。",
            "慢跑四十分钟，相当于4.5公里，可促进血液循环，保护心肺功能。"
        ]
    },
    {
        "type": 4,
        "message1": "进入排卵期了，运动仍然要继续哦，今日运动推荐：",
        "message2": [
            "鹅卵石上行走40分钟，每周3-4次，促进血液循环，增加子宫血容量。",
            "先冥想15分钟左右，再瑜伽40分钟，可放松压力，并促进血液循环，保护心肺功能。",
            "打羽毛球40分钟，心率达到（170-年龄）*（50～70）％，可促进血液循环，保护心肺功能。",
            "打乒乓球40分钟，每周3次，注意空气环境，防止雾霾天气运动，可促进血液循环，保护心肺功能。",
            "骑自行车30分钟，心率达到（170-年龄）*（50～70）％，可促进血液循环，保护心肺功能。",
            "慢跑四十分钟，相当于4.5公里，可促进血液循环，保护心肺功能。",
            "跳绳500个，可促进排卵。"
        ]
    },
    {
        "type": 5,
        "message1": "女性黄体期内运动强度需要维持在中等强度哦，今日运动推荐：",
        "message2": [
            "慢跑四十分钟，相当于4.5公里，可促进血液循环，保护心肺功能。",
            "快走四十分钟，相当于走了3公里，或者快走10000步，可促进血液循环，保护心肺功能。",
            "散步一小时，相当于10000步，可促进血液循环，保护心肺功能。",
            "鹅卵石上行走40分钟，每周3-4次，促进血液循环，增加子宫血容量。",
            "打太极40分钟，不宜大汗淋漓，有修身养性，平复心情，同时增强免疫力的效果。",
            "用手指紧贴头面部皮肤，做上下或左右往返移动，用力适度，轻而不浮，重而不滞。常用于头、面、颈部。可扩张血管、具有开窍镇静清醒头目的功效。",
            "拉背动作：拉背动作可伸展到手臂、后颈部、背部到臀部及双腿后侧，为全身性综合伸展动作，更可舒缓紧绷背部。",
            "保持山式站立，双脚并拢两条腿伸直，从髋部折叠你的身体向下，如果柔韧度比较好，可以将双手扶脚后跟，保持5个呼吸来回，可锻炼腰部柔软度，增加腰部血液循环，有暖宫效果。",
            "冥想30分钟，可放松压力，舒缓子宫肌肉。"
        ]
    }
    ]
};

//返回 “普通轮播提醒”
// datas: 形如 {"homePageNextMenstruation" : 5, "dayOfCycle" : 20, "homePageOvulation" : -9,"periodConfirmOrForcast":5,"homePageMenstruationEnd":5,
//"cycles":[{"menstruationStartForecast":时间戳,"menstruationEndForecast":时间戳,"menstruationStartConfirm":时间戳,"menstruationEndConfirm":时间戳,"bbtRiseDay":时间戳,"ovulationDayForecast":时间戳,"ovulationDayConfirm":时间戳,"cycleEnd":时间戳,"type"：1}]} 的 JSON 对象
//"temperatures":[{"measureTime":时间戳,"temperature":35.6}],
//"lhBeans":[{"lhTime":时间戳,"lhValue":10}]}本周期内试纸列表
function getNormalReminders(datas) {
    var params = JSON.parse(datas);
    var result = {
        data: [{
            message_key: 'period_reminder',
            messages: null,
            messageTitle: '周期提醒',
            iconUrl: iconBaseUrl + 'period_reminder@3x.png',
        }
        ],

    };
    var periodArray = [];
    //经期前一天
    if (1 == params.homePageNextMenstruation && params.periodConfirmOrForcast == 5) {
        var message1 = {
            messageDesc: "孕橙预测明天大姨妈要来访哦，请提前准备好卫生用品~",
            messageId: '1001',
            messageType: 'B',
            validTime: -1,
        };
        periodArray.push(message1);
    }

    //月经第一天
    if (1 == params.dayOfCycle && params.periodConfirmOrForcast == 1) {
        var message6 = {
            messageDesc: "缘分是妙不可言的，新的周期我们一起迎接新的好孕机会！坚持测温，孕橙智能分析帮你解读曲线，找准排卵日。点此查看你的周期智能分析。",
            messageId: '1006',
            messageType: 'B',
            clicked: true,
            highlightText: '点此查看',
            url: analysisAction,
            validTime: -1,
        };
        periodArray.push(message6);
    }

    //当前日期处于大姨妈结束的三天内
    if (params.periodConfirmOrForcast == 2 && params.homePageMenstruationEnd >= -2
        && params.homePageMenstruationEnd <= -1) {
        var message = {
            messageDesc: "为避免错过排卵日，建议大姨妈结束后第三天开始使用排卵试纸监测排卵，孕橙智能排卵试纸，一键拍照识别，锁定排卵更准确，孕橙商城已隆重上线，立即购买>>",
            messageId: '1030',
            messageType: 'B',
            validTime: -1,
            highlightText: '立即购买>>',
            clicked: true,
            url: shopPaperAction,
        };
        periodArray.push(message);
    }

    //月经结束后第三天
    if (params.periodConfirmOrForcast == 2 && params.homePageMenstruationEnd == -3) {
        var message = {
            messageDesc: "你的大姨妈已经结束三天，即将迎来排卵期，为避免错过排卵日，建议从今天开始使用排卵试纸监测排卵，孕橙智能排卵试纸，一键拍照识别，锁定排卵更准确，孕橙商城已隆重上线，立即购买>>",
            messageId: '1031',
            messageType: 'B',
            validTime: -1,
            highlightText: '立即购买>>',
            clicked: true,
            url: shopPaperAction,
        };
        periodArray.push(message);
    }


    //易孕期前一天
    if (6 == params.homePageOvulation && params.periodConfirmOrForcast == 2) {
        var message = {
            messageDesc: "即将进入易孕期，建议隔一天安排一次同房。可以测试LH试纸、观察宫颈粘液用于辅助寻找排卵日。",
            messageId: '1002',
            messageType: 'B',
            validTime: -1,
        };
        periodArray.push(message);
    }

    //易孕期
    if (params.homePageOvulation >= -1 && params.homePageOvulation <= 6
        && (params.periodConfirmOrForcast == 3 || params.periodConfirmOrForcast == 4)) {
        var message = {
            messageDesc: "已进入易孕期，该期间隔日安排一次同房，怀孕几率大大提升哦。",
            messageId: '1005',
            messageType: 'B',
            validTime: -1,
        };

        //排卵日
        if (0 == params.homePageOvulation) {
            message.messageDesc = "今日排卵日，宜安排同房哦。";
            message.messageId = "1004";
        }

        //易孕期第一天
        if (5 == params.homePageOvulation) {
            message.messageDesc = "今日已进入易孕期，为更精准定位排卵日，建议使用排卵试纸监测排卵，及时安排同房，提高怀孕几率，孕橙智能排卵试纸，一键拍照识别，锁定排卵更准确，孕橙商城已隆重上线，立即购买>>";
            message.messageId = '1032';
            message.highlightText = '立即购买>>';
            message.clicked = true;
            message.url = shopPaperAction;
        }
        periodArray.push(message);
    }

    getOvulationPaperPeriodRemind(params, periodArray);
    getSpecialPeriodRemind(params, periodArray);

    result.data[0].messages = periodArray;

    return JSON.stringify(result);
}
//获取排卵试纸有关提醒
function getOvulationPaperPeriodRemind(params, periodArray) {
    var currentTimestamp = parseInt(new Date().getTime() / 1000);
    var currentDate = new Date(currentTimestamp * 1000);
    var currentYMD = timestampToYMD(currentTimestamp, timeflag_00_00_00);
    //判断当天使用过排卵试纸没
    var userPaperToday = false;
    var lhBeans = params.lhBeans;
    var lhLength = lhBeans.length;
    for (var i = 0; i < lhLength; i++) {
        var each = lhBeans[i];
        var eachYMD = timestampToYMD(each.lhTime, timeflag_00_00_00);
        if (currentYMD == eachYMD) {
            userPaperToday = true;
            break;
        }
    }

    //易孕期
    if (params.homePageOvulation >= -1 && params.homePageOvulation <= 6
        && (params.periodConfirmOrForcast == 3 || params.periodConfirmOrForcast == 4)) {
        //易孕期（非第一天）晚上10点后未发现当日使用排卵试纸
        //当天小时
        var currentHour = currentDate.getHours();
        //晚上10点后是否用过排卵试纸
        if (currentHour >= 22 && !userPaperToday) {
            var message = {
                messageDesc: '您现在处于易孕期，为更精准定位排卵日，建议使用排卵试纸监测排卵，测排卵的时间控制在10:00 AM-22:00 PM, 不能用晨尿，并尽量采用每天同一时刻的尿样，孕橙智能排卵试纸，一键拍照识别，锁定排卵更准确，孕橙商城已隆重上线，立即购买>>',
                messageId: '1033',
                messageType: 'B',
                validTime: -1,
                highlightText: '立即购买>>',
                clicked: true,
                url: shopPaperAction,
            };
            periodArray.push(message);
        }
    }
    //当天使用排卵试纸后
    if (userPaperToday) {
        var message = {
            messageDesc: "排卵试纸使用小窍门：测前两小时不要喝水，因稀释了的尿样也会妨碍LH峰值的检测。孕橙智能排卵试纸，一键拍照识别，锁定排卵更准确，孕橙商城已隆重上线，立即购买>>",
            messageId: '1034',
            messageType: 'A',
            validTime: -1,
            highlightText: '立即购买>>',
            clicked: true,
            url: shopPaperAction,
        };
        periodArray.push(message);
    }
}

//获取其它类型周期提醒
function getSpecialPeriodRemind(params, periodArray) {
    //孕期
    var pregnancyPeriodType = 2;
    //哺乳期
    var breastfeedingPeriodType = 3;
    //当前周期是否含有经期推迟情况
    var hasMensDelayCondition = false;
    //当前周期是否为孕期
    var hasPregnancyPeriod = false;
    //当前周期是否为哺乳期
    var hasBreastfeedingPeriod = false;
    //当前日期时间戳
    var currentTimestamp = parseInt(new Date().getTime() / 1000);

    //查找当前日期所处的周期
    var currentInPeriodCycle = null;
    //当前日期所处周期的上一个周期
    var prePeriodCycle = null;
    var cycleLen = params.cycles.length;
    var value_1325347200 = 1325347200;
    for (var i = 0; i < cycleLen; i++) {
        var eachCycle = params.cycles[i];
        var eachCycleStartTime = eachCycle.menstruationStartConfirm > value_1325347200 ?
            eachCycle.menstruationStartConfirm : eachCycle.menstruationStartForecast;
        var startTime = dateToSecond(timestampToYMD(eachCycleStartTime, timeflag_00_00_00));
        var endTime = dateToSecond(timestampToYMD(eachCycle.cycleEnd, timeflag_23_59_59));
        if (currentTimestamp >= startTime && currentTimestamp < endTime) {
            currentInPeriodCycle = eachCycle;
            hasPregnancyPeriod = currentInPeriodCycle.type == pregnancyPeriodType;
            hasBreastfeedingPeriod = currentInPeriodCycle.type == breastfeedingPeriodType;
            break;
        }
    }

    if (currentInPeriodCycle != null && !hasPregnancyPeriod && !hasBreastfeedingPeriod) {
        //查找到当前日期所处周期
        if (currentInPeriodCycle.menstruationStartConfirm > value_1325347200 &&
            currentInPeriodCycle.menstruationStartForecast <= value_1325347200 && currentInPeriodCycle.type == 1) {
            //说明当前周期为确认周期，不存在经期推迟情况
            hasMensDelayCondition = false;
        } else {
            //说明当前周期为预测周期，存在经期推迟情况
            hasMensDelayCondition = true;
        }

        //查找当前周期
        var findCurrentPeriod = false;
        //查找当前周期，相连周期是否也属于预测周期
        var linkCurrentForecastPeriod = null;
        for (var i = cycleLen - 1; i >= 0; i--) {
            var eachCycle = params.cycles[i];
            if (eachCycle.menstruationStartForecast == currentInPeriodCycle.menstruationStartForecast &&
                eachCycle.menstruationStartConfirm == currentInPeriodCycle.menstruationStartConfirm) {
                findCurrentPeriod = true;
                continue;
            }
            if (findCurrentPeriod) {
                if (prePeriodCycle == null) {
                    prePeriodCycle = eachCycle;
                }
                if (eachCycle.menstruationStartForecast > value_1325347200) {
                    linkCurrentForecastPeriod = eachCycle;
                    continue;
                } else {
                    break;
                }
            }
        }
        if (hasMensDelayCondition) {
            //得到相隔当前日期最近的预测周期
            var firstForecastPeriodCycle = (linkCurrentForecastPeriod == null) ? currentInPeriodCycle : linkCurrentForecastPeriod;

            var delayDay = getDiffTimestamp(currentTimestamp * 1000, firstForecastPeriodCycle.menstruationStartForecast * 1000) + 1;

            //经期延迟 经期延迟前2天
            if (delayDay > 0 && delayDay <= 2) {
                var message = {
                    messageDesc: "你的经期已延迟，要坚持测温观测是否有早早孕，也可使用早早孕试纸检测一下哦。如果已经来了大姨妈不要忘了记录哦。点此记录经期>>",
                    messageId: '1021',
                    messageType: 'B',
                    validTime: -1,
                    clicked: true,
                    highlightText: '点此记录经期>>',
                    url: recordMensAction,
                };
                periodArray.push(message);
            }

            //经期延迟 经期延迟三天及以后
            if (delayDay >= 3) {
                var message = {
                    messageDesc: null,
                    messageId: '1022',
                    messageType: 'B',
                    validTime: -1,
                    clicked: true,
                    highlightText: '点此记录经期>>',
                    url: recordMensAction,
                };
                message.messageDesc = "你的经期已延迟" + delayDay + "天了，有可能已经怀孕了哦，使用早孕试纸检测了吗？如果已经来了大姨妈不要忘了记录哦。点此记录经期>>";
                periodArray.push(message);
            }

        }

    }

    //当前日期所处周期不存在经期推迟情况,开始分析上一个周期黄体情况
    if (hasMensDelayCondition == false && !hasPregnancyPeriod && !hasBreastfeedingPeriod) {
        //计算上一个周期黄体期长度
        var prePeroidLutealLen = 0;
        //计算上一个周期是否出现周期体温无双相
        var noTemperatureRisingDetected = false;
        //上一个周期不是孕期不是哺乳期且当前日期处于经期前2天
        if (prePeriodCycle != null && prePeriodCycle.type != pregnancyPeriodType
            && prePeriodCycle.type != breastfeedingPeriodType
            && (1 == params.dayOfCycle || 2 == params.dayOfCycle)) {
            var ovulationTimestamp = prePeriodCycle.ovulationDayConfirm > 0 ? prePeriodCycle.ovulationDayConfirm : prePeriodCycle.ovulationDayForecast;
            prePeroidLutealLen = getDiffTimestamp(prePeriodCycle.cycleEnd * 1000, ovulationTimestamp * 1000) - 1;

            //上一个周期未出现排卵日,将上一个周期的黄体期设置为-1
            if (ovulationTimestamp == 0) {
                prePeroidLutealLen = -1;
            }
            //上一个周期周期开始截至00:00
            var prePeriodCycleStart = prePeriodCycle.menstruationStartConfirm > value_1325347200 ?
                prePeriodCycle.menstruationStartConfirm : prePeriodCycle.menstruationStartForecast;

            //上一个周期周期结束截至当天23:59:59
            var prePeriodCycleEnd = prePeriodCycle.cycleEnd;
            ////"temperatures":[{"measureTime":时间戳,"temperature":35.6}]
            var temperatureDatas = params.temperatures;
            var temperatureLen = temperatureDatas.length;
            var periodTemperaturesCount = 0;
            for (i = 0; i < temperatureLen; i++) {
                var temperatureData = temperatureDatas[i];
                var startTime = dateToSecond(timestampToYMD(prePeriodCycleStart, timeflag_00_00_00));
                var endTime = dateToSecond(timestampToYMD(prePeriodCycleEnd, timeflag_23_59_59));
                if (temperatureData.measureTime >= startTime && temperatureData.measureTime < endTime) {
                    periodTemperaturesCount++;
                }
            }

            noTemperatureRisingDetected = prePeriodCycle.bbtRiseDay <= value_1325347200;

            //黄体结束后月经前2天  黄体期过长（大于16天）
            if (prePeroidLutealLen > 16) {
                var message = {
                    messageDesc: null,
                    messageId: '1023',
                    messageType: 'B',
                    validTime: -1,
                    clicked: true,
                    highlightText: '立即咨询>>',
                    url: consultAction,
                };
                var percent = 99;
                if (prePeroidLutealLen == 17) {
                    percent = 87.13;
                } else if (prePeroidLutealLen == 18) {
                    percent = 89.14;
                } else if (prePeroidLutealLen == 19) {
                    percent = 91.15;
                } else if (prePeroidLutealLen == 20) {
                    percent = 93.16;
                } else if (prePeroidLutealLen == 21) {
                    percent = 95.17;
                }
                message.messageDesc = "您的黄体期长度过长，长于" + percent + "%的同龄孕橙用户，建议咨询备孕教练或医生哦~立即咨询>>";
                periodArray.push(message);
            }

            //黄体结束后月经前2天  黄体期过短（小于10天）
            if (prePeroidLutealLen > 0 && prePeroidLutealLen < 10) {
                var message = {
                    messageDesc: null,
                    messageId: '1024',
                    messageType: 'B',
                    validTime: -1,
                    clicked: true,
                    highlightText: '立即咨询>>',
                    url: consultAction,
                };
                var percent = 99;
                if (prePeroidLutealLen == 9) {
                    percent = 87.18;
                } else if (prePeroidLutealLen == 8) {
                    percent = 93.19;
                } else if (prePeroidLutealLen == 7) {
                    percent = 95.21;
                }
                message.messageDesc = "您的黄体期只有" + prePeroidLutealLen + "天，小于" + percent + "%的同龄孕橙用户，建议咨询备孕教练或医生哦~ 立即咨询>>";
                periodArray.push(message);
            }

            //黄体结束后月经前2天 黄体期无双相
            if (noTemperatureRisingDetected) {
                var message = {
                    messageDesc: null,
                    messageId: '1025',
                    messageType: 'B',
                    validTime: -1,
                    clicked: false,
                    highlightText: '',
                    url: consultAction,
                };
                if (periodTemperaturesCount <= 20) {
                    message.messageDesc = "刚刚过去的周期因为体温数据不足，无法从体温曲线上定位排卵日，建议从本周期开始，坚持记录体温，快速锁定排卵日，早日好孕。";
                } else {
                    message.clicked = true;
                    message.highlightText = '立即咨询>>';
                    message.messageDesc = "刚刚过去的周期从体温曲线上看无双相，疑似无排卵，请在确保本周期体温数据无误的情况下通过记录宫颈黏液或结合排卵试纸找到排卵日，如果多个周期提示疑似无排卵，建议咨询备孕教练或医生，查明原因，排除病理性的病因~ 立即咨询>>";
                }
                periodArray.push(message);
            }
        }
    }

    //当前日期所处周期不存在经期推迟情况,开始分析本周期经期异常情况
    if (hasMensDelayCondition == false && !hasPregnancyPeriod && !hasBreastfeedingPeriod && false) {
        //计算本次周期经期长度
        var currentMensLen = 0;
        if (currentInPeriodCycle != null) {
            currentMensLen = getDiffTimestamp(currentInPeriodCycle.menstruationEndConfirm * 1000,
                currentInPeriodCycle.menstruationStartConfirm * 1000) + 1;
        }

        //计算最近最多12个月的经期记录平均数为平均周期天数
        var averageMensLen = 5;
        var maxCycle = 12;
        var countCycle = 0;
        var sumMensLen = 0;
        var mensArray = [];
        for (var i = cycleLen - 1; i >= 0; i--) {
            var eachCycle = params.cycles[i];
            if (eachCycle.type != pregnancyPeriodType && eachCycle.menstruationStartConfirm > 0) {
                if (countCycle <= maxCycle) {
                    countCycle = countCycle + 1;
                    var eachMensLenInCycle = getDiffTimestamp(eachCycle.menstruationEndConfirm * 1000,
                        eachCycle.menstruationStartConfirm * 1000) + 1;
                    mensArray.push(eachMensLenInCycle);
                    sumMensLen = sumMensLen + eachMensLenInCycle;
                } else {
                    break;
                }
            }
        }
        averageMensLen = parseInt(sumMensLen / countCycle);
        //（月经结束后前三天）
        if ((params.dayOfCycle - currentMensLen) >= 1 && (params.dayOfCycle - currentMensLen) <= 3) {
            //经期是否稳定
            var mensStable = Math.max(mensArray) - Math.min(mensArray) <= 2;
            //当前周期经期长度与平均周期长度差值
            var diff = Math.abs(currentMensLen - averageMensLen);
            if (cycleLen == 1) {
                //第一次记录经期
                if (diff < 2) {
                    //经期过短
                    message.messageDesc = "本次经期过短，小于你的平均经期天数" + averageMensLen + "天，请继续坚持记录，以后经期长度恢复正常则不影响备孕，如果初始经期天数记录有误，请点击此处修正；如果多次出现经期过长或过短提示，建议咨询备孕教练或医生，查明原因，排除病理性的病因~";
                } else {
                    //经期过长
                    message.messageDesc = "本次经期过长，大于你的平均经期天数" + averageMensLen + "天，请继续坚持记录，以后经期长度恢复正常则不影响备孕，如果初始经期天数记录有误，请点击此处修正；如果多次出现经期过长或过短提示，建议咨询备孕教练或医生，查明原因，排除病理性的病因~";
                }
                periodArray.push(message);

            } else {
                //非第一次记录经期
                var message = {
                    messageDesc: null,
                    messageId: '005',
                    messageType: 'B',
                    validTime: -1,
                    clicked: true,
                    highlightText: '立即咨询>>',
                    url: consultAction,
                };
                if (diff < 2) {
                    //经期过短
                    message.messageDesc = "本次经期过短，请继续坚持记录，如果以后经期长度恢复正常则不影响备孕，如果多次出现经期过长或过短，建议咨询备孕教练或医生，查明原因，排除病理性的病因~ 立即咨询>>";
                } else {
                    //经期过长
                    message.messageDesc = "本次经期过长，请继续坚持记录，如果以后经期长度恢复正常则不影响备孕，如果多次出现经期过长或过短，建议咨询备孕教练或医生，查明原因，排除病理性的病因~立即咨询>>";
                }
                periodArray.push(message);
            }

            if (mensStable == false) {
                var message = {
                    messageDesc: null,
                    messageId: '005',
                    messageType: 'B',
                    validTime: -1,
                    clicked: true,
                    highlightText: '立即咨询>>',
                    url: consultAction,
                };
                //（最近三次经期记录两两相隔小于等于2天，最大值-最小值<=2天）
                if (mensArray.length >= 3) {
                    var linkPeriodMensDiffResult = false;
                    linkPeriodMensDiffResult = Math.abs(mensArray[0] - mensArray[1]);
                    linkPeriodMensDiffResult = Math.abs(mensArray[1] - mensArray[2]);
                    if (linkPeriodMensDiffResult == false) {
                        message.messageDesc = "你的记录显示经期长度不稳定，请继续坚持记录，如果多次出现经期不稳定提示，建议咨询备孕教练或医生，查明原因，排除病理性的病因~ 立即咨询>>";
                        periodArray.push(message);
                    } else {
                        message.messageDesc = "你的记录显示经期长度不稳定，但是最近的记录显示经期开始逐步稳定起来，请继续坚持记录，如果再次出现经期不稳定提示，建议咨询备孕教练或医生，查明原因，排除病理性的病因~ 立即咨询>>";
                        periodArray.push(message);
                    }

                } else {
                    message.messageDesc = "你的记录显示经期长度不稳定，请继续坚持记录，如果多次出现经期不稳定提示，建议咨询备孕教练或医生，查明原因，排除病理性的病因~ 立即咨询>>";
                    periodArray.push(message);
                }


            }

        }

    }

}

//运动和饮食
//{"homePageNextMenstruation" : 5, "dayOfCycle" : 20, "homePageOvulation" : -9,"periodConfirmOrForcast":5}
function getFoodSportReminds(datas) {
    var params = JSON.parse(datas);
    var result = {
        data: [
            {
                message_key: 'food_reminder',
                messages: null,
                messageTitle: '饮食推荐',
                iconUrl: iconBaseUrl + 'food_reminder@3x.png',
            },
            {
                message_key: 'sport_reminder',
                messages: null,
                messageTitle: '运动推荐',
                iconUrl: iconBaseUrl + 'sport_reminder@3x.png',
            },
        ],

    };
    var foodArray = [];
    var sportArray = [];
    var messageFood;
    var messageSport;
    //经期
    if (params.periodConfirmOrForcast == 1) {
        //运动与饮食经期第1-3天
        if (params.dayOfCycle >= 1 && params.dayOfCycle <= 3) {
            messageFood = getFoodMessage(1, params.dayOfCycle);
            foodArray.push(messageFood);
            messageSport = getSportMessage(1, params.dayOfCycle);
            sportArray.push(messageSport);
        }
        //运动与饮食经期第1-3天经期第4天至以后
        if (params.dayOfCycle >= 4) {
            messageFood = getFoodMessage(2, params.dayOfCycle);
            foodArray.push(messageFood);
            messageSport = getSportMessage(2, params.dayOfCycle);
            sportArray.push(messageSport);
        }
    } else if (params.periodConfirmOrForcast == 2 || params.periodConfirmOrForcast == 3 || params.periodConfirmOrForcast == 4) {
        //卵泡期 排卵期
        if (params.homePageOvulation >= -1 && params.homePageOvulation <= 5) {
            //排卵期易孕期
            messageFood = getFoodMessage(4, params.dayOfCycle);
            foodArray.push(messageFood);
            messageSport = getSportMessage(4, params.dayOfCycle);
            sportArray.push(messageSport);
        } else {
            //卵泡期
            messageFood = getFoodMessage(3, params.dayOfCycle);
            foodArray.push(messageFood);
            messageSport = getSportMessage(3, params.dayOfCycle);
            sportArray.push(messageSport);
        }

    } else if (params.periodConfirmOrForcast == 5) {
        //黄体期
        messageFood = getFoodMessage(5, params.dayOfCycle);
        foodArray.push(messageFood);
        messageSport = getSportMessage(5, params.dayOfCycle);
        sportArray.push(messageSport);
    }

    result.data[0].messages = foodArray;
    result.data[1].messages = sportArray;

    return JSON.stringify(result);

}



//返回 “即时提醒”
// datas: JSON 对象，示例如下：
//  1. {"type" : "manualOvulaionDay", "value" : 1}。说明：用户手动标记排卵日，1 表示标记，0 表示取消标记。
//  2. {"type" : "uploadTemperature", "value" : {"todayTempStr" : "36.58℃", "temps" : [{"date" : "时间戳秒", "bbt" : 36.54}, {"date" : "时间戳秒", "bbt" : 36.58}]}}。说明：用户输入 “今日体温”，temps 为本周期体温列表按时间顺序排列，体温数据统一按照 ℃ 传入
//  3. {"type" : "uploadTemperature", "value" ：null} 删除当天基础体温
function getIMReminders(datas) {
    var params = JSON.parse(datas);
    var result = {
        data: [{
            message_key: null,
            messages: null,
            messageTitle: '',
            iconUrl: '',
        }],

    };

    var manualOvulationArray = [];
    var bbtUploadRemindArray = [];
    //手动标记排卵日
    if (params.type == manualOvulaionDay) {
        var message = {
            messageDeleted: false,
            messageType: 'A',
            messageId: '1003',
            messageDesc: "刚刚标记了今天作为“排卵日”，建议今明2天各同房一次哦",
            validTime: 1,
        };

        if (params.value == 1) {
            //设置排卵日/取消排卵日不设置值
            manualOvulationArray.push(message);
        }
        result.data[0].message_key = 'manual_ovu_day';
        result.data[0].messageTitle = '排卵日提醒';
        result.data[0].iconUrl = iconBaseUrl + 'manual_ovu_day@3x.png';
        result.data[0].messages = manualOvulationArray;

    } else if (params.type == uploadTemperature) {
        if (params.value == null) {
            result.data[0].message_key = 'bbt_upload_reminder';
            result.data[0].messageTitle = '基础体温';
            result.data[0].iconUrl = iconBaseUrl + 'bbt_upload_reminder@3x.png';
            result.data[0].messages = bbtUploadRemindArray;
        } else {
            //上传今日体温
            var temps = params.value.temps;
            var todayTempStr = params.value.todayTempStr;
            getTempFluctuationReminder(temps, bbtUploadRemindArray, todayTempStr);
            getTempValueReminder(temps, bbtUploadRemindArray, todayTempStr);
            result.data[0].message_key = 'bbt_upload_reminder';
            result.data[0].messageTitle = '基础体温';
            result.data[0].iconUrl = iconBaseUrl + 'bbt_upload_reminder@3x.png';
            result.data[0].messages = bbtUploadRemindArray;
        }
    }

    return JSON.stringify(result);
}

//返回 “体温波动” 提醒
// datas: 形如 [{"date" : "20190501", "bbt" : 36.54}, {"date" : "20190502", "bbt" : 36.58}] 的体温列表，体温数据统一按照 ℃ 传入
function getTempFluctuationReminder(datas, dataArray, todayTempStr) {
    var message = {
        messageDesc: null,
        messageDeleted: false,
        messageId: '1009',
        messageType: 'A',
        validTime: -1,
    };

    var len = datas.length;
    // 如果用户 “删除体温”，则删除本提醒
    if (tempFluctuationCount >= len) {
        return;
    }

    var preTemp;
    var fluCount = 0;
    var curTemp;
    var i;
    // 如果累加体温波动次数大于 tempFluctuationCount，则认为波动较大
    for (i = len - 1; i >= 1; i--) {
        curTemp = datas[i].bbt;
        preTemp = datas[i - 1].bbt;
        if (Math.abs(curTemp - preTemp) > 0.3) {
            fluCount++;
            if (fluCount >= tempFluctuationCount) {
                break;
            }
        } else {
            // 如果 "今天" 相比于 "昨天" 没有波动，则不提醒
            if ((len - 1) == i) {
                break;
            }
        }
    }
    if (fluCount < tempFluctuationCount) {
        message.messageDesc = "今日基础体温" + todayTempStr + "，比较稳定，请继续坚持测量。";
    } else {
        message.messageDesc = "今日基础体温" + todayTempStr + "，体温波动有点大，请继续坚持测量。";
    }
    message.messageId = '009';
    dataArray.push(message);
}

//返回 “体温数值” 相关提醒，比如 过高、稍高、过低等 非正常测温
// datas: 形如 {"date" : "20190501", "bbt" : 36.54} 的 JSON 对象
function getTempValueReminder(datas, dataArray, todayTempStr) {

    var len = datas.length;
    if (len == 0) {
        return;
    }
    var todayData = datas[len - 1];
    var todayTimestamp = todayData.date;
    var todayBBT = todayData.bbt;
    var todayDate = new Date(todayTimestamp * 1000);
    //获取当前日(1-31)
    var todayDay = todayDate.getDate();
    //当天小时
    var todayHour = todayDate.getHours();
    //当天分
    var todayMinute = todayDate.getMinutes();

    var yestodayData = 0;
    var yestodayTimestamp = 0;
    //每日测温间隔超过2小时
    var yestodayHour = todayHour;
    var yestodayMinute = todayMinute;
    if (len >= 2) {
        yestodayData = datas[len - 2];
        yestodayTimestamp = yestodayData.date;
        var yestodayDate = new Date(yestodayTimestamp * 1000);
        yestodayHour = yestodayDate.getHours();
        yestodayMinute = yestodayDate.getMinutes();
    }

    var todayTimeDesc = prefixInteger(todayHour, 2) + ":" + prefixInteger(todayMinute, 2);
    var yestodayTimeDesc = prefixInteger(yestodayHour, 2) + ":" + prefixInteger(yestodayMinute, 2);

    //过高
    if (todayBBT >= minHighTemperature) {
        var message = {
            messageDesc: null,
            messageId: '1010',
            messageType: 'A',
            validTime: -1,
        };
        message.messageDesc = "你今日的基础体温过高，如果有导致体温变动的异常因素，需要在备孕中尽量避免，要注意休息，照顾好自己哦！";
        message.messageId = "010";
        dataArray.push(message);
    }

    //过低
    if (todayBBT < minNormalTemperature) {
        var message = {
            messageDesc: null,
            messageId: '1012',
            messageType: 'A',
            clicked: true,
            highlightText: '点击查看',
            url: measureTemperatureHelpAction,
            validTime: -1,

        };
        message.messageDesc = "你今日的基础体温过低，是不是测量姿势不标准或者嘴巴没有闭紧呢？（点击查看正确测温姿势）如果有皮肤苍白冰冷、轻度颤抖、心跳呼吸减慢、尿量减少、意识障碍等症状，请及时到医院就诊。";
        message.messageId = "011";
        dataArray.push(message);
    }

    //稍高
    if (todayBBT > maxNormalTemperature && todayBBT < minHighTemperature) {
        var message = {
            messageDesc: null,
            messageId: '1011',
            messageType: 'A',
            validTime: -1,
        };
        message.messageDesc = "你今日的基础体温稍微有点高，如果有导致体温变动的异常因素，需要在备孕中尽量避免，要注意休息，照顾好自己哦！";
        message.messageId = "012";
        dataArray.push(message);
    }

    //非正常时间测温
    if (todayHour < 4 || todayHour > 10) {
        var message = {
            messageDesc: null,
            messageId: '1013',
            messageType: 'A',
            validTime: -1,
        };
        message.messageDesc = "今日的测温时间是" + todayTimeDesc + "，此时的体温数据不是基础体温哦，明天请在4-10点之间测量体温。";
        message.messageId = "013";
        dataArray.push(message);
    }

    //每日测温间隔超过2小时
    if (len >= 2) {
        //假如今天为15号，判断昨天是否为真正的14号
        var temDate = new Date((yestodayTimestamp + 24 * 3600) * 1000);
        var isRightDate = temDate.getDate() == todayDay;
        if (Math.abs(todayHour - yestodayHour) >= 2 && isRightDate) {
            var message = {
                messageDesc: null,
                messageId: '1014',
                messageType: 'A',
                validTime: -1,
            };
            message.messageDesc = "今日的测温时间是" + todayTimeDesc + "，对比昨日测温时间" + yestodayTimeDesc +
                "，波动幅度超过2小时，影响数据有效性，建议尽量在每天同一时间测量，波动尽量不超过2小时哦！";
            message.messageId = "014";
            dataArray.push(message);
        }
    }

}


function getFoodMessage(type) {
    var message = {
        messageDesc: null,
        messageId: '1007',
        messageType: 'B',
        clicked: true,
        highlightText: '今日饮食推荐',
        validTime: -1,
        type: -1
    };
    var foods = foodObj.food;
    for (var i = foods.length - 1; i >= 0; i--) {
        var item = foods[i];
        if (item.type == type) {
            var contents = item.message2;
            var contentsLen = contents.length;
            var randomIdx = getRandomInt(contentsLen);
            message.messageDesc = item.message1 + contents[randomIdx];
            message.messageId = "007";
            message.type = type;
            break;
        }
    }
    return message;
}

function getSportMessage(type) {
    var message = {
        messageDesc: null,
        messageId: '1008',
        messageType: 'B',
        clicked: true,
        highlightText: '今日运动推荐',
        validTime: -1,
        type: -1
    };
    var sports = sportObj.motion;
    for (var i = sports.length - 1; i >= 0; i--) {
        var item = sports[i];
        if (item.type == type) {
            var contents = item.message2;
            var contentsLen = contents.length;
            var randomIdx = getRandomInt(contentsLen);
            message.messageDesc = item.message1 + contents[randomIdx];
            message.messageId = "008";
            message.type = type;
            break;
        }
    }
    return message;
}


//排卵试纸分析
//{"datas":[{"lhTime":1557838228,"lhValue":65},{"lhTime":1557924628,"lhValue":45},{"lhTime":1557924628,"lhValue":25}]}');
function getOvulationPaperRemind(datas) {
    var result = {
        data: [{
            message_key: 'ovulation_paper_reminder',
            messages: null,
            messageTitle: '排卵试纸',
            iconUrl: iconBaseUrl + 'ovulation_paper_reminder@3x.png',
        },
        ],

    };
    var dataArray = [];
    var analysisData = analysisOvulationPaper(datas);
    dataArray.push(analysisData);
    result.data[0].messages = dataArray;
    return JSON.stringify(result);
}



//{"datas":[{"lhTime":1557838228,"lhValue":65},{"lhTime":1557924628,"lhValue":45},{"lhTime":1557924628,"lhValue":25}]}');
function analysisOvulationPaper(datas) {

    var result = {
        recordDate: null,
        messageDesc: null,
        messageDesc1: null,
        lhov: null,
        highlightText: null,
        validTime: -1,
        messageType: 'A',
    };

    var params = JSON.parse(datas);

    var datas = params.datas;

    var len = datas.length;

    if (len >= 1) {
        //获取周期里最后一天试纸信息
        var referenceDate = datas[len - 1].lhTime;
        var referenceLh = datas[len - 1].lhValue;

        var messageDate = new Date(referenceDate * 1000);
        //当天小时
        var messageHour = messageDate.getHours();
        //当天分
        var messageMinute = messageDate.getMinutes();

        var messageTimeDesc = prefixInteger(messageHour, 2) + ":" + prefixInteger(messageMinute, 2);

        //若数据集合中所有数据x<10
        var condition1 = false;

        //若数据集合中所有数据x<10
        var condition2 = false;

        //若数据集合中所有数据x<25
        var condition3 = false;

        //若数据集合中所有数据x<45
        var condition4 = false;

        //若数据集合中所有数据出现过45/65
        var condition5 = false;

        //若数据集合中所有数据出现过25/45/65
        var condition6 = false;

        //是否发现峰值
        var findPeak = false;

        if (len >= 2) {

            for (var i = 0; i < len - 1; i++) {

                var item = datas[i];

                if (item.lhValue <= 10) {
                    condition1 = true;
                } else {
                    condition1 = false;
                }

                if (item.lhValue <= 10) {
                    condition2 = true;
                } else {
                    condition2 = false;
                }

                if (item.lhValue <= 25) {
                    condition3 = true;
                } else {
                    condition3 = false;
                }

                if (item.lhValue <= 45) {
                    condition4 = true;
                } else {
                    condition4 = false;
                }


                if (item.lhValue >= 45 && item.lhValue <= 65) {
                    condition5 = true;
                }

                if (item.lhValue >= 25 && item.lhValue <= 65) {
                    condition6 = true;
                }
            }

        }

        var peakData = getPeak(datas);

        if ((condition1 || len == 1) && referenceLh < 10) {
            //若周期最后一个数据x<10
            //result.lhValue = referenceLh;
            result.recordDate = referenceDate;
            result.messageDesc = "今日" + messageTimeDesc + "试纸检测阴性：";
            result.highlightText = messageTimeDesc;
            result.messageId = '1015';
            //result.lhpeak = peakData.lhpeak;
            result.lhov = peakData.lhov;
            result.messageDesc1 = "暂时无排卵，为避免错过排卵期，请明天同一时间再次测量。";
        }

        if ((condition2 || len == 1) && referenceLh >= 10 && referenceLh < 25) {
            //若周期最后一个数据10<=x<25
            //result.lhValue = 10;
            result.recordDate = referenceDate;
            result.messageDesc = "今日" + messageTimeDesc + "试纸检测阴性：";
            result.highlightText = messageTimeDesc;
            result.messageId = '1016';
            //result.lhpeak = peakData.lhpeak;
            result.lhov = peakData.lhov;
            result.messageDesc1 = "LH尚未出现峰值，建议隔天同房一次，并明天同一时间再次测量。";
        }


        if ((condition3 || len == 1) && referenceLh >= 25 && referenceLh < 45) {
            //若周期最后一个数据25<=x<45
            //result.lhValue = 25;
            result.recordDate = referenceDate;
            result.messageDesc = "今日" + messageTimeDesc + "试纸检测阳性：";
            result.highlightText = messageTimeDesc;
            result.messageId = '1017';
            //result.lhpeak = peakData.lhpeak;
            result.lhov = peakData.lhov;
            result.messageDesc1 = "即将排卵，建议同房一次，并在4小时后再次测量。";
            result.validTime = 4;
        }

        if ((condition4 || len == 1) && referenceLh >= 45 && referenceLh <= 65) {
            //若周期最后一个数据45<=x<=65
            //result.lhValue = referenceLh;
            result.recordDate = referenceDate;
            result.messageDesc = "今日" + messageTimeDesc + "试纸检测阳性：";
            result.highlightText = messageTimeDesc;
            result.messageId = '1018';
            //result.lhpeak = peakData.lhpeak;
            result.lhov = peakData.lhov;
            result.messageDesc1 = "已出现LH峰值，有可能在24－48小时内排卵。建议同房一次，并在4小时后再次测量。";
            result.validTime = 4;
        }


        if ((condition5 || len == 1) && referenceLh >= 25 && referenceLh < 45) {
            //若周期最后一个数据25<=x<45 且 之前数据出现过45/65
            //result.lhValue = 25;
            result.recordDate = referenceDate;
            result.messageDesc = "今日" + messageTimeDesc + "试纸检测阳性：";
            result.highlightText = messageTimeDesc;
            result.messageId = '1019';
            //result.lhpeak = peakData.lhpeak;
            result.lhov = peakData.lhov;
            result.messageDesc1 = "准备排卵，建议同房一次，并在4小时后再次测量。";
            result.validTime = 4;
        }

        if (condition6 && referenceLh < 25) {
            //若周期最后一个数据x<25 且 之前数据出现过25/45/65
            //result.lhValue = referenceLh;
            result.recordDate = referenceDate;
            result.messageDesc = "今日" + messageTimeDesc + "试纸检测阳性：";
            result.highlightText = messageTimeDesc;
            result.messageId = '1020';
            //result.lhpeak = peakData.lhpeak;
            result.lhov = peakData.lhov;
            result.messageDesc1 = "推测已排卵，建议同房一次，更准确信息请参考其他测试结果。";
        }


    }

    return result;

}



//计算峰值
function getPeak(datas) {
    var lhTime;
    var result = {
        lhpeak: null,
        lhov: null,
    };
    var len = datas.length;

    //优先选从65到45，判断为峰值日；如果没有65，从45到25，也算峰值日；排卵日为峰值日+1；
    //如果有多个峰值日，取第一个峰值日为标准的峰值日；但在算法分析中给出多个峰值日的分析结果

    for (var i = len - 1; i >= 0; i--) {
        var item = datas[i];
        if (item.lhValue == 65) {
            lhTime = item.lhTime;
            if (i != len - 1) {
                result.lhpeak = timestampToTime(lhTime);
                result.lhov = timestampToTime(lhTime + 24 * 3600);
                return result;
            } else {
                break;
            }
        }


    }

    for (var j = len - 1; j >= 0; j--) {
        var item = datas[j];
        if (item.lhValue == 45) {
            lhTime = item.lhTime;
            if (j != len - 1) {
                result.lhpeak = timestampToTime(lhTime);
                result.lhov = timestampToTime(lhTime + 24 * 3600);
                return result;
            } else {
                break;
            }
        }

    }

    return result;


}


// 返回排卵日变化即时反馈
// datas: JSON 对象，示例如下：
//{"type":1,"oldOvulationDay":"时间戳秒","newOvulationDay":"时间戳秒"}
// type :1-排卵试纸上传/删除/编辑造成排卵日变更
//      :2-手动记录排卵日
//      :3-添加或删除基础体温造成排卵日变更
//      :4-历史经期的记录或删除造成排卵日变更
//oldOvulationDay:周期内排卵日时间戳  newOvulationDay周期内排卵日时间戳  nextOvulationDay下个周期排卵日时间戳
function ovulationDayChangeReminders(datas) {
    var params = JSON.parse(datas);
    var result = {
        data: [{
            message_key: null,
            messages: null,
            messageTitle: '',
            iconUrl: '',
        }],

    };

    var oldOvuDate = timestampToYMD(params.oldOvulationDay, timeflag_00_00_00);
    var newOvuDate = timestampToYMD(params.newOvulationDay, timeflag_00_00_00);

    if (oldOvuDate == newOvuDate) {
        return;
    }

    var ovulationArray = [];

    //排卵试纸上传/删除/编辑造成排卵日变更
    if (params.type == 1) {
        var message = {
            messageDesc: null,
            messageId: '1026',
            messageType: 'A',
            clicked: false,
            highlightText: null,
            url: null,
            validTime: -1,
        };

        var ovulationDate = new Date(params.newOvulationDay * 1000);
        var month = ovulationDate.getMonth() + 1;
        //获取当前日(1-31)
        var day = ovulationDate.getDate();
        var tempResult = month + '月' + day + '日';
        message.messageDesc = '您今日变更了你的排卵试纸数据，根据试纸结果，您更精准的排卵日为：' + tempResult + '，请提前做好准备哦。\n小提示：预测排卵日是根据您提供的体温数据、测温时间、经期和周期数据，还有上传的排卵试纸与宫颈黏液信息综合推算得出，数据越全，记录周期越多，我们的推算越精准哦。所以，一定要坚持记录哦。';
        ovulationArray.push(message);
    }

    //手动记录排卵日
    if (params.type == 2) {
        var message = {
            messageDesc: null,
            messageId: '1027',
            messageType: 'A',
            clicked: false,
            highlightText: null,
            url: null,
            validTime: -1,
        };
        var ovulationDate = new Date(params.newOvulationDay * 1000);
        var month = ovulationDate.getMonth() + 1;
        //获取当前日(1-31)
        var day = ovulationDate.getDate();
        var tempResult = month + '月' + day + '日';
        message.messageDesc = '您今日手动变更了您的排卵日信息，根据算法您最新的算法排卵日为：' + tempResult + '，记得提前做好准备哦。\n小提示：预测排卵日是根据您提供的体温数据、测温时间、经期和周期数据，还有上传的排卵试纸与宫颈黏液信息综合推算得出，数据越全，记录周期越多，我们的推算越精准哦。所以，一定要坚持记录哦。';
        ovulationArray.push(message);
    }

    //添加或删除基础体温造成排卵日变更
    if (params.type == 3) {
        var message = {
            messageDesc: null,
            messageId: '1028',
            messageType: 'A',
            clicked: false,
            highlightText: null,
            url: null,
            validTime: -1,
        };
        var ovulationDate = new Date(params.newOvulationDay * 1000);
        var month = ovulationDate.getMonth() + 1;
        //获取当前日(1-31)
        var day = ovulationDate.getDate();
        var tempResult = month + '月' + day + '日';
        message.messageDesc = '您今日体温数据有更新，根据您最新的体温数据，我们帮您的推算的排卵日变更到了' + tempResult + '，记得提前做好准备哦。\n小提示：预测排卵日是根据您提供的体温数据、测温时间、经期和周期数据，还有上传的排卵试纸与宫颈黏液信息综合推算得出，数据越全，记录周期越多，我们的推算越精准哦。所以，一定要坚持记录哦。';
        ovulationArray.push(message);
    }

    //历史经期的记录或删除造成排卵日变更
    if (params.type == 4) {
        var message = {
            messageDesc: null,
            messageId: '1029',
            messageType: 'A',
            clicked: false,
            highlightText: null,
            url: null,
            validTime: -1,
        };
        var ovulationDate = new Date(params.newOvulationDay * 1000);
        var month = ovulationDate.getMonth() + 1;
        //获取当前日(1-31)
        var day = ovulationDate.getDate();
        var tempResult = month + '月' + day + '日';
        message.messageDesc = '您今日更新了您的经期信息，根据您最新的周期经期数据，我们帮您推算的排卵日变更到了' + tempResult + '，记得提前做好准备哦。\n小提示：预测排卵日是根据您提供的体温数据、测温时间、经期和周期数据，还有上传的排卵试纸与宫颈黏液信息综合推算得出，数据越全，记录周期越多，我们的推算越精准哦。所以，一定要坚持记录哦。';
        ovulationArray.push(message);
    }

    result.data[0].message_key = 'ovulation_day_change_reminder';
    result.data[0].messageTitle = '排卵日提醒';
    result.data[0].iconUrl = iconBaseUrl + 'manual_ovu_day@3x.png';
    result.data[0].messages = ovulationArray;

    return JSON.stringify(result);
}

//备孕营
// datas: JSON 对象，示例如下：
//{"conceiveTime":时间戳,
//"cycles":[{"menstruationStartForecast":时间戳,"menstruationEndForecast":时间戳,"menstruationStartConfirm":时间戳,"menstruationEndConfirm":时间戳,"bbtRiseDay":时间戳,"ovulationDayForecast":时间戳,"ovulationDayConfirm":时间戳,"cycleEnd":时间戳,"type"：1}]} 的 JSON 对象
//conceiveTime:用户备孕开始时间 
function pregnantCampRemind(datas) {
    var params = JSON.parse(datas);
    var result = {
        data: [{
            message_key: 'pregnant_camp_reminder',
            messages: null,
            messageTitle: '备孕助手',
            iconUrl: iconBaseUrl + 'icon_service@3x.png',
        }],

    };
    var currentTimestamp = parseInt(new Date().getTime() / 1000);

    var diff = getDiffTimestamp(currentTimestamp * 1000, params.conceiveTime * 1000);

    var currentTimeHasMens = false;

    var cycleLen = params.cycles.length;
    var value_1325347200 = 1325347200;
    for (var i = 0; i < cycleLen; i++) {
        var eachCycle = params.cycles[i];
        var eachCycleStartTime = eachCycle.menstruationStartConfirm > value_1325347200 ?
            eachCycle.menstruationStartConfirm : eachCycle.menstruationStartForecast;

        var eachMenstruationEnd = eachCycle.menstruationEndConfirm > value_1325347200 ?
            eachCycle.menstruationEndConfirm : eachCycle.menstruationEndForecast;

        var startTime = dateToSecond(timestampToYMD(eachCycleStartTime, timeflag_00_00_00));
        var endTime = dateToSecond(timestampToYMD(eachMenstruationEnd, timeflag_23_59_59));
        if (currentTimestamp >= startTime && currentTimestamp < endTime) {
            currentTimeHasMens = true;
            break;
        }
    }

    if (diff >= 90 && currentTimeHasMens) {
        var pregnantCampArray = [];
        var randomIndex = getRandomInt(2);
        var content = ['久备不孕？别烦恼让我帮你找到原因，对症下药。加入“30天优孕准备计划”，有专属备孕教练全天陪伴，分析体温曲线，找到排卵日，指导同房；还有14节备孕知识课程教你科学备孕，避免踩坑。超过60%的小伙伴在3个月内好孕啦，快上车给备孕加速~立即入营',
            '新一个周期的来临意味着又一次“好孕”机会的到来，加入“好孕营”和伙伴们一起，在备孕教练的陪伴和指导下，开心备孕，快速怀孕；还有从“饮食运动”到“检查用药”的全套备孕课程让你避免踩坑，还不来？立即入营'];
        var message = {
            messageDesc: null,
            messageId: '1035',
            messageType: 'A',
            clicked: false,
            highlightText: '立即入营',
            url: pregnantCampAction,
            validTime: -1,
        };
        message.messageDesc = content[randomIndex];
        pregnantCampArray.push(message);
        result.data[0].messages = pregnantCampArray;
        return JSON.stringify(result);
    }
}




function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function prefixInteger(num, length) {
    return ("0000000000000000" + num).substr(-length);
}


//生成年月日
function timestampToYMD(timestamp, flag) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate();
    return Y + M + D + flag;
}

//生成年月日时分秒
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
}

//将年月日时分秒转化为时间戳秒
function dateToSecond(date) {
    var year = 0;
    var month = 0;
    var day = 0;
    var hour = 0;
    var minute = 0;
    var second = 0;
    var dateArr = date.split(' ');
    var len = dateArr.length;
    if (len == 2) {
        var ymd = dateArr[0];
        var ymdArray = ymd.split('-');
        year = ymdArray[0];
        month = (ymdArray[1] - 1);
        day = ymdArray[2];
        var hms = dateArr[1]
        var hmsArray = hms.split(':');
        hour = hmsArray[0];
        minute = hmsArray[1];
        second = hmsArray[2];
    }
    var result = new Date(year, month, day, hour, minute, second).getTime();
    return parseInt(result / 1000);
}



function change(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }

}
//计算两个时间戳相差几天
//currentTime 毫秒 startTime毫秒
function getDiffTimestamp(currentTime, startTime) {
    var nd = 1000 * 24 * 60 * 60;
    var nh = 1000 * 60 * 60;
    // 获得两个时间的毫秒时间差异
    var diff = currentTime - startTime;
    // 计算差多少天
    var day = diff / nd;
    // 计算差多少小时
    var hour = diff % nd / nh;

    return Math.round(day);
}

//export { getNormalReminders, getOvulationPaperRemind, getFoodSportReminds, getIMReminders };

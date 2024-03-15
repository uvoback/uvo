var un = undefined;

sc.z0 = "<div class='mid' style='";
sc.m = "</div>";
String.prototype.trim = function()
{
    return this.replace(/(^\s*|\s*$)/g, "");
}

String.prototype.ins = function(id)
{
    if (!id) id = "";
    else id = " id='" + id + "' ";
    return sc.z0 + this + "" + "'" + id + ">";
}

String.prototype.inc = function(style, id)
{
    var x = sc[style] || style.trim();
    x = x.ins(id);
    return x + this + sc.m;
}

String.prototype.ank = function(id) {return this.inc("", id);}

Object.prototype.cf = function(f)
{
    f(this);
    return this;
}

sc.MIC_V = "color: #000";
sc.MIC_W = "color: #fff";
sc.MIC_J = "color: #fa0";
sc.MIC_R = "color: #f00";
sc.MIC_Y = "color: #ff0";
sc.MIC_G = "color: #0f0";
sc.MIC_A = "color: #0ff";
sc.MIC_B = "color: #00f";
sc.MIC_P = "color: #f3f";

sc.V = "color: #555555";//
sc.W = "color: #AAAAAA";//
sc.R = "color: #AA0000";//
sc.Y = "color: #FFAA00";//
sc.G = "color: #00AA00";//
sc.A = "color: #00AAAA";//
sc.B = "color: #0000AA";//
sc.P = "color: #AA00AA";//

sc.v = "color: #000000";//
sc.w = "color: #ffffff";//
sc.r = "color: #FF5555";//
sc.y = "color: #FFFF55";//
sc.g = "color: #55FF55";//
sc.a = "color: #55FFFF";//
sc.b = "color: #5555FF";//
sc.p = "color: #FF55FF";//

sc.u = "font-family: xmono, xxfont";//

function sc() {}
var cs = {
    mark: "&nbsp>&nbsp".inc("W"),
    s: "&nbsp",
    l: "/".inc("W"),
    e: "=".inc("W"),
    v: ":".inc("W"),
    n: "<Br>",
    tp: "transparent",
    pcok: "PC Keyboard is also OK".inc("y"),
    lrp: "Press l to replay".inc("y"),
    crp: "Click here to replay".inc("y"),
    ats: "Act to start".inc("y"),
    cts: "Click here to start".inc("y"),
    stt: "Status".inc("Y"),
    uw: "You won".inc("Y"),
    gv: "Game over".inc("Y"),
    star: "✦",
    cXingQi: "星期",
    cLi3: "礼",
    cBai4: "拜",
    cWeek0: "日",
    cWeek1: "一",
    cWeek2: "二",
    cWeek3: "三",
    cWeek4: "四",
    cWeek5: "五",
    cWeek6: "六",
    await: "✦敬请期待✦",
    about: "我平时不怎么在线<br>所以我"+"很多情况在不在线".inc("y")+"<br>",
    /* bgmInfo: "<".inc("Y") + "单曲".inc("r") + "播放".inc("y") + "音频".inc("g") + "文件".inc("a") + "收藏盒".inc("p") + ">".inc("A"), */
    ozen: {
        yes: "是".inc("g"),
        no: "否".inc("r"),
        on: "ON".inc("g"),
        off: "OFF".inc("r"),
        en: "Enabled".inc("g"),
        di: "Disabled".inc("r"),
    },
    ops: {
        background: "Background",
        darkMode: "Dark Mode",
        darkModeA: ["Light".inc("g"),"Dark".inc("r"),"Auto".inc("Y")],
        cursorStyle: "Cursor Style",
        uiColor: "UI Color",
        uiColorA: ["Default&nbsp".inc("A")+"0.6".inc("Y"),
            "Black 0.6".inc("w"),
            "White 0.2".inc("w"),
            "Light Gray 0.4".inc("w"),
            "Dark Gray 0.4".inc("w"),
            "Dark Red 0.4".inc("r"),
            "Golden 0.4".inc("y"),
            "Dark Green 0.4".inc("g"),
            "Dark Aqua 0.4".inc("a"),
            "Dark Purple 0.4".inc("p")
        ]
    }
}

var neatSrc = [];

sc.cm = "txtComn";
sc.ra = "txtRare";
sc.sp = "txtSpec";
sc.ep = "txtEpic";
sc.lg = "txtLegd";
sc.ms = "txtMyth";
sc.ot = "txtOthe";
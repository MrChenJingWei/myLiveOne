/**
 * Created by Administrator on 2017/1/16.
 */
//导航处字体的展示
function navShow() {
    $(".navHeadPosition span").mousemove(function (e) {
        if (e.target.nextSibling) {
            var nextTextShow = e.target.nextSibling;
            nextTextShow.style.opacity = "1";
        }
    })
    $(".navHeadPosition span").mouseout(function (e) {
        if (e.target.nextSibling) {
            var nextTextShow = e.target.nextSibling;
            nextTextShow.style.opacity = "0";
        }
    })
}
navShow();
//名言
function knowShow() {

//名言的随机出现
//定义名言数组

    var remarkList = {
        love: ["毫无经验的初恋是迷人的，但经得起考验的爱情是无价的。 —— 马尔林斯基", "离别对于爱情，就像风对于火一样：它熄灭了火星，但却能煽起狂焰。 —— 阿巴巴耶娃"],
        friend: ["友谊像清晨的雾一样纯洁，奉承并不能得到友谊，友谊只能用忠实去巩固它。 —— 马克思"],
        live: ["人生并不像火车要通过每个站似的经过每一个生活阶段。人生总是直向前行走，从不留下什么。 —— 刘易斯"],
        true: ["相信谎言的人必将在真理之前毁灭。 —— 赫尔巴特"]
    }
//爱情绑定事件
    $(".aboutMeWorkPosition").click(function (e) {
        console.log(e.target.title);
        //获取类别名字的值
        var styleName = e.target.title;
        showRemark(styleName);
    })

//传值显示
    function showRemark(styleName) {
        var a = styleName;
        //赋值到input上面
        var showKnow = document.getElementById('showKnown');
        showKnow.value = remarkList[a][0];
    }
}
knowShow();
//导航跳转
$('.navHeadPosition').click(function(e){
    var a = e.target.id;
    console.log(a);
    switch (a){
        case "me":window.location="aboutMe.html";
            break;
        default:
            window.location = "err.html";
            break;
    }
})
//加载demo路径
function loadDemo() {
    var demoList = [
        {
            url: "btTime/变态计时器.html",
            title: "dhApp",
            name:"变态计时器",
            style:"炫彩展示"
        },
        {
            url: "copiBoot/切图.html",
            title: "dhApp",
            name:"简约UI",
            style:"炫彩展示"
        },
        {
            url: "jl/work/form.html",
            title: "dhApp",
            name:"时尚简历",
            style:"炫彩展示"
        },
        {
            url: "photoShow/电影海报浏览.html",
            title: "dhApp",
            name:"电影海报浏览",
            style:"炫彩展示"
        },
        {
            url: "photoWall/照片墙.html",
            title: "dhApp",
            name:"照片墙",
            style:"炫彩展示"
        },
        {
            url: "qixi/七夕.html",
            title: "dhApp",
            name:"七夕动画",
            style:"炫彩展示"
        },
        {
            url: "tree/Tree.html",
            title: "dhApp",
            name:"求爱树",
            style:"炫彩展示"
        },
        {
            url: "柱状、饼图.html",
            title: "dhApp",
            name:"Canvas 简单运用",
            style:"炫彩展示"
        },
        {
            url: "flyBird/bird.html",
            title: "gameApp",
            name:"飞翔的小鸟",
            style:"H5小游戏"
        },
        {
            url: "剪刀石头布2.0.html",
            title: "gameApp",
            name:"剪刀石头布",
            style:"H5小游戏"
        },
        {
            url: "mucApp/work/Music Player.html",
            title: "syApp",
            name:"H5音乐播放器",
            style:"H5小应用"
        },
        {
            url: "软键盘2.0/软键盘1.0.html",
            title: "syApp",
            name:"软键盘",
            style:"H5小应用"
        },
        {
            url: "体重.html",
            title: "syApp",
            name:"体重指标",
            style:"H5小应用"
        },
        {
            url: "注册.html",
            title: "syApp",
            name:"C登录注册",
            style:"H5小应用"
        }
    ]
    var demoHtml = document.createElement("div");
    var innerDemoHtml = "";
    for (var i=0; i < demoList.length; i++) {
        console.log(i);
        console.log(demoList[i]);
        var url = demoList[i]['url'];
        var title = demoList[i]['title'];
        var name = demoList[i]['name'];
        var style = demoList[i]['style']
        demoHtml = "<div class='demoNameListStyle demoNameListPosition'>"
            + "<img class='demoFaceStyle' src='../img/demoimg/"+(i+1)+".png'>"
            + "<a href='../Demo/"+title+"/"+url+"' class='demoNameStyle'>"+name+"</a><br>"
            + "<span class='demoTitleStyle'>"+style+"</span>"
            + "</div>";
        innerDemoHtml += demoHtml;
        console.log(demoHtml);
    }
    document.getElementById('demoListShow').innerHTML = innerDemoHtml;
}
window.onload = function(){loadDemo()};



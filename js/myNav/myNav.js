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
    }
})


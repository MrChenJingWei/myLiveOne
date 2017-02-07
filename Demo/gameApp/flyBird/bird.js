/**
 * Created by qingyun on 16/8/19.
 */

// 鸟位移
var i = 1;
// 第一块背景移动
var m = 0;
// 第二块背景移动
var n = 800;
// 分数
var fen=0;
var mytime;
$("#btn").on('click', play);
function play() {
    $("#play").css('display', "none");
    block();
    playp();

}
// 鸟往上飞
$(window).keyup(function (event) {
    switch (event.keyCode) {
        case 32:
            if (i > 30) {
                i = i - 60;
            }
    }
});
$("#play img").on('click', play);
// 结束执行函数
function end() {
    $('#end').css('display', 'block');
}
$('#endBtn').on('click', function () {
    location.reload();
});
// 计分条显示
function block() {
    $("#inInput").css('display', "block");
}
// play执行函数
function playp() {


    // 鸟自动下滑
    if (i <= 423) {
        $("#bird").css('top', i + "px");
    }
    // 背景移动
    $("#oneBg").css('left', m + "px");
    if (m == -800) {
        $("#oneBg").empty();
        m = 800;
    }
    $('#twoBg').css('left', n + "px");
    if (n == -800) {
        $("#twoBg").empty();
        n = 800
    }
    // 柱子添加
    if (m == 800) {
        var p;
        var q;
        var o;
        for (var c = 0; c <
        4; c++
        ) {
            p = Math.ceil(Math.random() * 200);
            o = 453 - p;
            q = p + 150;
            $("#oneBg").append("<img class='pipe' style='top: -" + o +
                "px;' src='image/pipe.png' ><img class='pipe' style='top:" + q +
                "px;' src='image/pipe.png' >")
        }
    }
    if (n == 800) {
        var p;
        var q;
        var o;
        for (var c = 0; c <
        4; c++
        ) {
            p = Math.ceil(Math.random() * 200);
            o = 453 - p;
            q = p + 150;
            $("#twoBg").append("<img class='pipe' style='top: -" + o +
                "px;' src='image/pipe.png' ><img class='pipe' style='top:" + q +
                "px;' src='image/pipe.png' >")
        }
    }
    // 判断碰撞条件
    // 第一块
    var moveOne = $("#oneBg");
    // var offsetOne = moveOne.position();
    var positionOne = moveOne.position();
    // 第二块
    var moveTwo = $("#twoBg");
    // var offsetTwo = moveTwo.offset();
    var positionTwo = moveTwo.position();
    // 鸟
    var moveBird = $("#bird");
    // var offsetbird= moveBird.offset();
    var positionBird = moveBird.position();
    if (positionBird.top > 360) {
        end();
        return;
    }
    // 第一块上面判断
    var imgO = $('#oneBg .pipe:nth-child(1)');
    var imgOne = imgO.position();
    var imgT = $('#oneBg .pipe:nth-child(2)');
    var imgTwo = imgT.position();
    if (imgOne != undefined && imgTwo != undefined && 80 < positionOne.left && positionOne.left < 180) {
        if ((imgTwo.top - 30) < positionBird.top || positionBird.top < (460 + imgOne.top)) {
            end();
            return;
        }
    }
    var imgO1 = $('#oneBg .pipe:nth-child(3)');
    var imgOne1 = imgO1.position();
    var imgT1 = $('#oneBg .pipe:nth-child(4)');
    var imgTwo1 = imgT1.position();
    if (imgOne1 != undefined && imgTwo1 != undefined && -120 < positionOne.left && positionOne.left < -20) {
        if ((imgTwo1.top - 30) < positionBird.top || positionBird.top < (460 + imgOne1.top)) {
            end();
            return;
        }
    }
    var imgO11 = $('#oneBg .pipe:nth-child(5)');
    var imgOne11 = imgO11.position();
    var imgT11 = $('#oneBg .pipe:nth-child(6)');
    var imgTwo11 = imgT11.position();
    if (imgOne11 != undefined && imgTwo11 != undefined && -320 < positionOne.left && positionOne.left < -220) {
        if ((imgTwo11.top - 30) < positionBird.top || positionBird.top < (460 + imgOne11.top)) {
            end();
            return;
        }
    }
    var imgO111 = $('#oneBg .pipe:nth-child(7)');
    var imgOne111 = imgO111.position();
    var imgT111 = $('#oneBg .pipe:nth-child(8)');
    var imgTwo111 = imgT111.position();
    if (imgOne111 != undefined && imgTwo111 != undefined && -520 < positionOne.left && positionOne.left < -420) {
        if ((imgTwo111.top - 30) < positionBird.top || positionBird.top < (460 + imgOne111.top)) {
            end();
            return;
        }
    }
    // 第二块上面判断
    var imgO3 = $('#twoBg .pipe:nth-child(1)');
    var imgOne3 = imgO3.position();
    var imgT3 = $('#twoBg .pipe:nth-child(2)');
    var imgTwo3 = imgT3.position();
    if (imgOne3 != undefined && imgTwo3 != undefined && 80 < positionTwo.left && positionTwo.left < 180) {
        if ((imgTwo3.top - 30) < positionBird.top || positionBird.top < (460 + imgOne3.top)) {
            end();
            return;
        }
    }
    var imgO13 = $('#twoBg .pipe:nth-child(3)');
    var imgOne13 = imgO13.position();
    var imgT13 = $('#twoBg .pipe:nth-child(4)');
    var imgTwo13 = imgT13.position();
    if (imgOne13 != undefined && imgTwo13 != undefined && -120 < positionTwo.left && positionTwo.left < -20) {
        if ((imgTwo13.top - 30) < positionBird.top || positionBird.top < (460 + imgOne13.top)) {
            end();
            return;
        }
    }
    var imgO113 = $('#twoBg .pipe:nth-child(5)');
    var imgOne113 = imgO113.position();
    var imgT113 = $('#twoBg .pipe:nth-child(6)');
    var imgTwo113 = imgT113.position();
    if (imgOne113 != undefined && imgTwo113 != undefined && -320 < positionTwo.left && positionTwo.left < -220) {
        if ((imgTwo113.top - 30) < positionBird.top || positionBird.top < (460 + imgOne113.top)) {
            end();
            return;
        }
    }
    var imgO1113 = $('#twoBg .pipe:nth-child(7)');
    var imgOne1113 = imgO1113.position();
    var imgT1113 = $('#twoBg .pipe:nth-child(8)');
    var imgTwo1113 = imgT1113.position();
    if (imgOne1113 != undefined && imgTwo1113 != undefined && -520 < positionTwo.left && positionTwo.left < -420) {
        if ((imgTwo1113.top - 30) < positionBird.top || positionBird.top < (460 + imgOne1113.top)) {
            end();
            return;
        }
    }
    // 加分项目

    if (imgOne != undefined && imgTwo != undefined && (positionOne.left == 180 || positionOne.left == -20 || positionOne.left == -220 || positionOne.left == -420 || positionTwo.left == 180 || positionTwo.left == -20 || positionTwo.left == -220 || positionTwo.left == -420)){
        console.log('1');
        fen=fen+1;
    }
    // 记分牌
    document.getElementById('inInput').value=fen;

    document.getElementById('outInput').value=fen;

    i = i + 3;
    m--;
    n--;
    // play函数执行
    mytime = setTimeout("playp()", 10);}




























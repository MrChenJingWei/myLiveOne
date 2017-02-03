/**
 * Created by Administrator on 2017/2/3.
 */
//内容跳转
$(".navAboutMeRight").click(function(e){
    console.log(e.target);
    var a = e.target.id;
    e.target.style.color = "#8fd059";
    console.log(a);
    switch (a){
        case 'me':
            $("#showAboutMeBasic").css("display","block");
            $("#showAboutMeSkill").css("display","none");
            $("#showAboutMeExp").css("display","none");
            $("#sk").css("color","#f6f6f6");
            $("#exp").css("color","#f6f6f6");
            break;
        case 'sk':
            $("#showAboutMeBasic").css("display","none");
            $("#showAboutMeSkill").css("display","block");
            $("#showAboutMeExp").css("display","none");
            $("#exp").css("color","#f6f6f6");
            $("#me").css("color","#f6f6f6");
            break;
        case 'exp':
            $("#showAboutMeBasic").css("display","none");
            $("#showAboutMeSkill").css("display","none");
            $("#showAboutMeExp").css("display","block");
            $("#me").css("color","#f6f6f6");
            $("#sk").css("color","#f6f6f6");
            break;
        default:
    }
})
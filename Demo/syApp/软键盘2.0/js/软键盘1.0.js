var Emoji=["😁","😂","😃","😄","👿","😉","😊","😣","😭","😖","😒","😓","😏","😍","😌","😘","😚","😜","😝","😞","😡","👇","👈","👌","🙏","👎","👏","👊","🍔","🎂","🍧","🍚","🍝","🍣","🍞","🍺","🍙","🍣","🍞","🍺"]
var Word=["q","w","e","r","t","y","u","i","o","p","?","]","a","s","d","f","g","h","j","k","l",";","z","x","c","v","b","m","n",",",".","/",
"1","2","3","4","5","6","7","8","9","0","-","="]
//emoji表情输入栏的搭建
var wordhtml=document.getElementById("word");
var Emojihtml=document.getElementById("emoji");
//emoji搭建
function emojue() {
	if (Emojihtml.style.visibility!="visible") {
		Emojihtml.style.visibility="visible";
		wordhtml.style.visibility="hidden";
	}else{Emojihtml.style.visibility="hidden";}
	var EmojiHTML_html="";
	Emojihtml.innerHTML="";
	for (var i = 0; i < Emoji.length; i++) {		
		 var Emoji_emoji= Emoji[i];
		 EmojiHTML_html+="<input type='button' value='"+Emoji_emoji+"'onclick='INput(this)'>";
		 // console.log(Emojihtml);
		 Emojihtml.innerHTML=EmojiHTML_html;
	}
}
//字符搭建
function zimu() {
	if (wordhtml.style.visibility!="visible") {
		wordhtml.style.visibility="visible";
		Emojihtml.style.visibility="hidden";
	}else{wordhtml.style.visibility="hidden";}
	var wordHTML="";
	wordhtml.innerHTML="";
	//构建随机数
	function randomsort(a, b) {
	     return Math.random()>.5 ? -1 : 1; 
	}
	var newword = Word.sort(randomsort);
	for (var i = 0; i < newword.length; i++) {		
		 var word_word= newword[i];
		 wordHTML+="<input type='button' value='"+word_word+"'onclick='INput(this)'>";
		 wordhtml.innerHTML=wordHTML;
	}
}
//输入框获得值
function INput(obj) {
	var getValue=document.getElementById('take');

	var getValueA=obj.value;	
	getValue.value+=getValueA;
	var aaaa=getValue.value;
	console.log(aaaa);
	if (aaaa.indexOf("qingyun")>=0) {
		console.log(1123);
		var bbbb=aaaa.replace("qingyun","！！叫你别打青云知不知道！！")
		console.log(bbbb);
		getValue.value=bbbb;
	};
	 
}
function dle() {
	document.getElementById('take').value="";
}
window.onload = function(){
	document.querySelector('.a1').addEventListener('click',zimu);
	document.querySelector('.a2').addEventListener('click',emojue);
	document.querySelector('.a3').addEventListener('click',dle);
}




































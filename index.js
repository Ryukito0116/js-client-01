// ここにJavaScriptコードを書く
const how1 = document.getElementById('how1');
const how2 = document.getElementById('how2');
const who = document.getElementById('who');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
var human = ['アン スンラン','石川 滉太','浦 蒼天','大西 一輝','大山 竜生','岡田 光貴','小坂 拓巳','北川 恵嗣','櫻井 亮大','ジャン ジアハオ','新谷 亮平','武田 怜史','長尾 悠杜','西木 瑛則','平池 竜大','又吉 琉稀斗','松田 遥希','水島 拓仁','溝井 迅','宮城 徳貴','山田 祐哉','山本 悠貴','ガン ウブン','リ フーヤン','岡田先生','藤原先生','マルミ先生']
var items1 = ['真面目','ユーモラス','クール','キュート','不思議','天才','努力家','完璧','ヤンキー','酒豪','深爪','健康','不愉快','太陽みたい','情熱的','楽観的','ビビり','ムッツリ','アホ','論理的','感情的','変態','人見知り','スケベ','欲求不満','好奇心旺盛','エッチ']
var items2 = ['成績優秀','スポーツ万能','料理が上手','声が綺麗','笑顔が素敵','女装が似合いそう','学校休んで風俗に行ってそう','笑い方が独特','髪型が変','おしゃれ','飛田新地に行ってそう','鼻毛が多そう','恐ろしそう','泣き虫','早漏','服のセンスが変','賢そう','やばそう','おっちょこちょい','サイコパス','積極的','不真面目','淫乱','貪欲','ドS','ドM','敏感']

btn.addEventListener('click',()=>{
  var random1 = Math.floor( Math.random() * human.length );
  var random2 = Math.floor( Math.random() * items1.length );
  var random3 = Math.floor( Math.random() * items2.length );
  //let answertext = random;
  let howtext1 = items1[random3];
  let howtext2 = items2[random2];
  let whotext = human[random1];
  let resulttext =  howtext1 + " で " + howtext2 + " な " + whotext

  //findtxt = new RegExp(findtxt , "g");
  //tagtxt = tagtxt.replace(findtxt, reptxt);

  result.innerText = resulttext;
});
auto.waitFor
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}

toastLog('2022070401');
toastLog(x);
toastLog(y);

sj1=0
threads.start(function() {
    //在新线程执行的代码
    true
    while (true) {
      log('子线程');
      sleep(60*1000)
      
      sj1=sj1+60*1000
      log(sj1)
      if(sj1>10*60*1000){
        log('jieshu')
        url = "http://wxpusher.zjiecode.com/api/send/message/?appToken=AT_GRDG2ZQu57APwWcSxZpavjK3qNl9tCfO&content=z18-chucuole&uid=UID_JNz25wHNb8ExLeaoWTMY98BFuIcL&url=http%3a%2f%2fwxpusher.zjiecode.com"//写入

        var res = http.get(url);
        home()

        exit()
      }


    }
  });

// var r = http.get('http://140.83.62.124:5244/d/alist/a711.txt');
// r0 = r.body.string()
// log(r0);
// r1 = r0.split(/[0-9]{1,3},/)
// log(r1[1])

url = "http://kdy1.qwxyx.xyz/jk/post-cha.php?fname=z18dy"//编号
url1 = "http://kdy1.qwxyx.xyz/jk/post-gai.php"//写入

var res = http.get(url);
var a = res.body.json();
print(a)


for (i = 0; i < 1111; i++) {//232 322//206 207-211 275 289   327
  
  if(!device.isScreenOn())
    {
        device.wakeUp();
        sleep(1500);
        swipe(0.9 * x, 0.9 * y, 0.81 * x, 0.2 * y, 800);
        sleep(1500);
      
      
    }


  
  	//cx()
    pxx()
    //cx2()
  //  data = {fname: "Z18-KSJ", age: a+1,c:Date()}
  //   url = "http://61.191.56.132:20177/jk/post-gai.php"
  //   var res = http.post(url,data);
  //   var b = res.body.json();
    a=a+1
    print(b)
    sj2=random(7000000,10000000)
    sj1=0-sj2
   sleep(sj2);
 

}
//pxx()
function cx2() {
    launchApp('CX文件管理器')
    sleep(4001)
    toastLog(textContains("/a02").findOne().parent().click())
    sleep(4001)
    //toastLog(id("com.cxinventor.file.explorer:id/filename").findOne().parent().longClick())
    toastLog(desc("Toggle selection").findOne().parent().parent().longClick())
    sleep(4001)
    toastLog(text("删除").findOne().parent().click())
    sleep(4001)
    toastLog(text("确定").findOne().click())
    sleep(4001)
    toastLog(id("com.cxinventor.file.explorer:id/home").findOne().click())//zhuye
    sleep(4001)
    // sleep(4001)
    // toastLog(text("/live").findOne().parent().click())
    // sleep(4001)
    // toastLog(text("贴上").findOne().parent().click())
    // sleep(4001)
    // back()
    // sleep(4001)


}
function cx() {
    launchApp('CX文件管理器')
    sleep(4001)
    toastLog(textContains("a01/20").findOne().parent().click())
    sleep(4001)
    toastLog(desc("更多选项").findOne().click())
    sleep(4001)
    toastLog(text("搜索").findOne().parent().parent().parent().click())
    sleep(4001)
    toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a2-' + (a + 1) + '.'))
    sleep(4001)
    click(0.95 * x, 0.90 * y)
    sleep(4001)
    while (!id("com.cxinventor.file.explorer:id/filename").exists()) {


        print('meiyou')
        back()
        sleep(4001)
        i = i + 1
        toastLog(desc("更多选项").findOne().click())
        sleep(4001)
        toastLog(text("搜索").findOne().parent().parent().parent().click())
        sleep(4001)
        toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a2-' + (a + 1) + '.'))
        sleep(4001)
        click(990, 2083)
        sleep(4001)


    }
    toastLog(desc("Toggle selection").findOne().parent().parent().longClick())
    sleep(4001)
    toastLog(text("复制").findOne().parent().click())
    sleep(4001)
    back()
    sleep(4001)
    toastLog(id("com.cxinventor.file.explorer:id/home").findOne().click())//zhuye
    sleep(4001)
    toastLog(textContains("/a02").findOne().parent().click())
    sleep(4001)
    toastLog(text("贴上").findOne().parent().click())
    sleep(4001)
  	if (text('覆盖').exists()) {
    		toastLog('覆盖');
   			toastLog(text("覆盖").findOne().click())
			}
  	sleep(4001)
    toastLog(id("com.cxinventor.file.explorer:id/home").findOne().click())//zhuye
    sleep(4001)


}


function pxx() {

    launchApp('快手极速版');
		sleep(6000)
    if(text("我知道了").exists()){
      toastLog(text("我知道了").findOne().click())
  
    }
    sleep(3000)

   	toastLog(id("com.kuaishou.nebula:id/left_btn").findOne().click())
  	sleep(7000)
   	toastLog(text("小程序").findOne().parent().click())
  	sleep(7000)
  	toastLog(text("抖推猫趣测趣玩").find()[i%2+2].parent().click())
 		sleep(14000)
  	toastLog(id("com.kuaishou.nebula.miniapp:id/toolbar_more_btn_container").findOne().click())
  	sleep(7000)
 		toastLog(text("发快手").findOne().parent().click())
    sleep(7000)
//   click(text("拍照").findOne().bounds().centerX(), text("拍照").findOne().bounds().centerY())
//   sleep(6000)
  	//click(0.52*x+0.5*text("音乐").findOne().parent().bounds().centerX(),text("音乐").findOne().parent().bounds().centerY())
  
    toastLog(text("相册").findOne().parent().click())
  	//toastLog(id("com.kuaishou.nebula.post:id/album_layout").findOne().click())
  //click(id("com.kuaishou.nebula:id/media_pick_num_area").findOne().bounds().centerX(), id("com.kuaishou.nebula:id/media_pick_num_area").findOne().bounds().centerY())
    sleep(5000)
    toastLog(text("最近项目").findOne().parent().parent().click())
    sleep(5000)
  	swipe(0.9 * x, 0.9 * y, 0.81 * x, 0.2 * y, 800)
  	sleep(5000)
    toastLog(textContains("a02").findOne().parent().parent().click())
    sleep(8000)
    toastLog(id("com.kuaishou.nebula:id/media_pick_num_area").findOne().click())
    sleep(5000)
     toastLog(text("一键出片").findOne().click())
    sleep(22000)
  toastLog(textContains("风格").findOne().parent().click())
  sleep(3000)
   toastLog(desc("原片").findOne().click())
     sleep(3000)
  toastLog(id("com.kuaishou.nebula:id/right_btn").findOne().click())
  sleep(3000)
    toastLog(textContains("滤镜").findOne().parent().click())
    sleep(3000)

    toastLog(text("白嫩").findOne().bounds())
    click(text("白嫩").findOne().bounds().centerX(), text("白嫩").findOne().bounds().centerY())
    sleep(3000)
    back()
    sleep(3000)
  	click(0.5*textContains("滤镜").findOne().parent().bounds().centerX()+0.5*textContains("风格").findOne().parent().bounds().centerX(), textContains("滤镜").findOne().parent().bounds().centerY())
    sleep(3000)
    toastLog(textContains("收藏").findOne().click())
    sleep(3000)
  	toastLog(id("com.kuaishou.nebula:id/root").find()[i%5].click())
    sleep(3000)
    back()
    sleep(3000)
    toastLog(id("com.kuaishou.nebula.post:id/next_step_button").findOne().click())
    sleep(8000)
  url = "http://61.191.56.132:20177/jk/post-cha2.php?BIAO=WA1&NO="+(a+1)//wa
	var res = http.get(url);
	var c = res.body.string();
	print(c)

    toastLog(id("com.kuaishou.nebula:id/editor").findOne().setText(c))
    sleep(8000)
    toastLog(text("发布").findOne().click())
    sleep(8000)
 		back()
  	sleep(6000)
   	back()
  	sleep(6000)
  	back()
  	sleep(6000)
   	back()
  	sleep(6000)
  
  


}

function huadong() {
    for (i = 1; i <= 12; i++) {
        var a = random(6000, 9000)
        sleep(1000)
        toastLog("刷视频");
        swipe(0.9 * x, 0.9 * y, 0.81 * x, 0.2 * y, 800)
        sleep(a)
        console.log(i);
    }
}

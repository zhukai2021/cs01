auto.waitFor
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}
console.setPosition(0.01*x, 0.1*y)
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
        url = "http://wxpusher.zjiecode.com/api/send/message/?appToken=AT_GRDG2ZQu57APwWcSxZpavjK3qNl9tCfO&content=pro2-dyjsb-chucuole&uid=UID_JNz25wHNb8ExLeaoWTMY98BFuIcL&url=http%3a%2f%2fwxpusher.zjiecode.com"//写入

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

url = "http://kdy1.qwxyx.xyz/jk/post-cha.php?fname=pro2"//编号
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


  
  	cx()
    pxx()
    cx2()
   data = {fname: "pro2", age: a+1,c:Date()}
    url = "http://kdy1.qwxyx.xyz/jk/post-gai.php"
    var res = http.post(url,data);
    var b = res.body.json();
    a=a+1
    print(b)
    sj2=random(7000000,10000000)
    sj1=0-sj2
   sleep(sj2);
   
 

}

function cx2() {
  launchApp('CX文件管理器')
  sleep(4001)
  toastLog(id('com.cxinventor.file.explorer:id/grid1').findOne().child(0).click())
  sleep(4001)
  toastLog(textContains('a3').findOne().parent().parent().parent().click())
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
  toastLog(id('com.cxinventor.file.explorer:id/grid1').findOne().child(0).click())
  sleep(4001)
  toastLog(textContains("a2").findOne().parent().parent().parent().click())
  sleep(4001)
  toastLog(desc("更多选项").findOne().click())
  sleep(4001)
  toastLog(text("搜索").findOne().parent().parent().parent().click())
  sleep(4001)
  toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a' + (a + 1) + '.'))
  sleep(4001)
  click(0.95 * x, 0.95 * y)
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
      toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a' + (a + 1) + '.'))
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
  toastLog(id('com.cxinventor.file.explorer:id/grid1').findOne().child(0).click())
  sleep(4001)
  toastLog(text('a3').findOne().parent().parent().parent().click())
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

    launchApp('抖音极速版');
    sleep(8000)
    back()
    sleep(3000)
    toastLog(descContains("拍摄").findOne().click())

    sleep(7000)
    toastLog(text("相册").findOne().parent().parent().click())
    sleep(5000)
    toastLog(id("m.l.plugin.tools_plugin:id/change_album_layout").findOne().click())//com.ss.android.ugc.aweme:id/bo_
    sleep(5000)



    if (textContains("a2").exists()) {
      
       toastLog('继续')
    }
    else{
      
      back()
      sleep(8000)
      toastLog(text("相册").findOne().parent().parent().click())
      sleep(5000)
      toastLog(id("m.l.plugin.tools_plugin:id/change_album_layout").findOne().click())//com.ss.android.ugc.aweme:id/bo_
      sleep(5000)
      if (textContains("a02").exists()) {
        toastLog('继续')

      }
      
     else{
       
       back()
       sleep(8000)
       toastLog(text("相册").findOne().parent().parent().click())
       sleep(5000)
       toastLog(id("m.l.plugin.tools_plugin:id/change_album_layout").findOne().click())//com.ss.android.ugc.aweme:id/bo_
       sleep(5000)
 
     }

    }
    
    


    // swipe(0.9 * x, 0.9 * y, 0.81 * x, 0.2 * y, 800);
    sleep(5000)
    toastLog(textContains("a2").findOne().parent().click())
    sleep(5000)
    
    toastLog(descContains(", 未选中").findOne().parent().click())
    sleep(5000)
  
  	toastLog(text("确认").findOne().click())//queding
    sleep(8000)

    
    toastLog(id("m.l.plugin.tools_plugin:id/tv_choose_music").findOne().bounds())
    click(id("m.l.plugin.tools_plugin:id/tv_choose_music").findOne().bounds().centerX(), id("m.l.plugin.tools_plugin:id/tv_choose_music").findOne().bounds().centerY())
    sleep(3000)
    toastLog(desc("收藏").findOne().click())
    sleep(3000)
    toastLog(textContains("0:").find()[i%5].parent().parent().parent(). click())
    sleep(3000)
    back()
    
    //     toastLog(textContains("点击展开更多").findOne().click())
    //     sleep(3000)
    toastLog(desc("滤镜").findOne().click())
    sleep(3000)

    toastLog(text("日常").findOne().parent().parent().click())
    sleep(3000)

    toastLog(text("高清").findOne().bounds())
    click(text("高清").findOne().bounds().centerX(), text("高清").findOne().bounds().centerY())
    sleep(3000)
    back()
    sleep(3000)
  	toastLog(text("下一步").findOne().parent().click())//下一步

    
   	sleep(8000)
 	 	url = "http://kdy1.qwxyx.xyz/jk/post-cha2.php?BIAO=shi&NO="+(a+1)//wa
		var res = http.get(url);
		var c = res.body.string();
    c=c.slice(2,-2)
    c=c.split('\", \"')
		print(c.length)
   if(c.length==1){
        toastLog(setText('#'))
    }
		else{
        print('#'+c[0]+'#'+c[1].split('-')[0]+'   '+c[c.length-2])
   			toastLog(setText('#'+c[0]+'#'+c[1].split('-')[0]+'   '+c[c.length-2]))
    }
  

    sleep(3000)
    back()
    sleep(4000)
    toastLog(text("下一步").findOne().parent().click())//下一步
    sleep(3000)
    toastLog(id("m.l.plugin.tools_plugin:id/publish_container").findOne().click())
    sleep(8000)


}



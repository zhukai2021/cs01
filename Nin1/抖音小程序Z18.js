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





url = "http://kdy1.qwxyx.xyz/jk/post-cha.php?fname=z18dy"//编号
url1 = "http://kdy1.qwxyx.xyz/jk/post-gai.php"//写入

var res = http.get(url);
var a = res.body.json();
print(a)


for (i = 0; i < 1; i++) {//232 322//206 207-211 275 289   327
  
  if(!device.isScreenOn())
    {
        device.wakeUp();
        sleep(1500);
        swipe(0.9 * x, 0.9 * y, 0.81 * x, 0.2 * y, 800);
        sleep(1500);
      
      
    }


  
  	cx()
    dy()
    //cx2()
  //  data = {fname: "lg1", age: a+1,c:Date()}
  //   url = "http://kdy1.qwxyx.xyz/jk/post-gai.php"
  //   var res = http.post(url,data);
  //   var b = res.body.json();
  //   a=a+1
  //   print(b)
  //   sj2=random(7000000,10000000)
  //   sj1=0-sj2
  //  sleep(sj2);
   
 

}
print('结束')

function cx2() {

  
  launchApp('CX文件管理器')
  sleep(4001)
  toastLog(id('com.cxinventor.file.explorer:id/grid1').findOne().child(0).click())
  sleep(4001)
  toastLog(textContains('a02').findOne().parent().parent().parent().click())
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




}
//dy()
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
  toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a' + (a+8) + '.'))
  sleep(4001)
  click(0.95 * x, 0.99 * y)
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
      toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a1-' + (a + 1) + '.'))
      sleep(4001)
      click(0.95 * x, 0.99 * y)
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
  toastLog(text('a02').findOne().parent().parent().parent().click())
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


function dy() {

      launchApp('抖音');
      sleep(8000)
      back()
      sleep(3000)

     toastLog(descContains("侧边栏").findOne().click())
     sleep(3000)
     toastLog(text("扫一扫").findOne().parent().click())
     sleep(3000)
    toastLog(text("相册").findOne().parent().parent().click())
    sleep(5000)
    // b1=id("com.ss.android.ugc.aweme:id/jav").findOne().child(0).bounds()
    // toastLog(b1.centerX())
    // toastLog(b1.centerY())
    toastLog(id("com.ss.android.ugc.aweme:id/root_view").findOnce(1).click())
    sleep(10000)
    toastLog(text("授权确认推广").findOne().click())
    sleep(15000)
    toastLog(desc("更多").findOne().click())
    sleep(5000)
    toastLog(text("拍抖音").findOne().parent().click())
    sleep(3000)

    // descContains("更多功能").findOne().click()
    // sleep(3000)
    // desc("拍日常, 按钮").findOne().click()

    // sleep(7000)
    toastLog(text("相册").findOne().parent().parent().click())
    sleep(5000)


    toastLog(text("所有照片").findOne().parent().click())//com.ss.android.ugc.aweme:id/bo_
    sleep(5000)



     



      sleep(5000)
    toastLog(textContains("a02").findOne().parent().click())

    sleep(5000)
    
    toastLog(descContains(", 未选中").findOne().parent().click())
    sleep(5000)
   
  	toastLog(text("下一步").findOne().click())//下一步
    sleep(3000)
    toastLog(text("下一步").findOne().parent().click())//下一步
    sleep(5000)

   
  
 	

   	toastLog(setText("#诗词 #每天都有一个好心情 #每天学习一点点"))
    
  

    sleep(3000)
    back()
    sleep(4000)
    toastLog(text("下一步").findOne().parent().click())//下一步
    sleep(3000)
    toastLog(desc("发布").findOne().click())
    sleep(8000)
    back()
    sleep(3000)
    back()
    sleep(3000)
    back()


}



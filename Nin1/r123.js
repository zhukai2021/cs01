auto.waitFor
x = device.width
y = device.height
if (x == 0) {
  x = 721
  y = 1281
}
console.show()
console.setPosition(50, 0.65*y);


//1111

toastLog('2022070401');
toastLog(x);
toastLog(y);
i1=0
function bianli1(){
  print(i1+'ci')
  if(!textContains('学习进度').exists()){
    print('没课了，请添加课程重新开始')
    exit()

  }
  if(i1>c1){
    print('今天学完了，或者没课了,或者课程打不开了')
    exit()
  }
 
  xs1=parseFloat(id('cc.angis.hn:id/myCourseCreditTv').findOnce(i1).text())
  textContains('学习进度').findOnce(i1).parent().parent().parent().parent().click()
  sleep(5000)
  if(text('确定').exists()){
    text('确定').click()
    sleep(5000)
    a1=1
    while(id('cc.angis.hn:id/course_progress').findOne().text()!='100%'){
      sleep(5000)
      print('当前已学'+xs+'小时'+a1+'秒')
      a1=a1+5
      
    }
    xs=xs+xs1
    storage.put(rq0, xs);
    print('今天已学'+xs)

    if(xs>=5){
      print('今天已学大于5小时~结束了')
      exit()
    }
    back()
    sleep(5000)
    back()
    sleep(5000)
    text('我的课程').findOne().parent().click()
    i1=0
    sleep(5000)
  }
  else{
    i1=i1+1
  }
  bianli1()
 
  
} 
let d =new Date()
rq0=(d.getMonth()+1)+''+d.getDate()
log('今天日期：'+rq0)
var storage = storages.create('DT1');
// storage.put('rq1', 123);
//log('rq1 = ' + storage.get('rq1'));
log(storage.contains(rq0))
if(storage.contains(rq0)==false){
  storage.put(rq0, 0);
}
log('今日已学'+storage.get(rq0)+'学时')
//storage.put(rq0, 1);
//log('rq0 = ' + storage.get(rq0));
xs=storage.get(rq0)
if(xs>=5){
  print('今天已学大于5小时~结束了')
  exit()
}


qidong()
kecheng()
function qidong() {
    sleep(3000)
    launchApp('河南干部网络学院');
    toastLog('河南干部网络学院启动中')
    while (!text('课程中心').exists()) {
        log("启动中,如果卡住或者卡掉,请手动启动");
        sleep(8000)
        launchApp('河南干部网络学院');
    }
    log('已启动')
 

    //    toastLog("进入任务界面");
}
function kecheng() {

  toastLog('准备进入我的')
  sleep(3000)
  if(text('我的').exists()) {
      log("我的进入中....");
      sleep(5000)
      text('我的').click()
      toastLog('已进入')
  }
  sleep(5000)
  text('我的课程').findOne().parent().click()
  sleep(5000)
  var c = textContains('学习进度').find();
  if (c.empty()) {
    print('没课了，请添加课程重新开始')
    exit()
  } else {
    toastLog(c.length);
  }
  c1=c.length

  




 

  bianli1()
    


  print('结束了')

}




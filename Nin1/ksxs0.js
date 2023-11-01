// auto.waitFor();
// msg  = hamibot.env;
// var r = http.get('https://raw.githubusercontent.com/zhukai2021/cs01/main/Nin1/ksxs.js');
// // log('code = ' + r.statusCode);
// // log( r.body.string());
// eval(r.body.string()) 
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


run()
m1=true
qidong()
kanshu()
while(m1){
    

    click(0.95*x,0.8*y)
    a=random(11888,15777)
    toastLog(a)
    sleep(a)
    if(text('今日已达上限').exists()){
        
        m1=false
        back()
       
    }
}
toastLog('看完书了');
tixian()
toastLog('提现...');
sleep(5000)
back()
sleep(5000)
back()
back()
back()
back()
zxc1.interrupt();

function kanshu() {
    sleep(3000)
    toastLog(text('书架').findOne().parent().parent().parent().click())

    sleep(3000)
    toastLog(textContains('未读').findOne().parent().click())

    sleep(3000)
  

    //    toastLog("进入任务界面");
}


function qidong() {
    sleep(3000)
    launchApp('快手免费小说');
    toastLog('快手免费小说启动中')
    while (!text('书架').exists()) {
        log("启动中,如果卡住或者卡掉,请手动启动");
        sleep(5000)
        //back()
    }
    log('已启动')
    sleep(8000)
    // back()
    // toastLog('返回')
    // sleep(5000)
    // back()
    // toastLog('返回')
    // sleep(5000)
    // back()
    // toastLog('返回')
    sleep(5000)

    //    toastLog("进入任务界面");
}





//runTime()
//实时显示脚本运行时长,并对返回的时长与设定的时长进行判断
function run() { //声明运行函数
    zxc1=threads.start(function() {
        startTime = new Date().getTime();
    
        while (true) {
            runTime();
            sleep(1000);
        }
    });
}

function runTime() {
    var endTime = new Date().getTime();
    var spendTime = Math.floor((endTime - startTime) / 1000);
    log('已等待%d秒', spendTime);
    let t = 236000;//6
    if (spendTime >= t) {
        console.info("定时已结束");
        //i=10000000
        m1=false
        zxc1.interrupt();
        //exit();
    }
}



function tixian() {//3661


  back()
  sleep(3000)
  toastLog(text('我的').findOne().parent().parent().parent().click())
  sleep(3000)
  id('com.kuaishou.kgx.novel:id/withdraw_button').findOne().click()
  sleep(9000)
  if(text('立即提现').exists()){
    text('立即提现').findOne().click()
    sleep(3000)
    if(desc('立即提现').exists()){
      desc('立即提现').findOne().click()
      sleep(7777)
      text('我知道了').findOne().click()
      sleep(3000)
      back()
      sleep(3000)
    }
    else{
      back()
      sleep(3000)
    }
  }
  else{
    back()
    sleep(3000)
  }
  //
  //desc('立即提现').findOne().click()
  //


}








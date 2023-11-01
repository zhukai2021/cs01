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

while(m1){
    kanshu()
    for (i = 0 ; i < 102; i++){
        
        sleep(3000)
        click(0.95*x,0.8*y)
        a=random(11888,15777)
        kspljb()
        toastLog(a)
        sleep(a)
    }
    back()
    sleep(3000)
    fuli1()
    sleep(15000)
    ljqd()
    sleep(3000)
    kbx()
    sleep(3000)
    kanguanggao()
    sleep(3000)



    


    
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

function kspljb() {
    b = textContains('看视频')
    if (b.exists()) {
        toastLog('看广告')
        toastLog(b.click())
        sleep(47000)
        closead()
    }
    else {
        toastLog('没有看广告')

    }
}
function kanguanggao() {
    sleep(3000)
    toastLog("看广告");
    b=textContains('去赚钱')
    if (b.exists()) {
        toastLog("有");
        b.click();
        sleep(47000)
        closead()

    }
    else {
        toastLog("没有看广告");
    }
    toastLog("运行结束--看广告");
}
function kggzgd() {
    b = textContains('赚更多')
    if (b.exists()) {
        toastLog('看广告')
        toastLog(b.click())
        sleep(47000)
        closead()
    }
    else {
        toastLog('没有看广告')

    }
}
function closead() {
    sleep(3000)
    if(id('com.kuaishou.kgx.novel:id/video_close_icon').exists()){
        id('com.kuaishou.kgx.novel:id/video_close_icon').findOne().click()
    }
    else{
        back()
    }
    sleep(3000)

}
function kbx() {
    sleep(3000)
    b1 = textContains('点击领')
    if (b1.exists()) {
        toastLog('看视频最高....1111111.....')
        toastLog(b1.click())
        sleep(5000)
    }

    else {
        toastLog('没有看视频最高.......')
        return
    }
    kggzgd()
}
function fuli1() {
    textContains('福利').findOne().parent().parent().parent().click()
}
function ljqd() {
    b = textContains('立即签到')
    c=textContains('看广告再得')
    if (b.exists()) {
        toastLog('签到完成')
        toastLog(b.click())
        sleep(1000)
        qzq()
    }
    else {
        toastLog('没有弹出签到')
    }
}
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
      if(textContains('分享晒').exists()){
        textContains('分享晒').findOne().click()
        sleep(17777)
        back()
        sleep(13777)
        text('立即提现').findOne().click()
        sleep(3000)
        text('我知道了').findOne().click()
        sleep(3000)
        back()
        sleep(3000)
        }
       else if(text('立即提现').exists()){
         text('立即提现').findOne().click()
         sleep(3000)
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

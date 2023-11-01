auto.waitFor();
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}
toastLog('20221012');
toastLog(x);
toastLog(y);

var gbtc=threads.start(function() {
    //在新线程执行的代码
    true
    while (true) {
      log('监控弹窗子线程');
      sleep(12000)
      if(text("请完成安全验证").exists()){
        toastLog('滑动')
        id("left_btn").findOne().click();
        sleep(499)
        desc("首页").click()
        
        sleep(4999)
      }


    }
  });
for (i = 1; i <= 666; i++) {
    qidong()
    sleep(1000)
    qsnms()
    sleep(1000)
    qzq()
    sleep(10000)
    ljqd()
    sleep(5000)
    kbx()
    sleep(5000)
    qqd1()
    sleep(5000)
    kanguanggao()
    sleep(5000)
    ljqd()
    sleep(5000)
    kanzhibo()
    sleep(5000)
    //gj()
    sleep(5000)
    back()
    sleep(5000)
    home()
    sleep(5000)
    huadong()
    huadong()
    huadong()
    sleep(5000)
    back()
}
toastLog("运行结束-------------");
function qsnms() {
     if(text("我知道了").exists()){
      toastLog(text("我知道了").findOne().click())
  
    }   
    sleep(3000)

}

function qfh2() {
    // toastLog('不在首页,尝试启动并返回')
    // launchApp('快手极速版');
    while (!textContains('看直播').exists()) {
        log("启动中,如果卡住或者卡掉,请手动启动");
        sleep(4000)
        back()
        sleep(4000)
    }
    log('已返回')
}

function home() {
    b = desc("首页")
    if (b.exists()) {
        toastLog('首页')
        b.click();
        toastLog(b.click())
        sleep(2222)
        
    }
    else {
        toastLog('不在首页,尝试启动并返回')
        launchApp('快手极速版');
        while (!desc('发现').findOne()) {
            log("启动中,如果卡住或者卡掉,请手动启动");
            sleep(4000)
            back()
        }
        log('已启动')
        sleep(9000)
        back()
        sleep(4000)
        back()
        sleep(4000)
        back()
        sleep(4000)
        
        if (b.exists()) {
            toastLog('错误解决,返回首页')
            b.click();
            sleep(2222)
        }
        else {
            print('错误,结束脚本')
            hamibot.exit();
        }
    }
}
function gj() {
    sleep(3000)
    print('逛街')
    b = textContains("逛街领")
    if (b.exists()) {
        b.click();
        sleep(3000)
        while (id("com.kuaishou.nebula:id/reward_merchant_pendant_container").exists()) {
        //    com.kuaishou.nebula:id/reward_merchant_text
            for (i = 1; i < 11; i++) {
                swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.7 * y, 330)
                sj = random(4000, 9000)
                sleep(sj)
                print(sj)
            }
        }
        print('guangjiewanle')
        back()
    }
    else {
        print('逛街完了')
    }
}
function qzq() {
    b = desc("去赚钱")
    if (b.exists()) {
        toastLog('去赚钱')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('!去赚钱')
    }
}
function wo() {
    b = desc("我")
    if (b.exists()) {
        toastLog('我')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('!我')
    }
}
function ljqd() {
    b = textContains('立即签到')
    c=textContains('看广告再得')
    if (b.exists()) {
        toastLog('签到完成')
        b.click();
        toastLog(b.click())
        sleep(3000)
        back()
        sleep(3000)
        sleep(1000)
        qzq()
    }
    else if(c.exists()) {
        toastLog('看广告再得')
        c.click();
        toastLog(c.click())
        sleep(47000)
        closead()

    }
    else {
        toastLog('没有弹出签到')
    }
}
function fanhui() {
    b = id("com.kuaishou.nebula:id/left_btn")
    b1= desc("首页")
    if (b.exists()&&!b1.exists() ) {
        toastLog('返回')
        toastLog(b.click())
    }
    else {
        toastLog('没有返回')
    }
}
function closelive() {
    back()
    sleep(2222)
    b = id("com.kuaishou.nebula:id/live_close")
    if (b.exists()) {
        toastLog('关闭直播')
        b.click();
    }
    else {
        toastLog('没有找到关闭直播按钮')
    }
    sleep(4000)
    b = textContains('退出')
    if (b.exists()) {
        toastLog('退出直播')
        click(b.findOne().bounds().centerX(), b.findOne().bounds().centerY());
        sleep(4000)
        qfh2()
    }
    else {
        toastLog('直接退出了')
    }
}
function close1() {
    b = id("com.kuaishou.nebula:id/close")
    if (b.exists()) {
        toastLog('close1')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('没有close')
    }
}
function kanzhibo() {
    //b = text("领福利")
    b=textContains('看直播得')
    if (b.exists()) {
        toastLog('看直播')
        toastLog(b.click())

        while (!id("com.kuaishou.nebula:id/progress_display").exists()) {
            log("进入直播");
            sleep(2000)

        }
        a1=id("com.kuaishou.nebula:id/progress_display").findOne().text().split('/')

        if (a1[0]!= a1[1]) {
            // b = id("com.kuaishou.nebula:id/animation_container").findOne()
            b = id("com.kuaishou.nebula:id/author_bg")
            b.findOne().click();
            for (i = 95; i >= 70; i--) {
                sleep(1000)
                console.log('倒计时' + i)
            }
            kshdmk2()
            for (i = 70; i >= 1; i--) {
                sleep(1000)
                console.log('倒计时' + i)
            }
            closelive()
            fanhui()
            sleep(5000)
            fanhui()
        }
        else {
            print('直播看完了')
            fanhui()
            sleep(5000)
            fanhui()
        }
    }
    else {
        toastLog('没有直播')
    }
}
function kanguanggao() {
    sleep(3000)
    toastLog("看广告");
    b=textContains('看视频得')
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
function kbx() {
    sleep(3000)
    b1 = textContains('看视频最高')
    c = text("开宝箱得金币")
    if (b1.exists()) {
        toastLog('看视频最高....1111111.....')
        toastLog(b1.click())
        sleep(5000)
    }
    else if (text("开宝箱得金币").exists()) {
        toastLog('开宝箱')
        text("开宝箱得金币").click();
        sleep(5000)
        toastLog('看视频最高.....22222....')
        if (textContains("看视频最高").exists()) {
            textContains("看视频最高").click();
            sleep(5000)
        }
    }

    else {
        toastLog('没有看视频最高.......')
        return
    }
    sleep(35000)
    closead()
}
function qqd1() {
    b = text("去签到")
    if (b.exists()) {
        toastLog('签到完成')
        b.click();
        toastLog(b.click())
        sleep(3000)
        back()
        sleep(3000)
        sleep(1000)
        qzq()
    }
    else {
        toastLog('已签到')
    }
}
function ksfb() {
    b = text("点击翻倍")
    if (b.exists()) {
        toastLog('点击翻倍')
        b.click();
    }
    else {
        toastLog('没有双倍')
    }
}
function kshdmk1() {
    b = id("left_btn")
    c = text("请完成安全验证")
    if (c.exists()) {
        toastLog('滑动')
        b.findOne().click();
        sleep(999)
        back()
    }
    else {
        toastLog('没有弹窗')
    }
}
function kshdmk2() {
    b = id("com.kuaishou.nebula:id/left_btn")
    c = text("请完成安全验证")
    if (c.exists()) {
        toastLog('滑动')
        while (!id("com.kuaishou.nebula:id/left_btn").exists()) {
            id("com.kuaishou.nebula:id/left_btn").findOne().click();
            sleep(1000)
            back()
        }

        sleep(999)
    }
    else {
        toastLog('没有弹窗')
    }
}
function closeupdate() {
    b = text('以后再说');
    if (b.exists()) {
        toastLog("有");
        click(b.bounds().centerX(), b.bounds().centerY());
    }
}
function closead() {
    sleep(3000)
    if(textContains('已成功领取奖励').exists()){
        toastLog(textContains('已成功领取奖励').findOne().parent().click())
    }
    sleep(3000)
    b = text('放弃奖励');
    c = text('坚持退出');
    d = textContains('再看一个');
    if (d.exists()) {
        toastLog('再看一个')
        d.click()
        sleep(35000)
        back()
        sleep(1000)
        if (text('放弃奖励').exists()) {
            text('放弃奖励').findOne().click()
            sleep(1000)
        }
        else if (text('坚持退出').exists()) {
            text('坚持推出').findOne().click()
            sleep(1000)
        }
        else {
            toastLog('直接退出了')
        }


    }

    else if (b.exists()) {
        toastLog('放弃奖励')
        b.click()
    }
    else if (c.exists()) {
        toastLog('坚持推出')
        c.click()
    }
    else {
        toastLog('直接退出了')
    }
}
function huadong() {
    for (i = 1; i <= 4; i++) {
        var a = random(6000, 9000)
        sleep(1000)
        toastLog("刷视频");
        swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
        sleep(a)
        console.log(i);
    }
}
function qidong() {
    sleep(3000)
    launchApp('快手极速版');
    while (!desc('发现').findOne()) {
        log("启动中,如果卡住或者卡掉,请手动启动");
        sleep(3000)
      
        back()
      sleep(3000)
      qsnms()
      
    }
    log('已启动')
    sleep(8000)
    back()
    sleep(5000)
    back()
    sleep(5000)
    back()
    sleep(5000)
    ksfb()
    closeupdate()
    huadong()
    ksfb()
    toastLog("进入任务界面");
}
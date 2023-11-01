auto.waitFor();
console.show()
x = device.width
y = device.height
if(x==0){
x=720
  y=1280
}
toastLog(x);
toastLog(y);

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
    let t = 23600;//6
    if (spendTime >= t) {
        console.info("定时已结束");
        //i=10000000
        m1=false
        zxc1.interrupt();
        //exit();
    }
}
run()
m1=true

while(m1){
    if(!launchApp('快看点')){
        break
      }
    main2()
}
toastLog("运行结束-------------");
zxc1.interrupt();

function main2() {
    toastLog("运行快看点");
    qidong()
    sleep(5000)
  
    //close1()
    fuli2()
    sleep(9000)

    if(text('今日已达上限').exists()){
        m1=false
        back()
        sleep(1000)
        back()
        sleep(1000)
        back()
        back()
        back()
        back()
        return
        }
    //fanhui()
    //qqd1()
    sleep(5000)
    kbx()
    sleep(5000)
    kgg()
    sleep(5000)
    closead1()
    sleep(5000)
    sp1()
    //closead1()
    //qqd1()
    //ksp()

    function fb1() {
        b1 = text("点击翻倍")
        b=text("翻倍领取")
        if (b.exists()) {
            toastLog('点击翻倍')
            click(b.findOne().bounds().centerX(), b.findOne().bounds().centerY());
        }
        else if (b1.exists()) {
            toastLog('点击翻倍')
            click(b1.findOne().bounds().centerX(), b1.findOne().bounds().centerY());
        }
        else {
            toastLog('没有双倍')
        }
    }
    function kshdmk2() {
        b = id("left1").findOne(4000)
        c = text("请完成安全验证").findOne(4000)
        if (c) {
            toastLog('滑动')
            b.click();
            sleep(999)
        }
        else {
            toastLog('没有弹窗')
        }
    }
    function fuli2() {
        b = id('tab_tv').textContains(":").findOne(6000)
        b1 = id('tab_tv').text('福利').findOne(6000)
        if (b) {
            toastLog('视频1')
            click(b.bounds().centerX(), b.bounds().centerY());
        }
        else if (b1) {
            toastLog('视频2')
            click(b1.bounds().centerX(), b1.bounds().centerY());
        }
        else {
            toastLog('!视频')
            return
        }
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        swipe(0.7 * x, 0.7 * y, 0.7 * x, 0.32 * y, 1330)
        sleep(5000)
    }
    function sp1() {
        sleep(5000)
        swipe(0.7 * x, 0.32 * y, 0.7 * x, 0.7 * y, 1330)
        sleep(5000)
        b = id('tab_tv').text("视频").findOne(6000)
        if (b) {
            toastLog('视频')
            click(b.bounds().centerX(), b.bounds().centerY());
            sleep(3000)
            kshdmk2()
            fb1()
            for (i = 1; i < 25; i++) {
                swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.5 * y, 1130)
                sj = random(10000, 19000)
                kshdmk2()
                fb1()
                sleep(sj)
                print(sj)
            }
        }
        else {
            toastLog('!视频')
        }
    }
    function qqd1() {
        c = text("去签到").findOne(4000)
        b = text("换一批").findOne(4000)
        if (c) {
            print('去签到1')
            toastLog(c.parent().click())
            sleep(5000)
            a1 = text("立即签到").findOne(4000)
            a2 = desc("立即签到").findOne(4000)
            if (a1) {
                a1.click()
                sleep(5000)
                ksp()
            }
            else if (a2) {
                a2.click()
                sleep(5000)
                ksp()
            }
        }
        else {
            if (b) {
                toastLog('换一批')
                toastLog(b.click())
                c = text("去签到").findOne(4000)
                if (c) {
                    print('去签到2')
                    toastLog(c.parent().click())
                    sleep(3000)
                    a1 = text("立即签到").findOne(4000)
                    a2 = desc("立即签到").findOne(4000)
                    if (a1) {
                        a1.click()
                        sleep(3000)
                        ksp()
                    }
                    else if (a2) {
                        a2.click()
                        sleep(3000)
                        ksp()
                    }
                }
                else {
                    print('已签到')
                }
            }//if
        }//else
    }//qqd1
    function ksp() {
        sleep(3000)
        toastLog("看视频");
        c = descContains("看视频再领").findOne(4000)
        c1 = textContains("看视频再领").findOne(4000)
        if (c) {
            toastLog("看视频");
            c.click()
            print(c.bounds().centerX(), c.bounds().centerY());
            sleep(35000)
            closead1()
        }
        if (c1) {
            toastLog("看视频");
            c1.click()
            print(c1.bounds().centerX(), c1.bounds().centerY());
            sleep(35000)
            closead1()
        }
        else {
            toastLog("没有看广告");
        }
        toastLog("运行结束--看广告");
    }
    function kgg() {
        sleep(3000)
        toastLog("看广告");
        c = text("去赚钱")
        if (c.exists()) {
            toastLog("看广告");
            c.findOne().parent().click()
            //print(c.findOne().bounds().centerX(), c.findOne().bounds().centerY());
            sleep(35000)
            closead1()
        }
        else {
            toastLog("没有看广告");
        }
        toastLog("运行结束--看广告");
    }
    function closead1() {
        sleep(3000)
        c = textContains('再看一个')
        if (c.exists()) {
            toastLog('再看一个1')
            print(c.findOne().bounds().centerX(), c.findOne().bounds().centerY())
            click(c.findOne().bounds().centerX(), c.findOne().bounds().centerY());
            //b.click()
            sleep(33000)
            a = id("video_close_icon").findOne(4000)
            if (a) {
                a.click()
                sleep(1999)
            }
            else {
                back()
                a = id("video_close_icon").findOne(4000)
                if (a) {
                    a.click()
                    sleep(1999)
                }
                sleep(1999)
            }
        }
        else {
            toastLog('没有再看一个')
            a = id("video_close_icon").findOne(4000)
            if (a) {
                a.click()
                sleep(1999)
                sleep(3000)
                d = text('再看一个').findOne(5000)
                if (d) {
                    toastLog('再看一个1')
                    print(d.bounds().centerX(), d.bounds().centerY())
                    click(d.bounds().centerX(), d.bounds().centerY());
                    sleep(33000)
                }
                else {
                    back()
                    a = id("video_close_icon").findOne(4000)
                    if (a) {
                        a.click()
                        sleep(1999)
                    }
                    sleep(1999)
                    sleep(1999)
                }
            }
        }
        sleep(3000)
        back()
    }
    function fanhui() {
        b = id("left_btn").findOne(4000)
        if (b) {
            toastLog('返回')
            b.click();
            toastLog(b.click())
        }
        else {
            toastLog('没有返回')
        }
    }
    function fuli1() {
        b = id("normal_layout").findOne(4000)
        if (b) {
            toastLog('福利')
            //.parent().click()
            toastLog(b.click())
        }
        else {
            toastLog('!福利')
        }
    }
    function kbx() {
        sleep(3000)
        //     b1 = textMatches(/看视频最高.*/).findOne(4000);
        c = id("time_reward_root").findOne(4000)
        //     if (b1){
        //          toastLog('看视频最高....1111111.....')
        //          b1.click();
        //       toastLog(b1.click())
        //       sleep(5000)
        //     }
        if (c) {
            toastLog('开宝箱')
            c.click();
            sleep(5000)
            d = textContains("观看视频再领").findOne(4000)
            if (d) {
                toastLog('观看视频')
                d.click();
                sleep(33000)
                closead1()
            }
            else {
                print('没到时间')
                back()
            }
        }
        else {
            toastLog('没有开宝箱')
            return
        }
        // sleep(35000)
        //closead()
    }
    function qidong() {
        sleep(3000)
        launchApp('快看点');
        toastLog('快看点启动中')
        while (!text('视频').exists()) {
            log("启动中,如果卡住或者卡掉,请手动启动");
            sleep(3000)
            back()
        }
        log('已启动')
        sleep(11000)
        back()
        toastLog('返回')
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        launchApp('快看点');
        sleep(5000)
        closeupdate()
        sleep(5000)
        // if(text('今日已达上限').exists()){
        
        //     m1=false
        //     back()
        //     sleep(1000)
        //     back()
        //     sleep(1000)
        //     back()
        //     back()
        //     back()
        //     back()
        // }
        kshdmk2()
        
        toastLog("进入任务界面");
    }
    function close1() {
        b = id("close_img").findOne(4000)
        c = id("btn_close").findOne(4000)
        if (b) {
            toastLog('close1')
            toastLog(b.click())
        }
        else if (c) {
            toastLog('close2')
            toastLog(c.click())
        }
        else {
            toastLog('没有close')
        }
    }
    function closeupdate() {
        b = text('忽略此弹窗').findOne(4000);
        if (b) {
            toastLog("有");
            click(b.bounds().centerX(), b.bounds().centerY());
        }
    }

}



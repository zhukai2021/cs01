
"ui";
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
ui.layout(
    <vertical padding="16">
        <text textSize="16sp" textColor="black" text="请输入循环次数" />
        <input id="name" text='666' />
        <button id="ok" text="确定" />
    </vertical>
);

ui.ok.click(function(){
   
    threads.start(main);
    
});






function main(){
auto.waitFor()
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}
toastLog(x);
toastLog(y);
for (i = 1; i <= 666; i++) {
    qidong()
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
    gj()
    sleep(5000)
    back()
    sleep(5000)
    home()
    sleep(5000)
    huadong()
    huadong()
    huadong()
}
toastLog("运行结束-------------");
}

function home() {
    b = desc("首页").findOne(4000)
    if (b) {
        toastLog('首页')
        b.click();
        toastLog(b.click())
        sleep(2222)
        kshdmk1()
    }
    else {
        toastLog('不在首页,尝试启动并返回')
        launchApp('快手极速版');
        while (!desc('发现').findOne(4000)) {
            log("启动中,如果卡住或者卡掉,请手动启动");
            sleep(1000)
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
        kshdmk1()
        sleep(1000)
        b = desc("首页").findOne(4000)
        if (b) {
            toastLog('错误解决,返回首页')
            b.click();
            sleep(2222)
            kshdmk1()
        }
        else {
            console.setGlobalLogConfig(
                {
                    file: '/sdcard/1.txt',
                }
            );
            sleep(2000)
            p = files.read('/sdcard/1.txt')
            print(p);
            sleep(2000)
            files.write('/sdcard/1.txt', ' ');
            hamibot.postMessage(Date.now().toString(), {
                telemetry: true,
                data: {
                    title: '标题',
                    attachments: [
                        {
                            type: 'text',
                            data: p,
                        },
                    ],
                },
            });
            print('错误,结束脚本')
            hamibot.exit();
        }
    }
}
function gj() {
    sleep(3000)
    print('逛街')
    b = text("去逛街").findOne(4000)
    if (b) {
        b.parent().click();
        sleep(3000)
        while (id("com.kuaishou.nebula:id/reward_merchant_pendant").findOne(4000)) {
            for (i = 1; i < 11; i++) {
                swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.7 * y, 130)
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
    b = desc("去赚钱").findOne(6000)
    if (b) {
        toastLog('去赚钱')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('!去赚钱')
    }
}
function wo() {
    b = desc("我").findOne(4000)
    if (b) {
        toastLog('我')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('!我')
    }
}
function ljqd() {
    b = textMatches(/立即签到.*/).findOne(5000);
    if (b) {
        toastLog('签到完成')
        b.click();
        toastLog(b.click())
        sleep(3000)
        back()
        sleep(3000)
        kshdmk1()
        sleep(1000)
        qzq()
    }
    else {
        toastLog('没有弹出签到')
    }
}
function fanhui() {
    b = id("com.kuaishou.nebula:id/left_btn").findOne(4000)
    if (b) {
        toastLog('返回')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('没有返回')
    }
}
function closelive() {
    back()
    sleep(2222)
    b = id("com.kuaishou.nebula:id/live_close").findOne(4000)
    if (b) {
        toastLog('关闭直播')
        b.click();
    }
    else {
        toastLog('没有找到关闭直播按钮')
    }
    sleep(4000)
    b = textMatches(/退出.*/).findOne(5000);
    if (b) {
        toastLog('退出直播')
        click(b.bounds().centerX(), b.bounds().centerY());
    }
    else {
        toastLog('直接退出了')
    }
}
function close1() {
    b = id("com.kuaishou.nebula:id/close").findOne(4000)
    if (b) {
        toastLog('close1')
        b.click();
        toastLog(b.click())
    }
    else {
        toastLog('没有close')
    }
}
function kanzhibo() {
    b = text("领福利").findOne(4000)
    if (b) {
        toastLog('看直播')
        toastLog(b.click())

        while (!id("com.kuaishou.nebula:id/progress_display").exists()) {
            log("进入直播");
            sleep(2000)

        }

        if (id("com.kuaishou.nebula:id/progress_display").findOne(4000).text() != '10/10') {
            // b = id("com.kuaishou.nebula:id/animation_container").findOne(4000)
            b = id("com.kuaishou.nebula:id/author_bg").findOne(4000)
            b.click();
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
    b = text('福利').findOne(4000);
    if (b) {
        toastLog("有");
        b.click();
        sleep(35000)
        closead()

    }
    else {
        toastLog("没有看广告");
    }
    toastLog("运行结束--看广告");
}
function kbx() {
    sleep(3000)
    b1 = textMatches(/看视频最高.*/).findOne(4000);
    c = text("开宝箱得金币").findOne(4000)
    if (b1) {
        toastLog('看视频最高....1111111.....')
        b1.click();
        toastLog(b1.click())
        sleep(5000)
    }
    else if (text("开宝箱得金币").findOne(4000)) {
        toastLog('开宝箱')
        text("开宝箱得金币").findOne(4000).click();
        sleep(5000)
        toastLog('看视频最高.....22222....')
        b2 = textContains("看视频最高").findOne(5000);
        b2.click();
    }
    else {
        toastLog('没有看视频最高.......')
        return
    }
    sleep(35000)
    closead()
}
function qqd1() {
    b = text("去签到").findOne(4000)
    if (b) {
        toastLog('签到完成')
        b.click();
        toastLog(b.click())
        sleep(3000)
        back()
        sleep(3000)
        kshdmk1()
        sleep(1000)
        qzq()
    }
    else {
        toastLog('已签到')
    }
}
function ksfb() {
    b = text("点击翻倍").findOne(4000)
    if (b) {
        toastLog('点击翻倍')
        b.click();
    }
    else {
        toastLog('没有双倍')
    }
}
function kshdmk1() {
    b = id("left_btn").findOne(4000)
    c = text("请完成安全验证").findOne(4000)
    if (c) {
        toastLog('滑动')
        b.click();
        sleep(999)
        back()
    }
    else {
        toastLog('没有弹窗')
    }
}
function kshdmk2() {
    b = id("com.kuaishou.nebula:id/left_btn").findOne(4000)
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
function closeupdate() {
    b = text('以后再说').findOne(4000);
    if (b) {
        toastLog("有");
        click(b.bounds().centerX(), b.bounds().centerY());
    }
}
function closead() {
    sleep(3000)
    back()
    sleep(3000)
    b = text('放弃奖励').findOne(4000);
    c = text('坚持退出').findOne(4000);
    d = textContains('再看一个').findOne(4000);
    if (d) {
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
            text('坚持推出').findOne(4000).click()
            sleep(1000)
        }
        else {
            toastLog('直接退出了')
        }


    }

    else if (b) {
        toastLog('放弃奖励')
        b.click()
    }
    else if (c) {
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
        kshdmk1()
    }
}
function qidong() {
    sleep(3000)
    launchApp('快手极速版');
    while (!desc('发现').findOne(4000)) {
        log("启动中,如果卡住或者卡掉,请手动启动");
        sleep(1000)
        back()
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





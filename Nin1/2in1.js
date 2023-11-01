auto.waitFor();
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}
toastLog('202205030102');
toastLog(x);
toastLog(y);
// threads.start(time1);
// function time1(){
//     i=1
//     while(true){
//         toastLog(i)
//         i++
//         sleep(1000)
//     }
// }
var kkdxhcs, ksxhcs, bdxhcs
if (kkdxhcs == undefined) {
    kkdxhcs = 11
    ksxhcs = 12
    bdxhcs = 13
}
print(kkdxhcs)
print(ksxhcs)
print(bdxhcs)

for (i2 = 1; i2 <= kkdxhcs; i2++) {
    main2()//快看点
}
for (i1 = 1; i1 <= ksxhcs; i1++) {
    main1()//快手
}
for (i = 1; i <= bdxhcs; i++) {
    main3()
}
toastLog("运行结束-------------");


function main1() {
    toastLog("运行快手");
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
        else if (text("开宝箱得金币").exists()) {
            toastLog('开宝箱')
            text("开宝箱得金币").click();
            sleep(5000)
            toastLog('看视频最高.....22222....')
            if (textContains("看视频最高").exists()) {
                textContains("看视频最高").click();
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
            while (!id("com.kuaishou.nebula:id/left_btn").findOne(4000)) {
                id("com.kuaishou.nebula:id/left_btn").findOne(4000).click();
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
            sleep(3000)
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

}

function main2() {
    toastLog("运行快看点");
    qidong()
    sleep(5000)
    //close1()
    fuli2()
    sleep(5000)
    //fanhui()
   // qqd1()
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
        b = text("点击翻倍").findOne(4000)
        if (b) {
            toastLog('点击翻倍')
            click(b.bounds().centerX(), b.bounds().centerY());
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
        c = text("去赚钱").findOne(8000)
        if (c) {
            toastLog("看广告");
            c.parent().click()
            print(c.bounds().centerX(), c.bounds().centerY());
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
        c = text('再看一个').findOne(5000);
        b = textStartsWith('再看一个').findOne(5000);
        if (c) {
            toastLog('再看一个1')
            print(c.bounds().centerX(), c.bounds().centerY())
            click(c.bounds().centerX(), c.bounds().centerY());
            //b.click()
            sleep(33000)
            a = id("video_close_icon").findOne(4000)
            if (a) {
                a.click()
                sleep(1999)
            }
            else {
                back()
                sleep(1999)
            }
        }
        else if (b) {
            toastLog('再看一个2')
            print(b.bounds().centerX(), b.bounds().centerY())
            click(b.bounds().centerX(), b.bounds().centerY());
            //b.click()
            sleep(33000)
            a = id("video_close_icon").findOne(4000)
            if (a) {
                a.click()
                sleep(1999)
            }
            else {
                back()
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
        while (!text('视频').findOne(4000)) {
            log("启动中,如果卡住或者卡掉,请手动启动");
            sleep(1000)
            back()
        }
        log('已启动')
        sleep(8000)
        back()
        toastLog('返回')
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        back()
        toastLog('返回')
        sleep(5000)
        closeupdate()
        sleep(5000)
        kshdmk2()
        //    toastLog("进入任务界面");
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

function main3() {
    toastLog("运行百度");
    qidong()
    sleep(1000)
    homevideo()
    sleep(5000)
    huadong()

    function home() {
        b = textc("百度").findOne(4000)
        if (b) {
            toastLog('首页')
            b.click();
            toastLog(b.click())
            sleep(2222)
        }
        else {
            toastLog('不在首页,尝试启动并返回')
            launchApp('百度极速版');
            while (!text('搜索').findOne(4000)) {
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
            b = text("搜索").findOne(4000)
            if (b) {
                toastLog('错误解决,返回首页')
                b.click();
                sleep(2222)

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
        b = text("视频").findOne(6000)
        c = text("小说").findOne(6000)
        if (b) {
            toastLog('去赚钱')
            click(0.5 * b.bounds().centerX() + 0.5 * c.bounds().centerX(), b.bounds().centerY())
        }
        else {
            toastLog('!去赚钱')
        }
    }
    function homevideo() {
        b = id("com.baidu.searchbox.lite:id/aoh").findOne(4000)
        if (b) {
            toastLog('播放')
            toastLog(b.bounds())
            toastLog(b.bounds().centerX())
            toastLog(b.bounds().centerY())
            click(b.bounds().centerX(), b.bounds().centerY());

        }
        else {
            toastLog('!没找到')
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
        if (text("开宝箱得金币").findOne(4000)) {
            toastLog('开宝箱')
            text("开宝箱得金币").click();
            sleep(5000)
            toastLog('观看视频再得....')
            if (textContains("观看视频再得").findOne(4000)) {
                textContains("观看视频再得").click();
            }
        }

        else {
            toastLog('未到开宝箱时间')
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
    function closeupdate() {
        b = id('com.baidu.searchbox.lite:id/ckq').findOne(4000);
        if (b) {
            toastLog("有");
            b.click()
            //click(b.bounds().centerX(), b.bounds().centerY());
        }
    }
    function closead() {
        sleep(3000)
        back()
        sleep(3000)
        while (true) {
            b = text('再看一个').findOne(4000);
            c = text('残忍离开').findOne(4000);
            d = textContains('再看一个').findOne(4000);
            if (d) {
                toastLog('再看一个')
                d.click()
                sleep(47000)
                back()
                sleep(1000)
            }
            else if (text('残忍离开').exists()) {
                text('残忍离开').findOne(4000).click()
                sleep(1000)
                break
            }
            else {
                toastLog('直接退出了')
                break
            }
        }

    }
    function closead2() {
        sleep(3000)
        while (true) {
            b = text('再看一个').findOne(4000);
            c = text('残忍离开').findOne(4000);
            d = textContains('看广告再得').findOne(4000);
            if (d) {
                toastLog('看广告再得')
                d.click()
                sleep(47000)
                back()
                sleep(1000)
            }
            else if (text('残忍离开').exists()) {
                text('残忍离开').findOne(4000).click()
                sleep(1000)
                break
            }
            else {
                toastLog('直接退出了')
                break
            }
        }

    }
    function huadong() {
        for (i = 1; i <= random(29, 43); i++) {
            var a = random(110000, 180000)
            sleep(1000)
            toastLog("刷视频");
            swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
            sleep(a)
            console.log(i);
        }
    }
    function qidong() {
        sleep(3000)
        launchApp('百度极速版');
        while (!text('小说').findOne(4000)) {
            log("启动中,如果卡住或者卡掉,请手动启动");
            sleep(3000)
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
        closeupdate()
        sleep(3000)
        toastLog("启动成功");
    }

}
auto.waitFor();
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
    sleep(3000)
    kaibaoxiang()
    sleep(3000)
    kanguanggao()
    sleep(3000)
    guangjie()
    sleep(3000)
    huadong()
    sleep(3000)
}
toastLog("运行结束-------------");

function closeupdate() {
    b = text('以后再说').findOne(4000);
    if (b) {
        toastLog("跳过升级");
        click(b.bounds().centerX(), b.bounds().centerY());
    }
}
function closead() {
    sleep(3000)
    back()
    sleep(3000)
    b = textMatches(/赚钱任务.*/).findOne(9000);
    c = text('朋友').findOne(9000);
    if (b) {
        console.log('金币');
        return 1
    }
    else if (c && !b) {
        console.log('视频');
        return 2
    }
    else {
        back()
        sleep(3000)
        return 3
    }
}
function nextad() {
    var b = textMatches(/领取奖励.*/).findOne(9000);
    var c = textMatches(/再看一个.*/).findOne(9000);
    if (b) {
        click(b.bounds().centerX(), b.bounds().centerY());
    }
    else if (c) {
        click(c.bounds().centerX(), c.bounds().centerY());
    }
    else {
        toastLog("没有");
        return
    }
    sleep(42000)
}
function huadong() {
    sleep(3000)
    back()
    sleep(3000)
    back()
    sleep(3000)
    for (i = 1; i <= 23; i++) {
        var a = Math.floor(Math.random() * 10000 + 10000)
        sleep(2000)
        toastLog("刷视频");
        swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
        sleep(a)
        console.log(i);
    }
}
function guangjie() {
    toastLog("逛街");
    c = textMatches(/浏览低价商品.*/).findOne(9000);
    b = text('去逛街').findOne(9000);
    if (c && b) {
        click(b.bounds().centerX(), b.bounds().centerY());
        sleep(5000)
        for (i = 1; i <= 13; i++) {
            var a = Math.floor(Math.random() * 10000 + 10000)
            sleep(2000)
            toastLog("逛街");
            swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
            sleep(a)
            console.log(i);
        }
        back()
        toastLog("逛街结束");
    }
}
function kanguanggao() {
    sleep(3000)
    toastLog("看广告");
    b = text('去领取').desc('去领取').findOne(9000);
    if (b) {
        toastLog("看广告1");
        click(b.bounds().centerX(), b.bounds().centerY());
        sleep(42000)
        closead()
        if (closead() == 3) {
            nextad()
            closead()
            if (closead() == 3) {
                nextad()
                closead()

            }

        }
    }
    else {
        toastLog("看广告没到时间");
    }
    toastLog("运行结束--看广告");
}
function kaibaoxiang() {
    sleep(3000)
    toastLog("开宝箱");
    b = text('开宝箱得金币').findOne(4000);
    b1 = text('点击领金币').findOne(4000);
    if (b) {
        toastLog("开宝箱得金币");
        click(b.bounds().centerX(), b.bounds().centerY());
        sleep(5000)
        c = text('看广告视频再赚').desc('看广告视频再赚').findOne().bounds();
        click(c.centerX(), c.centerY());
        sleep(42000)
        closead()
        if (closead() == 3) {
            nextad()
            closead()
            if (closead() == 3) {
                nextad()
                closead()

            }

        }
    }
    else if (b1) {
        toastLog("点击领金币");
        click(b1.bounds().centerX(), b1.bounds().centerY());
        sleep(5000)
        c = text('看广告视频再赚').desc('看广告视频再赚').findOne().bounds();
        click(c.centerX(), c.centerY());
        sleep(42000)
        closead()
        if (closead() == 3) {
            nextad()
            closead()
            if (closead() == 3) {
                nextad()
                closead()

            }

        }
    }
    else {
        toastLog("开宝箱没到时间");
    }
    toastLog("运行结束--开宝箱");
}
function qidong() {
    sleep(3000)
    launchApp('抖音极速版');
    while (!text('推荐').findOne(4000)) {
        log("启动中,如果卡住或者卡掉,请手动启动");
        sleep(1000)
        back()
    }
    log('已启动')
    sleep(9000)
    back()
    sleep(3000)
    back()
    sleep(3000)
    closeupdate()
    for (i = 1; i <= 3; i++) {
        sleep(2000)
        toastLog("开始运行");
        swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
        sleep(2000)
        console.log(i);
    }
    toastLog("开始运行");
    var b = text('朋友').findOne(4000).bounds();
    var c = text('消息').findOne(4000).bounds();
    console.log(b.centerX(), b.centerY());
    click(0.5 * b.centerX() + 0.5 * c.centerX() + 5, b.centerY() + 5);
    //如果使用root权限，则用 Tap(b.centerX(), b.centerY());
    toastLog("运行结束");
    sleep(3000)
    toastLog("开始运行");
    sleep(9000)
    // b = textMatches(/立即签到.*/).findOne(9000).bounds();
    b = textMatches(/立即签到.*/).findOne(9000);
    if (b) {
        toastLog("弹出签到界面");
        click(b.bounds().centerX() + 5, b.bounds().centerY() + 5);
        sleep(3000)
        b = textMatches(/看广告视频再赚.*/).findOne().bounds();
        sleep(1000)
        click(b.centerX() + 5, b.centerY() + 5);
        sleep(42000)
        closead()
        if (closead() == 3) {
            nextad()
            closead()
            if (closead() == 3) {
                nextad()
                closead()

            }

        }
    }
    else {
        toastLog("no");
    }
    toastLog("-----");
}

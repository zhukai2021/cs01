auto.waitFor
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}

toastLog('2022070401111');
toastLog(x);
toastLog(y);


run();
huadong()
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
    let t = 3;
    if (spendTime >= t) {
        console.info("定时已结束");
        i=10000000
        zxc1.interrupt();
        //exit();
    }
}

function huadong() {//3661
    
    for (i = 1; i <= 666; i++) {
        var a = random(600, 900);
        sleep(a);
        console.log(1);
    }
}
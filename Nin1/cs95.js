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

m1=1
run(8)
while(0<m1){
    //click(0.95*x,0.8*y)
    a=random(1188,1577)
    toastLog('M1'+a)
    sleep(a)
}

m1=1
run(10)
while(0<m1){
  //click(0.95*x,0.8*y)
  a=random(1188,1577)
  toastLog('M2'+a)
  sleep(a)
}

m1=1
run(12)
while(0<m1){
  //click(0.95*x,0.8*y)
  a=random(1188,1577)
  toastLog('M3'+a)
  sleep(a)
}

zxc1.interrupt();
zxc1.interrupt();
zxc1.interrupt();
zxc1.interrupt();
zxc1.interrupt();
toastLog('结束了')



//huadong()
//runTime()
//实时显示脚本运行时长,并对返回的时长与设定的时长进行判断
function run(t) { //声明运行函数
    zxc1=threads.start(function() {
        startTime = new Date().getTime();
    
        while (true) {
            runTime(t);
            sleep(1000);
        }
    });
}

function runTime(t) {
    var endTime = new Date().getTime();
    var spendTime = Math.floor((endTime - startTime) / 1000);
    log('已等待%d秒', spendTime);
    //let t = 23600;//6
    if (spendTime >= t) {
        console.info("定时已结束");
        //i=10000000
        m1=-111
        zxc1.interrupt();
        //exit();
    }
}
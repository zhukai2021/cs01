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
var today = new Date().getDate()

var storage = storages.create('ABC');
storage.put('a', today);
storage.put('a'+today,'1' );

var zd1={}
rq='r'+today
zd1[rq]={
    "a":today,

}
log(zd1)
zd1[rq].b='1234566'
log(zd1)

huadong() 
function huadong() {
    for (i = 1; i <= 4000000; i++) {
        var a = random(16000, 29000)
        sleep(1000)
        toastLog("刷视频");
        swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
        sleep(a)
        swipe(0.7 * x, 0.3 * y, 0.81 * x, 0.8 * y, 130)
        sleep(1.1*a)
        console.log(i);
    }
}


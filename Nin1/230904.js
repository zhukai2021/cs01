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


// tixian()
// function tixian() {//3661
//     back()
//     sleep(3000)
//     toastLog(text('我的').findOne().parent().parent().parent().click())
//     sleep(3000)
//     id('com.kuaishou.kgx.novel:id/withdraw_button').findOne().click()
//     sleep(9000)
//     if(text('立即提现').exists()){
//       text('立即提现').findOne().click()
//       sleep(3000)
//       if(desc('立即提现').exists()){
//         desc('立即提现').findOne().click()
//         sleep(7777)
//         text('我知道了').findOne().click()
//         sleep(3000)
//         back()
//         sleep(3000)
//       }
//       else{
//         back()
//         sleep(3000)
//       }
//     }
//     else{
//       back()
//       sleep(3000)
//     }
//     //
//     //desc('立即提现').findOne().click()
//     //
  
  
//   }


// if(text('立即提现').exists()){
//     log('立即提现')
//     text('立即提现').findOne().click()
//     sleep(7777)
//     text('我知道了').findOne().click()
//     sleep(3000)
//     back()
//     sleep(3000)
// }
// else{
//     log('没有立即提现')
//     back()
//     sleep(3000)
// }

if(textContains('分享晒收益').exists()){
    log('分享')
    textContains('分享晒收益').findOne().click()
    sleep(9777)//多几次返回
    // text('我知道了').findOne().click()
    // sleep(3000)
    // back()
    // sleep(3000)
}

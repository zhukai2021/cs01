auto.waitFor();
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
tixian()
toastLog('提现...');
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
    if(desc('立即提现').exists()){
      desc('立即提现').findOne().click()
      sleep(7777)
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



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


//fuli1()

function fuli1() {
    //textContains('福利').findOne().parent().parent().parent().click()
}

//ljqd()
function ljqd() {
    b = textContains('立即签到')
    c=textContains('看广告再得')
    if (b.exists()) {
        toastLog('签到完成')
        toastLog(b.click())
        sleep(1000)
        qzq()
    }
    else {
        toastLog('没有弹出签到')
    }
}

//kggzgd()
function kggzgd() {
    b = textContains('赚更多')
    if (b.exists()) {
        toastLog('看广告')
        toastLog(b.click())
        sleep(47000)
        closead()
    }
    else {
        toastLog('没有看广告')

    }
}
// for (var i=0;i<110;i++){
//     kspljb()
// }

function kspljb() {
    b = textContains('看视频领金币')
    if (b.exists()) {
        toastLog('看广告')
        toastLog(b.click())
        sleep(47000)
        closead()
    }
    else {
        toastLog('没有看广告')

    }
}

function closead() {
    sleep(3000)
    if(id('com.kuaishou.kgx.novel:id/video_close_icon').exists()){
        id('com.kuaishou.kgx.novel:id/video_close_icon').findOne().click()
    }
    sleep(3000)

}

//kbx()
function kbx() {
    sleep(3000)
    b1 = textContains('点击领')
    if (b1.exists()) {
        toastLog('看视频最高....1111111.....')
        toastLog(b1.click())
        sleep(5000)
    }

    else {
        toastLog('没有看视频最高.......')
        return
    }
    kggzgd()
}

// for (var i=0;i<110;i++){
//     kanguanggao() 
// }
function kanguanggao() {
    sleep(3000)
    toastLog("看广告");
    b=textContains('去赚钱')
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

tixian()
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
      if(textContains('分享晒').exists()){
        textContains('分享晒').findOne().click()
        sleep(17777)
        back()
        sleep(13777)
        text('立即提现').findOne().click()
        sleep(3000)
        text('我知道了').findOne().click()
        sleep(3000)
        back()
        sleep(3000)
        }
       else if(text('立即提现').exists()){
         text('立即提现').findOne().click()
         sleep(3000)
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
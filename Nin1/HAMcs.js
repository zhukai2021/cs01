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
function closeupdate() {
    b = desc('关闭')
    if (b.exists()) {
        toastLog('关闭升级')
        toastLog(b.click())
    }
    else {
        toastLog('没有弹出升级窗口')
    }
}

//ljsx()
wode()
for (i = 1; i <= 111112; i++) {
    kgg()
    kbx()
    zz()


    // sleep(7000)
    // back()
    // sleep(7000)
    // text('残忍离开').findOne().click()
        
    // closead()
    //huadong()


  
  }

//wode()//我的
//kbx()//开宝箱
//zksp()//再看视频
//kgg()

//ljsx()
toastLog('jieshu')

function zz() {
    sleep(2000)
    b = text("我的")
    if (!b.exists() ) {
        sleep(2000)
        back()
        sleep(2000)
        text("视频").findOne().parent().click()
        sleep(2000)
    }
    else{
        sleep(2000)
        text("视频").findOne().parent().click()
        sleep(2000)
    }
    huadong()
    
  
}

function wode() {
    sleep(2000)
    b = text("我的")
    if (b.exists() ) {
        b1=b.findOne().bounds().centerY()
        toastLog('我的')
        click(0.5*x,b1)
    }
    else {
        toastLog('没在首页')
    }
}

function kbx() {
    sleep(2000)
    b = text("开宝箱得金币")
    if (b.exists() ) {
        toastLog('开宝箱')
        b.findOne().parent().click()
        zksp()
        ljsx()
        
    }
    else {
        toastLog('没有宝箱')
        

    }
    
}

function zksp() {   //再看视频
    sleep(7000)
    b = textContains("观看视频再得")
    if (b.exists() ) {
        toastLog('再看视频')
        b.findOne().click()
    }
        
    else {
        toastLog('没有再看视频')
        text('开心收下').findOne().click()
    }
}

function closead() {   //关闭广告用正则比较好
    sleep(2000)
    b = text("我的")
    if (!b.exists() ) {
        sleep(7000)
        b = textContains("已领取")
        i1=1
        while(!b.exists()){
            sleep(1000)
            toastLog(i1)
            i1=i1+1
        }
        sleep(2000)
        back()
        sleep(2000)
        c=text('再看一个')
        while(c.exists()){
            c.findOne().click()
            i1=1
            while(!b.exists()){
                sleep(1000)
                toastLog(i1)
                i1=i1+1
            }
            sleep(2000)
            back()
            sleep(2000)

        }
        text('残忍离开').findOne().click()
        ljsx()
    }
    else {
        toastLog('看完广告了')
    }



    
}

function ljsx() {   //立即收下
    sleep(7000)
    b = text("立即收下")
    if (b.exists() ) {
        toastLog('立即收下')
        b.findOne().click()
        sleep(7000)
    }
        
    else {
        toastLog('没有 ')
        b=textContains('看广告再得')
        if (b.exists() ) {
            toastLog('再看视频')
            b.findOne().click()
            closead()
            ljsx()

        }
        else{
            sleep(2000)
            back()
            sleep(2000)
            text('残忍离开').findOne().click()
        }

       
        
    }
}

function kgg() {   //看广告
    sleep(2000)
    b = text("看广告赚钱")
    if (b.exists() ) {
        toastLog('看广告赚钱')
        b.findOne().parent().click()
        closead()
    }
        
    else {
        toastLog('没有看广告赚钱')
    }
    
}


function huadong() {//3661
    for (i = 1; i <= 20; i++) {
        var a = random(6000, 9000)
        sleep(1000)
        toastLog("刷视频");
        swipe(0.7 * x, 0.8 * y, 0.81 * x, 0.3 * y, 130)
        sleep(a)
        console.log(i);
    }
}
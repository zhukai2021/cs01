auto.waitFor
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}
console.setPosition(0.3*x, 0.1*y)
toastLog('2022070401');
toastLog(x);
toastLog(y);
//toastLog(text("私信").exists())

function pandingguanzhu() {  

    toastLog(text("关注").findOne().parent().child(0).text())
    toastLog(text("粉丝").findOne().parent().child(0).text())
    toastLog()
    if(text("关注").findOne().parent().child(0).text()-text("粉丝").findOne().parent().child(0).text()>-100 ){
        toastLog("关注大于粉丝")
        sleep(2000)
        if(text("私信").exists()){

            toastLog("已关注")
            sleep(1000)
        }
        else{

            toastLog(desc("更多，已收起").findOne().parent().findOne(text("关注")).click())
            toastLog("关注")
            sleep(7000)
        }
        

    }
    else
    {
        toastLog("关注小于粉丝")
    }
}


function xunhuanguanzhu() {  

    l1=id("com.ss.android.ugc.aweme:id/rxk").findOne().childCount()
    //toastLog(id("com.ss.android.ugc.aweme:id/rxk").findOne().child(l1-1).desc())

    for(i=1;i<l1;i++){
        if (id("com.ss.android.ugc.aweme:id/rxk").findOne().child(i).desc()==null)
        {
            toastLog("不存在")
            //l1=l1-1
            sleep(2000)

        }
        else
        {
            toastLog("存在")
            x0=id("com.ss.android.ugc.aweme:id/rxk").findOne().child(i).findOne(id("com.ss.android.ugc.aweme:id/avatar")).bounds().centerX()
            y0=id("com.ss.android.ugc.aweme:id/rxk").findOne().child(i).findOne(id("com.ss.android.ugc.aweme:id/avatar")).bounds().centerY()
            click(x0,y0)
            sleep(8000)
            pandingguanzhu()
            sleep(2000)

            back()
            sleep(6000)


            
        }


    }

}



//写一个函数
//l1=id("com.ss.android.ugc.aweme:id/rxk").findOne().childCount()
function swipeUp() {    
    xunhuanguanzhu()






    l1=id("com.ss.android.ugc.aweme:id/rxk").findOne().childCount()
    toastLog(l1)
    //toastLog(id("com.ss.android.ugc.aweme:id/rxk").findOne().child(0).findOne(id("com.ss.android.ugc.aweme:id/dia")).desc())
    //toastLog(id("com.ss.android.ugc.aweme:id/rxk").findOne().child(5).findOne(id("com.ss.android.ugc.aweme:id/dia")).desc())
    toastLog(id("com.ss.android.ugc.aweme:id/rxk").findOne().child(l1-1).desc())
    if (id("com.ss.android.ugc.aweme:id/rxk").findOne().child(l1-1).desc()==null)
    {
        toastLog("不存在")
        l1=l1-1

    }
    else
    {
        toastLog("存在")
        
    }

    
    x1=id("com.ss.android.ugc.aweme:id/rxk").findOne().child(l1-1).findOne(id("com.ss.android.ugc.aweme:id/dia")).bounds().centerX()
    toastLog(x1)
    y1=id("com.ss.android.ugc.aweme:id/rxk").findOne().child(l1-1).findOne(id("com.ss.android.ugc.aweme:id/dia")).bounds().centerY()
    toastLog(y1)
    x2=desc("全屏").findOne().bounds().centerX()
    toastLog(x2)
    y2=desc("全屏").findOne().bounds().centerY()
    toastLog(y2)
    duration = 2000
    swipe(x1, y1, x2, y2*0.9, duration)

}
//swipeUp()  
//循环10次
for (var i = 0; i < 10; i++) {
    swipeUp()       
    sleep(2000)
}
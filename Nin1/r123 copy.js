auto.waitFor
x = device.width
y = device.height
if (x == 0) {
  x = 721
  y = 1281
}
console.show()
console.setPosition(50, 0.65*y);



toastLog('2022070401');
toastLog(x);
toastLog(y);

var c = textContains('学习进度').find();
if (c.empty()) {
  toastLog('没找到╭(╯^╰)╮');
} else {
  toastLog(c.length);
}
i1=0
bianli1()
function bianli1(){
  print(i1+'ci')
  xs1=parseFloat(id('cc.angis.hn:id/myCourseCreditTv').findOnce(i1).text())
  textContains('学习进度').findOnce(i1).parent().parent().parent().parent().click()
  sleep(5000)
  if(text('确定').exists()){
    text('确定').click()
    sleep(5000)
    back()
    sleep(5000)
    
  }
  i1=i1+1
  if(i1<=c.length-1){
    bianli1()
  }
  else{
    print('今天学完了，或者没课了')
    return
  }
  
  // else{
  
  // }

}


// while(textContains('学习进度').exists()){
//   print('有课')

//   xs1=parseFloat(id('cc.angis.hn:id/myCourseCreditTv').findOnce(0).text())
//   textContains('学习进度').findOnce(0).parent().parent().parent().parent().click()
//   sleep(5000)
//   if(text('确定').exists()){
//     text('确定').click()
    
//   }
//   else{
//     textContains('学习进度').findOnce(1).parent().parent().parent().parent().click()//列出 遍历
//     sleep(5000)
//     if(text('确定').exists()){
//       text('确定').click()
//     }
//     else{
//       print('今天已学大于5小时~结束了')
//       exit()
//     }


//   }
// }





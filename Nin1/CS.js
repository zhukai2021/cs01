auto.waitFor
console.show()
x = device.width
y = device.height
if (x == 0) {
    x = 721
    y = 1281
}
console.setPosition(0.01*x, 0.1*y)
toastLog('2022070401');
toastLog(x);
toastLog(y);


url = "http://kdy1.qwxyx.xyz/jk/post-cha.php?fname=lg1"//编号
url1 = "http://kdy1.qwxyx.xyz/jk/post-gai.php"//写入
var res = http.get(url);
var a = res.body.json();
print(a)

//cx()
function cx() {
  launchApp('CX文件管理器')
  sleep(4001)
  toastLog(id('com.cxinventor.file.explorer:id/grid1').findOne().child(0).click())
  sleep(4001)
  toastLog(textContains("gai2").findOne().parent().parent().parent().click())
  sleep(4001)
  toastLog(desc("更多选项").findOne().click())
  sleep(4001)
  toastLog(text("搜索").findOne().parent().parent().parent().click())
  sleep(4001)
  toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a1-' + (a + 1) + '.'))
  sleep(4001)
  click(0.95 * x, 0.95 * y)
  sleep(4001)
  while (!id("com.cxinventor.file.explorer:id/filename").exists()) {
      print('meiyou')
      back()
      sleep(4001)
      i = i + 1
      toastLog(desc("更多选项").findOne().click())
      sleep(4001)
      toastLog(text("搜索").findOne().parent().parent().parent().click())
      sleep(4001)
      toastLog(id("com.cxinventor.file.explorer:id/edit").findOne().setText('a1-' + (a + 1) + '.'))
      sleep(4001)
      click(990, 2083)
      sleep(4001)

  }
  toastLog(desc("Toggle selection").findOne().parent().parent().longClick())
  sleep(4001)
  toastLog(text("复制").findOne().parent().click())
  sleep(4001)
  back()
  sleep(4001)
  toastLog(id("com.cxinventor.file.explorer:id/home").findOne().click())//zhuye
  sleep(4001)
  toastLog(id('com.cxinventor.file.explorer:id/grid1').findOne().child(0).click())
  sleep(4001)
  toastLog(text('a02').findOne().parent().parent().parent().click())
  sleep(4001)
  toastLog(text("贴上").findOne().parent().click())
  sleep(4001)
  if (text('覆盖').exists()) {
      toastLog('覆盖');
       toastLog(text("覆盖").findOne().click())
    }
  sleep(4001)
  toastLog(id("com.cxinventor.file.explorer:id/home").findOne().click())//zhuye
  sleep(4001)
}
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
toastLog(id("com.cxinventor.file.explorer:id/home").findOne().click())//zhuye
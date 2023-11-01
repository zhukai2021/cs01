
auto.waitFor();
//请求横屏截图
if (!requestScreenCapture(true)) {
  toastLog('没有授予 Hamibot 屏幕截图权限');
  hamibot.exit();
}
sleep(1000);
//截图
captureScreen("/sdcard/1.png"); 
//var img = captureScreen();
//获取在点(100, 100)的颜色值
//var color = images.pixel(img, 100, 100);
//显示该颜色值
//toastLog(colors.toString(color));
hamibot.exit();

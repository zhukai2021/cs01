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
//写字符串到txt文件


//files.write("/sdcard/文本.txt","字符串1\n字符串2");
//读txt文本
wj = open("/sdcard/a01/cs4.txt");
du = wj.read()
wj.close();
//log(du)
/*
字符串1
字符串2
*/
//判断有多少行字符串
sz = du.split("xxxx")
log(sz.length)// 2
//得到第一行字符串
for (i = 0; i < sz.length;i++) {
  r = sz[i].split(/,[0-9]{1,3},/)[1]
  toastLog(i+1)// 字符串1
  toastLog(r)// 字符串1
  sleep(10)
}
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

i=1
threads.start(function() {
    //在新线程执行的代码
    a=true
    while (a==true) {
      log('子线程');
      sleep(1100)
      
      i=i+1
      log(i)
      if(i>8){
        log('jieshu')
        url = "http://wxpusher.zjiecode.com/api/send/message/?appToken=AT_GRDG2ZQu57APwWcSxZpavjK3qNl9tCfO&content=z18chucuole&uid=UID_JNz25wHNb8ExLeaoWTMY98BFuIcL&url=http%3a%2f%2fwxpusher.zjiecode.com"//写入

        var res = http.get(url);

        exit()
      }


    }
  });
  while (i<13000) {
    log('脚本主线程');
    sleep(1500)
    
    i=i-1
    log(i)
  }
  log('主进程停止')
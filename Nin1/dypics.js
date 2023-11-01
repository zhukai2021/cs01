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
id('rah').click()
sleep(3000)
className("Button").desc('复制链接').click()

function getclip() {
  //安卓10利用焦点获取剪切板
  var window = floaty.window(
      <frame visibility="invisible" >
          <input id="input" />
      </frame>
  );
  ui.run(function () {
      window.requestFocus();
      window.input.requestFocus();
      toastLog("已读取粘贴板，内容如下：\n" + getClip());
      window.close();
  });
}
getclip()
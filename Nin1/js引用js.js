auto.waitFor();
msg = hamibot.env;
var r1 = http.get('https://gitee.com/liuyue01/cs01/raw/m1/Nin1/kkd.js').body.string();
var r2 = http.get('https://gitee.com/liuyue01/cs01/raw/m1/Nin1/ksxs.js').body.string();
var r3 = http.get('https://gitee.com/liuyue01/cs01/raw/m1/Nin1/ksjsb.js').body.string();
// log('code = ' + r.statusCode);
// log( r.body.string());
eval(r2)
sleep(3000)
home()
sleep(3000)
eval(r1)
sleep(3000)
home()
sleep(3000)
eval(r3)
home()




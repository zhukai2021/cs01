from ascript.android import system

# 根据应用名称启动. PS:启动略慢于包名启动
#system.open("com.mmbox.xbrowser")
Selector().desc("主页").click().find()
#Selector().id("input").click().find()
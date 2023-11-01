from tkinter import *
import time
import _thread
global i
i=0
import pyautogui
root = Tk()
def ceshi():
    print(a1.get())
def jieshu():
    global i
    i=100000
    print(i)
def dayin():
    global i
    if (i==0):
         i=1                                              
         b2=int(a2.get())
         time.sleep(int(a1.get())  )
         while (i < b2):
                 print(i)
                 e.configure(text='当前第'+str(i)+'次点击')
                 pyautogui.click()
                 time.sleep(int(a3.get())  )
                 i = i + 1
         print('循环完成')
         i = 0
         e.configure(text='点击完成')


def dayin_run():
    _thread.start_new_thread(dayin,())
# 进入消息循环
root.title('鼠标自动点击')
root.geometry('300x100+500+500')
Label(root,text='启动').grid(row=0,column=0)
a1=Entry(root, textvariable=StringVar(value=5),width=3)
a1.grid(row=0,column=1)
Label(root,text='秒后开始点击鼠标').grid(row=0,column=2)
a2=Entry(root, textvariable=StringVar(value=100),width=5)
a2.grid(row=0,column=3)
Label(root,text='次').grid(row=0,column=4)
Label(root,text='间隔').grid(row=0,column=5)
a3=Entry(root, textvariable=StringVar(value=2),width=3)
a3.grid(row=0,column=6)
Label(root,text='秒').grid(row=0,column=7)
Button(root, text ="启动",command=dayin_run).grid(row=1,column=2)
Button(root, text ="停止",command=jieshu).grid(row=1,column=3)
#Button(root, text ="ceshi",command=ceshi).grid(row=2,column=3)
e=Label(root,text='信息显示')
e.grid(row=2,column=2)
root.mainloop ()

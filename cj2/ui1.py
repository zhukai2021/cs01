import tkinter as tk  
from pypinyin import pinyin, Style  
from cnstroke import CnStroke  
  
def query_pinyin_and_strokes():  
    hanzi = entry.get()  
    pinyins = pinyin(hanzi, style=Style.TONE3)  
    strokes = CnStroke.stroke(hanzi)  
      
    pinyin_label.config(text=f"拼音: {pinyins}")  
    strokes_label.config(text=f"笔画: {strokes}")  
  
root = tk.Tk()  
root.title("汉字拼音和笔画查询")  
  
entry = tk.Entry(root)  
entry.pack()  
  
query_button = tk.Button(root, text="查询", command=query_pinyin_and_strokes)  
query_button.pack()  
  
pinyin_label = tk.Label(root, text="")  
pinyin_label.pack()  
  
strokes_label = tk.Label(root, text="")  
strokes_label.pack()  
  
root.mainloop()
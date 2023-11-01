import xlrd
data = xlrd.open_workbook('1.xls') # 打开xls文件
table = data.sheets()[0]  # 打开第一张表
sheets = data.sheet_names()
for ii in range(len(sheets)):
    table = data.sheets()[ii]
    nrows = table.nrows  # 获取表的行数
    # 获取workbook中所有的表格名
    sheets = data.sheet_names()
    print(sheets)
    print(len(sheets))
    for i in range(nrows):  # 循环逐行打印
        if i == 0:  # 跳过第一行
            continue
        #print(table.row_values(i))
        b=[sheets[ii]]
        b.extend(table.row_values(i))
        print(b)

a=[1,2,3,4,6,7,9,10]
a.append(11111)
print(a)
print(type(a))




import plotly as py
import plotly.express as px


# plotly.express模块自带的GDP数据集
df = px.data.gapminder()
# 绘制柱形图
fig = px.bar(
 df, #数据，DataFrame类型
 y="country", # y轴数据，国家
 x="gdpPercap", # x轴数据,人均GDP
 animation_frame="year", # 列名，动画帧，年份
 orientation='h', # 水平条形图标记
 color="country", # 列名，列中不同的值自动匹配不同的颜色
 range_x=[100, 100000], # x轴自动缩放范围
 range_y=[25, 90])# y轴自动缩放范围
fig.update_layout(width=1000, # 图表宽度
 height=800, # 图表高度
 xaxis_showgrid=False,# 不显示x坐标轴网格
 yaxis_showgrid=False,# 不显示y坐标轴网格
  showlegend=False, # 不显示图例
 paper_bgcolor='rgba(0,0,0,0)', # 工具条背景颜色
 plot_bgcolor='rgba(0,0,0,0)') # 图表背景颜色为白色
fig.update_xaxes(title_text='人均GDP') # x轴标题
fig.update_yaxes(title_text='国家')# y轴标题
fig.show() # 如果网络没问题可以直接使用这行代码，如果浏览器不显示图表请使用下面的代码
# 在程序所在路径自动生成一个名为temp-plot.html网页图表
py.offline.plot(fig)
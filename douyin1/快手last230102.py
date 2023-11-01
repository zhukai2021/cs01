# -*- coding: utf-8 -*-
from selenium.webdriver import Chrome
from lxml import etree
import time
import json
from selenium.webdriver.common.by import By
from selenium import webdriver
import re
from bs4 import BeautifulSoup
import csv
from selenium.webdriver.common.keys import Keys
import requests
import json
import csv
from urllib import parse
import pymysql
#import requests     # 发送网络请求模块
#import re

db = pymysql.connect(host='152.69.193.99',
                             port=3306,
                             user='jk',
                             password='11223344',
                             database='jk',charset='utf8mb4'

                     )

BIAO='yy1k1'
cursor = db.cursor()
sql = "SELECT COUNT(*) FROM "+BIAO
try:
    # 执行sql语句
    cursor.execute(sql)
    results = cursor.fetchall()
    i1=results[0][0]+1
    print(i1)
    #i1=int(i1)
except:
    # 如果发生错误则回滚
    #db.rollback()
    print('失败')
    exit()

# 关闭数据库连接
#db.close()
i2=i1

url = 'https://www.kuaishou.com/graphql'
# 伪装
headers = {
    # 控制data类型 json类型字符串
    'content-type': 'application/json',
    'Cookie': 'kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; did=web_ea128125517a46bd491ae9ccb255e242; client_key=65890b29; userId=270932146; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABnjkpJPZ-QanEQnI0XWMVZxXtIqPj-hwjsXBn9DHaTzispQcLjGR-5Xr-rY4VFaIC-egxv508oQoRYdgafhxSBpZYqLnApsaeuAaoLj2xMbRoytYGCrTLF6vVWJvzz3nzBVzNSyrXyhz-RTlRJP4xe1VjSp7XLNLRnVFVEtGPuBz0xkOnemy7-1-k6FEwoPIbOau9qgO5mukNg0qQ2NLz_xoSKS0sDuL1vMmNDXbwL4KX-qDmIiCWJ_fVUQoL5jjg3553H5iUdvpNxx97u6I6MkKEzwOaSigFMAE; kuaishou.server.web_ph=b282f9af819333f3d13e9c45765ed62560a1',
    'Host': 'www.kuaishou.com',
    'Origin': 'https://www.kuaishou.com',
    'Referer': 'https://www.kuaishou.com/profile/3xauthkq46ftgkg',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
}
def get_page(pcursor):
    global i1
    # 需要的数据得指定好
    # 递归, 自己调用自己 跳出递归
    data = {
        'operationName': "visionProfilePhotoList",
        'query': "query visionProfilePhotoList($pcursor: String, $userId: String, $page: String, $webPageArea: String) {\n  visionProfilePhotoList(pcursor: $pcursor, userId: $userId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      type\n      author {\n        id\n        name\n        following\n        headerUrl\n        headerUrls {\n          cdn\n          url\n          __typename\n        }\n        __typename\n      }\n      tags {\n        type\n        name\n        __typename\n      }\n      photo {\n        id\n        duration\n        caption\n        likeCount\n        realLikeCount\n        coverUrl\n        coverUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrl\n        liked\n        timestamp\n        expTag\n        animatedCoverUrl\n        stereoType\n        videoRatio\n        profileUserTopPhoto\n        __typename\n      }\n      canAddComment\n      currentPcursor\n      llsid\n      status\n      __typename\n    }\n    hostName\n    pcursor\n    __typename\n  }\n}\n",
        'variables': {'userId': "3xhyadpzv7mg8rs", 'pcursor': pcursor, 'page': "profile"}
    }

    if pcursor == "no_more":
        print('全部下载完成')
        return 0
    # 1. 发送请求 访问网站
    response = requests.post(url=url, headers=headers, json=data)
    # 2. 获取数据 .json .text .content
    json_data = response.json()
    # 3. 解析数据 去除不想要的内容
    feeds = json_data['data']['visionProfilePhotoList']['feeds']
    # 下一页需要的参数
    pcursor = json_data['data']['visionProfilePhotoList']['pcursor']
    print(pcursor)
    for feed in feeds:
        caption = feed['photo']['caption']    # 标题
        photoUrl = feed['photo']['photoUrl']   # 视频链接
        # \: 转义字符, 直接写\ 匹配不到 \
        # \\ 才能匹配到 \
        # 用css和xpath 是必须要你拿到的数据是一个网页源代码
        #caption = re.sub('[\\/:*?"<>|\n\t]', '', caption)
        print(caption, photoUrl)
        # 4. 发送请求 访问网站 视频链接
        # 5. 获取数据 视频数据 拿到的是视频二进制数据
        video_data = requests.get(url=photoUrl).content
        # 6. 保存视频 通过二进制的方式保存
        with open(f'E:one1t/OneDrive - 356h31/fenlei/yy1k1/{"a1-"}{i1}.mp4', mode='wb') as f:
            f.write(video_data)
        print(caption, '下载完成!')

        # db = pymysql.connect(host='61.191.56.132',
        #                      port=20178,
        #                      user='r',
        #                      password='11223344',
        #                      database='jk', charset='utf8mb4'
        #
        #                      )
        #
        # #BIAO = 'yy1k'
        #
        #
        # # 使用 cursor() 方法创建一个游标对象 cursor
        # cursor = db.cursor()

        # SQL 插入语句

        sql = "INSERT INTO %s(NO,WA) VALUES ('%s', '%s')" % (BIAO, i1, caption)
        # # 执行sql语句
        # cursor.execute(sql)
        # # 提交到数据库执行
        # db.commit()
        # print('成功')
        try:
            # 执行sql语句
            cursor.execute(sql)
            # 提交到数据库执行
            db.commit()
            print('xieru成功')
        except:
            # 如果发生错误则回滚
            db.rollback()
            print('失败')

        # 关闭数据库连接
        #db.close()
        i1=i1+1
    get_page(pcursor)

get_page('')

db.close()
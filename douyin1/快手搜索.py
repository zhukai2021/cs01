import os
import time
import requests
import json
import pprint
import re

# 在当前目录创建一个保存视频的目录
dir_name = 'python_快手video'
if not os.path.exists(dir_name):
    os.mkdir(dir_name)

# 响应头，整个复制之后，利用ctrl+r勾选正则表达式来替换（上面原来的(.*?): (.*) （冒号后面的空格）下面替换的格式 ‘$1': '$2',(冒号后面的空格，最后加逗号分隔）
headers = {
    'accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length': '1380',
    'content-type': 'application/json',
    'Cookie': 'kpf=PC_WEB; kpn=KUAISHOU_VISION; clientid=3; did=web_acb408fff3a5f7cd020782d58bb9caa9; ktrace-context=1|MS43NjQ1ODM2OTgyODY2OTgyLjI4ODYxOTgxLjE2MzczNzIwMzc5NTkuMTQ1NDUxNA==|MS43NjQ1ODM2OTgyODY2OTgyLjI3NzMzOTY1LjE2MzczNzIwMzc5NTkuMTQ1NDUxNQ==|0|graphql-server|webservice|false|NA; client_key=65890b29; userId=1232368006; kuaishou.server.web_st=ChZrdWFpc2hvdS5zZXJ2ZXIud2ViLnN0EqABXhLnnN974NXDx7wxD7EXA0gUwiENGncAU1PMNvGRI8hgQVPES30K2a6e8FZ9L3yv89WVXIZ5I1HsDjjWJlzDijZgHPj64KgQ8dkTm8-Aq5monZejiGHAuenrIuDovugsUnncYRtFHLY_bmEtKpBDoaswti5UnDOkiVHAuhMMPlqdPBKYwV_LZ3SGFMeznHUrJv5Wg4o4C45yi-1iuOPyDRoSsmhEcimAl3NtJGybSc8y6sdlIiCHg_pUdXqAoXPplQJ-iHcM2h_MTI_3Wkdnw9ucUMR5UCgFMAE; kuaishou.server.web_ph=b3651a369fb9eb9f33d30ccc2cc691a5ecbf',
    'Host': 'www.kuaishou.com',
    'Origin': 'https://www.kuaishou.com',
    'Referer': 'https://www.kuaishou.com/search/video?searchKey=%E6%85%A2%E6%91%87',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
}
# 响应头右边的选项payload（报错的地方加上引号）   (单引号里面括着双引号)
keyword = input("请输入你想要查询的关键词：")
for pcursor in range(0, 2):
    pcursor = str(pcursor)
    data = {
        'operationName': "visionSearchPhoto",
        'query': "query visionSearchPhoto($keyword: String, $pcursor: String, $searchSessionId: String, $page: String, $webPageArea: String) {\n  visionSearchPhoto(keyword: $keyword, pcursor: $pcursor, searchSessionId: $searchSessionId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      type\n      author {\n        id\n        name\n        following\n        headerUrl\n        headerUrls {\n          cdn\n          url\n          __typename\n        }\n        __typename\n      }\n      tags {\n        type\n        name\n        __typename\n      }\n      photo {\n        id\n        duration\n        caption\n        likeCount\n        realLikeCount\n        coverUrl\n        photoUrl\n        liked\n        timestamp\n        expTag\n        coverUrls {\n          cdn\n          url\n          __typename\n        }\n        photoUrls {\n          cdn\n          url\n          __typename\n        }\n        animatedCoverUrl\n        stereoType\n        videoRatio\n        __typename\n      }\n      canAddComment\n      currentPcursor\n      llsid\n      status\n      __typename\n    }\n    searchSessionId\n    pcursor\n    aladdinBanner {\n      imgUrl\n      link\n      __typename\n    }\n    __typename\n  }\n}\n",
        'variables': {'keyword': keyword, 'pcursor': pcursor, 'page': "search"}
    }  # "keyword"这个控制关键词，"pcursor"控制翻页（手动在网页中下滑之后会出现两个数据包）
    # 页面搜索视频名字，然后找到抓包，再找响应网址
    baseurl = "https://www.kuaishou.com/graphql"
    # headers有一个  'content-type':  'application/json',  这个定义了data(这里类似账号密码之类的数据)，要求data是json字符串
    # print(type(data))
    data = json.dumps(data)  # 将data由字典类型转换为字符串类型
    # print(type(data))
    time.sleep(2)
    # 发送请求，url:链接地址，headers:伪装，data:查询参数
    request = requests.post(url=baseurl, headers=headers, data=data)
    # print(request)
    response = request.json()
    # print(response)
    # pprint.pprint(response)
    ##字典数据利用键来找值  {"键":"值"} |列表直接利用位置索引 [值][值]  [0][1]
    # title_list = response['data']['visionSearchPhoto']['feeds'][5]['photo']['caption']
    # print(title_list)
    # url_list = response['data']['visionSearchPhoto']['feeds'][5]['photo']['photoUrl']
    # print(url_list)
    feeds_list = response['data']['visionSearchPhoto']['feeds']
    # print(feeds_list)
    for feeds in feeds_list:
        # 每个feeds是feeds_list列表当中的一个个字典
        # print(feeds)  #利用这条可以把每个视频的信息都分别打印出来
        title = feeds['photo']['caption']
        print(title)
        list = feeds['photo']['photoUrl']
        print(list)
        # #下面这个打印出来把所有类似的数据都放在了同一个列表当中，与下载无关
        # # titles = [i['photo']['caption']for i in feeds_list]
        # # print(titles)
        # # list = [i['photo']['photoUrl']for i in feeds_list]
        # # print(list)
        ##保存视频  【搜索关键词下载视频/知道一个用户的视频/翻页下载】
        new_title = re.sub(r'[\/:*?"<>|\n]', '_', title)  # 在windows操作系统当中，必须是没有一些特殊字符  #标题过长可以替换（字符串的切片）当>=256
        # 发送网络请求，请求每一个视频地址，获取视频二进制数据
        mp4_data = requests.get(list).content
        with open(dir_name + "/" + new_title + '.mp4', mode='wb') as f:
            f.write(mp4_data)
            print(new_title, "下载完成")
    # mp4_data.close()
    request.close()
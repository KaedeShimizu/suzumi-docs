# 线上版源码

其实我不是很想把这个源代码放出来，虽然说我只用了一天时间就写出来了...

不过还是本着开源精神，我还是把源代码放出来吧~，希望你能学到一些东西，下面是项目结构

!> 警告 下面就是源代码了，请不要把此源代码用于盈利，否则我或将追究法律责任

```
KSA_Online
|-data(文件夹)
|-main.py
```

data文件夹里面直接放json文件就行，这个json文件就是你的图库啦，里面的格式请参考下面的格式：（简单说就是一个大的列表套n个字典，字典里面的键值对就是示例那样的）

```json
[
    {
        "pid": 102496475,
        "page": 0,
        "uid": 2583663,
        "title": "秘蜜~黒の誓い~",
        "user": "Matcha_",
        "r18": 0,
        "width": 1986,
        "height": 3840,
        "tags": [
            "初音ミク",
            "VOCALOID",
            "鏡音リン",
            "百合",
            "秘蜜〜黒の誓い〜",
            "なにこれきれい",
            "VOCALOID10000users入り",
            "初音未来",
            "鏡音鈴",
            "yuri",
            "Alluring Secret ~ Black Vow ~",
            "卧槽好漂亮",
            "Vocaloid 10000+ bookmarks",
            "hatsune miku",
            "kagamine rin",
            "so beautiful"
        ],
        "url": "https://px.s.rainchan.win/img-original/img/2022/11/04/04/44/18/102496475_p0.jpg"
    }
]
```

然后就是源代码啦，唉，不过我这个代码的工作效率并没有非常高，如果需要，你可以自己修改源代码，不过记得加上我的标记就好~

```python
# 这个是读取另外一个json文件用的，我试一下怎么样，应该还不错吧
# 这个json和前面的不一样，这个是一个大的数组，里面存入了一些元素，每个元素都是字典
from fastapi import FastAPI
import json
import random

# 初始化一些变量，方便后期修改，或者迭代
# 默认的代理地址
default_proxy = "pixiv.yuki.sh"
# 默认的数据库（data文件夹下）
default_data = "jitsu.json"
# 文档官网地址
default_docs = "https://suzumi.netlify.app/"
# 默认r18选项
default_r18 = 0

# 直接返回一个可用链接
# 需要传入一些参数，具体参数见文档
def getARandomLink(db, proxy, r18, keywords):
    with open(f"data/{db}", "r", encoding="utf-8") as f:
        json_data = json.load(f)
        # R18判断
        if r18 == 1:
            # 创建一个临时数组
            tmp_data = []
            # 开始便利json文件，筛选出所有的r18内容
            for i in json_data:
                if i["r18"]:
                    tmp_data.append(i)
            json_data = tmp_data

        if r18 == 0:
            # 创建一个临时数组
            tmp_data = []
            # 开始便利json文件，筛选出所有的r18内容
            for i in json_data:
                if not i["r18"]:
                    tmp_data.append(i)
            json_data = tmp_data

        # keywords判断
        if keywords:
            tmp_data = []
            # 如果有的话开始遍历判断
            for i in json_data:
                if keywords in i["tags"]:
                    tmp_data.append(i)
            json_data = tmp_data

        length = len(json_data)
        link = json_data[random.randint(0, length)]["url"]
        return link.replace("i.pximg.net", proxy)

# 返回一个随机的json
# 这里给一个数量参数，更加方便一些
def getARandomJson(db, r18, keywords, num):
    with open(f"data/{db}", "r", encoding="utf-8") as f:
        json_data = json.load(f)
        # R18判断
        if r18 == 1:
            # 创建一个临时数组
            tmp_data = []
            # 开始便利json文件，筛选出所有的r18内容
            for i in json_data:
                if i["r18"]:
                    tmp_data.append(i)
            json_data = tmp_data

        if r18 == 0:
            # 创建一个临时数组
            tmp_data = []
            # 开始便利json文件，筛选出所有的r18内容
            for i in json_data:
                if not i["r18"]:
                    tmp_data.append(i)
            json_data = tmp_data

        # keywords判断
        if keywords:
            tmp_data = []
            # 如果有的话开始遍历判断
            for i in json_data:
                if keywords in i["tags"]:
                    tmp_data.append(i)
            json_data = tmp_data

        length = len(json_data)
        # 临时数组
        temp_arr = []
        for i in range(num):
            temp_arr.append(json_data[random.randint(0, length)])
        return temp_arr


# 重定向页面
from fastapi.responses import RedirectResponse

app = FastAPI()


@app.get("/")
def pixivDefault(
    # 使用的数据库，放在data目录下，用json文件
    db: str = default_data,
    # 是否用r18图片 2是随机
    r18: int = default_r18,
    # 请求次数，默认是1，如果是其他数字那么返回一个json
    num: int = 1,
    # 关键词，可有可无
    keywords: str = None,
):
    # 创建一个临时数组
    temp_array = getARandomJson(db, r18, keywords, num)
    return temp_array


# json的方法get
@app.get("/json")
def json_get(
    # 使用的数据库，放在data目录下，用json文件
    db: str = default_data,
    # 是否用r18图片 2是随机
    r18: int = default_r18,
    # 请求次数，默认是1，如果是其他数字那么返回一个json
    num: int = 1,
    # 关键词，可有可无
    keywords: str = None,
):
    # 创建一个临时数组
    temp_array = getARandomJson(db, r18, keywords, num)
    return temp_array


# 如果是direct的话，没有什么参数，直接返回一张就行
@app.get("/direct")
def direct(
    # 使用的数据库，放在data目录下，用json文件
    db: str = default_data,
    # 代理地址
    proxy: str = default_proxy,
    # 是否用r18图片 2是随机
    r18: int = default_r18,
    # 关键词，可有可无
    keywords: str = None,
):
    return RedirectResponse(getARandomLink(db, proxy, r18, keywords))

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
```

好啦，那么这个项目的所有代码就到这里哩，你可以自己在本地的主机运行，或者挂到服务器上给别人用。
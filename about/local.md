# 本地版源码

本着开源的原则，我把本地版的源码放在这里，不过本地版不涉及关键词查询之类的东西，可以理解为就是一个纯粹的随机涩图查询器。

当然，即便是本地版，我也使用了`FastAPI`进行开发，从而更好地模拟随机涩图的API调用效果，下面是本地版的目录结构：

```
KSA_Local
|-Images_Set
|-|-Arknights
|-GetRankImage.py
|-main.py
```

这里的`Arknights`只是一个示例文件夹，代码中也一样；`Images_Set`顾名思义，就是图片集（图库），也是你调用这个API会查询的文件夹；下面直接上源代码~


对于`main.py`，9~16行可以不写，我这里写上是为了避免直接访问链接报错
```python
# main.py
from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse
import GetRankImage

app = FastAPI()

# 这里为了节省资源，我选择用字符串的方式来返回一个提示（可以忽略）
@app.get("/")
def root():
    context = """
    <html>
        <body>Maybe you can get 涩图 at <a>/setu/</a></body>
    </html>
    """
    return HTMLResponse(context)

@app.get("/setu/")
async def setu():
    # 这里使用电脑本地的文件
    # 如果需要，请修改代码
    return FileResponse(GetRankImage.main())

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
```

对于`GetRankImage.py`，如果需要的话可以把它和`main.py`合并为一个文件，我分文件编写是为了更好地管理目录结构，以及更好地对功能进行拓展。

```python
# GetRankImage.py
import os
import random


def main():
    # 这里使用本地的一个图库，注意是否需要修改对应文件夹
    imagesList = os.listdir("Images_Set\\Arknights")
    # 获取随机种子
    seed = random.randint(0, len(imagesList))
    return f"Images_Set\\Arknights\\{imagesList[seed]}"
```

图片文件夹中的图片没有名称格式要求，因为是完全随机的，代码会自动读取所有的图片然后随机一个出来。
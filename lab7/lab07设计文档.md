###Lab07设计文档
18307130374 陶雨馨
***
####需求分析：
根据对lab07.css & lab07.html & lab7-1.mp4的观察，
需要一个div的class为item包裹其他内容,具体结构如下
***
    /div class="item"
        /h4 works.tips
        /div class="inner-box"
            /h3 works.author
            /h5 works.lifetime
        /div class="inner-box"
            /h3 popular photos
            /img class="photo"
            /img class="photo"
                 .
                 .
                 .
        /button
***
####调试状态：
    问题1：最上面的item与nav连在了一起
        原先使用byid取得的nav，现在用classname[0]用header
        就成功的分开了
    问题2：h3和h4是在两行的
        调整了display:inline之后，发现中间没有空格，空格和h3的一个字符宽度一样
        于是在h5 style添加一个marginleft
     
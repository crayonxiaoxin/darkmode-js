# darkmode-js


### 使用方法

引入
``` html
<script src="dark-mode.js"></script>
```

根据当前设置的模式设置主题
``` html
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

<script>
    // 初始化
    $(document).ready(function () {
        DarkModeUtil.init();
        // ...此处可以为元素设置默认值
    });

    // 手动设置模式：system/dark/light
    function onModeChange() {
        // 获取值
        var mode = $("#theme-mode").val();
        console.log(mode);
        // 设置
        DarkModeUtil.setMode(mode);
    }
</script>
```

[查看示例](https://crayonxiaoxin.github.io/darkmode-js/)
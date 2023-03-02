# darkmode-js


### 使用方法

引入
```
<script src="dark-mode.js"></script>
```

根据当前设置的模式设置主题
```
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

<script>
    // 初始化
    $(document).ready(function () {
        var mode = DarkModeUtil.currentMode();
        DarkModeUtil.init();
    });

    // 手动设置模式：system/dark/light
    function onModeChange() {
        var mode = $("#theme-mode").val();
        console.log(mode);
        DarkModeUtil.setMode(mode);
    }
</script>
```
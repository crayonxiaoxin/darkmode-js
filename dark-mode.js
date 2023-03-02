/*! DarkModeUtil v1.0.0 | https://github.com/crayonxiaoxin/darkmode-js */

var DarkModeUtil = {
    // 持久化 key
    Key: "theme-mode",
    // classname，用于区分 css
    Clazz: "dark-mode",
    // 设置的模式
    Mode: {
        system: "system",
        light: "light",
        dark: "dark",
    },
    // 监听的节点
    node: window.matchMedia('(prefers-color-scheme: dark)'),
    // 系统是否处于暗黑模式
    isSystemDarkMode: function () {
        return DarkModeUtil.node.matches;
    },
    // 当前设置的模式
    currentMode: function () {
        var mode = localStorage.getItem(DarkModeUtil.Key);
        return (mode == null || mode == "null" || mode == "") ? DarkModeUtil.Mode.system : mode;
    },
    // 是否白天模式
    isLightMode: function () {
        return DarkModeUtil.currentMode() == DarkModeUtil.Mode.light;
    },
    // 是否暗黑模式
    isDarkMode: function () {
        return DarkModeUtil.currentMode() == DarkModeUtil.Mode.dark;
    },
    // 是否跟随系统
    isSystemMode: function () {
        return !isLightMode() && !isDarkMode();
    },
    // 设置模式，持久化
    setMode: function (mode) {
        localStorage.setItem(DarkModeUtil.Key, mode);
        if (DarkModeUtil.isDarkMode()) {
            DarkModeUtil.remove();
            DarkModeUtil.setDarkModeTheme(true);
        } else if (DarkModeUtil.isLightMode()) {
            DarkModeUtil.remove();
            DarkModeUtil.setDarkModeTheme(false);
        } else {
            DarkModeUtil.listen();
            DarkModeUtil.setDarkModeTheme(DarkModeUtil.isSystemDarkMode());
        }
    },
    // 是否设置了暗黑的主题
    isDarkThemeSet: function () {
        return document.body.classList.contains(DarkModeUtil.Clazz);
    },
    // 设置暗黑主题
    setDarkModeTheme: function (isDark) {
        if (isDark) {
            if (!DarkModeUtil.isDarkThemeSet()) {
                document.body.classList.add(DarkModeUtil.Clazz);
            }
        } else {
            if (DarkModeUtil.isDarkThemeSet()) {
                document.body.classList.remove(DarkModeUtil.Clazz);
            }
        }
    },
    // 切换主题，但不会记住
    toggle: function () {
        DarkModeUtil.setDarkModeTheme(!DarkModeUtil.isDarkThemeSet());
    },
    // 默认监听回调，addEventListener('change',callback)
    eventCallback: function (event) {
        DarkModeUtil.setDarkModeTheme(event.matches);
    },
    // 取消监听
    remove: function () {
        DarkModeUtil.node.removeEventListener('change', DarkModeUtil.eventCallback);
    },
    // 监听
    listen: function () {
        // 进入页面时，系统是否处于暗黑模式
        DarkModeUtil.setDarkModeTheme(DarkModeUtil.isSystemDarkMode());
        // 如果之前存在监听，先移除
        DarkModeUtil.remove();
        // 添加监听
        DarkModeUtil.node.addEventListener('change', DarkModeUtil.eventCallback);
    },
    init: function () {
        // 初始化时，处于哪种模式
        DarkModeUtil.setMode(DarkModeUtil.currentMode());
    }
}
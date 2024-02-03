# Vue问题

## watch监听单个属性

## provide/inject

```
<!-- 父组件 -->
    provide() {
        return {
            getApp: this.getApp,
        };
    },

    methods: {
        getApp() {
            return {
                month: this.month,
                // 其他需要暴露的属性
            };
        },
    }

<!-- 子组件 -->
inject: ['getApp']

<!-- 使用 -->
<div>子组件app:{{ getApp().month }}</div>
```


## 概念

- 语法
- `print()`内置函数
  - `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`
  - 连接/结尾连接
  - 输出到文件/`>` 字符输出重定向

 ```python
    import sys

    # 原输出方法赋值
    orig_stdout = sys.stdout
    # 定义输出文件操作
    f = open('out.txt', 'w')
    # 重写默认输出方法
    sys.stdout = f

    # 打印=文件输出
    for i in range(3):
        print('i = ', i)

    # 默认输出归位
    sys.stdout = orig_stdout
    # 关闭文件操作
    f.close()
    ```

```python
# sep="\n" sep="\t"
print("圆周率", pi, sep=":", end=" ")
# 圆周率:3.14
```

## 问题

## 资料

[教程](https://www.gairuo.com/p/python-install)

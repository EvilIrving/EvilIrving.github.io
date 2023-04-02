---
title: 一些React技巧
date: 2023-02-25
updated: 2023-03-01
tags: 
- React
categories: 
- React
description: 项目中用到的一些技巧
---

## 使用 TypeScript 开发函数式组件

函数式组件通常接受一个 `props` 参数，返回一个 `JSX` 元素或者`null`。

<!-- 定义函数组件

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

定义类组件

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
``` -->

- 使用 `JSX.Element` 类型作为函数式组件的返回值类型

    ```ts
    type FCProps = { text: string };
    const ElementComponent = ({ text }: FCProps): JSX.Element => <div>{text}</div>;
    function App() {
    return (
        <div className="App">
            <ElementComponent text="Hello Chris1993."></ElementComponent>
        </div>
    );
    }
    ```

- 直接定义完整类型

    ```ts
    type FCProps = { text: string; children?: any };
    const FCComponent: React.FC<FCProps> = ({ text = "" }) => <div>{text}</div>;

    function App() {
    return (
        <div className="App">
            <FCComponent text="Hello Chris1993.">
                <span>children</span>
            </FCComponent>
        </div>
    );
    }
    ```

- 使用 `React.PropsWithChildren`

    ```ts
    type IProps = React.PropsWithChildren<{ text: string }>;
    const PropsComponent = ({ text }: IProps) => <div>{text}</div>;
    function App() {
    return (
        <div className="App">
            <PropsComponent text="Hello Chris1993.">
                <span>children</span>
            </PropsComponent>
        </div>
    );
    }
    ```

- 泛型组件（`Generic Components`）

  ```ts
    interface GenericProps<T> {
    content: T;
    }
    const GenericComponent = <T extends unknown>(props: GenericProps<T>) => {
        const { content } = props;
        const component = <>{content}</>;
        return <div>{component}</div>;
    };
    function App() {
        return (
            <div className="App">
                <GenericComponent<number> content={10} />
            </div>
        );
    }

    interface Props<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    }

    const List = <T extends unknown>(props: Props<T>) => {
    const { items, renderItem } = props;
    const [state, setState] = React.useState<T[]>([]); // You can use type T in List function scope.
        return (
            <div>
            {items.map(renderItem)}
            <button onClick={() => setState(items)}>Clone</button>
            {JSON.stringify(state, null, 2)}
            </div>
        );
    };
    function App() {
        return (
            <div className="App">
                <List<number>
                items={[1, 2]} // type of 'string' inferred
                renderItem={(item) => (
                    <li key={item}>
                    {/* Error: Property 'toPrecision' does not exist on type 'string'. */}
                    {item.toPrecision(3)}
                    </li>
                )}
                />
            </div>
        );
    }
    ```

> 注意
> 函数式组件返回一个有效的 `JSX` 元素或者 `null`
> 组件直接返回 `Array.fill()` `的结果时，TypeScript` 会提示错误

```ts
const ArrayComponent = () =>
Array(3).fill(<span>Chris1993</span>) as any as JSX.Element;
```

## 常见错误写法

- 渲染列表时，不使用 `key`：添加 `key`
- 直接通过赋值方式修改 `state` 值： 类组件可以通过 `setState()`方法修改，函数组件使用 `useState()`
- 将 `state` 值直接绑定到 `input` 标签的 `value` 属性：`<input>`绑定一个 `onChange` 事件，通过调用 `set` 实现修改
- 执行 `setState` 后直接使用 state：`setState()`是异步的，后续操作封装成函数
- 使用 `useState` + `useEffect` 时出现无限循环：设置 `useEffect` 第二个参数
- 忘记在 `useEffect` 中清理副作用：为 useEffect()的副作用函数设置返回函数：比如定时器、事件监听
- 错误的使用布尔运算符：避免 falsy 表达式

---
sidebar_position: 1
title: ArkTs组件装饰器
tags:
  - HarmonyOs
  - ArkTs
  - ArkTs装饰器
---


# ArkTs常用装饰器-自定义组件

## @Component
> 定义一个自定义的组件


### 定义组件的方式
```arkts title="myComponent"
@Component
export struct MyComponent {
    ...
    build() {
        ...
    }
}
```

### 使用组件的方式
```arkts title="main"
import { MyComponent } from './MyComponent'

@Entry
@Component
struct Main {
    build() {
        Column() {
            MyComponent()
        }
    }
}
```

### 自定义组件的生命周期
```mermaid
graph TD;
    A["自定义组件创建"] --> B["aboutToAppear()"]
    B["aboutToAppear()"] --> C["aboutToDisappear()"]
    C["aboutToDisappear()"] --> D["自定义组件销毁"]
```
---

# ArkTs常用装饰器-组件内状态
## @State
> 定义一个组件内状态

### 定义状态的方式
```arkts title="myComponent.ets"
@Component
export struct MyComponent {
    @State state: string = 'state'
}
```
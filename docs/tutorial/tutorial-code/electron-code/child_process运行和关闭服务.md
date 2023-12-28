---
sidebar_position: 1
title: child_process运行和关闭服务
tags:
  - node.js
  - child_process
  - electron
---


# 📝 electron项目中使用child_process运行和关闭服务

因为对electron项目非常欠缺, 这里记录一下使用child_process运行和关闭服务。
操作都需要在主进程中进行
首选需要服务端的把打包好的文件都放到一个文件夹中, 然后运行服务。假设运行的服务为`exec/serve.exe`文件。

## 运行服务

```js title="index.js"
import { app, dialog } from 'electron'
import { startServe } from './serve.js'

function loadWindow() {
    // 创建loading窗口的代码(省略)
    // do something

    // 启动服务
    try {
        // highlight-start
        await startServe()
        // highlight-end

        // 运行主窗口的代码(省略)
        // do something
    } catch {
        // 如果启动失败，则弹出提示框。用户点击后直接关闭
        dialog.showMessageBox(this.loadWindow, {
            type: 'warning',
            title: '服务端启动失败',
            message: 'start server error,
            buttons: ['关闭'],
            noLink: true
        }).then(() => {
            app.quit()
        })
    }
}
```
```js title="serve.js"
import { spawn } from 'child_process'
import { app } from 'electron'
import { join } from "path"

let once = false // 是否启动过服务
let workerProcess = null // 子进程服务

// 启动服务,返回promise方便知道合适的时间服务启动完成
export function startServe () {
    return new Promise(async (resolve, reject) => {
        // highlight-start
        workerProcess = await spawn('server.exe', [], {
            // 启动项目的路径文件`process.cwd()`为项目主目录
            cwd: join(process.cwd(), 'exec')
        })
        // highlight-end

        // 打印正常的后台可执行程序输出
        workerProcess.stdout.on('data', function (data) {
            // 如果启动成功则不在运行以下代码
            if (once) {
                return
            }
            if (String(data).includes('服务端启动成功的字符串')) {
                once = true
                resolve(workerProcess)
            }
        })

        // 打印错误的后台可执行程序输出
        workerProcess.stderr.on('data', function (data) {
            if (String(data).includes('服务端启动失败的字符串')) {
                reject(data)
            }
        })

        // 退出之后的输出
        workerProcess.on('close', function (code, signal) {
            console.log('out code：' + code + signal)
        })
        workerProcess.on('exit', (code, signal) => {
            console.log(`子进程退出，退出码: ${code}，信号: ${signal}`);
        });
    })
}

// 所有electron窗口关闭时关闭子进程
app.on('window-all-closed', () => {
    // 所有平台均为所有窗口关闭就退出软件
    // highlight-start
    workerProcess.kill()
    workerProcess = null
    // highlight-end
})
```

### 开发时遇到的坑点
- 坑点：服务端的文件运行路径
    > 在通过`spawn`启动子进程时，发现服务端的并没有启动成功。通过捕获异常发现主要原因是服务端的在使用路径时多了一层`/exec/exec/serve.exe`, 这是因为服务端使用的`绝对路径 + /exec/serve.exe`, 而我在使用时用了exec文件放置的路径，所以导致路径错误。这种情况下只需要沟通好启动路径以及文件目录即可。

- 坑点：electron的子进程无法关闭
    > 一开始是使用`exec`来启动服务，但是`exec`方执行后，子进程**自动关闭**，所以在`kill`的时候一直不成功。原因是根本没有子进程
    > 后来换成`spawn`，后来发现`exec`更适合运行简单命令，而`spawn`运行后会一直存在子进程，因此可以正常关闭。


<img src="./public/logo.png" width="68" alt="mcpsvr logo"/>

# 发现优秀的 MCP Servers

[English Version](./README.md)

MCPSvr 是从 [5ire](http://github.com/nanbingxyz/5ire) 衍生出的一个项目，目的是提供一个开放的 MCP Servers 市场，你可以在这里找到优秀的工具，也可以提交你自己的 MCP Server.

**这里的Servers支持像 5ire 这样的 MCP 客户端直接安装和运行。**

![](https://private-user-images.githubusercontent.com/11755645/416956309-c034bef6-5ecd-4cc1-b0ea-e5226ae1a4b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA1NDA0MzYsIm5iZiI6MTc0MDU0MDEzNiwicGF0aCI6Ii8xMTc1NTY0NS80MTY5NTYzMDktYzAzNGJlZjYtNWVjZC00Y2MxLWIwZWEtZTUyMjZhZTFhNGI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjI2VDAzMjIxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNmYzI3NjA0MmRlMzhjYWM2MWQwMGE2ZGFlNDczMDczNTY4NWY4MGVkMmMxNzY1YjMxOTgzZmI2Y2RjNGRjMmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.MOkPRVxzPaxfXX1DZI5MWsOMKNKgqSZ35G62CQolb3c)

## 如何提交

所有的 MCP Servers 目前都存放在 /public/servers.json 中，你可以通过 PR 提交新的 Server.

### 格式

```json
{
  "name": "Server Identifier",
  "key": "Unique alphanumeric identifier",
  "description": "Concise implementation overview",
  "command": "Execution environment specifier (e.g., uvx, npx, python, node)",
  "args": [
    "Required runtime arguments"
  ],
  "env": {
    "ENVIRONMENT_VARIABLE": "Value assignment"
  },
  "homepage": "Official documentation URL"
}
```

### 注意事项

1. 请尽量采用字母升序排列
2. key 必须唯一，由大小写字母和数字组成，且不能以数字开头
3. name 非必须, 若没有 name 则会显示 key
4. env 和 homepage 非必须

### 用户自定义参数

若 Server 需要用户填入参数，请遵守以下的约定
```
{{paramName@paramType::paramDescription}}
```
该约定允许应用程序提取出需要自定义的参数，以合适的交互方式供用户填写。

例如
```json
{
    "name": "File System",
    "key": "FileSystem",
    "command": "npx",
    "description": "The server will only allow operations within directories specified via args.",
    "args": [
      "-y",
      "@modelcontextprotocol/server-filesystem",
      "{{dirs@list::directories you about to access. Trailing slash in path required.}}"
    ],
    "homepage":"https://github.com/modelcontextprotocol/servers"
  }
```
该配置将提取出如下参数
```json
{
  "name":"dirs",
  "type":"list",
  "description": "directories you about to access. Trailing slash in path required."
}
```

* paramName 在当前 server 内必须唯一，由大小写字母和数字组成，且不能以数字开头
* paramType 目前支持 string, list 和 number, 请确保使用正确的类型
* description 可选

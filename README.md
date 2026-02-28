# The Dojo Blog

一个基于 React + Vite 构建的现代化博客应用，支持博客的创建、查看和删除功能。

## ✨ 功能特性

- 📝 **博客列表展示** - 查看所有博客文章
- 📄 **博客详情页** - 查看单篇博客的完整内容
- ✏️ **创建新博客** - 添加标题、内容和作者
- 🗑️ **删除博客** - 删除不需要的博客文章
- 🎨 **现代化 UI** - 简洁美观的用户界面
- ⚡ **快速响应** - 基于 Vite 构建，开发体验流畅

## 🛠️ 技术栈

- **前端框架**: React 17
- **构建工具**: Vite 6
- **路由管理**: React Router DOM v5
- **后端 API**: json-server
- **开发语言**: JavaScript (JSX)
- **样式**: CSS3
- **包管理**: npm

## 📁 项目结构

```
blog/
├── public/          # 静态资源文件
├── src/
│   ├── components/  # 组件文件
│   │   ├── App.jsx          # 主应用组件（路由配置）
│   │   ├── Home.jsx         # 首页（博客列表）
│   │   ├── BlogList.jsx     # 博客列表组件
│   │   ├── BlogDetails.jsx   # 博客详情页
│   │   ├── Create.jsx        # 创建博客页
│   │   └── Navbar.jsx        # 导航栏组件
│   ├── hooks/
│   │   └── useFetch.js       # 自定义数据获取 Hook
│   ├── config.js            # API 配置
│   ├── index.js              # 入口文件（旧）
│   ├── main.jsx              # 入口文件（Vite）
│   └── index.css            # 全局样式
├── data/
│   └── db.json              # json-server 数据文件
├── vite.config.js           # Vite 配置文件
└── package.json             # 项目依赖配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0（推荐 18+）
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
# 或
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 启动后端 API 服务器

在另一个终端窗口中：

```bash
npx json-server --watch data/db.json --port 9000
```

或者使用旧版本（兼容 Node 16）：

```bash
npx json-server@0.16.3 --watch data/db.json --port 9000
```

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```



## 📝 API 接口

后端使用 json-server，提供以下 RESTful API：

- `GET /blogs` - 获取所有博客
- `GET /blogs/:id` - 获取单篇博客
- `POST /blogs` - 创建新博客
- `DELETE /blogs/:id` - 删除博客



# Chrome MCP开发流程

## 克隆项目

git clone https://github.com/wyhao31/chrome-mcp-server.git

## 安装依赖

cd chrome-mcp-server
pnpm install

## 开发模式运行

### 启动Chrome扩展开发模式

cd app/chrome-extension
npm run dev

### 启动本地服务器开发模式

cd app/native-server
npm run dev

## 在Chrome中加载扩展

1. 打开chrome://extensions/
2. 开启"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择app/chrome-extension/.output/chrome-mv3目录

## 测试

cd app/native-server
npm run test

## 构建生产版本

npm run build
npm run zip

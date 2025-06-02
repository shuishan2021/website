# AI领域求职者个人展示网站

这是一个基于 Next.js 和 Tailwind CSS 构建的赛博朋克风格个人展示网站，专为AI领域的求职者设计。

## 功能特点

- 响应式设计，支持移动端和PC端
- 赛博朋克风格的UI设计
- 流畅的动画效果
- 实时AI问答功能
- 技能树可视化展示
- 项目经验时间线展示

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Slick

## 开始使用

1. 克隆项目

```bash
git clone [项目地址]
cd ai-portfolio
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 运行开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
ai-portfolio/
├── app/
│   ├── components/     # 可复用组件
│   ├── about/         # 关于我页面
│   ├── experience/    # 工作经历页面
│   ├── skills/        # 技能页面
│   ├── ai-chat/       # AI问答页面
│   ├── globals.css    # 全局样式
│   └── page.tsx       # 首页
├── public/            # 静态资源
├── tailwind.config.js # Tailwind配置
└── package.json       # 项目依赖
```

## 自定义配置

1. 修改主题颜色：编辑 `tailwind.config.js` 文件中的颜色配置
2. 更新个人信息：修改各个页面组件中的内容
3. 添加新的功能：在 `app` 目录下创建新的页面组件

## 部署

1. 构建项目

```bash
npm run build
# 或
yarn build
```

2. 启动生产服务器

```bash
npm run start
# 或
yarn start
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件 
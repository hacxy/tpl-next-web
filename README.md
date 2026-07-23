# Next.js 项目模板

一个极简、现代的 Next.js 项目模板，集成最佳实践，开箱即用。

## 技术栈

- **React 19** v19.2.4 - 用户界面构建库
- **Next.js** v16.2.10 - React 全栈框架
- **TypeScript** v5.x - 静态类型检查
- **Tailwind CSS** v4.x - 原子化 CSS 框架
- **Zustand** v5.x - 轻量级状态管理
- **Playwright** v1.x - 端到端测试
- **ESLint** v9.x - 代码质量检测
- **Husky** v9.x + **lint-staged** v17.x - Git hooks 管理

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 测试

```bash
# 运行 E2E 测试
pnpm test:e2e

# 带 UI 运行测试
pnpm test:e2e:ui

# 调试模式运行测试
pnpm test:e2e:debug
```

## 代码质量

```bash
# ESLint 检查
pnpm lint

# TypeScript 类型检查
pnpm type-check
```

## 项目结构

```
src/
├── app/
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── globals.css     # 全局样式
└── stores/
    ├── useAppStore.ts  # Zustand store 示例
    └── index.ts        # 统一导出
tests/
└── e2e/
    └── home.spec.ts    # E2E 测试用例
```

## 许可证

MIT

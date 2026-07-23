# 测试指南

## 概述

本项目使用以下测试框架：
- **E2E测试**: Playwright
- **代码检查**: ESLint + TypeScript

## 快速开始

### 安装依赖

```bash
pnpm install
pnpm exec playwright install
```

### 运行测试

```bash
# 运行E2E测试
pnpm test:e2e

# 运行E2E测试（UI模式）
pnpm test:e2e:ui

# 运行E2E测试（调试模式）
pnpm test:e2e:debug

# 完整CI检查
pnpm ci
```

## E2E测试

### 文件结构

```
tests/
└── e2e/
    └── home.spec.ts     # 首页E2E测试
```

### 编写E2E测试

```typescript
import { test, expect } from "@playwright/test";

test("should display the page title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Starter/);
});
```

### 运行特定测试

```bash
# 运行特定测试文件
pnpm test:e2e tests/e2e/home.spec.ts

# 运行特定测试用例
pnpm test:e2e -g "should display the page title"

# 在特定浏览器中运行
pnpm test:e2e --project=chromium
```

## CI/CD

### GitHub Actions

项目配置了以下GitHub Actions工作流：

1. **CI** (`ci.yml`)
   - 代码检查 (ESLint)
   - 类型检查 (TypeScript)
   - 构建
   - E2E测试（分片并行）

2. **PR Check** (`pr-check.yml`)
   - PR大小标签
   - PR信息展示

### 本地CI检查

在提交前运行完整CI检查：

```bash
pnpm ci
```

## 最佳实践

### E2E测试

1. 使用 `test.describe` 组织相关测试
2. 使用 `beforeEach` 减少重复代码
3. 使用语义化选择器（getByRole, getByText）
4. 避免测试实现细节

### 调试

```bash
# 调试E2E测试
pnpm test:e2e:debug
```

## 常见问题

### Playwright浏览器未安装

```bash
pnpm exec playwright install
```

### 测试超时

增加超时时间或检查网络连接。

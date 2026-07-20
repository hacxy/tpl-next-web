# 测试指南

## 概述

本项目使用以下测试框架：
- **单元测试**: Vitest + Testing Library
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
# 运行所有单元测试
pnpm test:unit

# 运行单元测试（监听模式）
pnpm test:unit:watch

# 运行单元测试并生成覆盖率报告
pnpm test:unit:coverage

# 运行E2E测试
pnpm test:e2e

# 运行E2E测试（UI模式）
pnpm test:e2e:ui

# 运行E2E测试（调试模式）
pnpm test:e2e:debug

# 运行所有测试
pnpm test:all

# 完整CI检查
pnpm ci
```

## 单元测试

### 文件结构

```
tests/
├── setup.ts              # 测试设置
└── unit/
    ├── utils.test.ts     # 工具函数测试
    └── button.test.tsx   # 组件测试
```

### 编写单元测试

#### 工具函数测试

```typescript
import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("should join class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });
});
```

#### 组件测试

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("should handle click events", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
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
  await expect(page).toHaveTitle(/Next\.js/);
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

## 覆盖率

生成覆盖率报告：

```bash
pnpm test:unit:coverage
```

报告将生成在 `coverage/` 目录下。

## CI/CD

### GitHub Actions

项目配置了以下GitHub Actions工作流：

1. **CI** (`ci.yml`)
   - 代码检查 (ESLint)
   - 类型检查 (TypeScript)
   - 单元测试
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

### 单元测试

1. 测试文件与源文件同目录或在 `tests/unit/` 目录
2. 使用 `describe` 组织测试用例
3. 测试名称使用中文描述
4. 每个测试只验证一个行为

### E2E测试

1. 使用 `test.describe` 组织相关测试
2. 使用 `beforeEach` 减少重复代码
3. 使用语义化选择器（getByRole, getByText）
4. 避免测试实现细节

### 调试

```bash
# 调试单元测试
pnpm test:unit:watch

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

### 覆盖率不准确

检查 `vitest.config.mts` 中的覆盖率配置。

import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Starter/);
  });

  test("should display the hero section", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();

    const heading = hero.locator("h1");
    await expect(heading).toContainText("构建你的下一个");
  });

  test("should display navigation links", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    await expect(nav.getByText("特性")).toBeVisible();
    await expect(nav.getByText("技术栈")).toBeVisible();
    await expect(nav.getByText("快速开始")).toBeVisible();
  });

  test("should have working CTA button", async ({ page }) => {
    const cta = page.locator("nav").getByText("立即使用");
    await expect(cta).toBeVisible();
  });

  test("should display feature cards", async ({ page }) => {
    const features = page.locator("#features");
    await expect(features).toBeVisible();

    await expect(features.getByText("极快的开发体验")).toBeVisible();
    await expect(features.getByText("组件化架构")).toBeVisible();
    await expect(features.getByText("生产级性能")).toBeVisible();
    await expect(features.getByText("一键部署")).toBeVisible();
  });

  test("should display tech stack pills", async ({ page }) => {
    const tech = page.locator("#tech");
    await expect(tech).toBeVisible();

    await expect(tech.getByText("React 19")).toBeVisible();
    await expect(tech.getByText("TypeScript")).toBeVisible();
    await expect(tech.getByText("Vite")).toBeVisible();
  });

  test("should display quick start code block", async ({ page }) => {
    const quickstart = page.locator("#quickstart");
    await expect(quickstart).toBeVisible();

    await expect(quickstart.getByText("npx create-starter my-app")).toBeVisible();
  });

  test("should have working footer links", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    await expect(footer.getByText("GitHub")).toBeVisible();
    await expect(footer.getByText("文档")).toBeVisible();
    await expect(footer.getByText("讨论区")).toBeVisible();
  });
});

test.describe("Responsive Design", () => {
  test("should hide nav links on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const navLinks = page.locator(".nav-links");
    await expect(navLinks).toBeHidden();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Next\.js/);
  });

  test("should display the hero section", async ({ page }) => {
    const hero = page.locator("section.hero");
    await expect(hero).toBeVisible();

    const heading = hero.locator("h1");
    await expect(heading).toContainText("React 框架");
  });

  test("should display navigation links", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    await expect(nav.getByText("功能特性")).toBeVisible();
    await expect(nav.getByText("开发体验")).toBeVisible();
    await expect(nav.getByText("社区")).toBeVisible();
    await expect(nav.getByText("文档")).toBeVisible();
  });

  test("should have working deploy button", async ({ page }) => {
    const deployButton = page.getByRole("link", { name: "立即部署" });
    await expect(deployButton).toBeVisible();
    await expect(deployButton).toHaveAttribute("href", /vercel\.com/);
  });

  test("should have working documentation link", async ({ page }) => {
    const docsButton = page.getByRole("link", { name: "阅读文档" });
    await expect(docsButton).toBeVisible();
    await expect(docsButton).toHaveAttribute("href", /nextjs\.org\/docs/);
  });

  test("should display feature cards", async ({ page }) => {
    const features = page.locator("#features");
    await expect(features).toBeVisible();

    await expect(features.getByText("性能优化")).toBeVisible();
    await expect(features.getByText("开发体验")).toBeVisible();
    await expect(features.getByText("可扩展性")).toBeVisible();
  });

  test("should display stats section", async ({ page }) => {
    const stats = page.locator("#stats");
    await expect(stats).toBeVisible();

    await expect(stats.getByText("6M+")).toBeVisible();
    await expect(stats.getByText("128K+")).toBeVisible();
  });

  test("should display testimonials", async ({ page }) => {
    const testimonials = page.locator("section").filter({ hasText: "开发者评价" });
    await expect(testimonials).toBeVisible();

    await expect(testimonials.getByText("Sarah Chen")).toBeVisible();
    await expect(testimonials.getByText("Marcus Rivera")).toBeVisible();
    await expect(testimonials.getByText("Aiko Tanaka")).toBeVisible();
  });

  test("should have working footer links", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    const githubLink = footer.getByText("GitHub");
    await expect(githubLink).toHaveAttribute("href", /github\.com/);
  });
});

test.describe("Theme Toggle", () => {
  test("should toggle dark/light theme", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    const themeButton = page.getByRole("button", { name: /切换主题/ });

    // Initial state should be dark
    await expect(html).toHaveAttribute("data-theme", "dark");

    // Toggle to light
    await themeButton.click();
    await expect(html).toHaveAttribute("data-theme", "light");

    // Toggle back to dark
    await themeButton.click();
    await expect(html).toHaveAttribute("data-theme", "dark");
  });
});

test.describe("Smooth Scrolling", () => {
  test("should scroll to features section when clicking nav link", async ({ page }) => {
    await page.goto("/");

    const featuresLink = page.getByRole("link", { name: "功能特性" });
    await featuresLink.click();

    const featuresSection = page.locator("#features");
    await expect(featuresSection).toBeInViewport();
  });
});

test.describe("Responsive Design", () => {
  test("should hide nav links on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const navLinks = page.locator("nav .hidden.md\\:flex");
    await expect(navLinks).toBeHidden();
  });
});

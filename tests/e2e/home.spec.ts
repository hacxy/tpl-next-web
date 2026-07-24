import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display the page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Next.js 项目模板/);
  });

  test("should display the hero section", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();

    const heading = hero.locator("h1");
    await expect(heading).toContainText("Next.js 项目模板");
  });

  test("should display the nav logo", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();

    await expect(nav.getByText("Next.js Template")).toBeVisible();
  });

  test("should display tech stack list", async ({ page }) => {
    const tech = page.locator("#tech");
    await expect(tech).toBeVisible();

    await expect(tech.getByText("React 19")).toBeVisible();
    await expect(tech.getByText("TypeScript").first()).toBeVisible();
    await expect(tech.getByText("Next.js")).toBeVisible();
    await expect(tech.getByText("Tailwind CSS")).toBeVisible();
    await expect(tech.getByText("Zustand")).toBeVisible();
    await expect(tech.getByText("Drizzle ORM")).toBeVisible();
    await expect(tech.getByText("ESLint")).toBeVisible();
    await expect(tech.getByText("Prettier")).toBeVisible();
    await expect(tech.getByText("Playwright")).toBeVisible();
    await expect(tech.getByText("Husky").first()).toBeVisible();
    await expect(tech.getByText("lint-staged")).toBeVisible();
  });

  test("should have working tech links", async ({ page }) => {
    const tech = page.locator("#tech");
    const reactLink = tech.getByText("React 19").locator("..");
    await expect(reactLink).toHaveAttribute("href", "https://github.com/facebook/react");
    await expect(reactLink).toHaveAttribute("target", "_blank");
  });

  test("should have working footer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    await expect(footer.getByText("Next.js Template · MIT License · 2024")).toBeVisible();
    await expect(footer.getByText("GitHub")).toBeVisible();
  });

  test("should display counter controls", async ({ page }) => {
    await expect(page.getByRole("button", { name: "减少" })).toBeVisible();
    await expect(page.getByRole("button", { name: "增加" })).toBeVisible();
    await expect(page.getByRole("button", { name: "重置" })).toBeVisible();
    await expect(page.getByTestId("count")).toContainText("0");
  });

  test("should increment counter", async ({ page }) => {
    const incrementBtn = page.getByRole("button", { name: "增加" });
    const count = page.getByTestId("count");

    await incrementBtn.click();
    await expect(count).toContainText("1");
    await incrementBtn.click();
    await expect(count).toContainText("2");
  });

  test("should decrement counter", async ({ page }) => {
    const decrementBtn = page.getByRole("button", { name: "减少" });
    const count = page.getByTestId("count");

    await decrementBtn.click();
    await expect(count).toContainText("-1");
  });

  test("should reset counter", async ({ page }) => {
    const incrementBtn = page.getByRole("button", { name: "增加" });
    const resetBtn = page.getByRole("button", { name: "重置" });
    const count = page.getByTestId("count");

    await incrementBtn.click();
    await incrementBtn.click();
    await expect(count).toContainText("2");
    await resetBtn.click();
    await expect(count).toContainText("0");
  });

  test("should persist counter after reload", async ({ page }) => {
    const incrementBtn = page.getByRole("button", { name: "增加" });
    const count = page.getByTestId("count");

    await incrementBtn.click();
    await incrementBtn.click();
    await incrementBtn.click();
    await expect(count).toContainText("3");

    await page.reload();
    await expect(count).toContainText("3");
  });
});

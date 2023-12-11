import { test, expect } from "@playwright/test";

test("Search for a movie", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("Your favorite movie").click();
  await page.getByPlaceholder("Your favorite movie").fill("Hulk");

  await page.getByRole("img", { name: "The Incredible Hulk" }).first().click();

  await expect(page.getByRole("heading", { name: "Rated: PG-" })).toBeVisible();
});

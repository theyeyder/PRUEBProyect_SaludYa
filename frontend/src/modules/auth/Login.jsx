import { test, expect } from "@playwright/test";

const URL = "https://proyect-saludya.onrender.com";

test("E2E 1 - Carga la pantalla de login de SaludYa", async ({ page }) => {
  await page.goto(URL);

  await expect(page.locator('input[name="username"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.locator(".login-button")).toBeVisible();
});

test("E2E 2 - Valida campos vacíos en el login", async ({ page }) => {
  await page.goto(URL);

  await page.click(".login-button");

  await expect(page.locator(".login-error")).toContainText(
    "Por favor ingrese el usuario"
  );
});

test("E2E 3 - Inicia sesión con credenciales válidas", async ({ page }) => {
  await page.goto(URL);

  await page.fill('input[name="username"]', "admin");
  await page.fill('input[name="password"]', "123456");

  await page.click(".login-button");

  await page.waitForTimeout(2000);

  await expect(page).toHaveURL(/proyect-saludya.onrender.com/);
});
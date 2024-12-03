const { chromium } = require("playwright");
import { test, expect } from '@playwright/test';
const { email, pass } = require("../user");

test('Succesfull', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('const email = "email";');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('password');
  await page.getByTestId('login-submit-btn').click();

  // Expect a title "to contain" a substring.
  await expect(
    page.locator(
      ".------libs-shared-src-reallyShared-components-User--profileText--vDqvQ"
    )
  ).toContainText("Моё обучение", { timeout: 120_000 });
});


import { test, expect } from '@playwright/test';

test('Unsuccessful', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('email');
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill('password');
  await page.getByTestId('login-submit-btn').click();
  
  // Expect a title "to contain" a substring.
  await expect(
    page.locator(".hint_hint__bpsEa.inputHint", { timeout: 120_000 })
  ).toContainText("Вы ввели неправильно логин или пароль.");
});

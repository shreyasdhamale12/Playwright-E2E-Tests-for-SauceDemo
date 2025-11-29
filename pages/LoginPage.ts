import { Page, expect } from '@playwright/test';

export class LoginPage {

    readonly username;
    readonly password;
    readonly loginButton;
    readonly errmsg;

    constructor(private page: Page) {
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errmsg = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
    }

    async loginBtn() {
        await this.loginButton.click();
    }

    async goBack() {
        await this.page.goBack();
    }


    async expectErrorMessage(expectedText?: string) {
        await expect(this.errmsg).toBeVisible();

        if (expectedText) {
            await expect(this.errmsg).toHaveText(expectedText);
        }
    }


}

import { Page, expect, Locator } from "@playwright/test";

export class CartPage {

    readonly title;
    readonly cartbadge;
    readonly cartItemNames;

    constructor(private page: Page) {
        this.title = page.locator('.title');
        this.cartbadge = page.locator('[data-test="shopping-cart-badge"]');
        this.cartItemNames = page.locator('[data-test="inventory-item-name"]');
    }

    async verifyCartPage() {
        await expect(this.title).toHaveText('Your Cart');
    }

    removeButton(productID: string): Locator {
        return this.page.locator(`[data-test="remove-${productID}"]`);
    }

async removeProduct(productID: string) {
    const button = this.removeButton(productID);

    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await button.waitFor({ state: "visible", timeout: 10000 });
            await button.click();
            return;
        } catch (err) {
            if (attempt === 3) throw err;
            await this.page.waitForTimeout(300);
        }
    }
}


    async getCartCount(): Promise<number> {
        if (await this.cartbadge.count() === 0) {
            return 0;
        }
        const text = await this.cartbadge.innerText();
        return parseInt(text);
    }

    async verifyCartCount(expected: number) {
        const verifyC = await this.getCartCount();
        expect(verifyC).toBe(expected);
    }

    async removeAllProducts() {
        const count = await this.cartItemNames.count();

        for (let i = 0; i < count; i++) {
            const name = await this.cartItemNames.nth(i).innerText();

            const id = name.toLowerCase().replaceAll(/ /g, "-");
            await this.removeProduct(id);
        }

    }

    async getcartItemsNames(): Promise<string[]> {

        const count = await this.cartItemNames.count();
        const items: string[] = [];

        for (let i = 0; i < count; i++) {
            items.push(await this.cartItemNames.nth(i).innerText());
        }
        return items;
    }

    async badgeDisappaears() {
        await expect(this.cartbadge).toHaveCount(0);
    }

}

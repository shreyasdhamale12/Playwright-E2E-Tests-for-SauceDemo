import { Page, Locator } from "@playwright/test";


export class InventoryPage {

    readonly cartIcon;
    readonly productNames;
    readonly productImg;

    constructor(private page: Page) {
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.productNames = page.locator('.inventory_item_name');
        this.productImg = page.locator('.inventory_item_img');

    }

    addToCart(productID: string): Locator {
        return this.page.locator(`[data-test="add-to-cart-${productID}"]`);
    }

    removeFromCartButton(productID: string): Locator {
        return this.page.locator(`[data-test="remove-${productID}"]`);
    }



async addProduct(productID: string) {
    const button = this.addToCart(productID);

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


    async removeProduct(productID: string) {
        await this.removeFromCartButton(productID).click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async getProductCount(): Promise<number> {
        return await this.productNames.count();
    }

    async getProductNames(): Promise<string[]> {

        const list = await this.productNames.allInnerTexts();
        return list;
    }

    allProductImages() {
        return this.productImg;
    }

}

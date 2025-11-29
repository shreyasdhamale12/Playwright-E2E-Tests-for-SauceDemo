import { Page, expect } from "@playwright/test";

export class ProductPage{

    readonly title;

    constructor(private page: Page){
        this.title = page.locator('.app_logo');
    }

    async verifyTitle(){
        await expect(this.title).toHaveText('Swag Labs');
    }

    

}

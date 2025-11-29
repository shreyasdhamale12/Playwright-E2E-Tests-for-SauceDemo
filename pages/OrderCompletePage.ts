import { Page, expect } from "@playwright/test";

export class OrderCompletePage{

    readonly verify;

    constructor(private page: Page){
        this.verify = page.locator('[data-test="complete-header"]');
    }

    async verifyTitle(){
        await expect(this.verify).toHaveText('Thank you for your order!');
    }   

}

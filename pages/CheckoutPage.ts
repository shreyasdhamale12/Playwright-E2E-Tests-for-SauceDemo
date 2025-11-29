import { Page, expect } from "@playwright/test";

export class CheckoutPage{

    readonly title;
    readonly firstName;
    readonly lastName;
    readonly postalCode;
    readonly continueBtn;
    readonly errorMsg;

    constructor(private page: Page){
        this.title = page.locator('[]data-test="title"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('[data-test="continue"]');
        this.errorMsg = page.locator('[data-test="error-button"]');
    }

    async verifyTitle(){
        await expect(this.title).toHaveText('Checkout: Your Information');
    }

    async fillCheckoutForm(first: string, last: string, zip:string){
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(first);
    }

    async clickContinue(){
        await this.continueBtn.click();
    }

    getError(){
        return this.errorMsg;
    }

}

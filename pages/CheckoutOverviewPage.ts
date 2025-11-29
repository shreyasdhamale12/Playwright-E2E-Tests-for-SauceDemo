import { Page, expect } from "@playwright/test";

export class CheckoutOverviewPage{
    readonly productName;
    readonly finishBtn;

    constructor(private page: Page){
        this.productName = page.locator('data-test="inventory-item-name"');
        this.finishBtn = page.locator('data-test="finish"');
    }

    async getOverviewItems(): Promise<string[]>{
        const count = await this.productName.count();
        const items : string[] = [];

        for (let i = 0; i < count; i++) {
            items.push(await this.productName.nth(i).innerText());
        }
        return items;
    }

    async verifyOverviewMatches(expectedItems: string[]) {
       const overviewItems = await this.getOverviewItems();
       expect(overviewItems).toEqual(expectedItems);
  }

}

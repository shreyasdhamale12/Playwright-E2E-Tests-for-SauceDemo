import {test as base} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';
import {InventoryPage} from '../pages/InventoryPage';
import {OrderCompletePage} from '../pages/OrderCompletePage';
import {ProductPage} from '../pages/ProductPage';

type MyFixtures = {
        loginPage : LoginPage,
        cartPage : CartPage,
        checkoutPage : CheckoutPage,
        checkoutOverviewPage : CheckoutOverviewPage,
        inventoryPage : InventoryPage,
        orderCompletePage : OrderCompletePage,
        productPage : ProductPage,
    }

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    checkoutOverviewPage: async ({ page }, use) => {
        await use(new CheckoutOverviewPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    orderCompletePage: async ({ page }, use) => {
        await use(new OrderCompletePage(page));
    },

    productPage : async ({ page }, use) => {
        await use(new ProductPage(page));
    }

});

export const expect = test.expect; 

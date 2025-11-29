import { test, expect } from '../../fixtures/custom-fixtures';
import { users } from '../../users/users';

test.describe('Testing Cart for all valid users', () => {

    const validUsers = users.filter(u => u.expected === "success");

    for (const user of validUsers) {

        test(`Cart Test -> ${user.username}`, async ({ inventoryPage, loginPage, productPage, cartPage }) => {

            await loginPage.goto();
            await loginPage.login(user.username, user.password);
            await loginPage.loginBtn();
            await productPage.verifyTitle();

            //here we Get ALl product names from UI
            const prodNames = await inventoryPage.getProductNames();

            // Here we add all products one by one
            let expectedCount = 0;

            for (const name of prodNames) {

                const productId = name.toLowerCase().replaceAll(/ /g, "-");
                await inventoryPage.addProduct(productId);
                await inventoryPage.goToCart();

                const actual = await cartPage.getCartCount();
                expectedCount = actual;

                await cartPage.verifyCartCount(expectedCount);

                await loginPage.goBack();

            }

            // Verify Cart items name
            await inventoryPage.goToCart();

            const cartItems = await cartPage.getcartItemsNames();
            expect(cartItems.length).toBe(prodNames.length);
            expect(cartItems).toEqual(prodNames);

            // Remove product one-by-one
            for (const items of cartItems) {

                const prodId = items.toLowerCase().replaceAll(/ /g, "-");

                await inventoryPage.goToCart();
                const actualCount = await cartPage.getCartCount();
                expectedCount = actualCount;
                await cartPage.verifyCartCount(expectedCount);

            }

            // Cart should be empty
            await cartPage.badgeDisappaears();
            expect(await cartPage.getcartItemsNames()).toHaveLength(0);
        });

    };

});


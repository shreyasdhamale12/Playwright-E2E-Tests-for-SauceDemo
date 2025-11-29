import { test, expect } from "../../fixtures/custom-fixtures";
import { users } from "../../users/users";

test.describe("Login testing for all users & payloads", () => {

    for (const user of users) {

        test(`Login attempt → ${user.username}`, async ({ loginPage, productPage }) => {

            await loginPage.goto();
            await loginPage.login(user.username, user.password);
            await loginPage.loginBtn();

            if (user.expected === "success") {
                await productPage.verifyTitle();
                return;
            }


            if (user.expected === "error") {
                await loginPage.expectErrorMessage();
                return;
            }

            if (user.expected === "blocked") {

                const blocked = await loginPage.errmsg.isVisible();
                if (blocked) return;

                // Else → SQL injection bypassed login → FAIL
                test.fail(true, "SQL Injection Bypass Detected – HIGH SEVERITY BUG");

            }

        });

    }

});

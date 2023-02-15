import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { MyAccountPage } from '@pages/MyAccountPage';
import { MyAddressesPage } from '@pages/MyAddressesPage'
import { MyPersonalInformationPage } from '@pages/MyPersonalInformationPage';
import { PaxScreenerPage } from '@pages/PaxScreenerPage';

const test = baseTest.extend<{
    paxScreenerPage: PaxScreenerPage;
    loginPage: LoginPage;
    myAccountPage: MyAccountPage;
    myAddressesPage: MyAddressesPage;
    myPersonalInformationPage: MyPersonalInformationPage;

}>({
    paxScreenerPage: async ({ page }, use) => {
        await use(new PaxScreenerPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    myAddressesPage: async ({ page }, use) => {
        await use(new MyAddressesPage(page));
    },
    myPersonalInformationPage: async ({ page }, use) => {
        await use(new MyPersonalInformationPage(page));
    }
});

export default test;
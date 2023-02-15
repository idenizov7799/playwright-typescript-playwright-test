import test from '@lib/BaseTest';

test(`Validate patient can check Covid Treatment Eligibility`, async ({ paxScreenerPage, myAccountPage }) => {
    await paxScreenerPage.navigateToURL();

    await test.step('Enter Patient Info', async () => {
        await paxScreenerPage.enterPatientDOB("09/30/1990")
        await paxScreenerPage.selectPatientGender("Male");
        await paxScreenerPage.enterPatientZipCode("11230");
        await paxScreenerPage.clickPatientWeight('yes');
        await paxScreenerPage.clickPatientHaveMedicareMedicaid('no');
    });
});
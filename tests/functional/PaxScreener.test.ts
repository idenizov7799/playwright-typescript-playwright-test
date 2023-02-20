import test from '@lib/BaseTest';

test(`Validate patient can check Covid Treatment Eligibility`, async ({ paxScreenerPage, myAccountPage }) => {
    await paxScreenerPage.navigateToURL();

    await test.step('Enter Patient Info', async () => {
        await paxScreenerPage.enterPatientDOB('01/01/1985')
        await paxScreenerPage.selectPatientGender('Male');
        await paxScreenerPage.enterPatientZipCode('11230');
        await paxScreenerPage.clickPatientWeight('yes');
        await paxScreenerPage.clickPatientHaveMedicareMedicaid('no');
    });

    await test.step('Enter Medical History Details', async () => {
        await paxScreenerPage.selectMedicalCondition('none');
        await paxScreenerPage.selectDiagnosis('none');
        await paxScreenerPage.selectLiverDiseaseAnswer('no');
        await paxScreenerPage.selectRoutineBloodTestForKidneyFuntionAnswer('no');
        await paxScreenerPage.selectBloodTestLas12MonthsAnswer('no');
        await paxScreenerPage.selectPrescribedMedication('none');
        await paxScreenerPage.selectDoYouTakeAnyOtherPrescriptionAnswer('no');
        await paxScreenerPage.selectAllergiesAnswer('no');
    })

    await(test.step('Click Check Eligibility button',async () => {
        await paxScreenerPage.clickCheckEligibilityButton();
    }))
});
import { PaxScreenerObjects } from "@objects/PaxScreenerObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';

let webActions: WebActions;

export class PaxScreenerPage extends PaxScreenerObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(`/content/pharmacy/covid-treatment`);
    }

    async enterPatientDOB(dob: string): Promise<void>{
        await webActions.enterElementText(PaxScreenerObjects.PatientInfo_DOB_Input, dob);
    }

    async selectPatientGender(gender: string): Promise<void>{
        await webActions.selectOptionFromDropdown(PaxScreenerObjects.PatientInfo_Gender_Dropdown, gender);
    }

    async enterPatientZipCode(zipCode: string): Promise<void>{
        await webActions.enterElementText(PaxScreenerObjects.PatientInfo_ZipCode_Input, zipCode);
    }

    async clickPatientWeight(weight: string): Promise<void>{
        if(weight === "yes"){
            await webActions.clickElement(PaxScreenerObjects.PatientInfo_WeightYes_RadioButton);
        }else if(weight === "no"){
            await webActions.clickElement(PaxScreenerObjects.PatientInfo_WeightNo_RadioButton);
        }else{
            throw Error(`Invalid weight option ${weight} entered. Please enter 'yes' or 'no'.`)
        }
   }

   async clickPatientHaveMedicareMedicaid(medicareMedicaid: string): Promise<void>{
    if(medicareMedicaid === "yes"){
        await webActions.clickElement(PaxScreenerObjects.PatientInfo_MedicareYes_RadioButton);
    }else if(medicareMedicaid === "no"){
        await webActions.clickElement(PaxScreenerObjects.PatientInfo_MedicareNo_RadioButton);
    }else{
        throw Error(`Invalid Medicare/Medicaid option ${medicareMedicaid} entered. Please enter 'yes' or 'no'.`)
    }
    }

    async selectMedicalCondition(condition: string): Promise<void>{
        switch(condition.toLowerCase()){
            case 'none': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Conditions_None_Checkbox);
                break;
            }
        default: { 
            throw new Error(`No medical condition found for input ${condition}. Please check if element locator exists`);
            }           
        }
    }

    async selectDiagnosis(diagnosis: string): Promise<void>{
        switch(diagnosis.toLowerCase()){
            case 'none': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Diagnosed_None_Checkbox);
                break;
            }
        default: { 
            throw new Error(`No medical condition found for input ${diagnosis}. Please check if element locator exists`);
            }           
        }
    }

    async selectLiverDiseaseAnswer(answer: string): Promise<void>{
        switch(answer.toLowerCase()){
            case 'yes': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Cirrhosis_Yes_RadioButton);
                break;
            }
            case 'no': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Cirrhosis_No_RadioButton);
                break;
            }
            default: { 
                throw new Error(`Invalid option ${answer} entered. Please enter 'yes' or 'no'.`);
            }           
        }
    }

    async selectRoutineBloodTestForKidneyFuntionAnswer(answer: string): Promise<void>{
        switch(answer.toLowerCase()){
            case 'yes': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_BloodTestForKidney_Yes_RadioButton);
                break;
            }
            case 'no': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_BloodTestForKidney_No_RadioButton);
                break;
            }
            default: { 
                throw new Error(`Invalid option ${answer} entered. Please enter 'yes' or 'no'.`);
            }           
        }
    }

    async selectBloodTestLas12MonthsAnswer(answer: string): Promise<void>{
        switch(answer.toLowerCase()){
            case 'yes': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_BloodTestLast12Months_Yes_RadioButton);
                break;
            }
            case 'no': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_BloodTestLast12Months_No_RadioButton);
                break;
            }
            default: { 
                throw new Error(`Invalid option ${answer} entered. Please enter 'yes' or 'no'.`);
            }           
        }
    }

    async selectPrescribedMedication(prescription: string): Promise<void>{
        switch(prescription.toLowerCase()){
            case 'none': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Medications_None_Checkbox);
                break;
            }
            default: { 
                throw new Error(`No prescription found for input ${prescription}. Please check if element locator exists`);
            }           
        }
    }

    async selectDoYouTakeAnyOtherPrescriptionAnswer(answer: string): Promise<void>{
        switch(answer.toLowerCase()){
            case 'yes': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Prescriptions_Yes_RadioButton);
                break;
            }
            case 'no': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Prescriptions_No_RadioButton);
                break;
            }
            default: { 
                throw new Error(`Invalid option ${answer} entered. Please enter 'yes' or 'no'.`);
            }           
        }
    }

    async selectAllergiesAnswer(answer: string): Promise<void>{
        switch(answer.toLowerCase()){
            case 'yes': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Allergies_Yes_RadioButton);
                break;
            }
            case 'no': {
                await webActions.clickElement(PaxScreenerObjects.MedicalHistory_Allergies_No_RadioButton);
                break;
            }
            default: { 
                throw new Error(`Invalid option ${answer} entered. Please enter 'yes' or 'no'.`);
            }           
        }
    }

    async clickCheckEligibilityButton(): Promise<void>{
        await webActions.clickElement(PaxScreenerObjects.CheckEligibility_Button);
        // TODO: add some wait that checks service calls await this.page.waitForResponse()
    }

}
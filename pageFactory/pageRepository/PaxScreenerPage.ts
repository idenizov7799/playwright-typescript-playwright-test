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

}
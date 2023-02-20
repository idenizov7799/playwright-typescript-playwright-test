export class PaxScreenerObjects {
    protected static PatientInfo_DOB_Input = `input#dob`;
    protected static PatientInfo_Gender_Dropdown = `select#gender`;
    protected static PatientInfo_ZipCode_Input = `input#zipCode`;
    protected static PatientInfo_WeightYes_RadioButton = `//label[@for = 'weight-yes']`;
    protected static PatientInfo_WeightNo_RadioButton = `//label[@for = 'weight-no']`;
    protected static PatientInfo_MedicareYes_RadioButton = `//label[@for = 'insurance-yes']`;
    protected static PatientInfo_MedicareNo_RadioButton = `//label[@for = 'insurance-no']`;
    
    protected static CovidInfo_TestedPositiveYes_RadioButton = `//label[@for = 'positive-yes']`;
    protected static CovidInfo_TestedPositiveNo_RadioButton = `//label[@for = 'positive-no']`;
    protected static CovidInfo_SymptomsYes_RadioButton = `//label[@for = 'symptoms-yes']`;
    protected static CovidInfo_SymptomsNo_RadioButton = `//label[@for = 'symptoms-no']`;
    protected static CovidInfo_HaveNoSymptoms_RadioButton = `//label[@for = 'symptoms-haveNo']`;
    

    protected static MedicalHistory_Conditions_None_Checkbox = `//label[@for = 'medicalNone']`;

    // Are you diagnosed and taking medications for any of the following conditions?
    protected static MedicalHistory_Diagnosed_None_Checkbox = `//label[@for = 'diagnosedNone']`;
    protected static MedicalHistory_Cirrhosis_Yes_RadioButton  = `//label[@for = 'liver-yes']`;
    protected static MedicalHistory_Cirrhosis_No_RadioButton = `//label[@for = 'liver-no']`;
    protected static MedicalHistory_BloodTestForKidney_Yes_RadioButton = `//label[@for = 'kidney-yes']`;
    protected static MedicalHistory_BloodTestForKidney_No_RadioButton = `//label[@for = 'kidney-no']`;
    protected static MedicalHistory_BloodTestLast12Months_Yes_RadioButton = `//label[@for = 'blood-yes']`;
    protected static MedicalHistory_BloodTestLast12Months_No_RadioButton = `//label[@for = 'blood-no']`;

    // Are you prescribed or taking any of the following medications?
    protected static MedicalHistory_Medications_None_Checkbox = `//label[@for = 'prescriptionNone']`;

    protected static MedicalHistory_Prescriptions_Yes_RadioButton = `//label[@for = 'prescription-yes']`;
    protected static MedicalHistory_Prescriptions_No_RadioButton = `//label[@for = 'prescription-no']`;

    protected static MedicalHistory_Allergies_Yes_RadioButton = `//label[@for = 'allergies-yes']`;
    protected static MedicalHistory_Allergies_No_RadioButton = `//label[@for = 'allergies-no']`;

    protected static CheckEligibility_Button = `button#eligibility-button`

}
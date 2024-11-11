// Stage 1: Basic Information
export type BasicInformationFormType = {
  business_name: string;
  business_type: string;
  trade_name: string;
  field_of_business: string;
  tin_number: string;
  vat_number: string;
  terms_and_condition: boolean;
  general_manager_contact: {
    name: string;
    email: string;
    phone_number: string;
  };
  administrator: {
    user: {
      full_name: string;
      email: string;
      phone_number: string;
      password: string;
      user_type: string;
    };
    title: string;
  };
  business_description: string;
  website: string;
  capital: number;
  business_license_number: string;
  number_of_stakeholders: number;
  number_of_employees: number;
  date_of_establishment: string;
  renewal_date: string;
  business_address: {
    business_address: string;
    region: string;
    zone: string;
    woreda: string;
    kebele: string;
    house_number: string;
    geo_location: string;
  };
};

// Stage 2: Profile Setup
export type ProfileSetupFormType = {
  business_description: string;
  website: string;
  capital: number;
  business_license_number: string;
  number_of_stakeholders: number;
  number_of_employees: number;
  date_of_establishment: string;
  renewal_date: string;
  business_address: {
    business_address: string;
    region: string;
    zone: string;
    woreda: string;
    kebele: string;
    house_number: string;
    geo_location: string;
  };
};

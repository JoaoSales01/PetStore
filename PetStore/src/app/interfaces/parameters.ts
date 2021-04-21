export interface Parameters {
    company_name: string;
    trademark: string;
    email: string;
    social_networks: Array<SocialNetwork>
    adress: string;
    adress_complement: string;
    city: string;
    state: string;
    zip_code: string;
    name: string;
    phones: Array<number>;
    number: string;
    type: string;
    country_code: string;
    account: string;
    
}
export interface SocialNetwork {
    account: string,
    name: string
}

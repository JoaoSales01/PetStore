export interface Product {

    id: string;
    name: string;
    description: string;
    value: number;
    promotional_value?: number;
    featured_image: string;
    images: Array<String>;
    videos: Array<String>;
    rating_stars: number;
    rating_count: number;
    installment_available: boolean;
    installment_count: number;
    featured: boolean;
    animal_type: AnimalType;
    category: string;
    subcategory: string;
    url: string;
    created_at: string;
}

export interface ProductsGetResponse {
    products: Array<Product>;
    cursor: string;
}

export enum AnimalType {
    Cat = 'gato',
    Dog = 'cachorro',
    Others = 'outros'
}

export interface Parameters {
    company_name: string;
    trademark: string;
    email: string;
    social_networks: Array<SocialNetwork>
    
}
export interface SocialNetwork {
    account: string,
    name: string
}

export interface Category {
    id: string,
    name: string,
    description: string,
    subcategories:[
        string
    ],
    url:string
}


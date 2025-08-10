export interface Section {
    id: string;
    name: string;
}

export interface OrganizationalStructure {
    id: string;
    name: string;
    sections: Section[];
}

export interface Member {
    uuid: string;
    name: string;
    title: string;
    email: string;
    phone_number: string;
    organizational_structure: OrganizationalStructure;
}

export interface Church {
    id: number;
    name: string;
    address: string;
    house_number: string;
    administrator_name: string;
    administrator_phone: string;
}

export interface FinancialReport {
    id: number;
    year: number;
    month: string;
    description: string;
    uploadDate: string; // or `Date` if you parse it later
    pdfViews: number;
}

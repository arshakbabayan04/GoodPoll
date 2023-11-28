export interface Poll {
    id: number | string;
    question: string;
    options: Option[];
    active: boolean;
}

export interface Option {
    id: number | string;
    text: string;
    option: string;
    quoteCount: number;
}

export interface Hero {
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    },
    value: boolean; // true X, false = O
    victories: number;
}
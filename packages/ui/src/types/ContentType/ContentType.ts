export type ContentType = {
    root: {
        type: string;
        children: {
            type: string;
            version: number;
            [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
    };
    [k: string]: unknown;
} | null;
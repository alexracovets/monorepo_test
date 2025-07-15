import { Field } from "payload";

export const LetterExample: Field = {
    name: "letter_example",
    type: "array",
    label: "Приклад листа",
    admin: {
        condition: (_, siblingData) => siblingData?.slug === 'rules'
    },
    labels: {
        singular: "Приклад листа",
        plural: "Приклади листів",
    },
    fields: [
        {
            name: "file",
            label: "Файл",
            type: "relationship",
            relationTo: "letters"
        }
    ]
};
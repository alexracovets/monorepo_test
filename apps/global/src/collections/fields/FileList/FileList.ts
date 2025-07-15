import { Field } from "payload";

export const FileList: Field = {
    name: "file_list",
    type: "array",
    label: "Файли",
    admin: {
        condition: (_, siblingData) => siblingData?.slug === 'rules'
    },
    labels: {
        singular: "PDF файл",
        plural: "PDF файли",
    },
    fields: [
        {
            name: "file",
            label: "Файл",
            type: "relationship",
            relationTo: "files"
        }
    ]
};
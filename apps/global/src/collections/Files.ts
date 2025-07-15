import type { CollectionConfig } from 'payload'

export const Files: CollectionConfig = {
    slug: 'files',
    labels: {
        singular: 'Файл',
        plural: 'Файли',
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'file'],
    },
    fields: [
        {
            name: 'name',
            label: "Назва інформації файлу",
            type: 'text',
            required: true,
        },
        {
            name: "link_to_file",
            label: "Текстовий посилання на файл",
            type: "text"
        },
        {
            name: 'description_file',
            type: 'richText',
            label: 'Додатковий опис',
        },
    ],
    upload: true,
}

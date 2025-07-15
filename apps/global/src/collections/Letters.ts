import type { CollectionConfig } from 'payload'

export const Letters: CollectionConfig = {
    slug: 'letters',
    labels: {
        singular: 'Лист',
        plural: 'Листи',
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
        }
    ],
    upload: true,
}

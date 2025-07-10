import type { CollectionConfig } from 'payload';

export const Partners: CollectionConfig = {
    slug: 'partners',
    labels: {
        singular: 'Партнер',
        plural: 'Партнери',
    },
    access: {
        read: () => true,
    },
    admin: {
        defaultColumns: ['name', 'image'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
        },
    ],
};
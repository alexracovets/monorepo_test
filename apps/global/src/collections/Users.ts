import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: ({ req: { user } }) => {
      return user?.isSuperAdmin === true;
    },
    update: ({ req: { user } }) => {
      return user?.isSuperAdmin === true;
    },
    delete: ({ req: { user } }) => {
      return user?.isSuperAdmin === true;
    },
  },
  labels: {
    singular: 'Користувач',
    plural: 'Користувачі',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  hooks: {
    beforeDelete: [
      async ({ req, id }) => {
        const userToDelete = await req.payload.findByID({
          collection: 'users',
          id,
        });

        if (userToDelete.isSuperAdmin) {
          const superAdminCount = await req.payload.find({
            collection: 'users',
            where: {
              isSuperAdmin: {
                equals: true,
              },
            },
          });

          if (superAdminCount.totalDocs <= 1) {
            throw new Error('Неможливо видалити користувача: це єдиний супер адміністратор в системі');
          }
        }
      },
    ],
  },
  fields: [
    {
      name: "isSuperAdmin",
      label: "Супер адміністратор",
      type: "checkbox",
      defaultValue: true,
      access: {
        update: async ({ req, id, data }) => {
          if (!req.user?.isSuperAdmin) return false;
          if (!id) return true;

          const currentUser = await req.payload.findByID({
            collection: 'users',
            id,
          });

          if (currentUser.isSuperAdmin && data?.isSuperAdmin === false) {
            const superAdminCount = await req.payload.find({
              collection: 'users',
              where: { isSuperAdmin: { equals: true } },
            });
            if (superAdminCount.totalDocs <= 1) {
              return false;
            }
          }

          return true;
        },
      },
    },
  ],
}

'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'createdAt',
    header: 'Last Updated'
  },
  {
    accessorKey: 'views',
    header: 'Views'
  },
  {
    accessorKey: 'catSlug',
    header: 'Category'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'actions',
    header: 'Actions'
  }
];

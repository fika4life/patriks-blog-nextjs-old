'use client';

import { useRouter, useParams } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';

import { MoreHorizontal, Edit, Delete } from 'lucide-react';

export default function CellAction({ data }) {
  const router = useRouter();
  const params = useParams();

  const onDelete = async (slug) => {
    try {
      const url = `/api/posts/${slug}`;
      console.log(url);
      const res = await fetch(url, {
        method: 'DELETE'
      });

      router.refresh();

      toast.success('Your post has been deleted');
    } catch (error) {
      console.error(error.message);
      toast.error('Post not deleted. something went wrong.');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            router.push(`${process.env.url}/posts/edit/${data.slug}`)
          }
        >
          {/* TODO: Edit dashboard post https://youtu.be/5miHyP6lExg?feature=shared&t=18095  */}
          <Edit className="mr-2 h-4 w-4"></Edit>
          Edit
        </DropdownMenuItem>
        {/* TODO: Add confirmation modal */}
        <DropdownMenuItem
          onClick={() => {
            console.log(data.slug);
            onDelete(data.slug);
          }}
        >
          <Delete className="mr-2 h-4 w-4"></Delete>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

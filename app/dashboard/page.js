import { columns } from './columns';
import { DataTable } from '@/components/data-table';

async function getData() {
  // Fetch data from your API here.
  const res = await fetch(`${process.env.URL}/api/posts`, {
    next: { revalidate: 0 }
  });
  const data = res.json();

  return data;
}

export default async function DashboardPage() {
  const { posts } = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={posts} />
    </div>
  );
}

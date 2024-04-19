import TableRow from '@/components/TableRow';

export default function DashboardPage() {
  return (
    <div className="container mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-primary  sm:text-4xl md:text-[40px]">
        Dashboard
      </h2>

      <div className="">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Title
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Last Updated
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Views
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Category
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <TableRow
              title="THis is another blog title"
              views="99"
              category="Finance"
              lastUpdated="Dec.4 2022"
              status={'Published'}
            ></TableRow>
            <TableRow
              title="THis is a blog title"
              views="99"
              category="Saving"
              lastUpdated="Nov.4 2022"
              status={'Draft'}
            ></TableRow>
          </tbody>
        </table>
      </div>
    </div>
  );
}

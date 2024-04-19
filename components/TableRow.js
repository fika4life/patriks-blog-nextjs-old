export default function TableRow({
  title,
  lastUpdated,
  views,
  status,
  category
}) {
  return (
    <tr>
      <th className="px-6 py-4 font-medium text-gray-900">{title}</th>
      <td className="px-6 py-4">{lastUpdated}</td>
      <td className="px-6 py-4">{views}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">
        <span class="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
          {status}
        </span>
      </td>
      <td className="flex justify-end gap-4 px-6 py-4 font-medium">
        <a href="">Delete</a>
        <a href="" className="text-primary-700">
          Edit
        </a>
      </td>
    </tr>
  );
}

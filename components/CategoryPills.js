import { client } from '@/app/lib/sanity';
import Tag from './Tag';

const getAllTags = async () => {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
};

export default async function CategoryPills() {
  const tags = await getAllTags();

  return (
    <aside className=" w-1/4 ml-4 px-6 ">
      <h3 className="mb-8 text-3xl font-bold text-center text-primary  sm:text-3xl md:text-[28px]">
        Categories
      </h3>
      <div className="flex justify-around flex-wrap gap-y-2">
        {tags.map((tag) => (
          <Tag key={tag._id} slug={tag.name}></Tag>
        ))}
      </div>
    </aside>
  );
}

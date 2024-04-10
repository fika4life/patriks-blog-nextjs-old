import Image from 'next/image';
import money from '/public/money.jpeg';
import Tag from '@/components/Tag';

async function getData(slug) {
  const res = await fetch(`${process.env.URL}/api/posts/${slug}`);

  if (!res.ok) {
    throw new Error('Error fetching post');
  }

  return res.json();
}

const BlogDetails = async ({ params }) => {
  const slug = params.slug;
  const { post } = await getData(slug);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = new Date(post.createdAt).toLocaleString(
    'en-US',
    options
  );

  return (
    <article className="container mx-auto px-16">
      <Tag slug={post.catSlug}></Tag>
      <h2 className="mb-2 mt-8 text-3xl font-bold text-primary sm:text-4xl md:text-[40px]">
        {post.title}
      </h2>
      <div className="">
        <p className="text-primary text-xl font-normal mb-8">{formattedDate}</p>
      </div>

      <Image
        src={post.img || money}
        width={1000}
        height={400}
        style={{ width: '100%' }}
      ></Image>

      <div className="mt-8 mb-16">{post.desc}</div>
    </article>
  );
};

export default BlogDetails;

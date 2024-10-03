import Image from 'next/image';
import money from '/public/money.jpeg';
import Tag from '@/components/Tag';
import { client, urlFor } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';

const getData = async (slug) => {
  const query = `
  *[_type == "blog" && slug.current == "${slug}"][0] {
    title,
    smallDescription,
    'slug': slug.current,
    titleImage,
    tags,
    content,
    _createdAt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  console.log('data', data);
  return data;
};

export const revalidate = 30;

const BlogDetails = async ({ params }) => {
  const slug = params.slug;
  const post = await getData(slug);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = new Date(post?._createdAt).toLocaleString(
    'en-US',
    options
  );

  return (
    <article className="container mx-auto px-16">
      <Tag slug={post?.tags[0].name}></Tag>
      <h2 className="mb-2 mt-8 text-3xl font-bold text-primary sm:text-4xl md:text-[40px]">
        {post?.title}
      </h2>
      <div className="">
        <p className="text-primary text-xl font-normal mb-8">{formattedDate}</p>
      </div>

      <Image
        src={urlFor(post?.titleImage.asset._ref).url() || money}
        width={1000}
        height={400}
        className="mx-auto max-w-4xl rounded-sm"
        alt={post?.title}
      ></Image>
      <div
        className="mt-14
      
          max-w-3xl
          m-auto
          prose
          prose-headings:my-5
          prose-heading:text-2xl
          prose-p:mb-5
          prose-p:leading-7
          prose-li:list-disc
          prose-li:leading-7
          prose-li:ml-4"
      >
        <PortableText
          value={post.content}
          components={myPortableTextComponents}
        />
      </div>
    </article>
  );
};

export default BlogDetails;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="grid place-items-center my-8">
        <Image
          src={urlFor(value).url()}
          alt="Post"
          width={700}
          height={700}
          className="rounded-sm"
        />
      </div>
    )
  }
};

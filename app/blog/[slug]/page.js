import Image from 'next/image';
import money from '/public/money.jpeg';
import Tag from '@/components/Tag';

Image;
export default function BlogDetails() {
  return (
    <article className="container mx-auto px-16">
      <Tag slug="Finance"></Tag>
      <h2 className="mb-2 mt-8 text-3xl font-bold text-primary sm:text-4xl md:text-[40px]">
        This Is the Blog Title.
      </h2>
      <div className="">
        <p className="text-primary text-xl font-normal mb-8">June 23, 2023</p>
      </div>

      <Image
        src={money}
        width={1000}
        height={400}
        style={{ width: '100%' }}
      ></Image>

      <div className="mt-8">
        <p className="text-primary text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
          soluta in maiores, voluptatem commodi consectetur autem ab incidunt.
          Nemo dolore neque eligendi. Tempora eveniet eum veniam magni
          asperiores fugit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Natus veritatis quam illum nemo, odit aliquam explicabo culpa
          sequi placeat vero, optio iste odio et numquam ab vitae. Voluptatum,
          quam veritatis?
        </p>
        <p className="text-primary text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
          soluta in maiores, voluptatem commodi consectetur autem ab incidunt.
          Nemo dolore neque eligendi. Tempora eveniet eum veniam magni
          asperiores fugit.
        </p>
        <p className="text-primary text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
          soluta in maiores, voluptatem commodi consectetur autem ab incidunt.
          Nemo dolore neque eligendi. Tempora eveniet eum veniam magni
          asperiores fugit. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ratione voluptatem eos molestiae in fugit officia et quo dicta,
          aut amet provident quis repellat delectus quia ea doloremque esse ut
          corrupti.
        </p>
        <p className="text-primary text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
          soluta in maiores, voluptatem commodi consectetur autem ab incidunt.
          Nemo dolore neque eligendi. Tempora eveniet eum veniam magni
          asperiores fugit.
        </p>
        <p className="text-primary text-md mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
          soluta in maiores, voluptatem commodi consectetur autem ab incidunt.
          Nemo dolore neque eligendi. Tempora eveniet eum veniam magni
          asperiores fugit.Lorem Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officia quod ad ex et quia praesentium, facilis ipsa
          consectetur corrupti excepturi vitae eligendi. Modi provident non
          inventore unde tenetur. Tempora, eligendi.
        </p>
      </div>
    </article>
  );
}

import BlogCard from '@/components/BlogCard';
import Tag from '@/components/Tag';

const CategoryPage = ({ params }) => {
  return (
    <div className="container mx-auto flex justify-between ">
      <section className="flex flex-col w-3/4 ">
        <h2 className="mb-8 text-3xl font-bold text-primary  sm:text-4xl md:text-[40px]">
          Posts in {params.category_name}
        </h2>

        <div className="-mx-4 flex flex-wrap">
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Y23YC07/image-02.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Y23YC07/image-02.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />

          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Y23YC07/image-02.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/Y23YC07/image-02.jpg"
          />
          <BlogCard
            date="Dec 22, 2023"
            CardTitle="Meet AutoManage, the best AI management tools"
            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
          />
        </div>
      </section>

      <aside className=" w-1/4 ml-4 px-6 ">
        <h3 className="mb-8 text-3xl font-bold text-center text-primary  sm:text-3xl md:text-[28px]">
          Categories
        </h3>
        <div className="flex justify-around flex-wrap gap-y-2">
          <Tag name={'Finance'}></Tag>
          <Tag name={'Saving'}></Tag>
          <Tag name={'Investing'}></Tag>
          <Tag name={'Dreaming Big'}></Tag>
          <Tag name={'Accounting'}></Tag>
          <Tag name={'Taxes'}></Tag>
        </div>
      </aside>
    </div>
  );
};

export default CategoryPage;

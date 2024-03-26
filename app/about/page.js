import React from 'react';
import profile from '../../public/profile.png';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto mb-24">
      <h2 className="mb-8 mt-24 text-3xl font-bold text-primary dark:text-white sm:text-4xl md:text-[40px]">
        About Millennial Wealth
      </h2>
      <div className="flex gap-x-16 text-primary justify-between">
        <div className="w-2/4">
          <p className="mb-4">
            Ever felt like you&apos;re stuck in the endless cycle of the rat
            race? I know the feeling all too well. I&apos;m a
            thirty-seven-year-old who&apos;s been there, done that. But guess
            what? I&apos;ve cracked the code to break free, and now I&apos;m
            here to share my journey and the secrets I&apos;ve learned along the
            way.
          </p>

          <p className="mb-4">
            Let&apos;s talk about investing—not just in traditional avenues, but
            in cutting-edge technologies that are reshaping the world as we know
            it. From artificial intelligence to blockchain, there&apos;s a whole
            new world of opportunities out there, and I&apos;m here to guide you
            through it.
          </p>

          <p className="mb-4">
            But here&apos;s the thing: millennials like us are facing unique
            challenges. We&apos;re not guaranteed to retire like our parents
            were, and the dream of owning a home feels more out of reach than
            ever. That&apos;s why it&apos;s crucial for us to take our financial
            futures into our own hands.
          </p>

          <p className="mb-4">
            At Millenial Wealth, I&apos;m not just another faceless expert
            doling out advice. I&apos;m someone who&apos;s been in your shoes,
            who understands the struggles and frustrations of navigating the
            financial landscape. And now, I&apos;m here to help you chart a
            course towards financial freedom and success.
          </p>

          <p>
            So buckle up, because we&apos;re about to embark on an exciting
            journey together. Join me as we explore the world of finance, learn
            about cutting-edge technologies, and unlock the secrets to building
            wealth and living life on our own terms.
          </p>
        </div>
        <Image src={profile} width={200} height={50} className="w-1/3"></Image>
      </div>
    </div>
  );
};

export default AboutPage;

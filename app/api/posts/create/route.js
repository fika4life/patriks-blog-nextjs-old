import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    // const post = await request.json();

    // console.log(post);

    const data = await prisma.post.create({
      data: {
        title: 'Hey there',
        slug: 'hey-there',
        category: {
          connect: {
            slug: 'saving'
          }
        },
        desc: 'This is a test post',
        img: null,
        user: {
          connect: {
            email: 'fistewie@gmail.com'
          }
        }
      }
    });

    return new NextResponse(JSON.stringify({ data }, { status: 200 }));
  } catch (error) {
    throw new Error(error.message);
    return new NextResponse(
      JSON.stringify(
        { message: 'There was an error creating your post' },
        { status: 500 }
      )
    );
  }
};

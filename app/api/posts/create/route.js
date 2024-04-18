import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const body = await request.json();

    console.log(body);
    const { title, slug, category, desc, img } = body;

    const data = await prisma.post.create({
      data: {
        title,
        slug,
        category: {
          connect: {
            slug: category
          }
        },
        desc: desc,
        img: img,
        user: {
          connect: {
            email: 'fistewie@gmail.com'
          }
        }
      }
    });

    return new NextResponse(JSON.stringify({ data }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify(
        { message: 'There was an error creating your post' },
        { status: 500 }
      )
    );
  }
};

import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    const post = await request.json();

    const data = await prisma.post.create({
      data: {
        post
      }
    });

    return new NextResponse.json({ data, error });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify(
        { message: 'There was an error creating your post' },
        { status: 500 }
      )
    );
  }
};

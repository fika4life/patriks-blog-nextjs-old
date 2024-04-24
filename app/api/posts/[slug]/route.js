import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
  try {
    const { slug } = params;

    //connect to database
    const post = await prisma.post.findUnique({
      where: {
        slug: slug
      }
    });

    return new NextResponse(JSON.stringify({ post }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to retrieve post' }, { status: 500 })
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { slug } = params;

    //connect to database
    const post = await prisma.post.deleteMany({
      where: {
        slug: slug
      }
    });

    return new NextResponse(JSON.stringify({ post }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Failed to delete post' }, { status: 500 })
    );
  }
};

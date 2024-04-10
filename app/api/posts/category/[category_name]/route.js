import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const GET = async (req, { params }) => {
  const category = params.category_name;

  try {
    const posts = await prisma.post.findMany({
      where: { catSlug: category }
    });

    return new NextResponse(
      JSON.stringify({
        posts,
        status: 200
      })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong',
        status: 500
      })
    );
  }
};

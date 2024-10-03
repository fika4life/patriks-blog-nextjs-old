import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  apiVersion: '2023-05-23',
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder?.image(source).auto('format').fit('max');
}

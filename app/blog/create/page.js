'use client';
import TipTapEditor from '@/components/TipTapEditor';
import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('finance');
  const [file, setFile] = useState('');
  const [editorState, setEditorState] = useState(null);

  // TODO: Add validation for inputs
  // TODO: Enable upload images

  const router = useRouter();

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    }
  });

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      slug: slugify(title),
      category,
      img: file,
      desc: editorState
    };

    console.log(newPost);

    try {
      const data = await fetch(`/api/posts/create`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      const res = await data.json();

      if (res.error) {
        console.log(error.message);
      }
      if (res.data) {
        router.refresh();
        router.push('/blog');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <form className="w-3/4" onSubmit={handleSubmit}>
        {/* title */}
        <div className="mx-auto max-w-4xl">
          <div>
            <label
              htmlFor="title"
              className="mb-1 block text-sm font-medium text-primary"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter title"
            />
          </div>
        </div>

        {/* Category */}
        <div className="mx-auto max-w-4xl  my-8 ">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-primary"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300  "
          >
            <option value="finance">Finance</option>
            <option value="saving">Saving</option>
            <option value="taxes">Taxes</option>
          </select>
        </div>

        {/* upload box */}
        <div className="mx-auto max-w-4xl">
          <label
            htmlFor="coverImg"
            className="mb-1 block text-sm font-medium text-primary"
          >
            Upload file
          </label>
          <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
            <div className="space-y-1 text-center">
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>
              <div className="text-gray-600">
                <a
                  href="#"
                  className="font-medium text-primary-500 hover:text-primary-700"
                >
                  Click to upload
                </a>
                or drag and drop
              </div>
              <p className="text-sm text-gray-500">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
            <input id="coverImg" type="file" className="sr-only" />
          </label>
        </div>

        {/* textarea */}
        <div className="mt-12 mx-auto max-w-4xl">
          <TipTapEditor editor={editor} />
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

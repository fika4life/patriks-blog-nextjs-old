'use client';
import TipTapEditor from '@/components/TipTapEditor';
import { useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';
import { app } from '@/utils/firebase';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('finance');
  const [file, setFile] = useState(null);
  const [editorState, setEditorState] = useState(null);
  const [media, setMedia] = useState('');

  // TODO: Add validation for inputs

  // TODO: Enable auto save
  // TODO: Enable only render if published status
  // TODO: Check if title is unique so slug is unique
  // TODO: Allow user to add categories
  // TODO: Upgrade post views if user visits page

  const router = useRouter();

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

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
      img: media,
      desc: editorState
    };

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
              required
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

        <div className="mx-auto max-w-4xl  my-8 ">
          <label
            htmlFor="image"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Upload file
          </label>
          <input
            id="image"
            type="file"
            className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* textarea */}
        <div className="mt-12 mx-auto max-w-4xl">
          <TipTapEditor editor={editor} />
        </div>
        <div className="mt-12 mx-auto max-w-4xl flex justify-end">
          <Button type="submit">Create Post</Button>
        </div>
      </form>
    </div>
  );
}

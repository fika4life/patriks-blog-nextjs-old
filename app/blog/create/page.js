'use client';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState('');
  const [blogBody, setBlogBody] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <form className="w-1/2" onSubmit={handleSubmit}>
        {/* title */}
        <div className="mx-auto max-w-2xl">
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
        <div className="mx-auto max-w-2xl  my-8 ">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-primary"
          >
            Category
          </label>
          <select
            id="category"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300  "
          >
            <option value="finance">Finance</option>
            <option value="saving">Saving</option>
            <option value="taxes">Taxes</option>
          </select>
        </div>

        {/* upload box */}
        <div className="mx-auto max-w-2xl">
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
        <div className="mx-auto max-w-2xl  my-8 ">
          <label
            htmlFor="blogBody"
            className="mb-1 block text-sm font-medium text-primary"
          >
            Message
          </label>
          <textarea
            value={blogBody}
            onChange={(e) => setBlogBody(e.target.value)}
            id="blogBody"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 pt-2"
            rows="20"
            placeholder="
            Start blogging..."
          ></textarea>
        </div>
      </form>
    </div>
  );
}

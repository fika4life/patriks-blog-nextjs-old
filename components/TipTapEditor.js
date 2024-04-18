'use client';
import { EditorContent } from '@tiptap/react';
import TipTapMenuBar from '@/components/TipTapMenuBar';

const TipTapEditor = ({ editor }) => {
  return (
    <>
      <div className="flex">
        {editor && <TipTapMenuBar editor={editor}></TipTapMenuBar>}
      </div>
      <div className="prose w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 my-2 -mx-3/4">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};
export default TipTapEditor;

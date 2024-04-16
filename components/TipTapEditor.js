'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { useState } from 'react';
import TipTapMenuBar from '@/components/TipTapMenuBar';

const TipTapEditor = () => {
  const [editorState, setEditorState] = useState(null);

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    }
  });

  return (
    <>
      <div className="flex">
        {editor && <TipTapMenuBar editor={editor}></TipTapMenuBar>}
      </div>
      <div className="prose block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 my-2">
        <EditorContent editor={editor} />
      </div>
    </>
  );
};
export default TipTapEditor;

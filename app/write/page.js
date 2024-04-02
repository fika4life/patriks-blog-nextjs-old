'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function WritePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col">
      <input type="text" placeholder="Title" />
      <div className="flex gap-4 h-[700px] relative">
        <button className="h-10 rounded-full bg-transparent border-1 border-primary flex align-middle justify-center cursor-pointer ">
          <Image src="/plus.png" alt="Plus icon" width={16} height={16}></Image>
        </button>
      </div>
    </div>
  );
}

// Profile.tsx
'use client';

import Image from 'next/image';

export default function Profile() {
  return (
    <Image
      src="/Project-icons/profile.svg"
      alt="Profile"
      width={32}
      height={32}
      className="rounded-full cursor-pointer"
    />
  );
}

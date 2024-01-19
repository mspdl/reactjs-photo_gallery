"use client";

import { photoList } from "@/data/photoList";

export default function Home() {
  return (
    <div className="mx-2">
      <h1 className="text-center text-3xp font-bold my-10">Space Photos</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((photo) => (
          <div key={photo.id}>...</div>
        ))}
      </section>
    </div>
  );
}

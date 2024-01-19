"use client";

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./components/PhotoItem";

export default function Home() {
  return (
    <div className="mx-2 mb-10">
      <h1 className="text-center text-3xl font-bold my-10">Space Photos</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} clickPhoto={() => {}} />
        ))}
      </section>
    </div>
  );
}

"use client";

import { Modal } from "@/components/Modal";
import { photoList } from "@/data/photoList";
import { useState } from "react";
import { PhotoItem } from "../components/PhotoItem";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (photoId: number) => {
    const photo = photoList.find((photo) => photo.id === photoId);
    if (photo) {
      setModalImage(photo.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-2 mb-10">
      <h1 className="text-center text-3xl font-bold my-10">Space Photos</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            clickPhoto={() => openModal(photo.id)}
          />
        ))}
      </section>

      {showModal && <Modal image={modalImage} closeModal={closeModal} />}
    </div>
  );
}

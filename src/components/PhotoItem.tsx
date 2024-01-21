import { Photo } from "@/types/Photo";

type PhotoItemProps = {
  photo: Photo;
  clickPhoto: () => void;
};

export const PhotoItem = ({ photo, clickPhoto }: PhotoItemProps) => {
  return (
    <div
      className="rounded 
        cursor-pointer 
        duration-700 
        hover:opacity-80 
        hover:-translate-y-1 
        hover:scale-110 transition 
        hover:border-white 
        hover:border-2"
      onClick={clickPhoto}
    >
      <img src={`/assets/${photo.url}`} />
    </div>
  );
};

type ModalProps = {
  image: string;
  closeModal: () => void;
};

export const Modal = ({ image, closeModal }: ModalProps) => {
  return (
    <>
      <div
        className="absolute left-2/4 top-2/4 bg-black/90 border-2 border-white transform translate-x-[-50%] translate-y-[-50%] w-[80%]"
      >
        <img src={`/assets/${image}`} alt="" className="" />
        <div
          onClick={closeModal}
          className="absolute top-0 right-3 text-white text-3xl cursor-pointer"
        >
          x
        </div>
      </div>
    </>
  );
};

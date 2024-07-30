import { Dialog, DialogPanel } from '@headlessui/react';

type Props = {
  isOpen: boolean;
  imageSrc: string;
  alt?: string;
  closeModal: () => void;
};

export default function ImageModal({
  isOpen,
  imageSrc,
  alt = '',
  closeModal,
}: Props) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/20">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-screen-xl flex items-center justify-center rounded-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <img src={imageSrc} alt={alt} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

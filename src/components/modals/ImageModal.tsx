import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

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
        <DialogBackdrop
          transition
          className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="flex items-center justify-center rounded-xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <img
                className="max-w-screen-lg w-full"
                src={imageSrc}
                alt={alt}
              />
            </DialogPanel>
          </div>
        </DialogBackdrop>
      </Dialog>
    </>
  );
}

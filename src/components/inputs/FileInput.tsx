import { ChangeEvent, DragEvent, useState } from 'react';
import Button from '../common/Button';
import ImageModal from '../modals/ImageModal';
import CloudIcon from '../svg/icon/CloudIcon';
import WhiteXIcon from '../svg/icon/WhiteXIcon';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDrop: (file: File) => void;
  // reset: () => void;
};

export default function FileInput({ onChange, onDrop }: Props) {
  const [key, setKey] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [modal, setModal] = useState({
    isOpen: false,
    imageSrc: '',
    alt: '',
  });

  const removeFile = () => {
    setKey('');
    setFile(null);
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setKey(e.target.files[0].name);
    setFile(e.target.files[0]);
    onChange(e);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
    onDrop(file);
  };

  return (
    <>
      <ImageModal
        isOpen={modal.isOpen}
        imageSrc={modal.imageSrc}
        alt={modal.alt}
        closeModal={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      />
      <div className="relative flex items-center justify-center w-full">
        <section className="absolute">
          <div
            className={`relative ${
              file
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-90 pointer-events-none'
            } duration-300 ease-out`}
          >
            <Button
              onClick={(e) => {
                e.preventDefault();
                removeFile();
              }}
              className="absolute -right-5 -top-3 w-7 h-7 z-10 hover:scale-90 duration-500 ease-in-out"
              buttonType="close"
            >
              <WhiteXIcon isSmall />
            </Button>
            <div className="h-52 md:h-64 overflow-hidden">
              <img
                draggable={false}
                onClick={() =>
                  setModal({
                    isOpen: true,
                    imageSrc: file ? URL.createObjectURL(file) : '',
                    alt: file?.name || '',
                  })
                }
                className="h-full object-contain cursor-pointer hover:scale-105 duration-300 ease-out"
                src={file ? URL.createObjectURL(file) : ''}
                alt={file?.name || ''}
              />
            </div>
          </div>
        </section>

        <label
          htmlFor="file"
          onDragEnter={() => setIsActive(true)}
          onDragLeave={() => setIsActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className={`${
            file
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'opacity-100 scale-100 pointer-events-auto'
          } duration-300 ease-out group flex flex-col items-center justify-center w-full h-52 md:h-64 border border-black border-dashed rounded-sm cursor-pointer bg-white ${
            isActive && 'bg-gray-50'
          } hover:bg-gray-50`}
        >
          <div className="flex flex-col items-center justify-center py-5">
            <CloudIcon isActive={isActive} />
            <p className="mb-2 text-sm text-black">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-black">PNG, JPG</p>
          </div>
          <input
            key={key}
            id="file"
            type="file"
            className="hidden"
            // accept="image/*"
            accept=".png, .jpg"
            onChange={handleUpload}
          />
        </label>
      </div>
    </>
  );
}

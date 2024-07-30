import { ChangeEvent, useState } from 'react';
import Button from '../common/Button';
import ImageModal from '../modals/ImageModal';
import CloudIcon from '../svg/icon/CloudIcon';
import WhiteXIcon from '../svg/icon/WhiteXIcon';

type Props = {
  isRequired?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FileInput({ isRequired = true, onChange }: Props) {
  const [key, setKey] = useState('');
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

  return (
    <>
      <ImageModal
        isOpen={modal.isOpen}
        imageSrc={modal.imageSrc}
        alt={modal.alt}
        closeModal={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      />
      <div className="flex items-center justify-center w-full">
        {file ? (
          <div className="relative">
            <Button
              onClick={removeFile}
              className="absolute -right-5 -top-3 w-7 h-7 z-10 hover:scale-90 duration-500 ease-in-out"
              buttonType="close"
            >
              <WhiteXIcon isSmall />
            </Button>
            <div>
              <img
                draggable={false}
                onClick={() =>
                  setModal({
                    isOpen: true,
                    imageSrc: URL.createObjectURL(file),
                    alt: file.name,
                  })
                }
                className="h-52 md:h-64 object-contain cursor-pointer hover:scale-105 duration-300 ease-out"
                src={URL.createObjectURL(file)}
                alt={file.name}
              />
            </div>
          </div>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-52 md:h-64 border border-black border-dashed rounded-sm cursor-pointer bg-white hover:bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center py-5">
              <CloudIcon />
              <p className="mb-2 text-sm text-black">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-black">PNG, JPG</p>
            </div>
            <input
              key={key}
              id="dropzone-file"
              type="file"
              className="hidden"
              name="file"
              accept="image/*"
              required={isRequired}
              onChange={handleUpload}
            />
          </label>
        )}
      </div>
    </>
  );
}

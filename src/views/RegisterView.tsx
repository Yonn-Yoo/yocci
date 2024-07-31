import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../components/common/Button';
import HeroBanner from '../components/common/HeroBanner';
import FileInput from '../components/inputs/FileInput';
import Input from '../components/inputs/Input';
import { ProductType } from '../types';

const INITIAL_STATE = {
  file: null,
  itemName: '',
  description: '',
  options: '',
};

export default function RegisterView() {
  const [product, setProduct] = useState<ProductType>(INITIAL_STATE);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'file' && files) {
      setProduct((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      return;
    }

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDrop = (file: File) => {
    setProduct((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="w-full h-full">
        <HeroBanner
          heroPhrase="register item"
          heroImage="/img/cart-hero.webp"
        />
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-lg w-full mx-auto mt-5 p-4 flex flex-col space-y-3 md:space-y-5"
        >
          <FileInput onChange={handleOnChange} onDrop={onDrop} />
          <Input
            name="itemName"
            label="product name"
            value={product.itemName}
            onChange={handleOnChange}
          />
          <Input
            name="description"
            value={product.description}
            onChange={handleOnChange}
          />
          <Button>Register</Button>
        </form>
      </section>
    </>
  );
}

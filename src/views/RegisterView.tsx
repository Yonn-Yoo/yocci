import { ChangeEvent, FormEvent, useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/common/Button';
import HeroBanner from '../components/common/HeroBanner';
import FileInput from '../components/inputs/FileInput';
import Input from '../components/inputs/Input';
import { useToast } from '../contexts/toast-context';
import { ProductType, ToastType } from '../types';
import { createUuid } from '../utils/utils';

const INITIAL_STATE = {
  file: null,
  itemName: '',
  description: '',
  options: '',
  price: '',
};

export default function RegisterView() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>(INITIAL_STATE);
  const { createToast } = useToast();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { id, value, files } = e.target;

    if (id === 'file' && files) {
      setProduct((prev) => ({
        ...prev,
        [id]: files[0],
      }));
      return;
    }

    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onDrop = (file: File) => {
    setProduct((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!product.file) return;

    e.preventDefault();
    setLoading(true);

    uploadImage(product.file)
      .then((url) => {
        addNewProduct(product, url)
          .then(() => {
            openToast();
            setProduct(INITIAL_STATE);
          })
          .catch(({ message }) => openToast('fail', message))
          .finally(() => setLoading(false));
      })
      .catch(({ message }) => {
        openToast('fail', message);
        setLoading(false);
      });

    function openToast(type: ToastType['type'] = 'success', text?: string) {
      createToast({
        type,
        text: text
          ? `Product uploaded fail: ${text}`
          : 'Product is successfully uploaded.',
        id: createUuid(),
      });
    }
  };

  return (
    <>
      <section className="w-full h-full">
        <HeroBanner
          heroPhrase="register new product"
          heroImage="/img/cart-hero.webp"
        />
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-lg w-full mx-auto mt-5 p-4 flex flex-col space-y-3 md:space-y-5"
        >
          <FileInput onChange={handleOnChange} onDrop={onDrop} />
          <Input
            id="itemName"
            label="product name"
            value={product.itemName}
            onChange={handleOnChange}
            required
          />
          <Input
            id="description"
            value={product.description}
            onChange={handleOnChange}
            required
          />
          <Input
            id="price"
            type="number"
            value={product.price}
            onChange={handleOnChange}
            required
          />
          <Input
            id="options"
            value={product.options}
            onChange={handleOnChange}
            placeholder="Distinguish options by comma(' , ')."
          />
          <Button disabled={loading}>
            {loading ? 'loading...' : 'Register'}
          </Button>
        </form>
      </section>
    </>
  );
}

import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/common/Button';
import HeroBanner from '../components/common/HeroBanner';
import SelectList from '../components/common/SelectList';
import FileInput, { FileInputRefType } from '../components/inputs/FileInput';
import Input from '../components/inputs/Input';
import { useToast } from '../contexts/toast-context';
import useProducts from '../hooks/use-products';
import { ProductType, ToastType } from '../types';
import { createUuid } from '../utils/utils';

const categoryOption: ProductType['category'][] = ['Men', 'Women', 'Hand Bags'];

const INITIAL_STATE: ProductType = {
  file: null,
  itemName: '',
  description: '',
  options: '',
  price: '',
  category: 'Men',
};

export default function RegisterView() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>(INITIAL_STATE);
  const { createToast } = useToast();
  const fileInputRef = useRef<FileInputRefType>(null);
  const isRegisterDisabled =
    loading ||
    !product.file ||
    !product.itemName ||
    !product.description ||
    !product.price;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const { addProduct } = useProducts();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!product.file) return;
    setLoading(true);

    uploadImage(product.file)
      .then((url) => {
        addProduct(product, url)
          .then(() => {
            openToast();
            setProduct(INITIAL_STATE);
            fileInputRef.current?.removeFile();
          })
          .catch(({ message }: { message: any }) => openToast('fail', message))
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
          <FileInput
            ref={fileInputRef}
            onChange={handleOnChange}
            onDrop={onDrop}
          />
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
          <SelectList
            label="category"
            options={categoryOption}
            value={product.category}
            onChange={(category: ProductType['category']) =>
              setProduct((prev) => ({
                ...prev,
                category,
              }))
            }
          />
          <Button disabled={isRegisterDisabled}>
            {loading ? 'loading...' : 'Register'}
          </Button>
        </form>
      </section>
    </>
  );
}

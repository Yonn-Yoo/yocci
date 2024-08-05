import Button from '../components/common/Button';
import SelectBox from '../components/common/Select';

const options = [
  { label: 'S', value: 'small' },
  { label: 'M', value: 'medium' },
  { label: 'L', value: 'large' },
  { label: 'XL', value: 'x-large' },
];

export default function ProductDetailView() {
  return (
    <div className="mx-auto max-w-sm px-4 md:max-w-lg lg:flex lg:max-w-7xl">
      <div className="py-6 lg:w-full">
        <img
          src="https://res.cloudinary.com/df1icniod/image/upload/v1690970036/suqpkvjlktd4eqh6vgl9.webp"
          alt="Cotton Jersey hooded Sweatshirt"
        />
      </div>
      <div className="space-y-2 lg:w-full">
        <p className="text-center font-bold uppercase">
          Cotton Jersey hooded Sweatshirt
        </p>
        <p className="text-center font-bold">AU$ 3,000</p>
        <SelectBox optionArray={options} />
        <div className="flex items-center justify-center space-x-2">
          <label htmlFor="option">Option:</label>
          <select
            name="option"
            id="option"
            className="border border-gray-200 px-2 py-1 text-sm disabled:bg-gray-300"
            required
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
        <div>
          <Button additionalClass="w-full">ADD TO CART</Button>
          <p className="mt-6">Cool Yocci sweatshirt</p>
        </div>
      </div>
    </div>
  );
}

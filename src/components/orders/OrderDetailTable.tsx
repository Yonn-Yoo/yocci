export default function OrderDetailTable() {
  return (
    <table className="w-full mt-7 md:mt-10">
      <thead className="border-b border-gray-200">
        <tr className="text-left capitalize">
          <th
            scope="col"
            className="p-3 min-w-20 md:w-36 font-semibold max-md:text-sm"
          >
            Image
          </th>
          <th scope="col" className="p-3 w-full md:w-1/2 max-md:text-sm">
            product name
          </th>
          <th scope="col" className="p-3 font-semibold max-md:text-sm">
            Option
          </th>
          <th scope="col" className="p-3 font-semibold max-md:text-sm">
            Quantity
          </th>
          <th scope="col" className="p-3 font-semibold max-md:text-sm">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="font-extralight">
          <td className="p-3 min-w-20 md:w-36">
            <img
              className="w-full"
              src="https://res.cloudinary.com/df1icniod/image/upload/v1692264325/siduflnkn0k2kypknlvo.avif"
              alt="product name"
            />
          </td>
          <td className="p-3 w-full max-md:text-sm md:w-1/2 line-clamp-2">
            Women's Ace Sneaker with web
          </td>
          <td className="p-3 max-md:text-sm">S</td>
          <td className="p-3 max-md:text-sm">1</td>
          <td className="p-3 max-md:text-sm whitespace-nowrap">US$ 1,380</td>
        </tr>
      </tbody>
    </table>
  );
}

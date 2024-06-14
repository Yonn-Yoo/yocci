export default function CartItemCard() {
  return (
    <li className="w-full h-1/3 flex items-center space-x-5 p-2.5">
      <div
        className="w-1/4 h-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/sample-bag.png)' }}
      />
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col space-y-1">
          <h4 className="text-sm font-medium">[GG 마몽] Matlasse Mini Bag</h4>
          <h3 className="font-light tracking-wider">US$ 3,300</h3>
        </div>
        <span className="text-xs">Quantity: 1</span>
      </div>
    </li>
  );
}

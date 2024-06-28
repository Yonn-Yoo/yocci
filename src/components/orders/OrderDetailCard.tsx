export default function OrderDetailCard() {
  return (
    <div className="bg-gray-100 p-5 max-md:text-sm flex flex-col space-y-2">
      <p>
        <strong className="font-semibold">Order No.:</strong>{' '}
        bb0d47c5-8a67-4588-9760-1e8e4b915bf8
      </p>
      <p>
        <strong className="font-semibold">Order Date:</strong> 28 June, 2024
        13:34
      </p>
      <div className="flex flex-col space-y-1">
        <strong className="font-semibold">Recipient Info:</strong>
        <p>asdf 2342</p>
        <p>134314</p>
        <p>13434</p>
        <p>234, 23, 234</p>
        <p>234</p>
      </div>
    </div>
  );
}

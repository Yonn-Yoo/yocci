import { useParams } from 'react-router-dom';

export default function SearchView() {
  const { query } = useParams();
  const length = 3;

  return (
    <div className="w-full h-full">
      <div className="w-full border-t py-3 text-center font-semibold lg:text-lg">
        "{query}"&nbsp;({length})
      </div>
      {/* <NoOrders /> */}
    </div>
  );
}

import ItemsGrid from '../components/saved-items/ItemsGrid';
import { useAuthContext } from '../contexts/auth-context';

export default function SavedItemsView() {
  const { uid } = useAuthContext();
  // const {
  //   isLoading,
  //   error,
  //   data: savedItems,
  // } = useQuery({
  //   queryKey: ['savedItems'],
  //   queryFn: getSavedItems(uid!),
  // });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mx-auto">
      <ItemsGrid />
    </div>
  );
}

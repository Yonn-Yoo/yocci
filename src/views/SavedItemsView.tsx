import { useQuery } from '@tanstack/react-query';
import { getSavedItems } from '../api/firebase';
import SavedItemsGrid from '../components/saved-items/SavedItemsGrid';
import { useAuthContext } from '../contexts/auth-context';

export default function SavedItemsView() {
  const { uid } = useAuthContext();
  const { isLoading, data: savedItems } = useQuery({
    queryKey: ['savedItems'],
    queryFn: () => getSavedItems(uid!),
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center mx-auto">
      {isLoading && <span>loading...</span>}
      {savedItems && <SavedItemsGrid savedItems={savedItems} />}
    </div>
  );
}

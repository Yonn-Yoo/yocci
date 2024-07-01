import ItemsGrid from '../components/saved-items/ItemsGrid';
import SuggestedItemsGrid from '../components/saved-items/SuggestedItemsGrid';

export default function SavedItemsView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto">
      <ItemsGrid />
      <SuggestedItemsGrid />
    </div>
  );
}

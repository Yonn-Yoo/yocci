import { useEffect, useState } from 'react';

export default function useStorage(storageKey: string, hasMaxValue?: boolean) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const storedItemsString = localStorage.getItem(storageKey);
    const storedItems = storedItemsString ? JSON.parse(storedItemsString) : [];

    setItems(storedItems);
  }, [storageKey]);

  const updateStorage = (addingItem: any) => {
    if (items.includes(addingItem)) return;

    if (hasMaxValue && items.length >= 6) {
      handleMaxValue(addingItem);
    } else {
      setItems((prev) => [addingItem, ...prev]);
      localStorage.setItem(storageKey, JSON.stringify([addingItem, ...items]));
    }
  };

  const deleteItem = (deletingItem: any) => {
    setItems((prev) => [...prev.filter((item) => item !== deletingItem)]);
    localStorage.setItem(
      storageKey,
      JSON.stringify([...items.filter((item) => item !== deletingItem)])
    );
  };

  const handleMaxValue = (addingItem: any) => {
    setItems((prev) => [addingItem, ...prev.slice(0, 5)]);
    localStorage.setItem(
      storageKey,
      JSON.stringify([addingItem, ...items.slice(0, 5)])
    );
  };

  return { items, updateStorage, deleteItem };
}

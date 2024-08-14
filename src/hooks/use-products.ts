import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const getAllProducts = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  return { getAllProducts };
}

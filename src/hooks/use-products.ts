import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts } from '../api/firebase';
import { ProductType } from '../types';

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  const addProduct: any = useMutation({
    mutationFn: ({ product, url }: { product: ProductType; url: string }) =>
      addNewProduct(product, url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return { productsQuery, addProduct };
}

import 'solid-js';
import type { Product } from '../types';

const ProductCard = ({ product }: { product: Product }) => {
  function formatAsPrice(value: Product): string {
    let valorNuevo = value.price;
    return (valorNuevo /= 100).toLocaleString('es-MX', {
      style: 'currency',
      currency: `${value.currency ? value.currency : ''}`,
    });
  }
  return (
    <div>
      <div class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div class="aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-72">
          <img
            src={`https://d26xfdx1w8q2y3.cloudfront.net/${product.image.path}/${product.image.original}`}
            alt="Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green."
            class="h-full w-full p-2 object-contain object-center sm:h-full sm:w-full"
          />
        </div>
        <div class="flex flex-1 flex-col space-y-2 p-4">
          <h3 class="text-sm font-medium text-gray-900">
            <a href={`/product/${product.slug}`}>
              <span aria-hidden="true" class="absolute inset-0"></span>
              {product.name}
            </a>
          </h3>
          <p class="text-sm text-gray-500">{product.brand}</p>
          <div class="flex flex-1 flex-col justify-end">
            <p class="text-sm italic text-gray-500">
              {product.ProductCategory?.[0].name}
            </p>
            <p class="text-base font-medium text-gray-900">
              {formatAsPrice(product)} {product.currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

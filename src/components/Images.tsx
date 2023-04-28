import type { Product } from '../types';
import { createSignal } from 'solid-js';

export const Images = ({ data }: { data: Product }) => {
  const [count, setCount] = createSignal(data.image);
  return (
    data.image && (
      <div class="lg:flex lg:items-start">
        <div class="lg:order-2 lg:ml-5">
          <div class="max-w-xl overflow-hidden rounded-lg">
            <img
              class="h-[512px] w-full max-w-full object-cover"
              src={`https://d26xfdx1w8q2y3.cloudfront.net/${count().path}/${
                count().original
              }`}
              alt=""
            />
          </div>
        </div>
        <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div class="flex flex-row items-start lg:flex-col">
            <button
              type="button"
              onclick={() => setCount(data.image)}
              class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
            >
              <img
                class="h-full w-full object-cover"
                src={`https://d26xfdx1w8q2y3.cloudfront.net/${data.image.path}/${data.image.original}`}
                alt=""
              />
            </button>
            {data.ImagesExtra.map((image) => (
              <button
                type="button"
                class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
              >
                <img
                  class="h-full w-full object-cover"
                  src={`https://d26xfdx1w8q2y3.cloudfront.net/${image.image.path}/${image.image.original}`}
                  alt=""
                />
              </button>
            ))}
            {data.Gif && (
              <button
                type="button"
                onclick={() => setCount(data.Gif)}
                class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  class="h-full w-full object-cover"
                  src={`https://d26xfdx1w8q2y3.cloudfront.net/${data.Gif.path}/${data.Gif.original}`}
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

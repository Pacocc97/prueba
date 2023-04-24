import type { JSX } from 'solid-js/jsx-runtime';
import { ItemDisplayInfo, addCartItem } from '../cartStore';

type Props = {
  item: ItemDisplayInfo;
  children: JSX.Element;
};

export default function AddToCartForm({ children, item }: Props) {
  // we'll hardcode the item info for simplicity!S
  function addToCart(e: SubmitEvent) {
    e.preventDefault();
    addCartItem(item);
  }

  return <form onSubmit={addToCart}>{children}</form>;
}

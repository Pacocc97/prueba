import { addCartItem, isCartOpen } from '../cartStore';
import type { JSX } from 'solid-js/jsx-runtime';

export default function AddToCartForm({
  children,
}: {
  children?: JSX.Element;
}) {
  // we'll hardcode the item info for simplicity!
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '/images/astronaut-figurine.png',
  };

  function addToCart(e: { preventDefault: () => void }) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }

  return <form onSubmit={addToCart}>{children}</form>;
}

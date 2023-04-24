import { useStore } from '@nanostores/solid';
import { isCartOpen } from '../cartStore';

export default function CartFlyoutToggle() {
  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
  console.log($isCartOpen, 'isCartOpen');
  console.log(useStore(isCartOpen), 'useStore(isCartOpen)');
  console.log(isCartOpen, 'isCartOpen');
  // write to the imported store using `.set`
  return <button onClick={() => isCartOpen.set(!$isCartOpen())}>Cart</button>;
}

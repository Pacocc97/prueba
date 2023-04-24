import { useStore } from '@nanostores/solid';
import { createSignal } from 'solid-js';
import { counter, increase, isCartOpen } from '../cartStore';

export default function Counter() {
  const count = useStore(counter);
  const $isCartOpen = useStore(isCartOpen);

  return (
    <>
      <h1>{count()} around here ...</h1>
      <button onClick={increase}>one up</button>
    </>
  );
}

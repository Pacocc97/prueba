import { persistentAtom } from '@nanostores/persistent';
import { action, atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export const counter = atom(0);

export const increase = action(counter, 'increase', (store) => {
  counter.set(counter.get() + 1);
});

export type CartItem = {
  id: string;
  quantity: number;
};

export const cartItems = persistentAtom<CartItem[]>('cartItems', [], {
  encode(origin) {
    return JSON.stringify(origin);
  },
  decode(encoded) {
    return JSON.parse(encoded);
  },
});
export type ItemDisplayInfo = Pick<CartItem, 'id'>;

export function addCartItem({ id }: ItemDisplayInfo) {
  const existingEntry = cartItems.get().find((item) => item.id === id);
  if (existingEntry) {
    const data = cartItems
      .get()
      .filter((item) =>
        item.id !== existingEntry.id ? item : ''
      ) as CartItem[];
    cartItems.set([
      ...data,
      {
        ...existingEntry,
        quantity: existingEntry.quantity + 1,
      },
    ]);
  } else {
    cartItems.set([...cartItems.get(), { id, quantity: 1 }]);
  }
}

export const cart = atom(cartItems);

console.log(cartItems, 'holi');

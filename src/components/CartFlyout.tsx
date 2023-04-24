import { useStore } from '@nanostores/solid';
import { isCartOpen, cartItems } from '../cartStore';
import styles from './CartFlyout.module.css';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  return $isCartOpen() ? (
    <aside hidden={!$isCartOpen} class={styles.container}>
      {Object.values($cartItems).length ? (
        <ul class={styles.list} role="list">
          {Object.values($cartItems).map((cartItem) => (
            <li class={styles.listItem}>
              <img
                class={styles.listItemImg}
                src={cartItem.imageSrc}
                alt={cartItem.name}
              />
              <div>
                <h3>{cartItem.name}</h3>
                <p>Quantity: {cartItem.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </aside>
  ) : null;
}

import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

/**
 * Initializes a counter component
 *
 * @param {number} startingIndex - The starting index of the counter
 */
export function Counter(startingIndex) {
  const [count, setCount] = createSignal(startingIndex);
  const interval = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return <div>Count value is {count()}</div>;
}

import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

export const Counter = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	onCleanup(() => clearInterval(interval));
	return <div>Count value is {count()}</div>;
};


export const delayFunc = (callback: Function, delayMs: number = 1000): void => {
	const tt = setTimeout(() => {
		callback();
		cancelCallback();
	}, delayMs);

	const cancelCallback = (): void => {
		clearTimeout(tt);
	};
};

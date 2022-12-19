import ldebounce from 'lodash.debounce';

export const debounce = (callback: Function, delayMs: number = 1000): any => ldebounce(() => callback(), delayMs);

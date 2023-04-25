export interface ICounterProps {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onIncrementAsync?: () => void;
  onDecrementAsync?: () => void;
}

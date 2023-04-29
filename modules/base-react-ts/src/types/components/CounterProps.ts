export interface CounterProps {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onIncrementAsync?: () => void;
  onDecrementAsync?: () => void;
}

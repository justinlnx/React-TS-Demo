import * as React from 'react';
import './Hello.css';

// use Interface to define what the props are going to look like
export interface Props {
  name: string;
  enthusiasmLevel?: number; // optional data type. aka nullable type
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// stateless functional component with with Props clearly defined
function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

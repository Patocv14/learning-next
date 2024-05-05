"use client";

import { useState } from 'react';

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0}: Props) => {
  const [counter, setCounter] = useState(value);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex gap-2">
        <button
          className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]`}
          onClick={() => increase()}
        >
          +1
        </button>
        <button
          className={`flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] ${
            counter === 0 && 'bg-gray-500 '
          }`}
          onClick={() => decrease()}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;

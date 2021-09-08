import React, { useState } from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';

const list = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const updateCount = (n: string) => {
    switch (n) {
      case 'A':
        setCount(count - 1);
        break;
      case '2':
        setCount(count + 1);
        break;
      case '3':
        setCount(count + 1);
        break;
      case '4':
        setCount(count + 1);
        break;
      case '5':
        setCount(count + 1);
        break;
      case '6':
        setCount(count + 1);
        break;
      case '10':
        setCount(count - 1);
        break;
      case 'J':
        setCount(count - 1);
        break;
      case 'Q':
        setCount(count - 1);
        break;
      case 'K':
        setCount(count - 1);
        break;
      default:
        break;
    }
  };

  const resetCount = () => {
    let ans = confirm('Are you sure you want to reset count?');
    ans === true && setCount(0);
  };

  return (
    <>
      <Header />
      <div
        id="main"
        className="w-screen h-screen flex flex-col justify-center items-center"
      >
        <div className="flex w-full">
          <div className="flex flex-1 justify-center">
            <span
              className="text-9xl text-white active:text-trueGray-300 select-none cursor-pointer"
              onClick={() => setCount(count - 1)}
            >
              -
            </span>
          </div>
          <div className="flex flex-1 justify-center">
            <h1 className="text-9xl text-white">{count}</h1>
          </div>
          <div className="flex flex-1 justify-center">
            <span
              className="text-9xl text-white active:text-trueGray-300 select-none cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              +
            </span>
          </div>
        </div>
        <div className="flex">
          {list.map((c) => (
            <div
              onClick={() => {
                updateCount(c);
              }}
              key={c}
            >
              <Card character={c} />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="text-white active:text-trueGray-300 hover:underline select-none"
          onClick={resetCount}
        >
          RESET
        </button>
      </div>
    </>
  );
};

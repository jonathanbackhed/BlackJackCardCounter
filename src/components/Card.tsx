import React from 'react';

interface Props {
  character: string;
}

export const Card = ({ character }: Props) => {
  return (
    <div className="border border-trueGray-700 rounded-lg px-10 py-12 relative mx-1 bg-white active:bg-trueGray-200 hover:cursor-pointer hover:shadow-2xl">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl absolute select-none">{character}</h1>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';

interface Props {
  value: number;
  initValue: number;
}

export const Counter = ({ value, initValue }: Props) => {
  const [number, setNumber] = useState<number>(initValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number === value) {
        clearInterval(interval);
        return null;
      }

      if (number > value) setNumber((n) => n - 1);
      else setNumber((n) => n + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [number, value]);

  return <>{number}</>;
};

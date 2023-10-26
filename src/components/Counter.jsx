import React, { useState, useEffect } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((oldCount) => {
        if (oldCount === target) {
          clearInterval(interval);
        }
        return Math.min(oldCount + 1, target);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className='count'>
      <p> {count}% </p>
    </div>
  );
};

export default Counter;
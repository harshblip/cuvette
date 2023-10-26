import React, { useState, useEffect } from 'react';

const ProgressBar1 = ({ target }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === target) {
          clearInterval(interval);
        }
        return Math.min(oldProgress + 1, target);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [target]);

  let color;
  if (progress >= 0 && progress <= 30) {
    color = '#FB5E5E';
  } else if (progress > 30 && progress <= 60) {
    color = '#FF9142';
  } else if (progress > 60 && progress <= 80) {
    color = '#438AF6';
  } else if (progress > 80 && progress <= 100) {
    color = '#2EC971';
  }

  return (
    <div className="htmltools">
      <div className="htmltools-fill" style={{ width: `${progress}%`, backgroundColor: color }}></div>
    </div>
  );
};

export default ProgressBar1;
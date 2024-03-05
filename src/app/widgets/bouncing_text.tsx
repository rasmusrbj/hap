import React, { useState, useEffect } from 'react';

function BouncingText() {
  const [index, setIndex] = useState(0);
  const texts = ['i dit festudvalg', 'i din studenterforening', 'i din fredagsbar', 'for dine venner'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <h1 className="mt-2 max-w-lg text-3xl font-bold tracking-tight text-yellow-300 underline sm:text-5xl">
      {texts[index]}
    </h1>
  );
}

export default BouncingText;
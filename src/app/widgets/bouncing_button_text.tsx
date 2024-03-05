import React, { useState, useEffect } from 'react';

function BouncingButtonText() {
  const [index, setIndex] = useState(0);
  const texts = ['din studenterforening', 'dit festudvalg', 'din fredagsbar'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <h1 className="text-sm font-semibold text-black underline">
      {texts[index]}
    </h1>
  );
}

export default BouncingButtonText;
import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [key]);

  const info = key
    ? `The last pressed key is [${key}]`
    : `Nothing was pressed yet`;

  return (
    <div className="App">
      <p className="App__message">{info}</p>
    </div>
  );
};

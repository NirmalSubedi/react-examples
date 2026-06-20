import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCount, setChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    if (color === backgroundColor) return;

    setBackgroundColor(color);
    setChangeCount(changeCount + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2>
        Background changed {changeCount} {changeCount > 1 ? 'times' : 'time'}.
      </h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;

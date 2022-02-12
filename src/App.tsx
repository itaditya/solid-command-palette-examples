// render inside top level Solid component
import { createSignal } from 'solid-js';
import { Root, CommandPalette } from 'solid-command-palette';
import { actions } from './actions';

import './style.css';
import 'solid-command-palette/pkg-dist/style.css';

const App = () => {
  const [count, setCount] = createSignal(0);

  const increment = () => {
    setCount((prev) => (prev += 1));
  };

  const actionsContext = {
    increment,
  };

  return (
    <div class="my-app">
      <Root actions={actions} actionsContext={actionsContext}>
        <CommandPalette />
        <h2>Open it with CMD + K</h2>
        <p>Current Count is {count()}</p>
        <p>Increment Count by pressing CMD + E</p>
      </Root>
    </div>
  );
};

export default App;

import { defineAction } from 'solid-command-palette';

const minimalAction = defineAction({
  id: 'minimal',
  title: 'Minimal Action',
  run: ({ actionId }) => {
    console.log('ran action', actionId);
  },
});

const incrementCounterAction = defineAction({
  id: 'increment-counter',
  title: 'Increment Counter by 1',
  subtitle: 'Press CMD + E to trigger this.',
  shortcut: '$mod+e', // $mod = Command on Mac & Control on Windows.
  run: ({ rootContext }) => {
    const increment = rootContext.increment;

    if (typeof increment === 'function') {
      increment();
    }
  },
});

export const actions = {
  [minimalAction.id]: minimalAction,
  [incrementCounterAction.id]: incrementCounterAction,
};

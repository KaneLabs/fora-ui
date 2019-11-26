import light from './light';
import dark from './dark';
import core from './core';

export * from './breadTheme';

const timeOfDay = 'night';

export const theme = (() => {
  if (timeOfDay === 'day') {
    return { ...core, ...light };
  }

  return { ...core, ...dark };
})();

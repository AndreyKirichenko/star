import { noop } from 'lodash'
import { createContext } from 'react';

export const AppContext = createContext({
  loadData: noop,
  setMass: noop,
});

export default AppContext;

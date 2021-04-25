import React from 'react';

import {
  Div,
  Select,
} from '@vkontakte/vkui';


const OPTIONS = [
  '0.2',
  '0.65',
  '1',
  '2',
  '4',
  '6',
  '10',
  '20',
  '30',
  '40',
]

const MassSelection = ({ fetchMass }) => (
  <Div>
    <Select
      placeholder="Масса звезды" 
      options={OPTIONS.map(mass => ({ label: `${mass * 100}% от массы Солнца`, value: mass }))}
      onChange={fetchMass}
    />
  </Div>
);

export default MassSelection;

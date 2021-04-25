import React from 'react';
import {
  Div,
  Slider,
} from '@vkontakte/vkui';

const TimeSlider = ({ max, setIndex, dataIndex }) => (
  <Div>
    <Slider
      step={1}
      min={0}
      max={max}
      onChange={setIndex}
      value={dataIndex}
    />
  </Div>
);

export default TimeSlider; 
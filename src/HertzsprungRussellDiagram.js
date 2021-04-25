import React from 'react';

import { Line } from 'react-chartjs-2';

const TYPES = [
  'Звезда главной последовательности',
  'Звезда главной последовательности',
  'Звезда главной последовательности',
  'Ветвь гигантов',
  'Ветвь гигантов',
  'Ветвь гигантов',
  'Ветвь гигантов',
  'Звезда главной последовательности',
  'Звезда Вольфа-Райе',
  'Ветвь гигантов',
  'Белый Карлик',
  'Белый Карлик',
  'Белый Карлик',
  'Нейтронная звезда',
  'Черная дыра',
  'Сверхновая',
];

const HertzsprungRussellDiagram = ({ starState }) => {
  console.log('starState', starState);

  const {
    lum,
    mass,
    radius,
    rgb,
    temp,
    time,
    type,
  } = starState;

  const data = {
    labels: ['1'],
    datasets: [
      {
        label: `${TYPES[type]} | яркость: ${lum} от солнечной | масса: ${mass} от солнечной | радиус: ${radius} от солнечного |температура: ${temp}K | возраст: ${time} млн. лет. `,
        data: ['0.01', 19, 3, 5, 2, 3, 123],
        fill: false,
        backgroundColor: rgb,
        borderColor: rgb,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Line
      data={data}
      options={options}
    />
  );
}

export default HertzsprungRussellDiagram;

import React from 'react';

import { Bubble } from 'react-chartjs-2';

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

const HertzsprungRussellDiagram = ({ starState = null }) => {
  const {
    lum,
    mass,
    radius,
    rgb,
    temp,
    time,
    type,
  } = starState;

  const info = [
    TYPES[type],
    `яркость: ${lum} от солнечной`,
    `масса: ${mass} от солнечной`,
    `радиус: ${radius} от солнечного`,
    `температура: ${temp}K`,
    `возраст: ${time} млн. лет`
  ];

  const data = {
    labels: ['1'],
    datasets: [
      {
        label: ` - ${info.join(' | ')}`,
        data: [{
          x: temp,
          y: lum,
          r: 10,
        }],
        fill: false,
        backgroundColor: rgb,
        borderColor: rgb,
        borderWidth: 4,
      },
    ],
  };
  
  const options = {
    animation: {
      duration: 0
    },
    maintainAspectRatio: false,
    // responsive: true,
    scales: {
      x: {
        autoSkip: true,
        beginAtZero: true,
        max: 200000,
        min: 0,
        position: 'bottom',
        reverse: true,
        // type: 'logarithmic',
        ticks: {
          autoSkip: false,
        },

      },
      y: {
        max: 1000000,
        min: 0.00001,
        position: 'left',
        type: 'logarithmic',
      },
    },
  };

  return (
    <Bubble
      data={data}
      options={options}
    />
  );
}

export default HertzsprungRussellDiagram;

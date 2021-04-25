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

const HertzsprungRussellDiagram = ({ starState = {} }) => {
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
        backgroundColor: rgb,
        borderColor: rgb,
        borderWidth: 4,
        data: [{
          x: temp,
          y: lum,
          r: 10,
        }],
        fill: false,
        label: ` - ${info.join(' | ')}`,
      },
    ],
  };
  
  const options = {
    animation: {
      duration: 0
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgb(255, 255, 255, 0.1)',
          borderColor: 'rgb(255, 255, 255, 0.1)',
        },
        max: 600000,
        min: 1,
        position: 'bottom',
        reverse: true,
        type: 'logarithmic',
      },
      y: {
        grid: {
          color: 'rgb(255, 255, 255, 0.1)',
          borderColor: 'rgb(255, 255, 255, 0.1)',
        },
        max: 1000000,
        min: 0.00001,
        position: 'left',
        type: 'logarithmic',
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      }
    }
  };

  return (
      <>
        <img
          alt='Основная последовательность'
          src='/main.svg'
          style={{
            bottom: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
          }}
        />
        <Bubble
          data={data}
          options={options}
        />
      </>
  );
}

export default HertzsprungRussellDiagram;

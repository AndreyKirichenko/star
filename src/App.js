import React, { useState } from 'react';

import axios from 'axios';

import {
  AppRoot,
  Div,
  FixedLayout,
  Panel,
  ScreenSpinner,
  View,
} from '@vkontakte/vkui';

import HertzsprungRussellDiagram  from './HertzsprungRussellDiagram';
import MainContent from './MainContent';
import MassSelection from './MassSelection';
import TimeSlider from './TimeSlider';
import { Icon56FavoriteOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);

  const fetchMass = async (event) => {
    setIsLoading(true);

    await axios(`/data/star_${event.target.value}_solar_mass.json`)
      .then(response => {
        const { data } = response.data;
        setData(data)
        setIsLoading(false);
        setDataIndex(0);
      });
  }

  return (
    <AppRoot>
      <View
        activePanel="main"
        popout={isLoading && <ScreenSpinner />}
      >
        <Panel id="main">
          <FixedLayout filled vertical="top">
            <MassSelection fetchMass={fetchMass}/>
          </FixedLayout>

          { !data.length &&
            <MainContent>
              <Div style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                opacity: 0.5,
              }}>
                <Icon56FavoriteOutline />
                Выберите массу звезды
              </Div>
            </MainContent>
          }

          { !!data.length &&
            <>
              <MainContent>
                <HertzsprungRussellDiagram starState={data[dataIndex]} />
              </MainContent>

              <FixedLayout filled vertical="bottom"> 
                <TimeSlider
                  dataIndex={dataIndex}
                  max={data.length - 1}
                  setIndex={setDataIndex}
                />
              </FixedLayout>
            </>
          }
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;

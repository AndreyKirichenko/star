import React from 'react';
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Group,
  Panel,
  PanelHeader,
  Slider,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  View,
  ViewWidth,

  FormLayout,
  FormLayoutGroup,
  FormItem,
  Input,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Separator,

  CellButton,
  Cell,
  Placeholder,
  Avatar,
  Button,
  usePlatform,
  Alert,
  FixedLayout,
  PanelHeaderContent,
  PanelHeaderButton,
  PanelHeaderBack,
  PanelHeaderContext,
  List,
  Div,
  Select,
  CustomSelectOption,
} from '@vkontakte/vkui';

import {
  Icon56UsersOutline,
  Icon56MentionOutline,
  Icon56MessageReadOutline,
  Icon28MessageOutline,
  Icon28UsersOutline,
  Icon24Done,
  Icon28SettingsOutline,
} from '@vkontakte/icons';

// import { Line } from 'react-chartjs-2';

import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <FixedLayout filled vertical="top">
            <Div>
              <Select
                placeholder="Масса звезды" 
                // options={getRandomUsers(10).map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
                renderOption={({ option, ...restProps }) => (
                  <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
                )}
              />
            </Div>
          </FixedLayout>
          
          <FixedLayout filled vertical="bottom"> 
            <Div>
              <Slider />
            </Div>
          </FixedLayout>
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;

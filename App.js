
import React from 'react';
import AtendimentoScreen from './src/screens/AtendimentoScreen';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <AtendimentoScreen />
    </PaperProvider>
  );
}

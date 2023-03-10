import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SongItem from './SongItem';

export default function App() {
  return (
    <SongItem
      song="Temp title"
      artist="Temp artist"
      cover=""
    />
  );
}
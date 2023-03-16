import SongItem from "./SongItem"
import React from "react";
import { View, Text, Image } from "react-native";
const HomeScreen: React.FC = () => {
    return (
        <View>
        <SongItem
          song="Metaverse Do Be Like This"
          artist="Camellia"
          image="covers/metaverse_camellia.png"
        />
        <SongItem
          song="Metaverse Do Be Like This"
          artist="Camellia"
          image="covers/metaverse_camellia.png"
        />
        <SongItem
          song="Metaverse Do Be Like This"
          artist="Camellia"
          image="covers/metaverse_camellia.png"
        />
        </View>
      );
}

export default HomeScreen;
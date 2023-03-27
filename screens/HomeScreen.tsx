import SongItem from "./SongItem"
import React from "react";
import { View, Text, Image } from "react-native";
const HomeScreen: React.FC = () => {
    return (
        <View style={{backgroundColor: "#18122B"}}>
        <Text style={{backgroundColor: "#000000"}}>HIIIII PLEASE WORK!!</Text>
        <SongItem
          song="Metaverse Do Be Like This"
          artist="Camellia"
          imageID="0"
        />
        <SongItem
          song="Metaverse Do Be Like This"
          artist="Camellia"
          imageID="0"
        />
        <SongItem
          song="Metaverse Do Be Like This"
          artist="Camellia"
          imageID="0"
        />
        </View>
      );
}

export default HomeScreen;
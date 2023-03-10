import React from "react";
import { View, Text } from "react-native";

const SongItem: React.FC<{
    song: string,
    artist: string,
    cover: string, // path to cover image
}> = ({song, artist, cover}) => {
    return (
        // temp view
        <View>
            <Text>{song}</Text>
            <Text>{artist}</Text>
            <Text>{cover}</Text>
        </View>
    );
};

export default SongItem;